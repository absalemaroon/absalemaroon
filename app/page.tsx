"use client";

import { useState } from "react";
import { ProfileHeader } from "@/components/profile-header";
import { TabNavigation } from "@/components/tab-navigation";
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
    <div className="min-h-screen bg-background">
      {/* Twitter-style container */}
      <div className="max-w-2xl mx-auto border-x border-border min-h-screen">
        {/* Profile Header with Banner */}
        <ProfileHeader />

        {/* Tab Navigation */}
        <TabNavigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Content Area */}
        <main className="min-h-[50vh]">
          <div className="animate-in fade-in duration-200">
            {renderSection()}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6 px-4">
          <div className="text-center text-sm text-muted">
            <p>{new Date().getFullYear()} Absalem Aroon. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
