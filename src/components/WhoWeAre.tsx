import React from 'react';
import { motion } from 'motion/react';
import { CRAFTSMAN_IMAGE, INSPECTOR_IMAGE } from '../data/roofingData';
import { AnimatedCounter } from './AnimatedCounter';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 bg-white border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Eyebrow and "Read More ↗" Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-between gap-4 pb-8 border-b border-neutral-100"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Who We Are</span>
          </div>

          <button
            onClick={onLearnMore}
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Read More</span>
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </motion.div>

        {/* Narrative and Image Composition (Alternating Entrance from Left and Right) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Roofer Photo & Stat (Slides from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-md aspect-square bg-neutral-100 group">
              <img
                src={CRAFTSMAN_IMAGE}
                alt="Skilled roofing craftsman securing modern tiles on roof deck"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-2">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 flex items-baseline gap-1">
                <AnimatedCounter value={100} suffix="K+" duration={1600} />
                <span className="text-base font-normal text-neutral-600">Sq Ft</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">
                Engineered roof surface protected across regional residential and commercial estates.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Statement, Inspector & Animated Stat Counters (Slides from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-neutral-900 leading-snug tracking-tight">
              At Solid State Roofing, we specialize in reliable standing seam installations, slate craft, and precision commercial envelopes with high-grade materials & master craftsmanship.
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              {/* Inspector photo */}
              <div className="sm:col-span-5 rounded-3xl overflow-hidden border border-neutral-200 shadow-md aspect-[4/3] bg-neutral-100 group">
                <img
                  src={INSPECTOR_IMAGE}
                  alt="Certified roof surveyor with safety vest and diagnostic tablet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Explanatory text & Animated Counter Percentages */}
              <div className="sm:col-span-7 flex flex-col justify-between space-y-6">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Trust our certified specialists to keep your home safe, structurally sound, and well-protected — engineered to endure extreme weather for decades.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-100">
                  <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 block">
                      <AnimatedCounter value={92} suffix="%" duration={1600} />
                    </span>
                    <span className="block text-xs font-medium text-neutral-500 mt-1">
                      Solar Thermal Deflection
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 block">
                      <AnimatedCounter value={98} suffix="%" duration={1600} />
                    </span>
                    <span className="block text-xs font-medium text-neutral-500 mt-1">
                      Hurricane Wind Resistance
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
