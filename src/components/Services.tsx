/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { servicesData, dictionary } from '../data';
import { 
  Camera, 
  Cpu, 
  Sun, 
  Home, 
  Wrench, 
  Network, 
  Volume2, 
  Layers, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const d = dictionary[lang];
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Camera':
        return <Camera className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Sun':
        return <Sun className={className} />;
      case 'Home':
        return <Home className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      case 'Network':
        return <Network className={className} />;
      case 'Volume2':
        return <Volume2 className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getSpanClass = (index: number) => {
    const spans = [
      'lg:col-span-8',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-6',
      'lg:col-span-6',
      'lg:col-span-5',
      'lg:col-span-7'
    ];
    return spans[index % spans.length] || 'lg:col-span-4';
  };

  const activeService = servicesData.find(s => s.id === selectedServiceId);

  return (
    <section
      id="services-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900"
    >
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle_at_left,#b300000a,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-3 animate-pulse">
            {lang === 'ar' ? 'ما نتميز بتقديمه' : 'EXCELLENCE EN EXPÉRIENCE'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white font-sans bg-gradient-to-r from-white via-zinc-100 to-zinc-450 bg-clip-text text-transparent">
            {d.servicesTitle}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {d.servicesSubtitle}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-[24px] bg-zinc-900/35 border border-zinc-900 hover:border-red-650/30 p-6 md:p-8 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-0.5 ${getSpanClass(index)}`}
              >
                {/* Accent top-light line on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-650 group-hover:text-white group-hover:border-red-650 transition-all duration-400 shadow-sm">
                    {getIcon(service.iconName, "w-6 h-6")}
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-black text-white mb-3 group-hover:text-red-505 transition-colors font-sans">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {service.description[lang]}
                  </p>
                </div>

                {/* Interaction Row: Learn More trigger button */}
                <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceId(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-400 transition-colors"
                  >
                    <span>{d.viewSpecs}</span>
                    {lang === 'ar' ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] font-mono font-extrabold text-zinc-650">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detailed Modal/Panel Overlay to explore service specifics */}
        {selectedServiceId && activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn overflow-auto">
            <div className="relative w-full max-w-lg bg-zinc-900 rounded-3xl border border-zinc-800 p-6 md:p-8 text-right max-h-[90vh] overflow-y-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-4 right-4 p-2 bg-zinc-950/80 border border-zinc-850 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-650/10 border border-red-900/30 text-red-500 flex items-center justify-center shadow-lg">
                  {getIcon(activeService.iconName, "w-7 h-7")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {activeService.title[lang]}
                  </h3>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-wider">
                    {lang === 'ar' ? 'المواصفات الفنية معتمدة' : 'Spécifications certifiées'}
                  </p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-zinc-350 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-900 mb-6">
                {activeService.description[lang]}
              </p>

              {/* Detailed specification bullets */}
              <h4 className="text-sm font-bold text-white mb-3">
                {d.servicesDetailTitle}
              </h4>
              <ul className="space-y-3 mb-6">
                {activeService.details[lang].map((bullet, k) => (
                  <li key={k} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Instant consult buttons inside modal */}
              <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/9647800000000?text=${encodeURIComponent(
                    lang === 'ar'
                      ? `مرحباً فريق التقني، أود الاستفسار عن خدمة: ${activeService.title.ar}`
                      : `Bonjour MUSILM TECH, je souhaite m'informer sur le service : ${activeService.title.fr}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-650 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/15 transition-all text-center"
                >
                  <span>{lang === 'ar' ? 'اطلب الخدمة الآن عبر واتساب' : 'Commander ce service'}</span>
                </a>
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-5 rounded-xl bg-zinc-950 hover:bg-zinc-850 hover:text-white text-zinc-450 text-xs font-semibold border border-zinc-850 transition"
                >
                  <span>{d.closeBtn}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
