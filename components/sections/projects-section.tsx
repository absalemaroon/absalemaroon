"use client";

import Image from "next/image";
import { ExternalLink, Github, MoreHorizontal, MessageCircle, Repeat2, Heart, Share, Bookmark } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Absalex Labs",
    description:
      "Independent security research and consulting organization focused on blockchain security, distributed systems, and Web3 infrastructure. Conducting research and providing advisory services.",
    status: "Active",
    focus: "Security Research",
    website: "https://absalexlabs.vercel.app",
    github: "https://github.com/absalexlabs",
    date: "Jan 10",
    features: [
      "Security Auditing",
      "Protocol Analysis",
      "Research Publications",
      "Advisory Services",
    ],
    engagement: { comments: 15, reposts: 42, likes: 234 },
  },
  {
    id: 2,
    name: "Smart Contract Analyzer",
    description:
      "An open-source tool for static analysis of smart contracts, detecting common vulnerability patterns and providing remediation guidance.",
    status: "In Development",
    focus: "Security Tools",
    github: "https://github.com/absalemaroon/sc-analyzer",
    date: "Feb 5",
    features: [
      "Vulnerability Detection",
      "Pattern Matching",
      "Report Generation",
      "CI/CD Integration",
    ],
    engagement: { comments: 8, reposts: 28, likes: 156 },
  },
  {
    id: 3,
    name: "DeFi Risk Dashboard",
    description:
      "A comprehensive dashboard for monitoring and assessing risks across decentralized finance protocols, including smart contract risks, liquidity analysis, and governance tracking.",
    status: "Planned",
    focus: "DeFi Analysis",
    date: "Mar 1",
    features: [
      "Risk Scoring",
      "Protocol Monitoring",
      "Alert System",
      "Historical Data",
    ],
    engagement: { comments: 5, reposts: 18, likes: 89 },
  },
  {
    id: 4,
    name: "Blockchain Security Curriculum",
    description:
      "Educational resources and frameworks for understanding security concepts in blockchain systems, designed for researchers and developers.",
    status: "Active",
    focus: "Education",
    date: "Dec 15",
    features: [
      "Course Materials",
      "Hands-on Labs",
      "Case Studies",
      "Assessment Tools",
    ],
    engagement: { comments: 22, reposts: 56, likes: 312 },
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="p-4 hover:bg-white/[0.03] transition-colors cursor-pointer border-b border-border">
      <div className="flex gap-3">
        {/* Profile avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/absalem-aroon.jpg"
              alt="Absalem Aroon"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-sm truncate">
              <span className="font-bold text-foreground truncate">Absalem Aroon</span>
              <svg viewBox="0 0 22 22" className="w-4 h-4 text-[#1d9bf0] flex-shrink-0" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
              <span className="text-muted truncate">@AbsalemAroon</span>
              <span className="text-muted">·</span>
              <span className="text-muted">{project.date}</span>
            </div>
            <button className="p-1.5 -mr-1.5 rounded-full hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] text-muted transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-1">
            <h3 className="font-bold text-foreground text-[15px] leading-tight mb-1">
              {project.name}
            </h3>
            <p className="text-[15px] text-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#1d9bf0]/10 text-[#1d9bf0]">
              {project.focus}
            </span>
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
              project.status === "Active" 
                ? "bg-emerald-500/10 text-emerald-400" 
                : project.status === "In Development"
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-zinc-500/10 text-zinc-400"
            }`}>
              {project.status}
            </span>
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.features.slice(0, 3).map((feature) => (
              <span key={feature} className="text-xs text-muted px-2 py-0.5 rounded border border-border">
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs text-muted">+{project.features.length - 3} more</span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#1d9bf0] text-sm hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-foreground text-sm transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>

          {/* Engagement Actions */}
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs">{project.engagement.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted hover:text-emerald-400 transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-emerald-400/10 transition-colors">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-xs">{project.engagement.reposts}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted hover:text-rose-400 transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-rose-400/10 transition-colors">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xs">{project.engagement.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <Bookmark className="w-4 h-4" />
              </div>
            </button>
            <button className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <Share className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <div>
      {/* Project Cards */}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {/* Show More */}
      <div className="p-4 text-center">
        <button className="text-[#1d9bf0] hover:underline text-[15px]">
          Show more projects
        </button>
      </div>
    </div>
  );
}
