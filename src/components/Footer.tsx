/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { dictionary } from '../data';
import { Instagram, Facebook, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const d = dictionary[lang];

  return (
    <footer
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="bg-zinc-950 text-white font-sans border-t border-zinc-900 pt-16 pb-8 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Visual top border crimson line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
        
        {/* Col 1: Corporate Mission Branding */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-650 flex items-center justify-center font-mono text-white font-extrabold text-sm">
              M
            </div>
            <span className="text-white font-black text-sm tracking-wider font-mono">
              MUSILM TECH
            </span>
          </div>

          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-sm">
            {lang === 'ar'
              ? 'مكتب وفريق التقني للأنظمة الهندسية المتكاملة والأمنية في كربلاء المقدسة. نقدم أفضل حلول المراقبة CCTV ومحطات الطاقة الشمسية وابتكارات المنازل الذكية وتجهيز كافية مشاريع التخرج الهندسية.'
              : 'Prestations d\'ingénierie globale de sécurité, domotique et solaire à Karbala Irak. Nous allions l\'excellence technologique avec un support client continu.'}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/musilm_altqny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-900 bg-zinc-900/50 text-zinc-400 hover:text-red-500 hover:border-zinc-850 transition"
              title="Instagram @musilm_altqny"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-900 bg-zinc-900/50 text-zinc-400 hover:text-red-500 hover:border-zinc-850 transition"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation site map */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
            {lang === 'ar' ? 'روابط سريعة' : 'Sitemap'}
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-500">
            <li>
              <a href="#hero-section" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <span>{d.navHome}</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 shrink-0" />
              </a>
            </li>
            <li>
              <a href="#services-section" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <span>{d.navServices}</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 shrink-0" />
              </a>
            </li>
            <li>
              <a href="#products-section" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <span>{d.navProducts}</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 shrink-0" />
              </a>
            </li>
            <li>
              <a href="#calculator-section" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <span>{d.navCalculator}</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 shrink-0" />
              </a>
            </li>
            <li>
              <a href="#projects-section" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <span>{d.navProjects}</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 shrink-0" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Coordinates details summary */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
            {lang === 'ar' ? 'الدعم وخدمة الزبائن' : 'Contact Support'}
          </h4>
          <div className="space-y-3 text-xs text-zinc-500 leading-relaxed font-sans">
            <p>
              <strong className="text-zinc-300 block mb-0.5">{lang === 'ar' ? 'الفرع الرئيسي:' : 'Siège Principal :'}</strong>
              {lang === 'ar' ? 'العراق، كربلاء المقدسة، حولي الـ 100.' : 'Irak, Karbala, Hawli 100.'}
            </p>
            <p>
              <strong className="text-zinc-300 block mb-0.5">{lang === 'ar' ? 'البريد التقني:' : 'Email Pro :'}</strong>
              <span className="font-mono">support@musilm-altqny.com</span>
            </p>
            <p className="flex items-center gap-2 text-zinc-400 px-3 py-2 bg-zinc-900/60 border border-zinc-910 rounded-xl max-w-sm justify-center lg:justify-start">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-[10px] sm:text-xs">Hikvision Certified Partner</span>
            </p>
          </div>
        </div>

      </div>

      {/* Underline attribution copyrights bar */}
      <div className="border-t border-zinc-900 pt-8 mt-8 text-center text-[10px] md:text-xs text-zinc-650 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans max-w-7xl mx-auto">
        <span>{d.footerRights}</span>
        <span>{d.footerDeveloper}</span>
      </div>
    </footer>
  );
}
