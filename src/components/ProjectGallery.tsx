/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { projectsData, dictionary } from '../data';
import { MapPin, ZoomIn, Eye } from 'lucide-react';

interface ProjectGalleryProps {
  lang: Language;
}

export default function ProjectGallery({ lang }: ProjectGalleryProps) {
  const d = dictionary[lang];
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filters = [
    { key: 'all', label: d.galleryFiltersAll },
    { key: 'solar', label: d.galleryFiltersSolar },
    { key: 'cctv', label: d.galleryFiltersCctv },
    { key: 'smart', label: d.galleryFiltersSmart },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section
      id="projects-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-3">
            {lang === 'ar' ? 'البراعة الهندسية على أرض الواقع' : 'RÉALISATIONS DE PRESTIGE'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 animate-slideIn">
            {d.galleryTitle}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            {d.gallerySubtitle}
          </p>
        </div>

        {/* Sorting Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-red-650 text-white border-red-650'
                  : 'bg-zinc-900/60 text-zinc-450 border-zinc-900 hover:text-white hover:bg-zinc-850'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-zinc-900 shadow-lg cursor-pointer"
            >
              {/* Main Image */}
              <img
                src={proj.image}
                alt={proj.title[lang]}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Cover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Box */}
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 text-right flex flex-col justify-end h-full">
                {/* Meta details (Pin layout) */}
                <div className="flex items-center gap-1.5 text-red-500 font-bold text-[10px] md:text-xs mb-1 font-sans justify-end">
                  <span>{proj.location[lang]}</span>
                  <MapPin className="w-3.5 h-3.5" />
                </div>

                <h3 className="text-white font-extrabold text-sm md:text-base leading-tight mb-2 group-hover:text-red-500 transition-colors">
                  {proj.title[lang]}
                </h3>

                {/* Expanded details revealed on hover or tap */}
                <div
                  className={`transition-all duration-500 overflow-hidden text-zinc-400 text-xs leading-relaxed ${
                    hoveredId === proj.id ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {proj.description[lang]}
                </div>
              </div>

              {/* Hover Zoom Eye Icon for luxury feel */}
              <div className="absolute top-4 left-4 p-2 bg-zinc-950/90 border border-zinc-850 rounded-xl text-zinc-400 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                <Eye className="w-4 h-4 text-red-500" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
