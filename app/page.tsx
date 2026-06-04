"use client";

import { useState } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { WritingSection } from "@/components/sections/writing-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "research":
        return <ResearchSection />;
      case "projects":
        return <ProjectsSection />;
      case "certificates":
        return <CertificatesSection />;
      case "writing":
        return <WritingSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background bg-grid-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Mobile Header */}
        <header className="lg:hidden mb-8">
          <ProfileSidebar />
          <div className="mt-8">
            <Navigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>
        </header>

        {/* Desktop Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Sidebar - Profile */}
          <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <div className="sticky top-16 space-y-8">
              <ProfileSidebar />
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted leading-relaxed">
                  Researching decentralized systems, blockchain protocols, trust 
                  infrastructure, and emerging Web3 ecosystems.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1 min-w-0">
            {/* Desktop Navigation */}
            <nav className="hidden lg:block mb-12 pb-8 border-b border-border">
              <Navigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </nav>

            {/* Dynamic Content */}
            <div className="animate-in fade-in duration-300">
              {renderSection()}
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  {new Date().getFullYear()} Absalem Aroon. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder, Absalex Labs
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
