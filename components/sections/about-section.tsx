"use client";

import { Briefcase, GraduationCap, Target, Lightbulb, Quote } from "lucide-react";

const expertiseAreas = [
  "Blockchain Security",
  "DeFi Protocols", 
  "Smart Contract Auditing",
  "Distributed Systems",
  "Cryptography",
  "Consensus Mechanisms",
  "Web3 Infrastructure",
  "Trust Systems",
];

const focusAreas = [
  {
    title: "Protocol Research",
    description:
      "Analyzing and documenting blockchain protocol architectures, consensus mechanisms, and their security implications.",
  },
  {
    title: "Security Analysis",
    description:
      "Identifying vulnerabilities in smart contracts, DeFi protocols, and distributed systems through systematic research.",
  },
  {
    title: "Web3 Strategy",
    description:
      "Developing strategic frameworks for organizations navigating the decentralized technology landscape.",
  },
  {
    title: "Trust Infrastructure",
    description:
      "Researching cryptographic primitives and trust models that underpin decentralized systems.",
  },
];

export function AboutSection() {
  return (
    <div className="divide-y divide-border">
      {/* Biography Card */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1d9bf0]/10 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-[#1d9bf0]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-foreground">Biography</span>
            </div>
            <div className="space-y-3 text-[15px] text-foreground leading-relaxed">
              <p>
                Absalem Aroon is a Blockchain & DeFi Researcher and Web3 Strategist 
                dedicated to advancing the understanding of decentralized systems. As 
                the Founder of Absalex Labs, he conducts independent research on 
                blockchain protocols, trust infrastructure, and emerging Web3 ecosystems.
              </p>
              <p>
                His work focuses on the intersection of cryptography, distributed 
                computing, and security in decentralized environments. Through 
                rigorous analysis and documentation, he contributes to the broader 
                understanding of how these systems can be designed, secured, and 
                scaled.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Card */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-foreground">Education</span>
            </div>
            <p className="text-[15px] text-foreground leading-relaxed">
              Currently pursuing studies in Cybersecurity at the Federal University 
              of Technology, Babura, Nigeria. Combining academic foundations 
              with practical research to address real-world challenges in blockchain 
              security and distributed systems.
            </p>
          </div>
        </div>
      </div>

      {/* Research Philosophy Quote */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
            <Quote className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-foreground">Research Philosophy</span>
            </div>
            <div className="border-l-2 border-[#1d9bf0] pl-4">
              <p className="text-[15px] text-muted italic leading-relaxed">
                &ldquo;True understanding of decentralized systems comes not from building 
                on assumptions, but from questioning the foundations upon which they 
                rest. Every protocol, every consensus mechanism, every cryptographic 
                primitive deserves scrutiny through the lens of both possibility and 
                failure.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-foreground">Areas of Expertise</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area) => (
                <span 
                  key={area} 
                  className="px-3 py-1.5 text-sm rounded-full border border-border text-muted hover:bg-white/5 hover:border-[#1d9bf0]/50 transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1d9bf0]/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-[#1d9bf0]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-foreground">Focus Areas</span>
            </div>
            <div className="grid gap-3">
              {focusAreas.map((area) => (
                <div 
                  key={area.title}
                  className="p-3 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="p-4 hover:bg-white/[0.03] transition-colors">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex-1 min-w-0 space-y-4">
            <div>
              <span className="font-bold text-foreground">Mission</span>
              <p className="text-[15px] text-muted leading-relaxed mt-1">
                To advance the security and understanding of decentralized systems 
                through rigorous, independent research that benefits the broader 
                blockchain and Web3 community.
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Vision</span>
              <p className="text-[15px] text-muted leading-relaxed mt-1">
                A future where trust infrastructure is transparent, secure, and 
                accessible, enabling new forms of coordination and value exchange 
                that empower individuals and communities globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
