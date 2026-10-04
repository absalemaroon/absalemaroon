---
layout: blog
title: "Why 0.1 + 0.2 ≠ 0.3 Matters for Blockchains: Floating-Point Arithmetic, Determinism, and Consensus"
author: Absalem Aroon
date: 2026-10-04
description: "How a familiar floating-point quirk exposes a core requirement of blockchain systems: every node must compute exactly the same result."
tags: [blockchain, distributed-systems, smart-contracts, deterministic-execution, security]
---

Most programmers meet `0.1 + 0.2 = 0.30000000000000004` as a curiosity. When I started studying blockchain and distributed systems, I realized it is closer to a design constraint. A blockchain is a network of independent machines that must all arrive at the same state after executing the same transactions. Anything that lets two honest nodes compute slightly different answers is not a cosmetic problem; it is a threat to consensus. This post uses the floating-point anomaly as a way into that problem, and then looks at how real blockchain systems avoid it and where the avoidance can still fail.

## The anomaly in brief

The result comes from how numbers are stored, not from a defect in any language. A fraction has a finite representation in base *b* only if its reduced denominator is built from the prime factors of *b*. In base 10 the prime factors are 2 and 5, so ⅒ terminates as `0.1`. In base 2 the only prime factor is 2, so ⅒ (denominator 2 × 5) does not terminate:

```text
0.1 (decimal) = 0.0001100110011001100110011001100110011...  (binary, the block 0011 repeats forever)
```

The IEEE 754 binary64 format, commonly called double precision, stores a sign bit, an 11-bit exponent, and a 52-bit fraction. With the implicit leading 1 that gives 53 bits of significand precision. The infinite expansion of 0.1 must therefore be rounded, and the stored value is exactly:

```text
3602879701896397 / 36028797018963968   (the denominator is 2⁵⁵)
≈ 0.1000000000000000055511151231257827...
```

The value stored for 0.2 is likewise slightly above the true 0.2. Their exact sum, about 0.3000000000000000166533, lies exactly halfway between two adjacent binary64 numbers. IEEE 754's default rule, round half to even, selects the upper one, which prints as `0.30000000000000004`. The literal `0.3` is stored as the lower neighbour, so the two are different doubles and the equality test fails [[1]](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)[2].

There is a subtle point that matters for everything below. For basic operations such as addition, IEEE 754 requires a correctly rounded result, so on any conforming implementation `0.1 + 0.2` gives the same bits every time. The anomaly is therefore *deterministic*. The danger for distributed systems lies elsewhere.

## Why a blockchain cares

A blockchain can be understood as a replicated state machine. Schneider's classic treatment shows that replicas stay consistent only if they start from the same state and apply the same inputs in the same order through deterministic operations [3]. Byzantine fault-tolerant protocols such as PBFT rest on the same assumption: correct replicas must produce identical results for the same request [4].

If honest nodes compute different results for the same transaction, the ledger forks. The designers of Hyperledger Fabric put this plainly: operations executed after ordering must be deterministic, or peers end up holding different state [5]. The same reasoning applies to public chains, where every validator re-executes transactions and compares resulting state.

Floating-point arithmetic threatens this requirement in several ways, even though each individual IEEE 754 operation is well defined:

- **Non-associativity.** `(a + b) + c` and `a + (b + c)` can differ, so a compiler or runtime that reorders an expression can change the result.
- **Extended precision and fused operations.** Some hardware computes intermediate values at higher precision or fuses a multiply and an add into one rounding step. Two nodes on different CPU architectures or build settings can then disagree.
- **Library functions.** Transcendental functions such as `sin` or `exp` are not required to be correctly rounded, so different math libraries may return different last bits.
- **Special values.** Details such as NaN bit patterns and subnormal handling can differ across environments.

Researchers building deterministic WebAssembly runtimes for smart contracts list these floating-point behaviours among the standard sources of cross-node divergence that must be removed or constrained [6]. A single differing bit is enough, because consensus compares state exactly, not approximately.

## How blockchain systems respond

The common answer is to avoid floating point in consensus-critical code and use integers.

| System | Approach to numeric values |
|--------|----------------------------|
| Bitcoin | Amounts are integers counted in satoshis, where 1 BTC = 100,000,000 satoshis [7]. |
| Ethereum | The EVM operates on 256-bit integers, and balances are integers counted in wei, where 1 ETH = 10<sup>18</sup> wei [8]. |
| Solidity | Fixed-point types can be declared but are not fully supported, and there are no usable floating-point types [9]. |
| WebAssembly-based platforms | Floating-point instructions are typically restricted or removed from the contract runtime to preserve determinism [6]. |

The pattern across these designs is consistent: the value `0.1` is never stored. An application stores a scaled integer and agrees, as a convention, where the decimal point sits. This is why token contracts commonly define 18 decimals and why a "balance" of 1.5 tokens is really the integer 1,500,000,000,000,000,000.

> The practical rule of blockchain arithmetic is that a ledger stores integers, and decimals are a presentation layer on top of them.

## Integers do not remove rounding, they relocate it

