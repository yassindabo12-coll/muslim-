/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Widgets from './components/Widgets';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectGallery from './components/ProjectGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-red-650 selection:text-white overflow-x-hidden scroll-smooth">
      {/* Premium Bilingual Header */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Container */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Services Section */}
        <Services lang={lang} />

        {/* Products Section */}
        <Products lang={lang} />

        {/* Technical Calculators */}
        <Widgets lang={lang} />

        {/* Strengths & Testimonials Slider */}
        <WhyChooseUs lang={lang} />

        {/* Real Projects Gallery Showcase */}
        <ProjectGallery lang={lang} />

        {/* Address and Interactive Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Responsive Sitemap Footer */}
      <Footer lang={lang} />
    </div>
  );
}
