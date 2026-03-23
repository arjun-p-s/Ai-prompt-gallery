import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryTabs } from "@/components/CategoryTabs";
import { PromptGallery } from "@/components/PromptGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-start">
        <Hero />
        <PromptGallery />
      </main>
      
      <footer className="w-full border-t border-border/40 py-8 bg-background/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 md:px-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} PromptGallery. Designed with minimal elegance.</p>
        </div>
      </footer>
    </div>
  );
}
