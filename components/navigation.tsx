"use client";

import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
            "hover:bg-accent hover:text-foreground",
            activeSection === item.id
              ? "bg-foreground text-background"
              : "text-muted"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
