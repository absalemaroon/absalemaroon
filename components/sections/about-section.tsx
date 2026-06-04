"use client";

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
      {/* Biography */}
      <section className="px-4 py-5 md:px-6">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Biography
        </h3>
        <div className="space-y-4 text-[15px] text-foreground/90 leading-relaxed">
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
      </section>

      {/* Education */}
      <section className="px-4 py-5 md:px-6">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Education
        </h3>
        <p className="text-[15px] text-foreground/90 leading-relaxed">
          Currently pursuing studies in Cybersecurity at the Federal University 
          of Technology, Babura, Nigeria. Combining academic foundations 
          with practical research to address real-world challenges in blockchain 
          security and distributed systems.
        </p>
      </section>

      {/* Research Philosophy */}
      <section className="px-4 py-5 md:px-6">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Research Philosophy
        </h3>
        <blockquote className="border-l-2 border-accent pl-4 text-[15px] text-foreground/80 italic leading-relaxed">
          &ldquo;True understanding of decentralized systems comes not from building 
          on assumptions, but from questioning the foundations upon which they 
          rest. Every protocol, every consensus mechanism, every cryptographic 
          primitive deserves scrutiny through the lens of both possibility and 
          failure.&rdquo;
        </blockquote>
      </section>

      {/* Areas of Expertise */}
      <section className="px-4 py-5 md:px-6">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {expertiseAreas.map((area) => (
            <span 
              key={area} 
              className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-border text-foreground/80"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-4 py-5 md:px-6">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Focus Areas
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <div 
              key={area.title}
              className="p-4 rounded-lg border border-border bg-white/[0.02]"
            >
              <h4 className="font-medium text-foreground text-[15px] mb-2">
                {area.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-5 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
              Mission
            </h3>
            <p className="text-[15px] text-foreground/90 leading-relaxed">
              To advance the security and understanding of decentralized systems 
              through rigorous, independent research that benefits the broader 
              blockchain and Web3 community.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
              Vision
            </h3>
            <p className="text-[15px] text-foreground/90 leading-relaxed">
              A future where trust infrastructure is transparent, secure, and 
              accessible, enabling new forms of coordination and value exchange 
              that empower individuals and communities globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
