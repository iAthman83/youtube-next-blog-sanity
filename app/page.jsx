import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-8 flex-col">
      <HeroSection />
      <BlogSection />
    </main>
  );
}
