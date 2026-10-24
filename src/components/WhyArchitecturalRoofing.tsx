import React from 'react';

export const WhyArchitecturalRoofing: React.FC = () => {
  const sciencePillars = [
    {
      index: '01',
      title: 'Kinetic Thermal Expansion',
      subtitle: 'Concealed Fastening Physics',
      explanation: 'Metal panels expand and contract continuously with diurnal temperature swings. Traditional exposed-screw roofs shear their fasteners and stretch penetration holes over time, causing hidden leaks. Solid State standing-seam systems utilize concealed sliding clips that allow longitudinal kinetic movement without compromising the water seal.',
      metric: '3/8" per 30ft',
      metricLabel: 'Unconstrained Thermal Float'
    },
    {
      index: '02',
      title: 'Continuous Thermal Envelope',
      subtitle: 'Eliminating R-Value Thermal Bridging',
      explanation: 'Up to 35% of building energy loss occurs directly through the roof plane. By integrating staggered-joint polyisocyanurate rigid continuous insulation, our assemblies break thermal bridges between rafter framing and ambient air, drastically reducing HVAC loads and eliminating attic condensation.',
      metric: 'R-30 to R-45',
      metricLabel: 'Continuous Resistance'
    },
    {
      index: '03',
      title: 'Aerodynamic Wind Uplift Resistance',
      subtitle: 'Negative Pressure Dynamics',
      explanation: 'Roof failures during hurricanes and severe windstorms are caused by vortex negative pressure tearing panels upward from eaves and ridges. Our perimeter cleating and mechanically folded double-lock seams are engineered to achieve Class 4 wind uplift compliance under ASTM E1592 testing.',
      metric: '160 MPH',
      metricLabel: 'UL 580 Class 90 Tested'
    },
    {
      index: '04',
      title: 'Vapor Permeability & Moisture Defense',
      subtitle: 'Breathable Self-Adhering Barriers',
      explanation: 'Moisture trapped within the roof assembly rots timber decking and spawns toxic mold. We install high-temperature synthetic underlayment that functions as a one-way breathable vapor membrane—keeping exterior bulk water out while permitting internal structural moisture vapor to escape harmlessly.',
      metric: '260°F',
      metricLabel: 'High-Temp Rating'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0D1219] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C67A3C] mb-3">
            <span>Building Physics</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-slate-400">Structural Science</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Why Architectural Integrity Matters.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A roof is not merely an exterior finish; it is the primary environmental shield of your entire building. Here is the science behind our zero-leak structural envelopes.
          </p>
        </div>

        {/* 4 Pillars Grid with Tabular Metrics */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sciencePillars.map((pillar) => (
            <div 
              key={pillar.index}
              className="p-8 bg-[#121822] rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700/80 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-mono text-[#C67A3C] font-bold block">
                      {pillar.index} · {pillar.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.explanation}
                </p>
              </div>

              {/* Engineering Metric Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] uppercase font-mono text-slate-400">
                  {pillar.metricLabel}
                </span>
                <span className="font-mono text-sm font-bold text-white tabular-nums">
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
