import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/card";

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
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          About
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
      </div>

      {/* Biography */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-3">Biography</h3>
          <div className="space-y-4 text-muted leading-relaxed">
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
            <p>
              Currently pursuing studies in Cybersecurity at the Federal University 
              of Technology, Babura, Nigeria, Absalem combines academic foundations 
              with practical research to address real-world challenges in blockchain 
              security and distributed systems.
            </p>
          </div>
        </div>
      </div>

      {/* Research Philosophy */}
      <Card hover={false} className="bg-accent/50 border-border/50">
        <CardContent>
          <h3 className="text-lg font-medium text-foreground mb-3">
            Research Philosophy
          </h3>
          <p className="text-muted leading-relaxed italic">
            {'"'}True understanding of decentralized systems comes not from building 
            on assumptions, but from questioning the foundations upon which they 
            rest. Every protocol, every consensus mechanism, every cryptographic 
            primitive deserves scrutiny through the lens of both possibility and 
            failure.{'"'}
          </p>
        </CardContent>
      </Card>

      {/* Areas of Expertise */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {expertiseAreas.map((area) => (
            <Badge key={area} variant="outline" className="text-sm py-1.5 px-3">
              {area}
            </Badge>
          ))}
        </div>
      </div>

      {/* Focus Areas */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Focus Areas</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <Card key={area.title} className="bg-card/50">
              <CardContent>
                <h4 className="font-medium text-card-foreground mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-3">Mission</h3>
          <p className="text-muted leading-relaxed">
            To advance the security and understanding of decentralized systems 
            through rigorous, independent research that benefits the broader 
            blockchain and Web3 community.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground mb-3">Vision</h3>
          <p className="text-muted leading-relaxed">
            A future where trust infrastructure is transparent, secure, and 
            accessible, enabling new forms of coordination and value exchange 
            that empower individuals and communities globally.
          </p>
        </div>
      </div>
    </div>
  );
}
