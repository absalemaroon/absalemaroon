"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardLink,
  CardMeta,
  Badge,
} from "@/components/ui/card";
import { Search } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Decentralized Identity",
    summary:
      "Exploring how self-sovereign identity systems are reshaping digital authentication and privacy in the Web3 era.",
    category: "Web3",
    date: "March 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Understanding MEV in DeFi Protocols",
    summary:
      "A comprehensive look at Maximal Extractable Value, its implications for users, and strategies for mitigation.",
    category: "DeFi",
    date: "February 2024",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Zero-Knowledge Proofs: Applications Beyond Privacy",
    summary:
      "How ZK technology is enabling new use cases in scalability, compliance, and decentralized verification.",
    category: "Cryptography",
    date: "January 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Security Economics of Layer 2 Solutions",
    summary:
      "Analyzing the economic incentives and security assumptions underlying rollup and state channel architectures.",
    category: "Security",
    date: "December 2023",
    readTime: "15 min read",
  },
];

const categories = ["All", "Security", "DeFi", "Web3", "Cryptography"];

export function WritingSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Writing
        </h2>
        <div className="mt-1 w-12 h-0.5 bg-foreground" />
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Essays, analysis, and long-form writing on blockchain technology, 
          decentralized systems, and the future of Web3.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardMeta className="mb-2">
                <Badge variant="outline">{article.category}</Badge>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </CardMeta>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{article.summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardLink href="#">Read Article</CardLink>
            </CardFooter>
          </Card>
        ))}

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
