import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLAR_IMAGE, INSPECTOR_IMAGE, CRAFTSMAN_IMAGE } from '../data/roofingData';
import { AnimatedCounter } from './AnimatedCounter';

interface ProjectPartnerStepsProps {
  onRequestQuote: () => void;
}

export const ProjectPartnerSteps: React.FC<ProjectPartnerStepsProps> = ({ onRequestQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  const steps = [
    {
      num: '01',
      title: 'Book Your Service',
      description: 'From preliminary drone inspection to scheduling, we ensure a seamless and transparent onboarding experience with zero surprise costs.',
      thumbnail: INSPECTOR_IMAGE,
    },
    {
      num: '02',
      title: 'Get a Free Assessment',
      description: 'Our senior architectural estimator performs structural rafter load audits, infrared moisture diagnostics, and slope calculations.',
      thumbnail: SOLAR_IMAGE,
    },
    {
      num: '03',
      title: 'We Get to Work',
      description: 'Certified craftsman installation with continuous safety oversight and site containment protocol from initial staging to final quality certificate.',
      thumbnail: CRAFTSMAN_IMAGE,
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Sub-Section 1: "Your Reliable Partner for Every Project" */}
        <div>
          {/* Header row with Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Your Reliable Partner <br />
                for Every Project.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We believe true excellence lies in the details. From personalized scope consultations to lifetime roof durability.
              </p>
              <button
                onClick={onRequestQuote}
                className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-semibold text-neutral-800 bg-white border border-neutral-200/90 hover:bg-neutral-50 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm hover:scale-[1.02]"
              >
                <span>Get Free Quote</span>
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>
          </motion.div>

          {/* 2 Featured Visual Cards (Alternating Left & Right Entrance) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Solar & Metal Aerial (Enters from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200 bg-white group aspect-[16/10] transition-shadow duration-300"
            >
              <img
                src={SOLAR_IMAGE}
                alt="Architectural roof with solar panel integration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-white/60">
                <span className="font-display text-xl font-extrabold text-neutral-900 block font-mono">
                  <AnimatedCounter value={825} suffix="+" duration={1600} />
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  Engineered Project Audits
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>100% Non-Combustible Class A</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-300">
                  Precision Engineering
                </span>
              </div>
            </motion.div>

            {/* Card 2: Inspector Video Preview (Enters from Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200 bg-white group aspect-[16/10] transition-shadow duration-300"
            >
              <img
                src={INSPECTOR_IMAGE}
                alt="Inspector reviewing residential roof condition"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

              {/* Play Button Icon with Pulse Effect */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 hover:bg-white text-blue-600 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group-hover:ring-4 group-hover:ring-white/40"
                aria-label="Play inspection overview video"
              >
                <svg className="w-7 h-7 ml-1 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-neutral-900/85 backdrop-blur-md border border-neutral-700/60 text-white flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold font-mono">
                    <AnimatedCounter value={90} suffix="%" duration={1600} />
                  </span>
                  <span className="text-[11px] text-neutral-300 max-w-[200px] leading-tight">
                    Energy-efficient thermal barriers installed for every property.
                  </span>
                </div>
                <span className="text-xs text-blue-400 font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                  Watch Process →
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Sub-Section 2: "Trusted Hands for Your Home's Protection" */}
        <div className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Roofer on Ridge photo (Enters from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-white aspect-[4/3] sm:aspect-square group"
            >
              <img
                src={CRAFTSMAN_IMAGE}
                alt="Roofer executing precision nail fastening"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Right Column: Step-by-Step Interactive Accordion (Enters from Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 self-start mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>How It Works</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight [text-wrap:balance]">
                Trusted Hands for Your Home's Protection.
              </h3>

              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                We care for your property the way you would — with honesty, dedication, and an installation that starts with a strong, dependable roof foundation.
              </p>

              {/* Accordion Steps with AnimatePresence */}
              <div className="mt-8 space-y-3.5">
                {steps.map((step, idx) => {
                  const isOpen = activeStep === idx;
                  return (
                    <div
                      key={step.num}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isOpen 
                          ? 'bg-white border-neutral-300 shadow-md ring-1 ring-blue-600/10' 
                          : 'bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300'
                      }`}
                      onClick={() => setActiveStep(idx)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-full transition-colors ${
                            isOpen ? 'bg-blue-600 text-white shadow-sm' : 'bg-neutral-100 text-neutral-600'
                          }`}>
                            {step.num}
                          </span>
                          <span className="font-display text-base font-bold text-neutral-900">
                            {step.title}
                          </span>
                        </div>
                        <span className={`text-sm font-bold text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-90 text-blue-600' : ''}`}>
                          ›
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                              <p className="text-xs text-neutral-600 leading-relaxed flex-1">
                                {step.description}
                              </p>
                              <div className="w-16 h-16 rounded-xl overflow-hidden border border-neutral-200 shrink-0 shadow-sm">
                                <img
                                  src={step.thumbnail}
                                  alt={step.title}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </motion.div>

          </div>
        </div>

      </div>

      {/* Video Preview Modal with Smooth Scale Animation */}
      <AnimatePresence>
        {videoModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl bg-white rounded-3xl p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <span className="font-display text-base font-bold text-neutral-900">
                  Inspection & Craftsmanship Walkthrough
                </span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 aspect-video rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center relative">
                <img
                  src={INSPECTOR_IMAGE}
                  alt="Walkthrough"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute text-center p-4 text-white">
                  <span className="text-xs uppercase tracking-widest block font-mono text-blue-400 mb-1">
                    Solid State Field Standard
                  </span>
                  <p className="text-sm font-semibold">
                    Comprehensive 40-Point Deck & Moisture Inspection Video
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
