import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import IndustryProblems from '@/components/home/IndustryProblems';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Industries from '@/components/home/Industries';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <IndustryProblems />
        <Features />
        <HowItWorks />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
