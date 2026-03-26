"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, X, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrompts } from "@/lib/PromptContext";
import { categories } from "@/components/CategoryTabs";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addPrompt } = usePrompts();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Design");

  const availableCategories = categories.filter(c => c !== "All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !category) return;
    
    addPrompt({
      title,
      description,
      category,
    });
    
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
    setCategory("Design");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">
                PromptGallery
              </span>
            </Link>
          </div>
          
          <div className="flex flex-1 items-center justify-end space-x-6">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Home
              </Link>
              <Link href="/#categories" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Categories
              </Link>
              <Link href="/#explore" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Explore
              </Link>
              <Link href="/about" className="hidden transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="default" 
                className="rounded-full px-6 shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Submit Prompt
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
              className="relative w-full max-w-lg bg-background border border-border/50 shadow-2xl rounded-[1.5rem] overflow-hidden flex flex-col z-[101]"
            >
              <div className="flex justify-between items-center p-6 border-b border-border/40 bg-muted/20">
                <h2 className="text-xl font-bold">Submit New Prompt</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Heading</label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="E.g., CSS Button Animation"
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">Category</label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    {availableCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Prompt</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write your detailed prompt here..."
                    rows={5}
                    className="w-full flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full text-md py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                  size="lg"
                >
                  Save Prompt
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
