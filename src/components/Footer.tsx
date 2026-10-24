import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenProductionChecklist: () => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProductionChecklist, onRequestQuote }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-900 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" theme="dark" />
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              We combine premium architectural standing seam alloys, natural quarried slate, and robotic commercial membranes with generational craftsmanship.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenProductionChecklist}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-mono text-blue-400 transition-colors"
              >
                <span>⚙ Production Readiness Guide</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Contact and Services */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold block">
              Architectural Systems
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Standing Seam Metal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Natural Quarried Slate
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial Flat Membrane
                </a>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Request Assessment ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Signup (From Reference Image) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold block">
              Sign Up to Stay Ahead on Roof Care.
            </span>
            <p className="text-[11px] text-neutral-400">
              Receive seasonal preventive maintenance checklists and storm inspection advisories.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-4 pr-12 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:bg-blue-500 transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                →
              </motion.button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 block font-medium">
                ✓ Thank you for subscribing.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Solid State Roofing. Proposed Digital Architecture Concept.
          </div>
          <div className="flex items-center gap-6">
            <span>Modern Architectural Theme</span>
            <span>·</span>
            <button 
              onClick={onOpenProductionChecklist}
              className="text-neutral-400 hover:text-white underline cursor-pointer"
            >
              Business Setup Checklist
            </button>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
