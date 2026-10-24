import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { ProjectPartnerSteps } from './components/ProjectPartnerSteps';
import { ClientReviews } from './components/ClientReviews';
import { AssessmentEstimator } from './components/AssessmentEstimator';
import { CurvedCalloutBanner } from './components/CurvedCalloutBanner';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProposalReadinessModal } from './components/ProposalReadinessModal';

export const App: React.FC = () => {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('Standing Seam');

  const scrollToAssessment = () => {
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStyle = (styleName: string) => {
    setSelectedStyle(styleName);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Desktop Custom Cursor */}
      <CustomCursor />
      
      {/* Top Agency Proposal Ribbon */}
      <div className="bg-[#F3EFEA] border-b border-neutral-200 text-xs py-2 px-4 text-center text-neutral-600 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
        <span className="inline-flex items-center gap-1.5 font-semibold text-blue-700 uppercase tracking-wider text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          Proposed Website Concept
        </span>
        <span aria-hidden="true" className="text-neutral-400 hidden sm:inline">·</span>
        <span className="text-neutral-700">Created for <strong>Solid State Roofing</strong></span>
        <span aria-hidden="true" className="text-neutral-400 hidden sm:inline">·</span>
        <button
          onClick={() => setIsChecklistOpen(true)}
          className="text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
        >
          View Production Readiness Checklist
        </button>
      </div>

      {/* Top Bar Navigation (Clean, matching reference) */}
      <Navbar onRequestQuote={scrollToAssessment} />

      <main className="flex-1">
        {/* Section 1: Hero Section (with floating style picker and house photo) */}
        <Hero 
          onRequestQuote={scrollToAssessment}
          onSelectStyle={handleSelectStyle}
        />

        {/* Section 2: "Who We Are" (Statement, Roofer, Inspector & Performance Stats) */}
        <WhoWeAre onLearnMore={scrollToAssessment} />

        {/* Section 3 & 4: "Your Reliable Partner" & "Trusted Hands" (Partner cards + 3-step accordion) */}
        <ProjectPartnerSteps onRequestQuote={scrollToAssessment} />

        {/* Section 5: "What Our Clients Say About Us" (5-card layout with central feature card) */}
        <ClientReviews />

        {/* Section 6: Interactive Roof Scope Estimator & Consultation Request */}
        <AssessmentEstimator />

        {/* Section 7: Curved Sky-Blue Callout Banner ("Roof Care That Stands the Test of Time") */}
        <CurvedCalloutBanner onRequestQuote={scrollToAssessment} />

        {/* Section 8: Knowledge Base & FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Section 9: Midnight Dark Footer with Newsletter Signup */}
      <Footer 
        onOpenProductionChecklist={() => setIsChecklistOpen(true)}
        onRequestQuote={scrollToAssessment}
      />

      {/* Proposal Onboarding & Production Checklist Modal */}
      <ProposalReadinessModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

    </div>
  );
};

export default App;
