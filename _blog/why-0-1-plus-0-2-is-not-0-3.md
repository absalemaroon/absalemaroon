---
layout: blog
title: "Why 0.1 + 0.2 ≠ 0.3 in Computing: An Analysis of Floating-Point Arithmetic and Binary Representation"
author: Absalem Aroon
date: 2026-10-04
description: "Why a computer reports 0.1 + 0.2 as 0.30000000000000004, and what binary representation and IEEE 754 have to do with it."
tags: [computer-science, floating-point, ieee-754, numerical-computing]
---

Evaluate `0.1 + 0.2` in almost any programming language and the output is `0.30000000000000004`, not `0.3`. To a beginner this looks like a bug in the language or a failure of the machine's arithmetic. It is neither. It is a predictable consequence of representing numbers with a finite number of binary digits. This post explains where the discrepancy comes from, how the IEEE 754 standard shapes it, and how programmers can manage it.

## Introduction

Computers are digital systems that represent information with two symbols, 0 and 1. People, by contrast, write numbers in the decimal system, which uses ten digits. Computers accept decimal input from users, but internally those values are commonly stored in binary form.

This difference matters most for fractions. Mathematically, `0.1 + 0.2` should equal exactly `0.3`. Under the IEEE 754 double-precision format, however, the displayed result is `0.30000000000000004`. The underlying cause is that not every decimal fraction can be written with a finite number of binary digits. In decimal, the fraction 1/3 repeats forever as `0.3333...`. In the same way, 1/10, which is simply `0.1` in decimal, repeats forever when converted to binary. Because memory is finite, such values must be stored as approximations.

The effect reaches well beyond a classroom curiosity. Floating-point numbers are used in scientific research, engineering, financial systems, data analysis, simulation, graphics, and artificial intelligence. In many settings a tiny discrepancy is harmless. In others, repeated calculations or careless handling of floating-point values can produce meaningful errors.

## Number base theory

A numeral system represents quantities using a defined set of symbols and positional rules. The decimal system is base 10 and uses the digits 0 through 9. Computers fundamentally operate in base 2, which uses only 0 and 1. A number that has a finite representation in one base may require an infinite sequence of digits in another.

### Finite and repeating fractions in decimal

Some fractions terminate in decimal:

- 1/2 = 0.5
- 1/4 = 0.25
- 1/5 = 0.2
- 1/8 = 0.125
- 1/10 = 0.1

Others never terminate:

- 1/3 = 0.3333...
- 1/6 = 0.1666...
- 1/7 = 0.142857142857...
- 2/3 = 0.6666...

Writing 1/3 as 0.3, 0.33, 0.333, and so on gives progressively better approximations, yet no finite string of digits equals 1/3 exactly. Whether a fraction terminates or repeats therefore depends on the base in which it is written.

### How binary fractions work

Binary uses the same positional principle as decimal, but each place to the right of the binary point is a negative power of two:

- 0.1<sub>2</sub> = 1/2 = 0.5<sub>10</sub>
- 0.01<sub>2</sub> = 1/4 = 0.25<sub>10</sub>
- 0.001<sub>2</sub> = 1/8 = 0.125<sub>10</sub>

For example, 0.101<sub>2</sub> = 1/2 + 0/4 + 1/8 = 0.5 + 0 + 0.125 = 0.625<sub>10</sub>.

### Fractions that terminate in binary

Binary is not inherently incapable of representing fractions exactly. Fractions whose denominators are powers of two terminate cleanly:

- 1/2 = 0.1<sub>2</sub>
- 1/4 = 0.01<sub>2</sub>
- 1/8 = 0.001<sub>2</sub>
- 3/8 = 1/4 + 1/8 = 0.011<sub>2</sub>
- 5/8 = 0.101<sub>2</sub>

### Why 0.1 is different

The fraction 1/10 has the denominator 10 = 2 × 5. Because binary place values are powers of two, any fraction whose reduced denominator contains a factor other than 2 cannot be written as a finite binary fraction. The binary expansion of 0.1 is:

```text
0.0001100110011001100110011001100110011001100110011...
```

The block `0011` repeats indefinitely. The same applies to 1/5 and 3/10:

```text
1/5  = 0.0011001100110011...
3/10 = 0.0100110011001100...
```

### A general rule

> A rational number has a finite binary representation if, and only if, its denominator is a power of two once the fraction is reduced to lowest terms.

So 1/2, 1/4, 1/8, 3/8, and 5/16 are exact in binary, while 1/3, 1/5, 1/6, 1/7, and 1/10 are not. This property is one of the fundamental reasons behind the `0.1 + 0.2` result.

## Decimal versus binary representation

In both decimal and binary, 0.5 is exact (`5/10 = 1/2 = 0.1` in binary). The value 0.1 is exact only in decimal. When a programmer writes `0.1`, the machine does not store the mathematical value 1/10. It stores the closest representable binary value.

The difference is extremely small, but it is fundamental. The computer does not conceptually compute 1/10 + 2/10 = 3/10. It adds finite binary approximations of those two values.

## The IEEE 754 floating-point standard

IEEE 754 is the technical standard, developed by the Institute of Electrical and Electronics Engineers, that defines formats and operations for floating-point arithmetic. It specifies how numbers are represented, how operations are performed and rounded, and how exceptional conditions are handled. It is not a law that every computer must obey; rather, it has been adopted almost universally by modern hardware, compilers, and programming languages.

