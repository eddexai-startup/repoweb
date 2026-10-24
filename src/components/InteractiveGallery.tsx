import React, { useState, useEffect } from 'react';
import { GALLERY_PROJECTS } from '../data/roofingData';
import { GalleryProject } from '../types/roofing';

export const InteractiveGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeFilter);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      } else if (e.key === 'ArrowRight' && activeModalProject) {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft' && activeModalProject) {
        navigateModal(-1);
      }
    };
    if (activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  const navigateModal = (direction: number) => {
    if (!activeModalProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === activeModalProject.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setActiveModalProject(filteredProjects[nextIndex]);
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#0B0F14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C67A3C] mb-3">
              <span>Selected Work</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">Architectural Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Project Portfolio.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Explore residential estates and commercial facilities protected by Solid State roofing assemblies. Click any project to open detailed architectural specifications.
            </p>
          </div>

          {/* Filter Segmented Control (Rule 1.A: Functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[#121922] rounded-lg border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Systems ({GALLERY_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('metal')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'metal'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architectural Metal
            </button>
            <button
              onClick={() => setActiveFilter('slate')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'slate'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Slate & Tile
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'commercial'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial Flat
            </button>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <div 
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-[#0F151E] hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                aria-label={`View architectural details for ${project.title}`}
              >
                {/* Image Frame */}
                <div className={`relative overflow-hidden bg-slate-900 ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Hover Click Indicator */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#0B0F14]/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-slate-300 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5 text-[#C67A3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Inspect Spec</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="text-[#C67A3C]">{project.categoryLabel}</span>
                    <span>{project.slope}</span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#C67A3C] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 font-mono">
                      {project.system}
                    </p>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {project.architecturalNotes}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate max-w-[240px]">{project.materialHighlight}</span>
                    <span className="text-white font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Demo Notice */}
        <div className="mt-12 p-4 rounded-lg bg-[#0F151E] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C67A3C] shrink-0" />
            <span>
              <strong>Concept Portfolio:</strong> Illustrative architectural photography curated for Solid State Roofing demo. Easily replaced with your verified field project photography upon deployment.
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400 shrink-0">
            High-Resolution Ready
          </span>
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#101620] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C67A3C] block">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateModal(-1)}
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  aria-label="Previous project"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => navigateModal(1)}
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  aria-label="Next project"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9] w-full max-h-[420px]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Architectural Notes & Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-[#0B0F14] rounded border border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Installed Assembly</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{activeModalProject.system}</span>
                </div>
                <div className="p-3.5 bg-[#0B0F14] rounded border border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Slope Geometry</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{activeModalProject.slope}</span>
                </div>
                <div className="p-3.5 bg-[#0B0F14] rounded border border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Material Finish</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{activeModalProject.materialHighlight}</span>
                </div>
              </div>

              <div className="p-4 bg-[#0B0F14]/60 rounded border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Architectural Scope & Detailing:</strong>
                {activeModalProject.architecturalNotes}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#0D1219] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">Use ← / → arrow keys or Esc to close</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-1.5 text-xs font-semibold uppercase text-slate-300 hover:text-white bg-slate-800 rounded transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
