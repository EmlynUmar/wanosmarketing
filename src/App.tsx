import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BrandsTickerSection } from './sections/BrandsTickerSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProofShowcaseSection } from './sections/ProofShowcaseSection';
import { CtaSection } from './sections/CtaSection';
import { Footer } from './components/Footer';
import { ProofModal } from './components/ProofModal';
import { BookingModal } from './components/BookingModal';
import { ToastContainer } from './components/Toast';
import { AdminLayout } from './dashboard/AdminLayout';

export const MainApp: React.FC = () => {
  const { isAdmin } = useApp();

  if (isAdmin) {
    return (
      <>
        <AdminLayout />
        <ProofModal />
        <BookingModal />
        <ToastContainer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandsTickerSection />
        <ServicesSection />
        <ProofShowcaseSection />
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
