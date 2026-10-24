import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        scrolled 
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-neutral-200/80 py-2.5 shadow-sm' 
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#" 
            className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md transition-transform duration-200 hover:scale-[1.01]"
            aria-label="Solid State Roofing home"
          >
            <BrandLogo size="md" theme="light" />
          </a>

          {/* Zone 2: Navigation Links with Animated Underline */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-neutral-900 transition-colors duration-200 relative py-1 text-sm font-medium group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Signature Pill Button with Micro-Interaction */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Get Free Quote</span>
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          {/* Morphing Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-neutral-900 rounded-full transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-neutral-900 rounded-full transition-all duration-200 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-neutral-900 rounded-full transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`} 
              />
            </div>
          </button>

        </div>
      </div>

      {/* Completely Fluid Portaled Mobile Menu with Animated Exit */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[9999] md:hidden">
              {/* Step 2: Smooth Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => setMobileMenuOpen(false)}
                className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
                aria-hidden="true"
              />

              {/* Step 3: Menu Panel Sliding smoothly from Right */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#FAF8F5] border-l border-neutral-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                    <BrandLogo size="md" theme="light" />
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors focus:outline-none"
                      aria-label="Close menu"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Step 4: Staggered Nav Links */}
                  <nav className="mt-8 flex flex-col gap-2">
                    {navLinks.map((link, idx) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.08 + idx * 0.06, duration: 0.25 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-lg font-bold text-neutral-900 hover:text-blue-600 transition-colors py-3 border-b border-neutral-200/60 flex items-center justify-between group"
                      >
                        <span>{link.label}</span>
                        <span className="text-sm font-mono text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Bottom CTA with Exit Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.35, duration: 0.25 }}
                  className="pt-6 border-t border-neutral-200 mt-6"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onRequestQuote();
                    }}
                    className="w-full py-3.5 px-4 text-center text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full shadow-md flex items-center justify-center gap-2.5 transition-transform active:scale-[0.98]"
                  >
                    <span>Get Free Quote</span>
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">↗</span>
                  </button>
                  <p className="mt-3 text-xs text-neutral-500 text-center font-medium">
                    Precision Roofing for Modern Architecture
                  </p>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};
