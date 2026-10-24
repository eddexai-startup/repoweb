import React from 'react';
import { PROCESS_STEPS } from '../data/roofingData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0D1219] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C67A3C] mb-3">
            <span>Execution Protocol</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-slate-400">Quality Assurance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The 5-Stage Precision Process.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            From initial drone diagnostics to final fastener torque verification, every phase follows a rigorous architectural quality standard.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="mt-14 space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.step}
              className="p-6 sm:p-8 bg-[#121822] rounded-xl border border-slate-800 hover:border-slate-700/80 transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Step indicator */}
              <div className="lg:col-span-3 flex items-center gap-4">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#C67A3C]">
                  {step.step}
                </span>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block">
                    Phase {step.step}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider block">
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* Step content */}
              <div className="lg:col-span-5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="lg:col-span-4 p-4 rounded bg-[#0B0F14]/60 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-2">
                  Client Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C67A3C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Journey Notice */}
        <div className="mt-10 text-center text-xs text-slate-400">
          Proposed customer workflow tailored for Solid State Roofing. Stages and deliverables will be adjusted to your exact commercial and residential service terms.
        </div>

      </div>
    </section>
  );
};
