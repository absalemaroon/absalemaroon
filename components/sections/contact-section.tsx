"use client";

import { useState } from "react";
import { Mail, Twitter, Github, Linkedin, Send, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "contact@absalemaroon.com",
    href: "mailto:contact@absalemaroon.com",
    icon: Mail,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
  {
    name: "Twitter / X",
    value: "@AbsalemAroon",
    href: "https://twitter.com/AbsalemAroon",
    icon: Twitter,
    color: "text-[#1d9bf0]",
    bgColor: "bg-[#1d9bf0]/10",
  },
  {
    name: "GitHub",
    value: "AbsalemAroon",
    href: "https://github.com/AbsalemAroon",
    icon: Github,
    color: "text-foreground",
    bgColor: "bg-white/10",
  },
  {
    name: "LinkedIn",
    value: "Absalem Aroon",
    href: "https://linkedin.com/in/absalemaroon",
    icon: Linkedin,
    color: "text-[#0a66c2]",
    bgColor: "bg-[#0a66c2]/10",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="divide-y divide-border">
      {/* Connect Section */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1">Connect</h3>
        <p className="text-sm text-muted mb-4">
          Open to research collaborations, speaking engagements, and advisory opportunities.
        </p>
        
        <div className="space-y-2">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-white/[0.03] transition-colors group"
            >
              <div className={`p-2 rounded-full ${link.bgColor}`}>
                <link.icon className={`w-5 h-5 ${link.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{link.name}</p>
                <p className="text-sm text-muted truncate">{link.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Message Form Section */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1">Send a Message</h3>
        <p className="text-sm text-muted mb-4">
          Have a question or want to collaborate? Drop me a message.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-border bg-emerald-500/5 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Send className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-foreground mb-1">Message Sent</h4>
            <p className="text-sm text-muted mb-4">
              Thank you for reaching out. I&apos;ll respond as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#1d9bf0] hover:underline text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-[#1d9bf0] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-[#1d9bf0] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                required
                className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-[#1d9bf0] transition-colors"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-[#1d9bf0] transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-[#1d9bf0] text-white py-3 rounded-full font-bold text-sm hover:bg-[#1a8cd8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
