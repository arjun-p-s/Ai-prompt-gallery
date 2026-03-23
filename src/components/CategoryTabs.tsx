"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export const categories = [
  "All",
  "Design",
  "Coding",
  "Marketing",
  "Content",
  "Productivity",
  "Business",
  "Social Media",
  "Learning",
];

interface CategoryTabsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full py-6 mb-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 border backdrop-blur-sm",
                  isActive
                    ? "text-primary-foreground border-transparent shadow-md hover:shadow-lg"
                    : "bg-background/50 text-foreground/80 border-border/60 hover:bg-secondary/70 hover:text-foreground hover:border-primary/40 hover:shadow-sm"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 z-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
