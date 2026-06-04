"use client";

import { useState } from "react";
import { Award, ExternalLink, X, Calendar, Hash, CheckCircle } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Blockchain Security Fundamentals",
    issuer: "Blockchain Training Alliance",
    date: "January 2024",
    credentialId: "BSF-2024-001",
    description:
      "Comprehensive certification covering blockchain security principles, smart contract vulnerabilities, and secure development practices.",
    skills: ["Smart Contract Security", "Cryptography", "Threat Modeling"],
    verificationUrl: "#",
  },
  {
    id: 2,
    name: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    date: "February 2024",
    credentialId: "CED-2024-042",
    description:
      "Professional certification demonstrating proficiency in Ethereum development, including Solidity, EVM internals, and dApp architecture.",
    skills: ["Solidity", "EVM", "dApp Development", "Testing"],
    verificationUrl: "#",
  },
  {
    id: 3,
    name: "DeFi Protocol Analysis",
    issuer: "DeFi Safety Alliance",
    date: "November 2023",
    credentialId: "DPA-2023-187",
    description:
      "Specialized certification in analyzing decentralized finance protocols, including risk assessment, economic modeling, and governance analysis.",
    skills: ["Risk Analysis", "Economic Modeling", "Protocol Review"],
    verificationUrl: "#",
  },
  {
    id: 4,
    name: "Cybersecurity Professional",
    issuer: "CompTIA",
    date: "September 2023",
    credentialId: "CSP-2023-994",
    description:
      "Industry-recognized certification covering network security, cryptography, identity management, and security operations.",
    skills: ["Network Security", "Incident Response", "Security Operations"],
    verificationUrl: "#",
  },
];

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="p-4 md:p-6">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Certifications</h2>
        <p className="text-muted text-sm">
          Professional credentials and verified certifications in blockchain technology, 
          security, and decentralized systems.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl border border-border bg-card hover:border-zinc-700 transition-colors cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex items-start gap-4">
              {/* Certificate Icon */}
              <div className="flex-shrink-0 p-3 rounded-xl bg-amber-500/10">
                <Award className="w-6 h-6 text-amber-400" />
              </div>

              {/* Certificate Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-3">
                  {cert.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" />
                    {cert.credentialId}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-amber-500/15 rounded-xl">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-zinc-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Title */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {selectedCert.name}
                  </h3>
                  <p className="text-muted">
                    Issued by {selectedCert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Description
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-zinc-900">
                  <h4 className="text-xs font-medium text-muted mb-1">
                    Date Earned
                  </h4>
                  <p className="text-sm text-foreground">{selectedCert.date}</p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900">
                  <h4 className="text-xs font-medium text-muted mb-1">
                    Credential ID
                  </h4>
                  <p className="text-sm text-foreground font-mono">
                    {selectedCert.credentialId}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Skills Demonstrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-foreground text-background rounded-xl text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
