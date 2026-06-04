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
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Absalex Labs",
    description:
      "Independent security research and consulting organization focused on blockchain security, distributed systems, and Web3 infrastructure. Conducting research and providing advisory services.",
    status: "Active",
    focus: "Security Research",
    website: "https://absalex.com",
    github: "https://github.com/absalexlabs",
    features: [
      "Security Auditing",
      "Protocol Analysis",
      "Research Publications",
      "Advisory Services",
    ],
  },
  {
    id: 2,
    name: "Smart Contract Analyzer",
    description:
      "An open-source tool for static analysis of smart contracts, detecting common vulnerability patterns and providing remediation guidance.",
    status: "In Development",
    focus: "Security Tools",
    github: "https://github.com/absalemaroon/sc-analyzer",
    features: [
      "Vulnerability Detection",
      "Pattern Matching",
      "Report Generation",
      "CI/CD Integration",
    ],
  },
  {
    id: 3,
    name: "DeFi Risk Dashboard",
    description:
      "A comprehensive dashboard for monitoring and assessing risks across decentralized finance protocols, including smart contract risks, liquidity analysis, and governance tracking.",
    status: "Planned",
    focus: "DeFi Analysis",
    features: [
      "Risk Scoring",
      "Protocol Monitoring",
      "Alert System",
      "Historical Data",
    ],
  },
  {
    id: 4,
    name: "Blockchain Security Curriculum",
    description:
      "Educational resources and frameworks for understanding security concepts in blockchain systems, designed for researchers and developers.",
    status: "Active",
    focus: "Education",
    features: [
      "Course Materials",
      "Hands-on Labs",
      "Case Studies",
      "Assessment Tools",
    ],
  },
];

export function ProjectsSection() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Projects
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Active projects and initiatives through Absalex Labs, focusing on 
          security tools, educational resources, and research infrastructure.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardMeta className="mb-2">
                <Badge variant="outline">{project.focus}</Badge>
                <span
                  className={
                    project.status === "Active"
                      ? "text-green-400"
                      : project.status === "In Development"
                      ? "text-yellow-400"
                      : "text-muted-foreground"
                  }
                >
                  {project.status}
                </span>
              </CardMeta>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-muted" />
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <Badge key={feature} className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {!project.website && !project.github && (
                <span className="text-sm text-muted-foreground">
                  Coming soon
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Contributing */}
      <Card hover={false} className="bg-accent/50 border-border/50">
        <CardContent>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Collaborate
          </h3>
          <p className="text-muted leading-relaxed">
            I welcome collaboration with researchers and developers who share an 
            interest in advancing security in decentralized systems. If you are 
            interested in contributing to any Absalex Labs projects, please reach 
            out through the contact section.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
