"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";

// Verified Badge Component
function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 22 22"
      aria-label="Verified account"
      className="w-5 h-5 md:w-6 md:h-6 text-[#1d9bf0]"
      fill="currentColor"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/AbsalemAroon",
    icon: Twitter,
    handle: "@AbsalemAroon",
  },
  {
    name: "GitHub",
    href: "https://github.com/AbsalemAroon",
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

export function ProfileHeader() {
  return (
    <div className="w-full">
      {/* Banner Image with RESEARCH text */}
      <div className="relative w-full h-36 md:h-48 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Research Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Section */}
      <div className="relative px-4 pb-4">
        {/* Profile Photo - overlapping banner */}
        <div className="relative -mt-16 md:-mt-20 mb-4">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background bg-background">
            <Image
              src="/images/absalem-aroon.jpg"
              alt="Absalem Aroon"
              width={144}
              height={144}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name and Verified Badge */}
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Absalem Aroon
          </h1>
          <VerifiedBadge />
        </div>

        {/* Handle */}
        <p className="text-muted text-sm md:text-base mb-2">
          @AbsalemAroon
        </p>

        {/* Bio */}
        <div className="mb-3">
          <span className="text-foreground font-medium">RESEARCH</span>
          <Link 
            href="https://absalexlabs.vercel.app" 
            target="_blank"
            className="text-[#1d9bf0] hover:underline ml-2"
          >
            @AbsalexLabs
          </Link>
        </div>

        {/* Info Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted text-sm mb-3">
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            Researcher
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Web3 Ecosystem
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Joined January 2026
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm mb-4">
          <span>
            <span className="font-bold text-foreground">12</span>
            <span className="text-muted ml-1">Research Papers</span>
          </span>
          <span>
            <span className="font-bold text-foreground">5</span>
            <span className="text-muted ml-1">Projects</span>
          </span>
          <span>
            <span className="font-bold text-foreground">8</span>
            <span className="text-muted ml-1">Certificates</span>
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#1d9bf0] transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
          <Link
            href="https://absalexlabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#1d9bf0] hover:underline text-sm ml-2"
          >
            <ExternalLink className="w-4 h-4" />
            absalexlabs.vercel.app
          </Link>
        </div>
      </div>
    </div>
  );
}
