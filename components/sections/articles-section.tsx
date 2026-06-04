"use client";

import { useState } from "react";
import Image from "next/image";
import { Share2, Download, X, ArrowLeft } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Decentralized Identity",
    summary:
      "Exploring how self-sovereign identity systems are reshaping digital authentication and privacy in the Web3 era.",
    content: `Self-sovereign identity represents a paradigm shift in how we think about digital identity. Unlike traditional systems where identity is controlled by centralized authorities, SSI puts individuals in control of their own identity data.

This has profound implications for privacy, security, and user autonomy in the digital age. By leveraging blockchain technology and cryptographic proofs, users can selectively disclose only the information necessary for a given interaction.

The technology stack typically includes decentralized identifiers (DIDs), verifiable credentials, and secure wallet applications. These components work together to create a trustless system where verification can occur without relying on a central authority.

Key benefits include:
- Enhanced privacy through selective disclosure
- Reduced risk of data breaches
- User control over personal information
- Interoperability across platforms and jurisdictions

As we move toward a more decentralized web, self-sovereign identity will play a crucial role in enabling secure, privacy-preserving interactions.`,
    category: "Web3",
    date: "15 Mar 2024",
    readTime: "8 min read",
    coverColor: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Understanding MEV in DeFi Protocols",
    summary:
      "A comprehensive look at Maximal Extractable Value, its implications for users, and strategies for mitigation.",
    content: `Maximal Extractable Value (MEV) has become one of the most significant challenges facing DeFi protocols today. Originally termed "Miner Extractable Value," MEV refers to the profit that can be extracted by reordering, inserting, or censoring transactions within a block.

The implications for regular users are substantial. MEV extraction can lead to worse execution prices, failed transactions, and an overall degraded user experience. Understanding these dynamics is essential for anyone participating in DeFi.

Common MEV strategies include:
- Front-running: Placing a transaction ahead of a pending transaction
- Back-running: Placing a transaction immediately after a target transaction
- Sandwich attacks: Combining front-running and back-running

Several mitigation strategies have emerged, including private transaction pools, MEV-aware DEX designs, and protocol-level solutions like Flashbots.`,
    category: "DeFi",
    date: "28 Feb 2024",
    readTime: "12 min read",
    coverColor: "from-emerald-600 to-teal-600",
  },
  {
    id: 3,
    title: "Zero-Knowledge Proofs: Applications Beyond Privacy",
    summary:
      "How ZK technology is enabling new use cases in scalability, compliance, and decentralized verification.",
    content: `Zero-knowledge proofs have evolved far beyond their original privacy-focused applications. Today, ZK technology is at the forefront of blockchain scalability solutions and is finding applications in areas that were previously thought impossible.

ZK-rollups, for instance, use zero-knowledge proofs to batch thousands of transactions off-chain while posting succinct proofs on-chain. This dramatically increases throughput while maintaining the security guarantees of the underlying blockchain.

Beyond scalability, ZK proofs are enabling:
- Compliant DeFi: Proving regulatory compliance without revealing sensitive data
- Trustless bridges: Secure cross-chain communication with mathematical guarantees
- Private voting: Verifiable elections that preserve voter privacy
- Identity verification: Proving attributes without revealing underlying data

The mathematical foundations of ZK proofs—particularly SNARKs and STARKs—continue to advance, making these applications increasingly practical and efficient.`,
    category: "Cryptography",
    date: "10 Jan 2024",
    readTime: "10 min read",
    coverColor: "from-amber-600 to-orange-600",
  },
  {
    id: 4,
    title: "The Security Economics of Layer 2 Solutions",
    summary:
      "Analyzing the economic incentives and security assumptions underlying rollup and state channel architectures.",
    content: `Layer 2 solutions represent a critical component of blockchain scalability strategies. However, each approach comes with distinct security assumptions and economic trade-offs that users and developers must understand.

Optimistic rollups assume transactions are valid by default and rely on fraud proofs during a challenge period. This creates specific economic requirements for watchers who must be incentivized to detect and prove fraud.

ZK-rollups, in contrast, generate validity proofs for every batch, eliminating the need for a challenge period but requiring significant computational resources for proof generation.

State channels offer instant finality for participants but require capital lockup and have limitations on the types of applications they can support.

Understanding these trade-offs is essential for:
- Choosing the right L2 for specific use cases
- Evaluating the security guarantees of different protocols
- Anticipating potential attack vectors and their mitigations`,
    category: "Security",
    date: "5 Dec 2023",
    readTime: "15 min read",
    coverColor: "from-rose-600 to-pink-600",
  },
];

interface ArticleDetailProps {
  article: typeof articles[0];
  onClose: () => void;
}

function ArticleDetail({ article, onClose }: ArticleDetailProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <span className="font-semibold text-foreground">Article</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className={`w-full h-48 md:h-64 bg-gradient-to-br ${article.coverColor} flex items-center justify-center`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-6 leading-tight">
          {article.title.split(' ').slice(0, 3).join(' ')}
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
          {article.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/absalem-aroon.jpg"
              alt="Absalem Aroon"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-foreground">Absalem Aroon</span>
              <svg viewBox="0 0 22 22" className="w-4 h-4 text-[#1d9bf0]" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span>@AbsalemAroon</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground leading-relaxed mb-4 text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#1d9bf0]/10 text-[#1d9bf0]">
            {article.category}
          </span>
          <span className="text-sm text-muted">{article.readTime}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground hover:bg-white/5 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground hover:bg-white/5 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, onClick }: { article: typeof articles[0]; onClick: () => void }) {
  return (
    <article 
      onClick={onClick}
      className="border-b border-border hover:bg-white/[0.02] transition-colors cursor-pointer"
    >
      {/* Cover Image */}
      <div className={`w-full h-40 bg-gradient-to-br ${article.coverColor} flex items-center justify-center relative`}>
        {/* Article Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white">
          <X className="w-3 h-3" />
          <span>Article</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center px-6 leading-tight">
          {article.title.split(' ').slice(0, 3).join(' ')}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-bold text-foreground text-lg leading-tight mb-2">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-[15px] text-muted leading-relaxed line-clamp-2">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          
          {/* Actions - Only Share and Download */}
          <div className="flex items-center gap-1">
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="p-2 rounded-full hover:bg-[#1d9bf0]/10 text-muted hover:text-[#1d9bf0] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="p-2 rounded-full hover:bg-[#1d9bf0]/10 text-muted hover:text-[#1d9bf0] transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <div>
      {/* Header */}
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">{articles.length} Articles</h2>
      </div>

      {/* Articles List */}
      {articles.map((article) => (
        <ArticleCard 
          key={article.id} 
          article={article} 
          onClick={() => setSelectedArticle(article)}
        />
      ))}

      {/* Article Detail Modal */}
      {selectedArticle && (
        <ArticleDetail 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  );
}
