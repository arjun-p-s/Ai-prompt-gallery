import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
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
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/#categories"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Categories
            </Link>
            <Link
              href="/#explore"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="hidden transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="default" className="rounded-full px-6 shadow-sm hover:shadow-md transition-all duration-300">
              Submit Prompt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
