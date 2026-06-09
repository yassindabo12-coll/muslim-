/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { dictionary } from '../data';
import { Menu, X, Globe, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const d = dictionary[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: d.navHome, href: '#hero-section' },
    { name: d.navServices, href: '#services-section' },
    { name: d.navProducts, href: '#products-section' },
    { name: d.navCalculator, href: '#calculator-section' },
    { name: d.navProjects, href: '#projects-section' },
    { name: d.navContact, href: '#contact-section' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'fr' : 'ar');
  };

  return (
    <nav
      id="main-navbar"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md py-4 border-b border-zinc-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-5 border-b border-zinc-900/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo & Corporate identity */}
        <a href="#hero-section" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-red-650 flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-105 transition-all">
            <span className="text-white font-extrabold text-lg m-0 p-0 font-mono">M</span>
            <div className="absolute -inset-1 rounded-xl bg-red-600 opacity-20 blur-md group-hover:opacity-40 transition-all pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-base md:text-lg tracking-wider font-mono">
              MUSILM TECH
            </span>
            <span className="text-[10px] text-red-500 font-bold tracking-tight">
              {lang === 'ar' ? 'فريق التقني' : 'L\'ÉQUIPE TECHNIQUE'}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-zinc-400 hover:text-red-500 transition-colors py-1.5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Global Controls: Language and Phone Contact */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switch button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl border border-zinc-850 bg-zinc-900/60 hover:bg-zinc-850 hover:border-zinc-850 text-zinc-300 font-extrabold text-xs transition-all pointer-events-auto active:scale-95 shadow-sm"
            title={lang === 'ar' ? 'Switch to French' : 'تغيير إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span>{lang === 'ar' ? 'FR' : 'العربية'}</span>
          </button>

          {/* Golden/Red premium contact CTA button */}
          <a
            href="https://wa.me/9647800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4.5 rounded-xl bg-red-650 hover:bg-red-700 text-sm font-bold text-white shadow-md shadow-red-600/10 transition-all pointer-events-auto hover:translate-y-[-1px] active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب استشارة' : 'WhatsApp'}</span>
          </a>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Quick Language switch button on mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 py-1.5 px-2.5 rounded-lg border border-zinc-850 bg-zinc-900/90 text-zinc-300 font-bold text-xs"
          >
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span>{lang === 'ar' ? 'FR' : 'عربي'}</span>
          </button>

          {/* Bar toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-850 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-zinc-950 border-l border-zinc-900 p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
            <a href="#hero-section" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-650 flex items-center justify-center font-mono text-white font-extrabold text-sm">
                M
              </div>
              <span className="text-white font-black text-sm tracking-widest font-mono">
                MUSILM TECH
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg animate-fadeIn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
 
          <div className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold text-zinc-300 hover:text-red-500 border-b border-zinc-900 pb-2.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
 
        <div className="pt-6 border-t border-zinc-900">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 border border-zinc-850 rounded-xl text-zinc-300 font-bold text-xs bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
            >
              <Globe className="w-4 h-4 text-red-500" />
              <span>{lang === 'ar' ? 'التحويل للغة الفرنسية' : 'Passer en Français'}</span>
            </button>

            <a
              href="https://wa.me/9647800000000"
              onClick={() => setIsMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-650 text-white font-bold text-sm shadow-md shadow-red-600/10 hover:bg-red-700 transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تواصل عبر واتساب' : 'Contacter sur WhatsApp'}</span>
            </a>
          </div>
          <p className="text-center text-[10px] text-zinc-500 mt-6 font-mono">
            {lang === 'ar' ? 'كربلاء المقدسة - شارع حولي 100' : 'Karbala Irak - Rue Hawli 100'}
          </p>
        </div>
      </div>
    </nav>
  );
}
