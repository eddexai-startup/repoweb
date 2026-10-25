import React from 'react';
import { motion } from 'motion/react';

const StarRating: React.FC = () => (
  <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 stars rating">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const ClientReviews: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <span className="tracking-wide">Client Perspectives</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            What Our Clients Say About Us.
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Real feedback from commercial property directors and discerning architectural homeowners.
          </p>
        </motion.div>

        {/* 5-Card Layout matching Reference Image with Center Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: 2 Testimonial Cards */}
          <div className="md:col-span-4 flex flex-col gap-6 justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 rounded-3xl bg-[#FAF8F5] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 ring-2 ring-neutral-100 group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Marcus Vance"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Marcus Vance</h3>
                    <span className="text-xs text-neutral-500 font-medium">Property Developer</span>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed italic">
                  "They inspected our multi-building portfolio and gave us a comprehensive drone survey. No hidden fees, immaculate site cleanup, and genuine standing-seam precision."
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-neutral-200/70 text-xs text-amber-500 flex items-center justify-between">
                <StarRating />
                <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">· Verified Portfolio Owner</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 rounded-3xl bg-[#FAF8F5] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 ring-2 ring-neutral-100 group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Elena Rostova"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Elena Rostova</h3>
                    <span className="text-xs text-neutral-500 font-medium">Modern Homeowner</span>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed italic">
                  "The quality of the concealed fastener metal panels and attention to the dormer flashing detail were extraordinary. Truly looks like an architectural magazine cover."
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-neutral-200/70 text-xs text-amber-500 flex items-center justify-between">
                <StarRating />
                <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">· Verified Residential Owner</span>
              </div>
            </motion.div>
          </div>

          {/* Center Column: Prominent Lead Director / Founder Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="md:col-span-4 p-8 sm:p-9 rounded-3xl bg-neutral-950 text-white shadow-xl flex flex-col justify-between text-center border border-neutral-800 relative overflow-hidden group"
          >
            {/* Subtle technical corner ticks */}
            <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t border-l border-blue-400/40" />
            <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t border-r border-blue-400/40" />
            <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b border-l border-blue-400/40" />
            <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b border-r border-blue-400/40" />

            <div>
              <div className="w-22 h-22 rounded-full overflow-hidden mx-auto border-2 border-blue-500/80 shadow-lg mb-4.5 ring-4 ring-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Lead Architectural Director"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-tight">David Sterling</h3>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block mt-0.5 font-semibold">
                Chief Technical Surveyor
              </span>

              <p className="mt-5 text-xs sm:text-sm text-neutral-300 leading-relaxed italic max-w-xs mx-auto">
                "Quick to respond, dependable in execution, and uncompromising in structural craftsmanship — that is our perpetual promise to every client."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/90 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="font-display text-2xl font-extrabold text-white font-mono tabular-nums">98%</span>
                <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mt-0.5 font-medium">First-Time Fit</span>
              </div>
              <div>
                <span className="font-display text-2xl font-extrabold text-blue-400 font-mono tabular-nums">15+</span>
                <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mt-0.5 font-medium">Master Years</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Testimonial Cards */}
          <div className="md:col-span-4 flex flex-col gap-6 justify-between">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 rounded-3xl bg-[#FAF8F5] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 ring-2 ring-neutral-100 group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Julian Reed"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Julian Reed</h3>
                    <span className="text-xs text-neutral-500 font-medium">Commercial Facility Director</span>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed italic">
                  "They provided an itemized scope and completed our commercial membrane without disrupting our business operations. Outstanding communication throughout."
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-neutral-200/70 text-xs text-amber-500 flex items-center justify-between">
                <StarRating />
                <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">· Verified Commercial Lead</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 rounded-3xl bg-[#FAF8F5] border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 ring-2 ring-neutral-100 group-hover:scale-105 transition-transform"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Claire Beauchamp"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Claire Beauchamp</h3>
                    <span className="text-xs text-neutral-500 font-medium">Heritage Estate Owner</span>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed italic">
                  "Our natural slate roof required delicate historic masonry and soldered copper gutters. Solid State's craftsmen treated our home like a work of art."
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-neutral-200/70 text-xs text-amber-500 flex items-center justify-between">
                <StarRating />
                <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">· Verified Heritage Owner</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

