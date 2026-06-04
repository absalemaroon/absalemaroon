"use client";

import { useState } from "react";
import { ExternalLink, X, Calendar, Hash, CheckCircle } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    name: "Blockchain Security Fundamentals",
    issuer: "Blockchain Training Alliance",
    date: "January 2024",
    credentialId: "BSF-2024-001",
    description:
      "Comprehensive certification covering blockchain security principles, smart contract vulnerabilities, and secure development practices.",
    verificationUrl: "#",
    thumbnail: "/images/certificates/blockchain-security.jpg",
  },
  {
    id: 2,
    name: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    date: "February 2024",
    credentialId: "CED-2024-042",
    description:
      "Professional certification demonstrating proficiency in Ethereum development, including Solidity, EVM internals, and dApp architecture.",
    verificationUrl: "#",
    thumbnail: "/images/certificates/ethereum-developer.jpg",
  },
  {
    id: 3,
    name: "DeFi Protocol Analysis",
    issuer: "DeFi Safety Alliance",
    date: "November 2023",
    credentialId: "DPA-2023-187",
    description:
      "Specialized certification in analyzing decentralized finance protocols, including risk assessment, economic modeling, and governance analysis.",
    verificationUrl: "#",
    thumbnail: "/images/certificates/defi-analysis.jpg",
  },
  {
    id: 4,
    name: "Cybersecurity Professional",
    issuer: "CompTIA",
    date: "September 2023",
    credentialId: "CSP-2023-994",
    description:
      "Industry-recognized certification covering network security, cryptography, identity management, and security operations.",
    verificationUrl: "#",
    thumbnail: "/images/certificates/cybersecurity.jpg",
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
            className="rounded-xl border border-border bg-card hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Thumbnail Image */}
            <div className="relative w-full h-40 bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-400">
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">{cert.issuer}</p>
                </div>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-foreground leading-tight">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Issuer */}
              <p className="text-sm text-muted mb-3">{cert.issuer}</p>

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

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed line-clamp-2">
                {cert.description}
              </p>
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
            {/* Modal Header with Close */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Certificate Details</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Thumbnail */}
            <div className="relative w-full h-48 bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-400">
                      {selectedCert.issuer.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{selectedCert.issuer}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Certificate Title */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {selectedCert.name}
                </h3>
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Issuing Organization */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
                  Issuing Organization
                </h4>
                <p className="text-foreground">{selectedCert.issuer}</p>
              </div>

              {/* Issue Date */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
                  Issue Date
                </h4>
                <p className="text-foreground">{selectedCert.date}</p>
              </div>

              {/* Credential ID */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
                  Credential ID
                </h4>
                <p className="text-foreground font-mono">{selectedCert.credentialId}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
                  Description
                </h4>
                <p className="text-foreground leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Verification URL */}
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
