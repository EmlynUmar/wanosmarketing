import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BrandsTickerSection } from './sections/BrandsTickerSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProofShowcaseSection } from './sections/ProofShowcaseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CtaSection } from './sections/CtaSection';
import { Footer } from './components/Footer';
import { ProofModal } from './components/ProofModal';
import { BookingModal } from './components/BookingModal';
import { ToastContainer } from './components/Toast';

export const MainApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandsTickerSection />
        <ServicesSection />
        <ProofShowcaseSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Global Modals & Overlays */}
      <ProofModal />
      <BookingModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return <MainApp />;
}
