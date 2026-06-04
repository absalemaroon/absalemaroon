"use client";

import { ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Absalex Labs",
    thumbnail: "/images/projects/absalex-labs.jpg",
    shortDescription: "Independent blockchain research organization",
    fullDescription:
      "Independent research organization focused on blockchain security, distributed systems, and Web3 infrastructure. Conducting research and providing advisory services to protocols and organizations building in the decentralized ecosystem. Our work spans security auditing, protocol analysis, and the publication of open research.",
    status: "Active",
    category: "Research Lab",
    technologies: ["Blockchain", "Security", "DeFi", "Smart Contracts"],
    website: "https://absalexlabs.vercel.app",
    github: "https://github.com/absalexlabs",
    startDate: "January 2026",
  },
  {
    id: 2,
    name: "Smart Contract Analyzer",
    thumbnail: "/images/projects/sc-analyzer.jpg",
    shortDescription: "Static analysis tool for smart contract security",
    fullDescription:
      "Open-source tool for static analysis of smart contracts, detecting common vulnerability patterns and providing remediation guidance. The analyzer supports multiple blockchain platforms and integrates with popular development workflows to catch security issues early in the development lifecycle.",
    status: "In Development",
    category: "Security Tools",
    technologies: ["Solidity", "Python", "AST Analysis", "Security"],
    github: "https://github.com/absalemaroon/sc-analyzer",
    startDate: "March 2026",
  },
  {
    id: 3,
    name: "DeFi Risk Dashboard",
    thumbnail: "/images/projects/defi-dashboard.jpg",
    shortDescription: "Protocol risk monitoring and assessment platform",
    fullDescription:
      "Comprehensive dashboard for monitoring and assessing risks across decentralized finance protocols, including smart contract risks, liquidity analysis, and governance tracking. Provides real-time alerts and historical data analysis for informed decision-making in the DeFi ecosystem.",
    status: "Planned",
    category: "DeFi Analysis",
    technologies: ["React", "Web3.js", "GraphQL", "Data Analytics"],
    startDate: "Q3 2026",
  },
  {
    id: 4,
    name: "Blockchain Security Curriculum",
    thumbnail: "/images/projects/security-curriculum.jpg",
    shortDescription: "Educational resources for blockchain security",
    fullDescription:
      "Educational resources and frameworks for understanding security concepts in blockchain systems, designed for researchers and developers. Includes comprehensive course materials, hands-on labs, real-world case studies, and assessment tools to build security expertise.",
    status: "Active",
    category: "Education",
    technologies: ["Documentation", "Tutorials", "Labs", "Assessments"],
    website: "https://learn.absalexlabs.com",
    startDate: "February 2026",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-semibold text-lg">Project</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Thumbnail */}
        <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-zinc-700 tracking-wider">
              {selectedProject.name.charAt(0)}
            </div>
            <div className="text-sm text-zinc-600 mt-2">{selectedProject.category}</div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Status Badge */}
          <div className="mb-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              selectedProject.status === "Active" 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : selectedProject.status === "In Development"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
            }`}>
              {selectedProject.status}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {selectedProject.name}
          </h1>

          {/* Category */}
          <p className="text-muted mb-4">{selectedProject.category}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Started {selectedProject.startDate}
            </span>
          </div>

          {/* Full Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Description</h3>
            <p className="text-[15px] text-zinc-300 leading-relaxed">
              {selectedProject.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm text-zinc-300 rounded-full bg-zinc-800 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            {selectedProject.website && (
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="font-medium text-foreground">Website</p>
                    <p className="text-sm text-muted">{selectedProject.website}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="font-medium text-foreground">GitHub Repository</p>
                    <p className="text-sm text-muted">{selectedProject.github}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer hover:bg-white/[0.02] transition-colors"
        >
          {/* Project Thumbnail */}
          <div className="w-full aspect-[2/1] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center relative">
            <div className="text-center">
              <div className="text-5xl font-bold text-zinc-700 tracking-wider">
                {project.name.charAt(0)}
              </div>
            </div>
            {/* Category Badge */}
            <div className="absolute bottom-3 left-3">
              <span className="px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-md text-zinc-300">
                {project.category}
              </span>
            </div>
            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                project.status === "Active" 
                  ? "bg-emerald-500/20 text-emerald-400" 
                  : project.status === "In Development"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-zinc-500/20 text-zinc-400"
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {project.name}
            </h3>

            {/* Short Description */}
            <p className="text-sm text-muted mb-3">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs text-zinc-500 rounded bg-zinc-800/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-0.5 text-xs text-zinc-500 rounded bg-zinc-800/50">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.startDate}
              </span>
              {project.website && (
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Website
                </span>
              )}
              {project.github && (
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" />
                  Source
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
