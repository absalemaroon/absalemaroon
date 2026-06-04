"use client";

import { useState } from "react";
import { FileText, Calendar, Clock, ArrowLeft, Share2, Download, X } from "lucide-react";
import Image from "next/image";

const researchArticles = [
  {
    id: 1,
    title: "Consensus Mechanisms: A Comparative Analysis",
    thumbnail: "/images/research/consensus.jpg",
    category: "Consensus",
    summary: "An in-depth examination of Proof of Work, Proof of Stake, and emerging consensus mechanisms, analyzing their security properties, energy efficiency, and decentralization trade-offs.",
    content: `This research paper presents a comprehensive comparative analysis of blockchain consensus mechanisms, examining their fundamental properties and trade-offs.

## Introduction

Consensus mechanisms are the backbone of blockchain technology, enabling distributed networks to agree on the state of the ledger without requiring a central authority. This paper examines the three major categories of consensus: Proof of Work (PoW), Proof of Stake (PoS), and emerging hybrid approaches.

## Proof of Work Analysis

Proof of Work, pioneered by Bitcoin, relies on computational puzzles to secure the network. Miners compete to solve cryptographic challenges, with the winner earning the right to add the next block. While highly secure, PoW faces criticism for its energy consumption.

## Proof of Stake Evaluation

Proof of Stake replaces computational work with economic stake. Validators lock tokens as collateral, creating economic incentives for honest behavior. This approach significantly reduces energy consumption while maintaining security through slashing conditions.

## Emerging Mechanisms

New consensus mechanisms like Proof of Authority, Delegated Proof of Stake, and hybrid approaches offer different trade-offs between decentralization, security, and scalability.

## Conclusion

Each consensus mechanism presents unique trade-offs. The optimal choice depends on the specific requirements of the blockchain application, including security needs, throughput requirements, and decentralization goals.`,
    tags: ["Proof of Work", "Proof of Stake", "Blockchain Security", "Decentralization"],
    readTime: "12 min",
    date: "March 15, 2026",
  },
  {
    id: 2,
    title: "Smart Contract Security Patterns",
    thumbnail: "/images/research/security.jpg",
    category: "Security",
    summary: "Documentation of common vulnerability patterns in smart contracts and defensive programming techniques for building secure decentralized applications.",
    content: `A systematic documentation of security patterns and anti-patterns in smart contract development.

## Overview

Smart contracts are immutable once deployed, making security paramount. This research documents common vulnerabilities and provides defensive patterns for secure development.

## Common Vulnerabilities

### Reentrancy Attacks
The most notorious vulnerability, exemplified by the DAO hack. Occurs when external calls allow attackers to re-enter the contract before state updates complete.

### Integer Overflow/Underflow
Arithmetic operations that exceed variable bounds can cause unexpected behavior. Modern Solidity versions include built-in overflow checks.

### Access Control Issues
Improper permission management can expose critical functions to unauthorized users.

## Defensive Patterns

The Checks-Effects-Interactions pattern, pull payment systems, and comprehensive access control frameworks provide robust defenses against common attacks.`,
    tags: ["Smart Contracts", "Solidity", "Security Audits", "Vulnerabilities"],
    readTime: "8 min",
    date: "February 28, 2026",
  },
  {
    id: 3,
    title: "DeFi Protocol Risk Assessment Framework",
    thumbnail: "/images/research/defi.jpg",
    category: "DeFi",
    summary: "A systematic approach to evaluating risks in decentralized finance protocols, covering smart contract, economic, and governance risks.",
    content: `This framework provides a structured methodology for assessing risks in DeFi protocols.

## Risk Categories

### Smart Contract Risk
Code vulnerabilities, upgrade mechanisms, and dependency risks form the technical foundation of protocol security.

### Economic Risk
Token economics, liquidity depth, and market manipulation vectors require careful analysis.

### Governance Risk
Centralization of control, voting mechanisms, and time-lock implementations affect protocol resilience.

## Assessment Methodology

A weighted scoring system enables comparative analysis across protocols, helping users and investors make informed decisions.`,
    tags: ["Risk Assessment", "Protocol Analysis", "Governance", "Token Economics"],
    readTime: "15 min",
    date: "February 10, 2026",
  },
  {
    id: 4,
    title: "Cross-Chain Bridge Security Analysis",
    thumbnail: "/images/research/bridges.jpg",
    category: "Infrastructure",
    summary: "Research into the security challenges and attack vectors specific to cross-chain bridge implementations and interoperability protocols.",
    content: `Cross-chain bridges represent critical infrastructure for blockchain interoperability, yet they remain frequent targets for attacks.

## Bridge Architectures

### Lock and Mint
Users lock assets on the source chain while equivalent tokens are minted on the destination chain.

### Atomic Swaps
Hash time-locked contracts enable trustless exchanges across chains without intermediaries.

### Validator Networks
Distributed validator sets monitor and verify cross-chain transactions.

## Attack Vectors

Bridge exploits have resulted in billions of dollars in losses. Common vectors include validator compromise, smart contract vulnerabilities, and oracle manipulation.

## Security Recommendations

Multi-signature requirements, time delays, and monitoring systems provide layered defense for bridge implementations.`,
    tags: ["Cross-Chain", "Bridges", "Interoperability", "Security"],
    readTime: "10 min",
    date: "January 22, 2026",
  },
];

function ResearchCard({ 
  article, 
  onClick 
}: { 
  article: typeof researchArticles[0]; 
  onClick: () => void;
}) {
  return (
    <article 
      className="group cursor-pointer border-b border-border hover:bg-white/[0.02] transition-colors"
      onClick={onClick}
    >
      <div className="p-4">
        {/* Thumbnail */}
        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-12 h-12 text-zinc-600" />
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold bg-black/60 backdrop-blur-sm text-white rounded">
              {article.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#1d9bf0] transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {article.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-white/5 text-muted rounded border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>
      </div>
    </article>
  );
}

function ResearchDetail({ 
  article, 
  onClose 
}: { 
  article: typeof researchArticles[0]; 
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <span className="font-semibold text-foreground">Research</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Download className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Cover Thumbnail */}
      <div className="relative w-full h-48 md:h-64 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <FileText className="w-16 h-16 text-zinc-600" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-sm font-semibold bg-black/60 backdrop-blur-sm text-white rounded">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-border">
            <Image
              src="/images/absalem-aroon.jpg"
              alt="Absalem Aroon"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground text-sm">Absalem Aroon</span>
              <svg className="w-4 h-4 text-[#1d9bf0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <span className="text-xs text-muted">{article.date}</span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {article.readTime} read
          </span>
        </div>

        {/* Summary */}
        <div className="mb-6 p-4 bg-white/[0.02] border border-border rounded-xl">
          <p className="text-sm text-muted italic leading-relaxed">{article.summary}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none mb-8">
          {article.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            return <p key={i} className="text-muted leading-relaxed mb-4">{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-border">
          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-white/5 text-muted rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-border rounded-full transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-border rounded-full transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ResearchSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof researchArticles[0] | null>(null);

  return (
    <div>
      {/* Section Header */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#1d9bf0]/10 rounded-lg">
            <FileText className="w-5 h-5 text-[#1d9bf0]" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Research</h2>
            <p className="text-xs text-muted">{researchArticles.length} publications</p>
          </div>
        </div>
      </div>

      {/* Research Cards */}
      {researchArticles.map((article) => (
        <ResearchCard 
          key={article.id} 
          article={article} 
          onClick={() => setSelectedArticle(article)}
        />
      ))}

      {/* Detail View */}
      {selectedArticle && (
        <ResearchDetail 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  );
}