### The binary64 format

The most widely used format is binary64, commonly known as double precision. It occupies 64 bits divided into three fields:

| Component | Bits | Purpose |
|-----------|------|---------|
| Sign      | 1    | Positive or negative |
| Exponent  | 11   | Scale or magnitude of the number |
| Fraction  | 52   | Fractional part of the significand |

A normalized value can be written as:

```text
(-1)^s × 1.f × 2^e
```

where `s` is the sign, `f` is the stored fraction, and `e` is the exponent. The exponent is stored with a bias of 1023 so that both positive and negative exponents can be represented, which means the stored exponent is not the mathematical exponent itself. IEEE 754 also defines signed zero, so both +0 and −0 exist.

### Fraction versus significand

Only 52 fraction bits are stored explicitly. For normalized numbers, however, there is an implicit leading 1 before the binary point, so the format provides **53 bits of significand precision**. The common statement that a double has "only 52 bits of precision" is therefore technically incomplete. This finite precision is central to the `0.1 + 0.2` phenomenon.

## Why infinite binary fractions must be approximated

The value 0.1 has an infinite binary expansion, but binary64 supplies only a finite number of significant bits. The computer cannot store the whole sequence, so it selects a representable value according to the IEEE 754 rounding rules. It is more accurate to say that 0.1 is *rounded* during representation than to say it is simply cut off. The same issue affects 0.2 and 0.3.

### Approximation is not randomness

Rounding error is not random. When a value cannot be represented exactly, the standard determines which nearby representable value is chosen. For 0.1, the binary64 value is exactly:

```text
3602879701896397 / 36028797018963968
```

The denominator is 2<sup>55</sup>, a power of two, as the rule above requires. This fraction is slightly larger than the true 0.1. The difference is tiny, but it exists, and all subsequent arithmetic operates on these stored approximations rather than on the ideal values the programmer has in mind.

## Why 0.1 + 0.2 produces 0.30000000000000004

The sequence of events is as follows:

1. The decimal inputs `0.1` and `0.2` are converted into their nearest binary64 approximations.
2. The processor adds those two stored values.
3. The exact sum is rounded to the nearest representable binary64 number.
4. That result, converted back to decimal for display, appears as `0.30000000000000004`.

The computer has not mistaken the equation 0.1 + 0.2 = 0.3. It has correctly performed an operation on finite binary approximations of the inputs. The distinction between mathematical arithmetic and finite-precision machine arithmetic is the heart of floating-point behavior.

A closer look shows why the final step lands where it does. The stored values are approximately 0.1000000000000000055511 and 0.2000000000000000111022, so their exact sum is about 0.3000000000000000166533. The sum falls exactly halfway between two adjacent binary64 numbers, and under IEEE 754's default "round half to even" rule the upper neighbour is chosen. That neighbour displays as `0.30000000000000004`, whereas the literal `0.3` is stored as the lower neighbour. The two values are different doubles, which is why the equality test fails.

## Stored value versus displayed value

What a computer stores and what it displays are two related but distinct things. The exact decimal value of the binary64 approximation of 0.1 is:

```text
0.1000000000000000055511151231257827021181583404541015625
```

Yet most languages simply print `0.1`, because showing every digit would rarely be useful. Seeing `0.1` on screen therefore does not mean that the exact mathematical value 1/10 is stored. The displayed decimal string is not always a complete picture of the underlying binary value.

## The broader principle

The `0.1 + 0.2` example is not an isolated curiosity. It illustrates a general fact of computing:

> A digital computer has finite storage and therefore cannot represent every real number exactly.

There are infinitely many real numbers, but a system with a finite number of bits can represent only a finite set of distinct values. Numerical software must therefore work with approximations, and understanding those approximations is part of writing reliable code.

## Managing floating-point error in practice

Several well-established techniques reduce the impact of representation error:

- **Integer arithmetic.** Store money as whole cents rather than fractional dollars, and convert only for display.
- **Decimal arithmetic.** Use a decimal data type, which represents base-10 fractions exactly.
- **Appropriate rounding.** Round results to the precision the application actually requires.
- **Tolerance-based comparison.** Never test floating-point values for exact equality; test whether they differ by less than an acceptable tolerance.

```python
import math
from decimal import Decimal

print(0.1 + 0.2)                      # 0.30000000000000004
print(0.1 + 0.2 == 0.3)               # False

print(math.isclose(0.1 + 0.2, 0.3))   # True (tolerance-based comparison)

print(Decimal("0.1") + Decimal("0.2") == Decimal("0.3"))  # True (decimal arithmetic)
```

## Conclusion

The result `0.30000000000000004` is not an arbitrary anomaly. It follows directly from the fact that 0.1 and 0.2 have no finite binary representation, that IEEE 754 binary64 stores only 53 significant bits, and that every operation rounds its result to a representable value. Recognizing this lets developers choose suitable tools, such as integers, decimal types, careful rounding, or tolerance-based comparison, and build software that behaves reliably where numerical accuracy matters.

---

## References

[1] D. Goldberg. [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html). ACM Computing Surveys, 1991.

[2] IEEE. [IEEE Standard for Floating-Point Arithmetic (IEEE 754-2019)](https://standards.ieee.org/ieee/754/6210/). Institute of Electrical and Electronics Engineers, 2019.
