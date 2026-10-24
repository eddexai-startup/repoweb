import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENERAL_FAQS } from '../data/roofingData';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="tracking-wide">Knowledge Base</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Clear, honest answers to common technical, structural, and procedural roofing questions.
          </p>
        </motion.div>

        {/* Accessible Accordion List with fluid AnimatePresence expansion */}
        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-neutral-300 bg-[#FAF8F5] shadow-xs' : 'border-neutral-200 bg-[#FAF8F5]/60 hover:border-neutral-300 hover:bg-[#FAF8F5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      0{index + 1}
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-neutral-900 group-hover:text-blue-900 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <span 
                    className={`w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 text-xs font-bold transition-all duration-300 shrink-0 shadow-xs ${
                      isOpen ? 'rotate-180 bg-neutral-900 border-neutral-900 text-white' : 'group-hover:border-neutral-300'
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200/60">
                        <p>{faq.answer}</p>
                        <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                          <span>Classification: {faq.category}</span>
                          <span className="text-blue-600 font-medium">Solid State Technical Advisory</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

