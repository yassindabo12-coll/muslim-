/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ProductItem } from '../types';
import { productsData, dictionary } from '../data';
import { ShoppingCart, ListCollapse, BadgePercent, Check, Eye } from 'lucide-react';

interface ProductsProps {
  lang: Language;
}

export default function Products({ lang }: ProductsProps) {
  const d = dictionary[lang];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cctv' | 'smart' | 'solar' | 'access'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Filter products
  const filteredProducts = productsData.filter((prod) => {
    if (selectedCategory === 'all') return true;
    return prod.category === selectedCategory;
  });

  const categories = [
    { key: 'all' as const, label: d.prodCategoryAll },
    { key: 'cctv' as const, label: d.prodCategoryCctv },
    { key: 'smart' as const, label: d.prodCategorySmart },
    { key: 'solar' as const, label: d.prodCategorySolar },
    { key: 'access' as const, label: d.prodCategoryAccess },
  ];

  // Helper to format Iraqi Dinar price
  const formatPrice = (p: number) => {
    return p.toLocaleString() + ' ' + (lang === 'ar' ? 'د.ع' : 'IQD');
  };

  return (
    <section
      id="products-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-3 animate-pulse">
            {lang === 'ar' ? 'الأكثر مبيعاً بضمان الوكالة' : 'EXCLUSIVITÉS ET CATALOGUE'}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 font-sans bg-gradient-to-r from-white via-zinc-200 to-zinc-450 bg-clip-text text-transparent">
            {d.productsTitle}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {d.productsSubtitle}
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`py-2.5 px-5 rounded-xl text-xs md:text-sm font-extrabold border transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-red-650 text-white border-red-650 shadow-md shadow-red-600/15'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-900 hover:text-white hover:bg-zinc-850 hover:border-zinc-850 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod, index) => {
            const hasDiscount = prod.oldPrice && prod.oldPrice > prod.price;
            const discountPct = hasDiscount ? Math.round(((prod.oldPrice! - prod.price) / prod.oldPrice!) * 100) : 0;
            const cardSpan = prod.isPopular ? 'lg:col-span-2' : 'lg:col-span-1';

            return (
              <div
                key={prod.id}
                id={`product-card-${prod.id}`}
                className={`group flex flex-col justify-between rounded-[24px] bg-zinc-900/35 border border-zinc-900 hover:border-red-650/30 p-5 shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden ${cardSpan}`}
              >
                <div>
                  {/* Image and badges */}
                  <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] bg-zinc-950 mb-5 border border-zinc-900">
                    <img
                      src={prod.image}
                      alt={prod.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Popular badge */}
                    {prod.isPopular && (
                      <span className="absolute top-3 right-3 text-[9px] font-extrabold px-2.5 py-1 rounded bg-red-650 text-white tracking-widest uppercase shadow">
                        {lang === 'ar' ? 'الأكثر طلباً' : 'POPULAIRE'}
                      </span>
                    )}

                    {/* Discount badge */}
                    {hasDiscount && (
                      <span className="absolute top-3 left-3 text-[9px] font-bold px-2 py-1 rounded bg-amber-500 text-black shadow flex items-center gap-1">
                        <BadgePercent className="w-3.5 h-3.5" />
                        <span>-{discountPct}% {lang === 'ar' ? 'خصم' : 'OFF'}</span>
                      </span>
                    )}
                  </div>

                  {/* Brand tags row */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                      {prod.tags[lang].map((tag, k) => (
                        <span key={k} className="text-[9px] font-extrabold text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>

                  {/* Product title */}
                  <h3 className="text-base md:text-lg font-black text-white mb-2 group-hover:text-red-505 transition-colors font-sans">
                    {prod.title[lang]}
                  </h3>
                  
                  {/* Product desc */}
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {prod.description[lang]}
                  </p>

                  {/* Minimal key specs inside card */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-zinc-950/75 border border-zinc-900/85 mb-5 font-sans">
                    {prod.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="text-zinc-500 font-medium">{spec.label[lang]}:</span>
                        <span className="text-zinc-300 font-bold">{spec.value[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Pricing and Action row */}
                  <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-zinc-900">
                    <div className="flex flex-col">
                      {hasDiscount && (
                        <span className="text-xs text-zinc-550 line-through mb-0.5 font-mono">
                          {formatPrice(prod.oldPrice!)}
                        </span>
                      )}
                      <span className="text-lg md:text-xl font-black text-red-500 font-mono">
                        {formatPrice(prod.price)}
                      </span>
                    </div>
                    
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      {lang === 'ar' ? 'السعر النهائي' : 'Prix Final'}
                    </span>
                  </div>

                  {/* Interactive Button handles order */}
                  <div className="grid grid-cols-5 gap-2">
                    {/* WhatsApp Checkout */}
                    <a
                      href={`https://wa.me/9647800000000?text=${encodeURIComponent(
                        lang === 'ar'
                          ? `مرحباً فريق التقني، أود حجز وشراء المنتج الآتي: ${prod.title.ar} بسعر ${formatPrice(prod.price)}. يرجى تزويدي بطريقة التوصيل والدعم.`
                          : `Bonjour MUSILM TECH, je souhaite commander : ${prod.title.fr} au prix de ${formatPrice(prod.price)}. Merci de m'indiquer la disponibilité.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-4 py-3 px-4 rounded-xl bg-red-650 hover:bg-red-700 text-white text-xs md:text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-red-600/10 transition-all hover:translate-y-[-1px] active:scale-95"
                    >
                      <ShoppingCart className="w-4 h-4 shrink-0" />
                      <span>{d.prodBtnOrder}</span>
                    </a>

                    {/* View Details modal toggle */}
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="col-span-1 p-3 rounded-xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-800 text-zinc-400 flex items-center justify-center transition-colors shadow-sm"
                      title={d.prodBtnSpecs}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Product Specs Sheet Dialog */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn overflow-auto">
            <div className="relative w-full max-w-xl bg-zinc-900 rounded-3xl border border-zinc-800 p-6 md:p-8 text-right max-h-[92vh] overflow-y-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-zinc-950/80 border border-zinc-850 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition"
              >
                <span>✕</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-4">
                {/* Product spec image frame */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-square bg-zinc-950 border border-zinc-900">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title[lang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Desc details title area */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                      {selectedProduct.category.toUpperCase()} • SPECIFICATIONS
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mt-1 mb-2">
                      {selectedProduct.title[lang]}
                    </h3>
                    <p className="text-zinc-450 text-xs leading-relaxed mb-4">
                      {selectedProduct.description[lang]}
                    </p>
                  </div>

                  <div className="text-red-500 text-xl font-mono font-extrabold p-3 bg-zinc-950/50 rounded-xl border border-zinc-850/80 inline-block self-start">
                    {formatPrice(selectedProduct.price)}
                  </div>
                </div>
              </div>

              {/* Specification grid bullets detailed */}
              <h4 className="text-sm font-bold text-white mt-8 mb-4 border-b border-zinc-800 pb-2">
                {lang === 'ar' ? 'جدول المواصفات الفنية للقطعة:' : 'Fiche Technique Détaillée :'}
              </h4>
              <div className="space-y-3 font-sans">
                {selectedProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs text-zinc-400 py-1.5 border-b border-zinc-900/60">
                    <span className="text-zinc-500 font-medium">{spec.label[lang]}:</span>
                    <span className="text-zinc-200 font-semibold">{spec.value[lang]}</span>
                  </div>
                ))}
              </div>

              {/* Action checkout row */}
              <div className="pt-6 mt-8 border-t border-zinc-850 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/9647800000000?text=${encodeURIComponent(
                    lang === 'ar'
                      ? `مرحباً فريق التقني، أود طلب وشراء القطعة: ${selectedProduct.title.ar} بقيمة ${formatPrice(selectedProduct.price)}.`
                      : `Bonjour MUSILM TECH, j'aimerais commander de suite : ${selectedProduct.title.fr} au tarif de ${formatPrice(selectedProduct.price)}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-650 hover:bg-red-700 text-white font-bold text-xs"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'طلب الحجز المباشر عبر واتساب' : 'Faire l\'achat direct'}</span>
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-zinc-950 hover:bg-zinc-850 hover:text-white border border-zinc-800 text-zinc-400 text-xs font-semibold text-center"
                >
                  {d.closeBtn}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