It is tempting to conclude that integer arithmetic makes the precision problem disappear. It does not. Division on integers truncates, so every scaled multiplication or division still has to decide which way to round. Fixed-point helpers typically come in two variants:

```solidity
uint256 constant WAD = 1e18;

// Rounds toward zero
function mulDown(uint256 a, uint256 b) pure returns (uint256) {
    return (a * b) / WAD;
}

// Rounds away from zero
function mulUp(uint256 a, uint256 b) pure returns (uint256) {
    return (a * b + WAD - 1) / WAD;
}
```

Multiplying 1 wei by 0.5 (that is, `0.5e18`) gives 0 with `mulDown` and 1 with `mulUp`. One wei is worth almost nothing, but an attacker who can repeat a biased rounding step many times inside a single transaction can turn a negligible error into a profit.

This is not hypothetical. On 3 November 2025, attackers exploited Balancer V2 and drained more than $100 million across nine chains. The root cause analyzed by Trail of Bits was a rounding-direction error that had been present in the code for years [10]. Check Point Research reported that when token balances were pushed to very small values, Solidity's integer division produced large relative precision loss, and a single `batchSwap` containing 65 operations compounded these losses until the pool invariant was distorted [11]. Trail of Bits also notes that the rule "round in favor of the protocol" is no longer enough on its own, and that explicit invariants and fuzz testing are needed [10].

The lesson for me is that the Balancer incident was not a floating-point failure at all. The arithmetic was deterministic on every node, so consensus was never at risk. The vulnerability was an economic one that lived in the gap between exact mathematics and finite-precision arithmetic, which is the same gap the `0.1 + 0.2` example exposes.

## Design principles I draw from this

1. **Keep consensus-critical arithmetic integral.** Use scaled integers or a well-reviewed fixed-point library, and document the scale of every variable.
2. **Decide the rounding direction on purpose.** For each operation, ask who benefits from the rounding error and make the direction consistent between paired operations such as scaling up and scaling down.
3. **Treat small values as an attack surface.** Test behaviour at balances of a few wei, not only at realistic amounts, because an adversary chooses the inputs.
4. **Test invariants, not just examples.** Property-based testing and fuzzing can check that a pool invariant never moves in an unfavourable direction after any sequence of operations.
5. **Keep floats off-chain.** Where floating-point computation is unavoidable, such as analytics or price modelling, perform it off-chain and bring only an agreed integer result on-chain.
6. **Compare with tolerance off-chain.** In ordinary software that touches floats, never test for exact equality. For example, in Python:

```python
import math
from decimal import Decimal

print(0.1 + 0.2 == 0.3)                                    # False
print(math.isclose(0.1 + 0.2, 0.3))                        # True
print(Decimal("0.1") + Decimal("0.2") == Decimal("0.3"))   # True
```

## Conclusion

The result `0.30000000000000004` is a small, well-understood consequence of storing ⅒ in binary. In a single program it is a nuisance. In a blockchain it points to a deeper requirement: independent nodes must compute bit-identical results, which is why ledgers store integers and why floating-point arithmetic is kept out of consensus-critical code. Yet the Balancer exploit shows that moving to integers only shifts the problem, because rounding decisions remain and can be exploited by an adversary. Understanding numerical representation is therefore part of both distributed-systems design and blockchain security, and it is a topic I intend to keep investigating.

---

## References

[1] D. Goldberg. [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html). ACM Computing Surveys, 1991.

[2] IEEE. [IEEE Standard for Floating-Point Arithmetic (IEEE 754-2019)](https://standards.ieee.org/ieee/754/6210/). Institute of Electrical and Electronics Engineers, 2019.

[3] F. B. Schneider. Implementing Fault-Tolerant Services Using the State Machine Approach: A Tutorial. ACM Computing Surveys, 22(4), 1990.

[4] M. Castro, B. Liskov. [Practical Byzantine Fault Tolerance](https://pmg.csail.mit.edu/papers/osdi99.pdf). OSDI, 1999.

[5] E. Androulaki et al. [Hyperledger Fabric: A Distributed Operating System for Permissioned Blockchains](https://arxiv.org/pdf/1801.10228). EuroSys, 2018.

[6] [DTVM: Revolutionizing Smart Contract Execution with Determinism and Compatibility](https://arxiv.org/pdf/2504.16552). arXiv:2504.16552, 2025.

[7] Bitcoin Core. [consensus/amount.h](https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h). Source code, Bitcoin Core project.

[8] G. Wood. [Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper)](https://ethereum.github.io/yellowpaper/paper.pdf). Ethereum Foundation.

[9] Solidity Documentation. [Types](https://docs.soliditylang.org/en/latest/types.html). Solidity Team.

[10] Trail of Bits. [Balancer hack analysis and guidance for the DeFi ecosystem](https://blog.trailofbits.com/2025/11/07/balancer-hack-analysis-and-guidance-for-the-defi-ecosystem/). Trail of Bits Blog, 2025.

[11] Check Point Research. [How an Attacker Drained $128M from Balancer Through Rounding Error Exploitation](https://research.checkpoint.com/2025/how-an-attacker-drained-128m-from-balancer-through-rounding-error-exploitation/). Check Point Research, 2025.
