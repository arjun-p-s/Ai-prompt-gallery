"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Bookmark, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleCopy = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await navigator.clipboard.writeText(`${prompt.title}\n\n${prompt.description}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const handleSave = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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
      <Card 
        className="flex flex-col h-full bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[1.25rem] overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-secondary/60 hover:bg-secondary text-secondary-foreground font-medium rounded-full px-3 py-1 text-xs transition-colors">
            {prompt.category}
          </Badge>
          <button 
            onClick={handleSave}
            className="text-muted-foreground hover:text-primary transition-colors focus:outline-none z-10"
            aria-label={saved ? "Unsave prompt" : "Save prompt"}
            title="Save prompt"
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
          className="w-full justify-center rounded-xl bg-background hover:bg-secondary/40 border border-border/50 transition-all duration-300 group/btn z-10 relative"
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

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: "auto" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-background border border-border/50 shadow-2xl rounded-[1.5rem] overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-start p-6 border-b border-border/40 bg-muted/20 shrink-0">
                <Badge variant="secondary" className="bg-secondary/60 hover:bg-secondary text-secondary-foreground font-medium rounded-full px-4 py-1.5 text-sm transition-colors">
                  {prompt.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleSave}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none rounded-full hover:bg-muted"
                    aria-label={saved ? "Unsave prompt" : "Save prompt"}
                  >
                    <Bookmark className={`h-5 w-5 ${saved ? "fill-primary text-primary" : ""}`} />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded-full hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 mt-2">
                  {prompt.title}
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                  {prompt.description}
                </div>
              </div>
              <div className="p-6 border-t border-border/40 bg-muted/10 shrink-0 mt-auto">
                <Button 
                  className="w-full text-lg py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={handleCopy}
                  size="lg"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-foreground">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      <span>Copy Full Prompt</span>
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
