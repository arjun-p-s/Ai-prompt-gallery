"use client";

import { useState } from "react";
import { PromptCard, PromptData } from "./PromptCard";
import { CategoryTabs } from "./CategoryTabs";
import { SearchSection } from "./Search";

const mockPrompts: PromptData[] = [
  {
    id: "1",
    title: "Generate React Component with Tailwind CSS",
    description: "Write a functional React component using TypeScript and style it exclusively with Tailwind CSS utility classes. Ensure the component is accessible and responsive.",
    category: "Coding",
  },
  {
    id: "2",
    title: "High-Converting Email Cold Outreach",
    description: "Create a persuasive cold email template for a B2B SaaS product targeting marketing executives. Focus on an attention-grabbing hook and a clear call-to-action.",
    category: "Marketing",
  },
  {
    id: "3",
    title: "Minimalist Brand Identity Concept",
    description: "Generate a concept for a minimalist brand identity for a modern coffee shop. Include suggestions for a color palette, typography, and logo styling.",
    category: "Design",
  },
  {
    id: "4",
    title: "SEO-Optimized Blog Post Introduction",
    description: "Write an engaging, SEO-optimized introduction for a blog post about the benefits of remote work. Include primary keywords naturally in the first paragraph.",
    category: "Content",
  },
  {
    id: "5",
    title: "Weekly Productivity Planner Framework",
    description: "Design a framework for a weekly productivity planner that incorporates time-blocking, priority matrix, and daily reflection sections.",
    category: "Productivity",
  },
  {
    id: "6",
    title: "Startup Pitch Deck Structure",
    description: "Outline an effective 10-slide pitch deck structure for an early-stage tech startup seeking seed funding. Detail the key points to cover on each slide.",
    category: "Business",
  },
  {
    id: "7",
    title: "Viral Twitter Thread Hook",
    description: "Write 3 variations of an engaging Twitter thread hook about artificial intelligence trends, designed to maximize retweets and replies.",
    category: "Social Media",
  },
  {
    id: "8",
    title: "Explain Complex Topic to a 5-Year-Old",
    description: "Explain the concept of quantum computing in simple, engaging terms that a 5-year-old child could easily understand, using relatable analogies.",
    category: "Learning",
  },
];

export function PromptGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrompts = mockPrompts.filter((prompt) => {
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
    const matchesSearch = 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SearchSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div id="categories" className="scroll-mt-20">
        <CategoryTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </div>
      
      <section id="explore" className="container mx-auto px-4 md:px-8 pb-24 scroll-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard key={prompt.id} prompt={prompt} index={index} />
          ))}
        </div>
        
        {filteredPrompts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground w-full">
            <p className="text-xl">No prompts found for this category.</p>
          </div>
        )}
        
        {filteredPrompts.length > 0 && (
          <div className="mt-16 text-center">
            <button className="rounded-full bg-secondary/50 hover:bg-secondary/80 text-foreground font-medium px-8 py-3 transition-colors border border-border/40 shadow-sm backdrop-blur-sm">
              Load More Prompts
            </button>
          </div>
        )}
      </section>
    </>
  );
}
