/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { dictionary } from '../data';
import { ShieldCheck, MessageCircle, Play, Sparkles, ChevronDown, CheckCircle, Wifi, Database } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const d = dictionary[lang];
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    // Tick relative to Karbala, Iraq time (GMT+3)
    const updateTime = () => {
      const now = new Date();
      // GMT+3 offset translation
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const karbala = new Date(utc + 3600000 * 3);
      setLocalTime(karbala.toLocaleTimeString(lang === 'ar' ? 'ar-IQ' : 'fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <header
      id="hero-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-[radial-gradient(ellipse_at_bottom,#150101,transparent_70%)] bg-zinc-950 text-white overflow-hidden"
    >
      {/* Dynamic tech net grids and mesh glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating particles or smart vector visuals */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-red-900/40 pointer-events-none rounded-tl-3xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-red-900/40 pointer-events-none rounded-br-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Typography & Selling Hooks */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-right">
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-900/35 text-red-500 font-bold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'فريق هندسي متخصص وموثوق' : 'INGÉNIERIE DE SÉCURITÉ DE HAUT RANG'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight md:leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {d.heroHeadline}
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            {d.heroSubtitle}
          </p>

          {/* Premium Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#contact-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-650 hover:bg-red-700 text-white font-bold text-sm shadow-xl shadow-red-600/20 hover:scale-[1.01] transition-all"
            >
              <span>{d.heroCtaContact}</span>
            </a>
            
            <a
              href="https://wa.me/9647800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800 font-bold text-sm hover:scale-[1.01] transition-all"
            >
              <MessageCircle className="w-5 h-5 text-red-500" />
              <span>{d.heroCtaWhatsapp}</span>
            </a>

            <a
              href="#services-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-4 px-4.5 text-zinc-400 hover:text-white font-semibold text-sm transition-colors"
            >
              <span>{d.heroCtaServices}</span>
            </a>
          </div>

          {/* Trust assurances labels */}
          <div className="mt-10 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-500" />
              <span>{lang === 'ar' ? 'فحص وصيانة كربلاء 100%' : '100% Certifié Karbala'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-500" />
              <span>{lang === 'ar' ? 'ضمان رسمي لجميع الكاميرات' : 'Garanties Officielles Hikvision/EZVIZ'}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Futuristic Glassmorphic Panel (Interactive Command Screen Mockup) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 p-6 md:p-8 border border-zinc-850/80 shadow-2xl overflow-hidden group">
            
            {/* Absolute visual scanning effect */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse" />
            
            {/* Realtime stream simulation banner */}
            <div className="flex items-center justify-between font-mono pb-6 mb-6 border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
                  {lang === 'ar' ? 'البث المباشر الموحد' : 'CCTV FEED LIVE'}
                </span>
              </div>
              <div className="text-[11px] font-semibold text-red-500 bg-red-950/60 px-2.5 py-1 rounded border border-red-900/30">
                {localTime || '09:00:00 PM'}
              </div>
            </div>

            {/* Immersive Mock Video Canvas or Tech element */}
            <div className="relative w-full aspect-video bg-zinc-950 rounded-2xl border border-zinc-900 flex items-center justify-center overflow-hidden mb-6 group-hover:border-zinc-800 transition">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500&q=80"
                alt="Interactive Smart Interface"
                className="absolute inset-0 w-full h-full object-cover opacity-35 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              
              {/* Security scan visual overlay */}
              <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 bg-zinc-900/80 p-1.5 rounded border border-zinc-800 flex items-center gap-1">
                <Wifi className="w-2.5 h-2.5 text-red-500" />
                <span>CH-01: HQ CAM</span>
              </div>

              {/* Central Trigger Action Play */}
              <a
                href="#calculator-section"
                className="relative z-10 p-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all hover:scale-110 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white text-white" />
              </a>
            </div>

            {/* Live Interactive metrics below */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-900 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-red-500 font-black">⚡ PV</span>
                  <span className="text-zinc-400">{lang === 'ar' ? 'حالة توليد الألواح:' : 'Rendement Solaire :'}</span>
                </div>
                <span className="font-mono text-zinc-200 font-bold">94% Efficiency</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-900 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-red-500 font-black">🔒 LOCKS</span>
                  <span className="text-zinc-400">{lang === 'ar' ? 'تأمين المداخل الذكية:' : 'Accès Entrées :'}</span>
                </div>
                <span className="text-emerald-500 font-bold">{lang === 'ar' ? 'مؤمن بالكامل' : 'Verrouillé Secured'}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-900 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-red-500 font-black">📈 UPS</span>
                  <span className="text-zinc-400">{lang === 'ar' ? 'احتياطي الليثيوم للبطارية:' : 'Backup Lithium :'}</span>
                </div>
                <span className="font-mono font-bold text-zinc-200">100% Charge</span>
              </div>
            </div>

            <p className="text-[10px] text-zinc-650 text-center font-mono mt-4">
              {d.heroTrustBadge}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative down chevron bounce */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-sans">
          {lang === 'ar' ? 'اسحب لمعاينة المحتوى' : 'Défiler'}
        </span>
        <ChevronDown className="w-4 h-4 text-red-500 animate-bounce" />
      </div>
    </header>
  );
}
