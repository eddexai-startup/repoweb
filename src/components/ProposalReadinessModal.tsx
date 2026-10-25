import React, { useState } from 'react';

interface ProposalReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalReadinessModal: React.FC<ProposalReadinessModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const checklistItems = [
    {
      category: '1. Verified Business & Legal Credentials',
      details: [
        'Contractor License Number (e.g. State C-39 / General B license)',
        'Comprehensive General Liability policy limit ($1M / $2M standard)',
        'Workers Compensation Certificate of Insurance',
        'Official business physical address or local shop facility'
      ]
    },
    {
      category: '2. Customer Communication Channels',
      details: [
        'Direct dispatch telephone number (with SMS or 24/7 emergency dispatch if offered)',
        'Primary inbound estimates email (e.g. quotes@solidstateroofing.com)',
        'Target geographic service area (counties, cities, or postal code radius)',
        'Target CRM endpoint (e.g. Jobber, Roofr, AccuLynx, HubSpot, or email webhooks)'
      ]
    },
    {
      category: '3. Technical Specs & Real Warranties',
      details: [
        'Specific manufacturer certifications (e.g. GAF Master Elite, Carlisle SynTec, Drexel Metals, Firestone)',
        'Authentic workmanship warranty period (e.g. 10-year, 25-year, or lifetime)',
        'Manufacturer material warranty options (e.g. 30–50 year non-prorated paint finish warranties)'
      ]
    },
    {
      category: '4. Authentic Project Photography & Testimonials',
      details: [
        'High-resolution photography of recently completed local projects',
        'Verified Google Business Reviews or Trustpilot widget integration',
        'Specific client case studies with authorized addresses or neighborhood names'
      ]
    }
  ];

  const handleCopyChecklist = () => {
    const text = checklistItems.map(c => `${c.category}\n` + c.details.map(d => `  • ${d}`).join('\n')).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Website Proposal & Production Readiness Checklist"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-[#FAF8F5]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Proposal Mode · Client Onboarding</span>
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900 mt-0.5">
              Production Go-Live Checklist for Solid State Roofing
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-200/60 transition-colors"
            aria-label="Close checklist"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-600">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-neutral-800 leading-relaxed">
            <strong className="text-neutral-900 block mb-1">To the Business Owner:</strong>
            This website concept establishes the modern architectural brand identity, layout, interactive scope calculator, and service structure for <strong>Solid State Roofing</strong>. To deploy this to your live domain, we simply replace the placeholder details with your authentic credentials listed below.
          </div>

          <div className="space-y-4">
            {checklistItems.map((group, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200/80">
                <h4 className="font-display text-sm font-bold text-neutral-900 mb-2">
                  {group.category}
                </h4>
                <ul className="space-y-1.5 text-neutral-600">
                  {group.details.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAF8F5] border-t border-neutral-100 flex items-center justify-between gap-4">
          <button
            onClick={handleCopyChecklist}
            className="px-4 py-2 text-xs font-semibold text-neutral-800 hover:text-black bg-white border border-neutral-200 hover:bg-neutral-50 rounded-full transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>{copied ? '✓ Checklist Copied' : 'Copy Onboarding Checklist'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-colors"
          >
            Return to Demo
          </button>
        </div>
      </div>
    </div>
  );
};
