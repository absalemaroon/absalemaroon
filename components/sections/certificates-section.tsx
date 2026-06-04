"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardMeta,
  Badge,
} from "@/components/ui/card";
import { Award, ExternalLink, X } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Blockchain Security Fundamentals",
    issuer: "Blockchain Training Alliance",
    date: "2024",
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
    date: "2024",
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
    date: "2023",
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
    date: "2023",
    credentialId: "CSP-2023-994",
    description:
      "Industry-recognized certification covering network security, cryptography, identity management, and security operations.",
    skills: [
      "Network Security",
      "Incident Response",
      "Security Operations",
    ],
    verificationUrl: "#",
  },
];

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(
    null
  );

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Certificates
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Professional certifications and credentials demonstrating expertise in 
          blockchain security, development, and cybersecurity.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-accent rounded-lg">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <CardTitle className="mt-4">{cert.name}</CardTitle>
              <CardMeta className="mt-1">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </CardMeta>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-accent rounded-xl">
                  <Award className="w-8 h-8 text-foreground" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-1">
                {selectedCert.name}
              </h3>
              <p className="text-muted text-sm mb-4">
                Issued by {selectedCert.issuer}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    Description
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      Date Earned
                    </h4>
                    <p className="text-sm text-muted">{selectedCert.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      Credential ID
                    </h4>
                    <p className="text-sm text-muted font-mono">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
