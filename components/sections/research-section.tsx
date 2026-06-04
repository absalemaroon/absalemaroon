"use client";

import { FileText, Calendar, Clock, ExternalLink, ChevronRight } from "lucide-react";

const researchNotes = [
  {
    id: 1,
    title: "Consensus Mechanisms: A Comparative Analysis",
    summary:
      "An in-depth examination of Proof of Work, Proof of Stake, and emerging consensus mechanisms, analyzing their security properties, energy efficiency, and decentralization trade-offs.",
    category: "Consensus",
    date: "March 2026",
    status: "Published",
    readTime: "12 min read",
    topics: ["Proof of Work", "Proof of Stake", "Blockchain Security"],
  },
  {
    id: 2,
    title: "Smart Contract Security Patterns",
    summary:
      "Documentation of common vulnerability patterns in smart contracts and defensive programming techniques for building secure decentralized applications.",
    category: "Security",
    date: "February 2026",
    status: "Published",
    readTime: "8 min read",
    topics: ["Smart Contracts", "Solidity", "Security Audits"],
  },
  {
    id: 3,
    title: "DeFi Protocol Risk Assessment Framework",
    summary:
      "A systematic approach to evaluating risks in decentralized finance protocols, covering smart contract, economic, and governance risks.",
    category: "DeFi",
    date: "February 2026",
    status: "In Progress",
    readTime: "15 min read",
    topics: ["Risk Assessment", "Protocol Analysis", "Governance"],
  },
  {
    id: 4,
    title: "Cross-Chain Bridge Security Analysis",
    summary:
      "Research into the security challenges and attack vectors specific to cross-chain bridge implementations and interoperability protocols.",
    category: "Security",
    date: "January 2026",
    status: "In Progress",
    readTime: "10 min read",
    topics: ["Cross-Chain", "Bridges", "Interoperability"],
  },
];

function ResearchCard({ note, index }: { note: typeof researchNotes[0]; index: number }) {
  return (
    <article className="group">
      <div className="p-5 border-b border-border hover:bg-white/[0.02] transition-colors">
        {/* Category & Status Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1d9bf0]">
              {note.category}
            </span>
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${
              note.status === "Published" 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            }`}>
              {note.status}
            </span>
          </div>
          <span className="text-xs text-muted font-mono">#{String(index + 1).padStart(2, '0')}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#1d9bf0] transition-colors cursor-pointer">
          {note.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed mb-4">
          {note.summary}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {note.topics.map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 text-xs bg-white/5 text-muted rounded border border-border"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {note.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {note.readTime}
            </span>
          </div>
          
          <button className="flex items-center gap-1 text-xs text-[#1d9bf0] opacity-0 group-hover:opacity-100 transition-opacity">
            Read Paper
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ResearchSection() {
  return (
    <div>
      {/* Section Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#1d9bf0]/10 rounded-lg">
            <FileText className="w-5 h-5 text-[#1d9bf0]" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Research Papers</h2>
            <p className="text-xs text-muted">Published research and ongoing investigations</p>
          </div>
        </div>
      </div>

      {/* Research Cards */}
      {researchNotes.map((note, index) => (
        <ResearchCard key={note.id} note={note} index={index} />
      ))}

      {/* View All Button */}
      <div className="p-4 border-b border-border">
        <button className="w-full py-2.5 text-sm text-[#1d9bf0] hover:bg-[#1d9bf0]/5 rounded-lg transition-colors">
          View all research papers
        </button>
      </div>
    </div>
  );
}
