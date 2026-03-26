"use client";

import { useState } from "react";
import { PromptCard } from "./PromptCard";
import { CategoryTabs } from "./CategoryTabs";
import { SearchSection } from "./Search";
import { usePrompts } from "@/lib/PromptContext";

export function PromptGallery() {
  const { prompts } = usePrompts();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrompts = prompts.filter((prompt) => {
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
