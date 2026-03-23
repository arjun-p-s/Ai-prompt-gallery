"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Bookmark, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface PromptData {
  id: string;
  title: string;
  description: string;
  category: string;
  author?: string;
}

interface PromptCardProps {
  prompt: PromptData;
  index?: number;
}

export function PromptCard({ prompt, index = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${prompt.title}\n\n${prompt.description}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[1.25rem] overflow-hidden group">
        <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-secondary/60 hover:bg-secondary text-secondary-foreground font-medium rounded-full px-3 py-1 text-xs transition-colors">
            {prompt.category}
          </Badge>
          <button 
            onClick={handleSave}
            className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label={saved ? "Unsave prompt" : "Save prompt"}
          >
            <Bookmark className={`h-5 w-5 ${saved ? "fill-primary text-primary" : ""}`} />
          </button>
        </div>
        <CardTitle className="text-xl font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {prompt.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground line-clamp-3 text-base">
          {prompt.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-border/40 mt-auto bg-muted/20">
        <Button 
          variant="ghost" 
          className="w-full justify-center rounded-xl bg-background hover:bg-secondary/40 border border-border/50 transition-all duration-300 group/btn"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
              <span className="font-medium text-muted-foreground group-hover/btn:text-foreground transition-colors">Copy Prompt</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
  );
}
