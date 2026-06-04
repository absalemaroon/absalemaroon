import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardLink,
  CardMeta,
  Badge,
} from "@/components/ui/card";
import { FileText } from "lucide-react";

const researchNotes = [
  {
    id: 1,
    title: "Consensus Mechanisms: A Comparative Analysis",
    summary:
      "An in-depth examination of Proof of Work, Proof of Stake, and emerging consensus mechanisms, analyzing their security properties, energy efficiency, and decentralization trade-offs.",
    category: "Consensus",
    date: "2024",
    status: "Published",
  },
  {
    id: 2,
    title: "Smart Contract Security Patterns",
    summary:
      "Documentation of common vulnerability patterns in smart contracts and defensive programming techniques for building secure decentralized applications.",
    category: "Security",
    date: "2024",
    status: "Published",
  },
  {
    id: 3,
    title: "DeFi Protocol Risk Assessment Framework",
    summary:
      "A systematic approach to evaluating risks in decentralized finance protocols, covering smart contract, economic, and governance risks.",
    category: "DeFi",
    date: "2024",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Cross-Chain Bridge Security Analysis",
    summary:
      "Research into the security challenges and attack vectors specific to cross-chain bridge implementations and interoperability protocols.",
    category: "Security",
    date: "2024",
    status: "In Progress",
  },
];

export function ResearchSection() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Research
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Published research notes and ongoing analysis on blockchain protocols, 
          DeFi systems, and distributed security. Each piece undergoes rigorous 
          review before publication.
        </p>
      </div>

      {/* Research Cards */}
      <div className="space-y-4">
        {researchNotes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardMeta className="mb-2">
                <Badge variant="outline">{note.category}</Badge>
                <span>{note.date}</span>
                <span
                  className={
                    note.status === "Published"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }
                >
                  {note.status}
                </span>
              </CardMeta>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{note.summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardLink href="#">Read Research</CardLink>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Research Focus Areas */}
      <div className="pt-8 border-t border-border">
        <h3 className="text-lg font-medium text-foreground mb-4">
          Active Research Areas
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-muted mt-0.5" />
            <div>
              <h4 className="font-medium text-card-foreground">
                Blockchain Security
              </h4>
              <p className="text-sm text-muted">
                Vulnerability analysis and mitigation strategies
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-muted mt-0.5" />
            <div>
              <h4 className="font-medium text-card-foreground">
                Distributed Systems
              </h4>
              <p className="text-sm text-muted">
                Consensus mechanisms and network security
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-muted mt-0.5" />
            <div>
              <h4 className="font-medium text-card-foreground">Cryptography</h4>
              <p className="text-sm text-muted">
                Practical applications in securing digital assets
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-muted mt-0.5" />
            <div>
              <h4 className="font-medium text-card-foreground">
                Threat Intelligence
              </h4>
              <p className="text-sm text-muted">
                Monitoring emerging threats in decentralized systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
