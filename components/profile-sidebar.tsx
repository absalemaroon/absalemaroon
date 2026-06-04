"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/absalemaroon",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/absalemaroon",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/absalemaroon",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:contact@absalemaroon.com",
    icon: Mail,
  },
];

export function ProfileSidebar() {
  return (
    <aside className="flex flex-col items-center lg:items-start gap-8">
      {/* Profile Photo */}
      <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border">
        <Image
          src="/images/absalem-aroon.jpg"
          alt="Absalem Aroon"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Name and Titles */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
          Absalem Aroon
        </h1>
        <div className="mt-4 space-y-1">
          <p className="text-muted text-base lg:text-lg">
            Blockchain & DeFi Researcher
          </p>
          <p className="text-muted text-base lg:text-lg">Web3 Strategist</p>
          <p className="text-muted text-base lg:text-lg">
            Founder, Absalex Labs
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>
    </aside>
  );
}
