import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE, METAL_IMAGE, SLATE_IMAGE, SOLAR_IMAGE } from '../data/roofingData';

interface HeroProps {
  onRequestQuote: () => void;
  onSelectStyle: (styleName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onSelectStyle }) => {
  const [selectedSwatch, setSelectedSwatch] = useState<number>(0);
  const [activeTag, setActiveTag] = useState<string>('Metal');
  const [activePin, setActivePin] = useState<string | null>(null);

  const swatches = [
    { 
      name: 'Standing Seam', 
      img: METAL_IMAGE, 
      desc: 'Concealed fastener 24-Ga Galvalume with continuous thermal slide clips',
      spec: 'ASTM E1592 / Class 4'
    },
    { 
      name: 'Architectural Slate', 
      img: SLATE_IMAGE, 
      desc: 'Natural quarried S1 Welsh slate with hand-soldered copper valleys',
      spec: 'ASTM C406 / Class A'
    },
    { 
      name: 'Solar Integrated', 
      img: SOLAR_IMAGE, 
      desc: 'Direct-clamp non-penetrating photovoltaic architectural integration',
      spec: 'UL 2703 / High SRI'
    },
  ];

  return (
    <section className="relative pt-6 pb-16 lg:pt-8 lg:pb-20 overflow-hidden">
      
      {/* Background CAD-inspired precision grid and measurement ticks */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px, 96px 96px'
        }}
      />

      {/* Subtle warm ambient apricot/peach radial glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.65, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #FDE6D2 0%, #FAF8F5 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Line-by-Line Reveal Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Pill Eyebrow with Smooth Load Fade */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm text-xs font-semibold text-neutral-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Trusted Roofing Experts</span>
              <span className="text-[10px] font-mono text-neutral-400 font-normal ml-1">· ISO 9001 SPEC</span>
            </motion.div>

            {/* Line-by-Line Headline Reveal (Mask & Translate) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-neutral-900 leading-[1.12] tracking-tight">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  Smart Roofing for
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                  className="text-neutral-900"
                >
                  Modern Homes.
                </motion.div>
              </div>
            </h1>

            {/* Subtitle with Fade Up */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-md font-normal"
            >
              Our expert roofing services are designed to protect your home with architectural quality and precision craftsmanship.
            </motion.p>

            {/* Primary Action Button with Stagger & Spring */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
              className="mt-7"
            >
              <button
                onClick={onRequestQuote}
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Get Started Now</span>
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                  ↗
                </span>
              </button>
            </motion.div>

            {/* Floating Interactive "Modern Roof Style" Card with Micro-Interactions */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="mt-10 w-full max-w-md p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-900/5 transition-all duration-300 hover:shadow-2xl hover:border-neutral-300"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm font-bold text-neutral-900">
                    Modern Roof Style
                  </span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 font-semibold">
                    {swatches[selectedSwatch].spec}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-[11px] font-medium text-neutral-700">
                  <span className="text-blue-600 text-[10px] animate-pulse">●</span> 2:40 Guide
                </span>
              </div>

              {/* Material Swatch Selector */}
              <div className="mt-3.5 flex items-center gap-3">
                {swatches.map((swatch, idx) => (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() => {
                      setSelectedSwatch(idx);
                      onSelectStyle(swatch.name);
                    }}
                    className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      selectedSwatch === idx
                        ? 'border-blue-600 scale-105 shadow-md ring-2 ring-blue-600/20'
                        : 'border-transparent opacity-75 hover:opacity-100 hover:scale-[1.02]'
                    }`}
                    title={swatch.name}
                  >
                    <img
                      src={swatch.img}
                      alt={swatch.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-3 text-xs text-neutral-600 leading-relaxed min-h-[36px]">
                <strong className="text-neutral-900">{swatches[selectedSwatch].name}:</strong> {swatches[selectedSwatch].desc}.
              </div>

              {/* Interactive Simulator Tags */}
              <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center justify-between gap-1.5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  {['Suggest', 'Metal', 'Slate', 'Generate'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setActiveTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                        activeTag === tag
                          ? 'bg-neutral-900 text-white shadow-sm scale-105'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  Interactive Lab
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual with Scale Reveal, CAD Corner Ticks, and Hotspot Pulse */}
          <div className="lg:col-span-6 relative">
            
            {/* Technical Frame CAD Coordinate Line */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1 font-mono text-[10px] text-neutral-400">
              <span>LAT: 46.48° N</span>
              <span>·</span>
              <span>WIND CLASS 4</span>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group"
            >
              
              {/* Main Photo with Subtle Hover Zoom */}
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="Modern architectural home with dark standing seam metal roof and expansive glass"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Pin Hotspot 1 (With Interactive Tooltip) */}
              <div 
                className="absolute top-[38%] left-[45%] flex items-center gap-2 group/pin cursor-pointer z-20"
                onClick={() => setActivePin(activePin === 'seam' ? null : 'seam')}
                onMouseEnter={() => setActivePin('seam')}
                onMouseLeave={() => setActivePin(null)}
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform group-hover/pin:scale-110">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping absolute opacity-75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md text-[11px] font-medium text-white shadow-lg border border-white/20 whitespace-nowrap transition-all duration-200 group-hover/pin:bg-neutral-900 group-hover/pin:border-blue-400">
                  Solid State Steel Roofing
                </div>
                {activePin === 'seam' && (
                  <div className="absolute top-8 left-0 p-2.5 bg-neutral-900/95 backdrop-blur-md text-white rounded-xl shadow-xl border border-neutral-700 text-[11px] font-sans w-48 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <p className="font-bold text-blue-400">Mechanical Lock Seam</p>
                    <p className="text-neutral-300 text-[10px] mt-0.5">Concealed fasteners prevent thermal expansion tearing.</p>
                  </div>
                )}
              </div>

              {/* Pin Hotspot 2 (Ridge Cap) */}
              <div 
                className="absolute top-[22%] right-[28%] hidden sm:flex items-center gap-2 cursor-pointer group/pin2 z-20"
                onClick={() => setActivePin(activePin === 'ridge' ? null : 'ridge')}
                onMouseEnter={() => setActivePin('ridge')}
                onMouseLeave={() => setActivePin(null)}
              >
                <span className="w-4 h-4 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-transform group-hover/pin2:scale-110">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-neutral-800 shadow border border-neutral-200 transition-all duration-200 group-hover/pin2:border-blue-400">
                  Concealed Ridge Lock
                </span>
              </div>

              {/* Floating Social Proof Card with Spring Entrance */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl flex items-center gap-3 max-w-[280px] transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="flex -space-x-2 shrink-0">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-900 font-mono">4.9/5</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium block mt-0.5">
                    Based on 240+ Verified Inspections
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Certified Materials & Partner Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 pt-8 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-6 text-neutral-400"
        >
          <div className="flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>CERTIFIED ARCHITECTURAL STANDARDS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-8 sm:gap-12 text-sm font-bold tracking-tight text-neutral-500">
            <span className="hover:text-neutral-900 transition-colors duration-200 cursor-default">BORAL STEEL</span>
            <span className="hover:text-neutral-900 transition-colors duration-200 cursor-default">CARLISLE SYNTEC</span>
            <span className="hover:text-neutral-900 transition-colors duration-200 cursor-default">DREXEL METALS</span>
            <span className="hover:text-neutral-900 transition-colors duration-200 cursor-default">BERRIDGE ARCH</span>
            <span className="hover:text-neutral-900 transition-colors duration-200 cursor-default">GAF COMMERCIAL</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
