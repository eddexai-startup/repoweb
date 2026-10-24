import React from 'react';

interface ClosingCTAProps {
  onRequestQuote: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0D1219] via-[#101722] to-[#0B0F14] overflow-hidden border-b border-slate-800/80">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C67A3C] mb-4">
          <span>Generational Protection</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Precision Installation</span>
        </div>

        {/* Closing Dominant Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
          Protect What Matters Most <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#C67A3C]">
            From the Ground Up.
          </span>
        </h2>

        {/* Narrative */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you are designing a custom architectural residence, safeguarding a commercial asset, or restoring historic slate, Solid State Roofing delivers uncompromised structural permanence.
        </p>

        {/* Prominent Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#C67A3C] hover:bg-[#D48847] active:bg-[#B46B31] rounded-lg shadow-xl shadow-[#C67A3C]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C67A3C]"
          >
            Request Your Architectural Assessment
          </button>
        </div>

        {/* Quiet assurance points */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C67A3C]" />
            Itemized engineering scope
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C67A3C]" />
            Drone optical inspection
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C67A3C]" />
            Zero-obligation preliminary survey
          </span>
        </div>

      </div>
    </section>
  );
};
