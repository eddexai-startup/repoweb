import React, { useState } from 'react';
import { ROOFING_SYSTEMS } from '../data/roofingData';
import { RoofingSystem } from '../types/roofing';

interface RoofSystemsExplorerProps {
  onSelectSystemForQuote: (systemId: string) => void;
}

export const RoofSystemsExplorer: React.FC<RoofSystemsExplorerProps> = ({ onSelectSystemForQuote }) => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('standing-seam');
  const currentSystem: RoofingSystem = ROOFING_SYSTEMS.find(s => s.id === selectedSystemId) || ROOFING_SYSTEMS[0];

  return (
    <section id="systems" className="py-20 lg:py-28 bg-[#0D1219] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C67A3C] mb-3">
            <span>Material Science</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-slate-400">Engineered Assemblies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Architectural Roofing Systems.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Every building demands an envelope suited to its geometry, micro-climate, and structural load. Explore our precision assemblies engineered from the deck up.
          </p>
        </div>

        {/* Interactive System Selector Tabs (Functional Segmented Control) */}
        <div className="mt-10 p-1.5 bg-[#121922] rounded-lg border border-slate-800 flex flex-wrap gap-1.5">
          {ROOFING_SYSTEMS.map((system) => {
            const isActive = system.id === selectedSystemId;
            return (
              <button
                key={system.id}
                onClick={() => setSelectedSystemId(system.id)}
                className={`flex-1 min-w-[200px] px-4 py-3 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 text-left cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C67A3C] ${
                  isActive
                    ? 'bg-[#1A2330] text-white shadow-md border border-slate-700/80 text-[#C67A3C]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
                aria-pressed={isActive}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {system.category}
                </div>
                <div className={`mt-0.5 truncate ${isActive ? 'text-white font-bold' : ''}`}>
                  {system.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* System Detail Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cross-Section Layer Assembly & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="p-6 sm:p-8 bg-[#121822] rounded-lg border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-slate-800">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {currentSystem.name}
                  </h3>
                  <p className="text-xs text-[#C67A3C] font-mono mt-1">
                    {currentSystem.tagline}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">
                    Expected Lifespan
                  </span>
                  <span className="text-lg font-bold text-white font-mono tabular-nums">
                    {currentSystem.lifespan}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {currentSystem.description}
              </p>

              {/* Architectural Cross-Section Layer Exploder */}
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <span>Assembly Cross-Section</span>
                  <span className="text-[10px] text-slate-400 font-mono">(Foundation to Crown)</span>
                </div>

                <div className="space-y-2.5">
                  {currentSystem.architecturalLayers.map((layer) => (
                    <div 
                      key={layer.layerNumber}
                      className="p-3.5 rounded bg-[#0B0F14]/70 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition-colors"
                    >
                      <span className="font-mono text-xs font-bold text-[#C67A3C] bg-[#C67A3C]/10 px-2 py-0.5 rounded border border-[#C67A3C]/20 shrink-0">
                        {layer.layerNumber}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-100">
                          {layer.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-normal">
                          {layer.purpose}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSystem.specifications.map((spec) => (
                  <div key={spec.label} className="p-3 bg-[#0B0F14]/40 rounded border border-slate-800/60">
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-medium text-slate-200 mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Minimum Pitch Required: <strong className="text-white font-mono">{currentSystem.minSlope}</strong>
                </div>
                <button
                  onClick={() => onSelectSystemForQuote(currentSystem.id)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C67A3C] hover:bg-[#D48847] active:bg-[#B46B31] rounded transition-colors shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C67A3C]"
                >
                  Configure This System
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Architectural Photography & Real-World Application */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={currentSystem.image}
                  alt={currentSystem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay with engineering ratings */}
              <div className="p-5 bg-[#121822] border-t border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest block">
                      Wind Resistance
                    </span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block">
                      {currentSystem.windRating}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest block">
                      Fire Classification
                    </span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block">
                      {currentSystem.fireRating}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Authentic Architectural Detailing</span>
                  <span className="text-[#C67A3C] font-mono">Solid State Spec</span>
                </div>
              </div>
            </div>

            {/* Architectural note box */}
            <div className="p-4 rounded-lg bg-[#121822]/60 border border-slate-800/80 text-xs text-slate-300">
              <span className="text-white font-bold block mb-1">Architectural Consultation Available</span>
              Our engineers collaborate directly with architects, general contractors, and property owners to provide engineered shop drawings and wind load calculations.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
