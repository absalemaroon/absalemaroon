"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, X, MoreHorizontal, MessageCircle, Repeat2, Heart, Share, Bookmark, Calendar, Hash } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Blockchain Security Fundamentals",
    issuer: "Blockchain Training Alliance",
    date: "Jan 2024",
    credentialId: "BSF-2024-001",
    description:
      "Comprehensive certification covering blockchain security principles, smart contract vulnerabilities, and secure development practices.",
    skills: ["Smart Contract Security", "Cryptography", "Threat Modeling"],
    verificationUrl: "#",
    engagement: { comments: 6, reposts: 18, likes: 124 },
  },
  {
    id: 2,
    name: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    date: "Feb 2024",
    credentialId: "CED-2024-042",
    description:
      "Professional certification demonstrating proficiency in Ethereum development, including Solidity, EVM internals, and dApp architecture.",
    skills: ["Solidity", "EVM", "dApp Development", "Testing"],
    verificationUrl: "#",
    engagement: { comments: 12, reposts: 34, likes: 189 },
  },
  {
    id: 3,
    name: "DeFi Protocol Analysis",
    issuer: "DeFi Safety Alliance",
    date: "Nov 2023",
    credentialId: "DPA-2023-187",
    description:
      "Specialized certification in analyzing decentralized finance protocols, including risk assessment, economic modeling, and governance analysis.",
    skills: ["Risk Analysis", "Economic Modeling", "Protocol Review"],
    verificationUrl: "#",
    engagement: { comments: 8, reposts: 22, likes: 145 },
  },
  {
    id: 4,
    name: "Cybersecurity Professional",
    issuer: "CompTIA",
    date: "Sep 2023",
    credentialId: "CSP-2023-994",
    description:
      "Industry-recognized certification covering network security, cryptography, identity management, and security operations.",
    skills: ["Network Security", "Incident Response", "Security Operations"],
    verificationUrl: "#",
    engagement: { comments: 4, reposts: 15, likes: 98 },
  },
];

function CertificateCard({ 
  cert, 
  onViewDetails 
}: { 
  cert: typeof certificates[0]; 
  onViewDetails: () => void;
}) {
  return (
    <article className="p-4 hover:bg-white/[0.03] transition-colors cursor-pointer border-b border-border" onClick={onViewDetails}>
      <div className="flex gap-3">
        {/* Profile avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/absalem-aroon.jpg"
              alt="Absalem Aroon"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-sm truncate">
              <span className="font-bold text-foreground truncate">Absalem Aroon</span>
              <svg viewBox="0 0 22 22" className="w-4 h-4 text-[#1d9bf0] flex-shrink-0" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
              <span className="text-muted truncate">@AbsalemAroon</span>
              <span className="text-muted">·</span>
              <span className="text-muted">{cert.date}</span>
            </div>
            <button 
              className="p-1.5 -mr-1.5 rounded-full hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] text-muted transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-1">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-muted uppercase tracking-wide">New Certification</span>
            </div>
            <h3 className="font-bold text-foreground text-[15px] leading-tight mb-1">
              {cert.name}
            </h3>
            <p className="text-[15px] text-foreground leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* Certificate Card Preview */}
          <div className="mt-3 rounded-xl border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{cert.name}</p>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </span>
                <span className="flex items-center gap-1">
                  <Hash className="w-3 h-3" />
                  {cert.credentialId}
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {cert.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#1d9bf0]/10 text-[#1d9bf0]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Engagement Actions */}
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button 
              className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs">{cert.engagement.comments}</span>
            </button>
            <button 
              className="flex items-center gap-1.5 text-muted hover:text-emerald-400 transition-colors group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full group-hover:bg-emerald-400/10 transition-colors">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-xs">{cert.engagement.reposts}</span>
            </button>
            <button 
              className="flex items-center gap-1.5 text-muted hover:text-rose-400 transition-colors group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full group-hover:bg-rose-400/10 transition-colors">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xs">{cert.engagement.likes}</span>
            </button>
            <button 
              className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <Bookmark className="w-4 h-4" />
              </div>
            </button>
            <button 
              className="flex items-center gap-1.5 text-muted hover:text-[#1d9bf0] transition-colors group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 transition-colors">
                <Share className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <div>
      {/* Certificate Cards */}
      {certificates.map((cert) => (
        <CertificateCard 
          key={cert.id} 
          cert={cert} 
          onViewDetails={() => setSelectedCert(cert)}
        />
      ))}

      {/* Show More */}
      <div className="p-4 text-center">
        <button className="text-[#1d9bf0] hover:underline text-[15px]">
          Show more certificates
        </button>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">
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
                      <span 
                        key={skill} 
                        className="px-3 py-1 text-xs rounded-full border border-border text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 bg-[#1d9bf0] text-white rounded-full text-sm font-bold hover:bg-[#1a8cd8] transition-colors"
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
