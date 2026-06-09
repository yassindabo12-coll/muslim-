/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { testimonialsData, dictionary } from '../data';
import { ShieldCheck, Flame, Zap, Award, Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  lang: Language;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const d = dictionary[lang];
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Auto-slide testimonials every 6 seconds to look expensive
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentTesti = testimonialsData[currentIdx];

  // Animated counters trigger
  const [ticks, setTicks] = useState({ clients: 0, experience: 0 });
  useEffect(() => {
    let active = true;
    const anim = () => {
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          if (active) {
            setTicks({
              clients: Math.round(i * 3.5), // up to 350+
              experience: Math.round(i * 0.08) // up to 8 years
            });
          }
        }, i * 15);
      }
    };
    anim();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="about-us-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900"
    >
      {/* Decorative red glowing circle in the middle */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-red-650/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: Company core strengths, stats */}
        <div className="lg:col-span-7">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-3 text-right">
            {lang === 'ar' ? 'عالم من الموثوقية والأمان' : 'L\'ENGAGEMENT DE PERFORMANCE'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            {d.whyTitle}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            {d.whySubtitle}
          </p>

          {/* Core Strengths list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600/10 text-red-500 rounded-xl border border-red-900/25">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{lang === 'ar' ? 'تجهيز كامل وبدقة فنية' : 'Équipe d\'Experts'}</h3>
                <p className="text-xs text-zinc-500 leading-normal">{lang === 'ar' ? 'نهتم بروعة التمديد وتناسق الكابلات لمشهد عالي الرونق.' : 'Finition extrêmement soignée et rigoureuse.'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600/10 text-red-500 rounded-xl border border-red-900/25">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{lang === 'ar' ? 'سرعة قصوى في التركيب' : 'Installation Express'}</h3>
                <p className="text-xs text-zinc-500 leading-normal">{lang === 'ar' ? 'نهج عملي منظم يضمن الالتزام بالمواعيد وسيرفرات بث سريعة.' : 'Respect des délais et installation sans tracas.'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600/10 text-red-500 rounded-xl border border-red-900/25">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{d.statWarranty}</h3>
                <p className="text-xs text-zinc-500 leading-normal">{lang === 'ar' ? 'أجهزة أصلية معتمدة مع ضمان وكالة يمنحك راحة البال المطلقة.' : 'Matériel certifié d\'origine avec garantie solide.'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-600/10 text-red-500 rounded-xl border border-red-900/25">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{lang === 'ar' ? 'دعم فني متواصل' : 'Assistance Continue'}</h3>
                <p className="text-xs text-zinc-500 leading-normal">{lang === 'ar' ? 'خدمات دعم ما بعد البيع وحل المشكلات الهندسية وصيانة مجانية.' : 'Maintenance disponible 7j/7 pour vos équipements.'}</p>
              </div>
            </div>
          </div>

          {/* Stats numerical progression figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-910 font-sans">
            <div className="text-center font-mono">
              <div className="text-2xl md:text-3xl font-extrabold text-red-500">{ticks.clients || '350'}+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">{d.statClients}</div>
            </div>
            <div className="text-center font-mono">
              <div className="text-2xl md:text-3xl font-extrabold text-red-500">{ticks.experience || '8'}+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">{d.statExp}</div>
            </div>
            <div className="text-center font-mono">
              <div className="text-2xl md:text-3xl font-extrabold text-zinc-200">20/20</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">{lang === 'ar' ? 'امبير طاقة شمسية' : 'Ampérames Solaire'}</div>
            </div>
            <div className="text-center font-mono">
              <div className="text-2xl md:text-3xl font-extrabold text-zinc-200">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">{lang === 'ar' ? 'ثقة وموثوقية' : 'Confiance'}</div>
            </div>
          </div>
        </div>

        {/* Right column: High-end interactive testimonials slider showcase card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 md:p-8 border border-zinc-850/80 shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Top Quote Icon visual watermark */}
            <div className="absolute top-6 left-6 text-zinc-850 pointer-events-none select-none">
              <Quote className="w-20 h-20 rotate-180 opacity-15" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTesti.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Slider Testimonial content markup */}
              <div className="min-h-[140px] flex items-center">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                  " {currentTesti.comment[lang]} "
                </p>
              </div>

              {/* Client detailed tags */}
              <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{currentTesti.name[lang]}</h4>
                  <p className="text-[11px] text-red-500 font-semibold">{currentTesti.role[lang]}</p>
                </div>
                
                {/* Manual Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                  >
                    {lang === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                  >
                    {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination dots indicators */}
            <div className="flex justify-center gap-1.5 mt-6 relative z-10">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIdx ? 'w-4 bg-red-600' : 'bg-zinc-800 hover:bg-zinc-750'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
