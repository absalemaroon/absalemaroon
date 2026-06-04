"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Twitter, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "contact@absalemaroon.com",
    href: "mailto:contact@absalemaroon.com",
    icon: Mail,
    description: "For research inquiries and collaborations",
  },
  {
    name: "Twitter / X",
    value: "@absalemaroon",
    href: "https://twitter.com/absalemaroon",
    icon: Twitter,
    description: "Follow for updates and thoughts",
  },
  {
    name: "GitHub",
    value: "absalemaroon",
    href: "https://github.com/absalemaroon",
    icon: Github,
    description: "Open source projects and code",
  },
  {
    name: "LinkedIn",
    value: "Absalem Aroon",
    href: "https://linkedin.com/in/absalemaroon",
    icon: Linkedin,
    description: "Professional connections",
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Contact
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Open to research collaborations, speaking engagements, and advisory 
          opportunities. Feel free to reach out through any channel below.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground mb-4">
            Connect
          </h3>
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="block"
            >
              <Card className="group">
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="p-2.5 bg-accent rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-card-foreground">
                      {link.name}
                    </p>
                    <p className="text-sm text-muted truncate">{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-4">
            Send a Message
          </h3>
          {submitted ? (
            <Card hover={false} className="bg-accent/50 border-border/50">
              <CardContent className="py-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-foreground text-background flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-foreground mb-2">
                  Message Sent
                </h4>
                <p className="text-sm text-muted">
                  Thank you for reaching out. I will respond as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-foreground underline underline-offset-4 hover:text-muted transition-colors"
                >
                  Send another message
                </button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2.5 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
    </div>
  );
}
