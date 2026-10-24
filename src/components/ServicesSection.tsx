import React from 'react';
import { CORE_SERVICES } from '../data/roofingData';

interface ServicesSectionProps {
  onServiceSelect: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0F14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C67A3C] mb-3">
              <span>Capabilities</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">Field Craftsmanship</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Core Roofing Services.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Each service is structured around precise engineering, high-grade alloys, and transparent scope definitions.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            04 Specialized Disciplines
          </div>
        </div>

        {/* Differentiated Asymmetric Service Layouts */}
        <div className="mt-14 space-y-16">
          
          {/* Service 01: Standing Seam Architectural Metal (Hero Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 bg-[#0F151E] rounded-xl border border-slate-800 hover:border-slate-700/80 transition-colors">
            <div className="lg:col-span-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group aspect-[4/3]">
              <img 
                src={CORE_SERVICES[0].image} 
                alt={CORE_SERVICES[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-mono text-sm font-bold text-[#C67A3C]">
                  {CORE_SERVICES[0].number}.
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {CORE_SERVICES[0].accentBadge}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {CORE_SERVICES[0].title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {CORE_SERVICES[0].subtitle}
              </p>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {CORE_SERVICES[0].summary}
              </p>

              {/* Scope breakdown */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Scope Includes:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {CORE_SERVICES[0].involves.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C67A3C] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem addressed & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 max-w-sm">
                  <strong className="text-slate-200">Ideal For:</strong> {CORE_SERVICES[0].addresses}
                </div>
                <button
                  onClick={() => onServiceSelect(CORE_SERVICES[0].title)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C67A3C] hover:bg-[#D48847] active:bg-[#B46B31] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C67A3C]"
                >
                  Request Metal Quote
                </button>
              </div>
            </div>
          </div>

          {/* Service 02: Slate & Specialty Tile (Inverted Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 bg-[#0F151E] rounded-xl border border-slate-800 hover:border-slate-700/80 transition-colors">
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-mono text-sm font-bold text-[#C67A3C]">
                  {CORE_SERVICES[1].number}.
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {CORE_SERVICES[1].accentBadge}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {CORE_SERVICES[1].title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {CORE_SERVICES[1].subtitle}
              </p>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {CORE_SERVICES[1].summary}
              </p>

              {/* Scope breakdown */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Scope Includes:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {CORE_SERVICES[1].involves.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C67A3C] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem addressed & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 max-w-sm">
                  <strong className="text-slate-200">Ideal For:</strong> {CORE_SERVICES[1].addresses}
                </div>
                <button
                  onClick={() => onServiceSelect(CORE_SERVICES[1].title)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C67A3C] hover:bg-[#D48847] active:bg-[#B46B31] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C67A3C]"
                >
                  Request Slate Audit
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group aspect-[4/3] order-1 lg:order-2">
              <img 
                src={CORE_SERVICES[1].image} 
                alt={CORE_SERVICES[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Dual Row for Commercial & Restoration (Distinct Asymmetric Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Commercial */}
            <div className="p-6 sm:p-8 bg-[#0F151E] rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-800 mb-6 bg-slate-900">
                  <img 
                    src={CORE_SERVICES[2].image} 
                    alt={CORE_SERVICES[2].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#C67A3C]">
                    {CORE_SERVICES[2].number}.
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {CORE_SERVICES[2].accentBadge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {CORE_SERVICES[2].title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {CORE_SERVICES[2].summary}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {CORE_SERVICES[2].involves.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C67A3C]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Zero Commercial Downtime</span>
                <button
                  onClick={() => onServiceSelect(CORE_SERVICES[2].title)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  Commercial Survey
                </button>
              </div>
            </div>

            {/* Protective Coatings & Restoration */}
            <div className="p-6 sm:p-8 bg-[#0F151E] rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-800 mb-6 bg-slate-900">
                  <img 
                    src={CORE_SERVICES[3].image} 
                    alt={CORE_SERVICES[3].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#C67A3C]">
                    {CORE_SERVICES[3].number}.
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {CORE_SERVICES[3].accentBadge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {CORE_SERVICES[3].title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {CORE_SERVICES[3].summary}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {CORE_SERVICES[3].involves.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C67A3C]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">40–60% Cost Savings vs Tear-Off</span>
                <button
                  onClick={() => onServiceSelect(CORE_SERVICES[3].title)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  Restoration Survey
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
