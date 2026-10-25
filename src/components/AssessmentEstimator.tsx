import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  calculateRoofMetrics, 
  PitchLevel, 
  ComplexityLevel, 
  RoofingSystemType, 
  PITCH_MULTIPLIERS, 
  COMPLEXITY_MULTIPLIERS, 
  SYSTEM_SPECS 
} from '../utils/quoteCalculator';

interface AssessmentEstimatorProps {
  initialSystemId?: string;
}

export const AssessmentEstimator: React.FC<AssessmentEstimatorProps> = ({ initialSystemId }) => {
  // Calculator state
  const [footprintSqFt, setFootprintSqFt] = useState<number>(2400);
  const [pitch, setPitch] = useState<PitchLevel>('moderate');
  const [complexity, setComplexity] = useState<ComplexityLevel>('moderate');
  const [systemType, setSystemType] = useState<RoofingSystemType>(
    initialSystemId === 'natural-slate' ? 'architectural_slate' :
    initialSystemId === 'commercial-membrane' ? 'commercial_membrane' :
    initialSystemId === 'restoration-coating' ? 'protective_coating' :
    'standing_seam_metal'
  );

  // Form fields
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [projectDescription, setProjectDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ referenceId: string; summary: string } | null>(null);
  const [formErrors, setFormErrors] = useState<{ name?: string; contact?: string }>({});

  // Compute live metrics
  const metrics = calculateRoofMetrics({
    groundFootprintSqFt: footprintSqFt,
    pitch,
    complexity,
    systemType,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; contact?: string } = {};

    if (!fullName.trim()) {
      errors.name = 'Please provide your name or business contact.';
    }
    if (!contactInfo.trim() || contactInfo.length < 5) {
      errors.contact = 'Please provide a valid email address or phone number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'SSR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        referenceId: generatedRef,
        summary: `${SYSTEM_SPECS[systemType].name} · ~${metrics.estimatedSurfaceAreaSqFt} sq ft (${metrics.roofSquares} squares)`,
      });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setContactInfo('');
    setProjectDescription('');
  };

  return (
    <section id="assessment" className="py-24 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="tracking-wide">Interactive Scope Estimator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight [text-wrap:balance]">
            Request an Architectural Assessment.
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Estimate your building's approximate roof surface geometry and submit your scope for a certified Solid State diagnostic survey.
          </p>
        </motion.div>

        {/* 2-Column Scoping Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Geometry Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-6 sm:p-8 bg-[#FAF8F5] rounded-3xl border border-neutral-200 shadow-sm space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80">
              <h3 className="font-display text-lg font-bold text-neutral-900">
                1. Geometric Scope Calculator
              </h3>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-semibold">
                Live Calculation
              </span>
            </div>

            {/* Footprint Slider & Input */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <label htmlFor="footprint-input" className="font-semibold text-neutral-700">
                  Ground Building Footprint (sq ft)
                </label>
                <span className="font-mono font-bold text-neutral-900 tabular-nums">
                  {footprintSqFt.toLocaleString()} sq ft
                </span>
              </div>
              <input
                id="footprint-input"
                type="range"
                min="600"
                max="10000"
                step="100"
                value={footprintSqFt}
                onChange={(e) => setFootprintSqFt(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                aria-label="Ground building footprint in square feet"
                aria-valuemin={600}
                aria-valuemax={10000}
                aria-valuenow={footprintSqFt}
                aria-valuetext={`${footprintSqFt.toLocaleString()} square feet`}
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>600 sq ft (Compact)</span>
                <span>5,000 sq ft</span>
                <span>10,000 sq ft (Commercial)</span>
              </div>
            </div>

            {/* Pitch Selector */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2">
                Roof Pitch & Gradient
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {(Object.keys(PITCH_MULTIPLIERS) as PitchLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setPitch(level)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                      pitch === level
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <div className="capitalize">{level}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${pitch === level ? 'text-blue-300' : 'text-neutral-500'}`}>
                      x{PITCH_MULTIPLIERS[level].factor}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-neutral-500 mt-1.5 leading-tight">
                {PITCH_MULTIPLIERS[pitch].description}
              </p>
            </div>

            {/* Architectural Complexity */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2">
                Roof Plane Complexity & Valleys
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(COMPLEXITY_MULTIPLIERS) as ComplexityLevel[]).map((comp) => (
                  <button
                    key={comp}
                    type="button"
                    onClick={() => setComplexity(comp)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                      complexity === comp
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <div className="capitalize">{comp}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${complexity === comp ? 'text-blue-300' : 'text-neutral-500'}`}>
                      +{Math.round((COMPLEXITY_MULTIPLIERS[comp].factor - 1) * 100)}% waste
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* System Selection */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-2">
                Selected Roofing System
              </label>
              <select
                value={systemType}
                onChange={(e) => setSystemType(e.target.value as RoofingSystemType)}
                className="w-full p-2.5 bg-white border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-blue-600 shadow-sm"
              >
                {(Object.keys(SYSTEM_SPECS) as RoofingSystemType[]).map((sysKey) => (
                  <option key={sysKey} value={sysKey}>
                    {SYSTEM_SPECS[sysKey].name} ({SYSTEM_SPECS[sysKey].category})
                  </option>
                ))}
              </select>
            </div>

            {/* Live Metrics Readout Board */}
            <div className="p-4 bg-white rounded-2xl border border-neutral-200/90 shadow-sm space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold block">
                Calculated Engineering Estimates
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-neutral-500 block">Estimated True Surface</span>
                  <span className="text-xl font-extrabold text-neutral-900 font-mono tabular-nums">
                    {metrics.estimatedSurfaceAreaSqFt.toLocaleString()} <span className="text-xs font-normal text-neutral-500">sq ft</span>
                  </span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Roof Squares (100 sq ft)</span>
                  <span className="text-xl font-extrabold text-blue-600 font-mono tabular-nums">
                    {metrics.roofSquares} <span className="text-xs font-normal text-neutral-500">sq</span>
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-neutral-500">Expected Lifespan:</span>{' '}
                  <span className="text-neutral-900 font-semibold font-mono">{metrics.expectedLifespan}</span>
                </div>
                <div>
                  <span className="text-neutral-500">Inspection Cycle:</span>{' '}
                  <span className="text-neutral-900 font-semibold font-mono">{metrics.recommendedInspectionCycle}</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Enquiry Form & Confirmation Flow */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-6 sm:p-8 bg-[#FAF8F5] rounded-3xl border border-neutral-200 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-6">
              <h3 className="font-display text-lg font-bold text-neutral-900">
                2. Project Consultation Details
              </h3>
              <span className="text-[10px] font-mono text-neutral-500">
                Direct Engineer Review
              </span>
            </div>

            {submittedData ? (
              <div className="p-6 bg-white rounded-2xl border border-emerald-200 text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-neutral-900">
                    Assessment Request Received
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 max-w-sm mx-auto">
                    Your preliminary roof specifications have been logged. A senior roofing estimator will contact you to confirm satellite survey imagery and drone site access.
                  </p>
                </div>

                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-left font-mono text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Reference Code:</span>
                    <span className="text-emerald-600 font-bold">{submittedData.referenceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Scope Spec:</span>
                    <span className="text-neutral-900 truncate max-w-[220px]">{submittedData.summary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Status:</span>
                    <span className="text-blue-600 font-semibold">Pending Field Allocation</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name or Organization <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance / Highland Development Corp"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none shadow-sm ${
                      formErrors.name ? 'border-red-500 focus:border-red-600' : 'border-neutral-200 focus:border-blue-600'
                    }`}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-[11px] text-red-500 mt-1" role="alert">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-info" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address or Telephone <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="e.g. evance@estate.com or (555) 019-2831"
                    aria-invalid={!!formErrors.contact}
                    aria-describedby={formErrors.contact ? "contact-error" : undefined}
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none shadow-sm ${
                      formErrors.contact ? 'border-red-500 focus:border-red-600' : 'border-neutral-200 focus:border-blue-600'
                    }`}
                  />
                  {formErrors.contact && (
                    <p id="contact-error" className="text-[11px] text-red-500 mt-1" role="alert">{formErrors.contact}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="property-type" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Property Category
                    </label>
                    <select
                      id="property-type"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-blue-600 shadow-sm"
                    >
                      <option value="residential">Architectural Residential</option>
                      <option value="commercial">Commercial / Industrial Facility</option>
                      <option value="heritage">Heritage / Historic Estate</option>
                      <option value="multi-family">Multi-Unit Residential</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Target Project Window
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-blue-600 shadow-sm"
                    >
                      <option value="immediate">Immediate (Next 30 Days)</option>
                      <option value="quarter">This Season (1–3 Months)</option>
                      <option value="planning">Architectural Planning Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project-notes" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Specific Roof Requirements or Existing Issues
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe any active leaks, solar clamp compatibility needs, or architectural plans ready..."
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 disabled:opacity-50 rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Logging Request...' : 'Submit Assessment Request'}</span>
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">↗</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
