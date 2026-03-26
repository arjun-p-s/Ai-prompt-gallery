"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { PromptData } from "@/components/PromptCard";

const initialPrompts: PromptData[] = [
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

interface PromptContextType {
  prompts: PromptData[];
  addPrompt: (prompt: Omit<PromptData, "id">) => void;
}

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export function PromptProvider({ children }: { children: ReactNode }) {
  const [prompts, setPrompts] = useState<PromptData[]>(initialPrompts);

  const addPrompt = (prompt: Omit<PromptData, "id">) => {
    const newPrompt: PromptData = {
      ...prompt,
      id: Date.now().toString(),
    };
    setPrompts((prev) => [newPrompt, ...prev]);
  };

  return (
    <PromptContext.Provider value={{ prompts, addPrompt }}>
      {children}
    </PromptContext.Provider>
  );
}

export function usePrompts() {
  const context = useContext(PromptContext);
  if (context === undefined) {
    throw new Error("usePrompts must be used within a PromptProvider");
  }
  return context;
}
