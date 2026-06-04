"use client";

import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const tabs = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

export function TabNavigation({ activeSection, onSectionChange }: TabNavigationProps) {
  return (
    <nav className="w-full border-b border-border">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSectionChange(tab.id)}
            className={cn(
              "relative flex-1 min-w-fit px-4 py-4 text-sm font-medium transition-colors",
              "hover:bg-white/5",
              activeSection === tab.id
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            )}
          >
            {tab.label}
            {/* Active indicator - blue underline */}
            {activeSection === tab.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-[#1d9bf0]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
