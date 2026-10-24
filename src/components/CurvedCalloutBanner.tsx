import React from 'react';
import { motion } from 'motion/react';
import { CRAFTSMAN_IMAGE } from '../data/roofingData';

interface CurvedCalloutBannerProps {
  onRequestQuote: () => void;
}

export const CurvedCalloutBanner: React.FC<CurvedCalloutBannerProps> = ({ onRequestQuote }) => {
  return (
    <section className="py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Sky-Blue / Ice Curved Card (From Reference Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#E2F0FD] via-[#EDF6FF] to-[#DBEEFF] border border-[#BFDBFE] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm"
        >
          {/* Subtle blueprint grid watermark overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-xs font-semibold text-blue-900 mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="tracking-wide">Engineering Precision Guarantee</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] [text-wrap:balance]">
                Roof Care That Stands <br className="hidden sm:inline" />
                the Test of Time.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-700 max-w-lg leading-relaxed">
                All our roofing systems are engineered with certified Galvalume structural alloys, Welsh quarried slate, and robotically welded seams built for extreme continental climates.
              </p>

              {/* Action Button */}
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-3.5 pl-6 pr-3 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md hover:shadow-xl cursor-pointer group"
                >
                  <span>Request Assessment Consultation</span>
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="mt-9 pt-6 border-t border-blue-200/70 flex flex-wrap items-center gap-6 text-xs text-neutral-800 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span>Concealed Fasteners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span>Class 4 Hail Resistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                  <span>100% Non-Combustible</span>
                </div>
              </div>

            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] group relative"
              >
                <img
                  src={CRAFTSMAN_IMAGE}
                  alt="Master roofer inspecting installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating CAD Spec Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[11px] text-neutral-300">Tolerance: ±0.5mm</span>
                  </div>
                  <span className="font-mono text-[11px] text-blue-400 font-semibold">ISO 9001 Certified</span>
                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

