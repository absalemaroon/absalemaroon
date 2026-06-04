"use client";

import { ExternalLink, Github, Layers, Wrench, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Absalex Labs",
    description:
      "Independent research organization focused on blockchain security, distributed systems, and Web3 infrastructure. Conducting research and providing advisory services.",
    status: "Active",
    focus: "Security Research",
    website: "https://absalexlabs.vercel.app",
    github: "https://github.com/absalexlabs",
    icon: Layers,
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
      "Open-source tool for static analysis of smart contracts, detecting common vulnerability patterns and providing remediation guidance.",
    status: "In Development",
    focus: "Security Tools",
    github: "https://github.com/absalemaroon/sc-analyzer",
    icon: Wrench,
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
      "Comprehensive dashboard for monitoring and assessing risks across decentralized finance protocols, including smart contract risks, liquidity analysis, and governance tracking.",
    status: "Planned",
    focus: "DeFi Analysis",
    icon: BarChart3,
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
    icon: GraduationCap,
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
    <div className="divide-y divide-border">
      {projects.map((project) => {
        const IconComponent = project.icon;
        return (
          <div key={project.id} className="p-6 hover:bg-white/[0.02] transition-colors">
            {/* Project Header */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 text-zinc-400" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    project.status === "Active" 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                      : project.status === "In Development"
                      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted mt-1">{project.focus}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] text-zinc-300 leading-relaxed mt-4">
              {project.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs text-zinc-400 rounded-full bg-zinc-800/50 border border-zinc-700/50"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
