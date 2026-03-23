"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchSection({ searchQuery, onSearchChange }: SearchProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-3xl mx-auto px-4 -mt-8 relative z-10 mb-12"
    >
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <SearchIcon className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
        </div>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search prompts (e.g., 'React component', 'Blog post intro')..."
          className="w-full h-16 pl-14 pr-6 rounded-3xl border-2 border-border/60 bg-background/80 backdrop-blur-md shadow-lg placeholder:text-muted-foreground/70 text-lg focus-visible:ring-primary/40 focus-visible:border-primary transition-all duration-300 hover:shadow-xl hover:border-primary/40 outline-none"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
           <div className="hidden sm:flex items-center justify-center bg-secondary/60 text-muted-foreground border border-border/50 text-xs rounded-xl px-3 h-10 font-mono shadow-sm">
             ⌘ K
           </div>
        </div>
      </div>
    </motion.section>
  );
}
