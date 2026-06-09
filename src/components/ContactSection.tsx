/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { dictionary } from '../data';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Send, 
  CheckCircle, 
  Info,
  Map,
  Compass,
  ArrowUp
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const d = dictionary[lang];

  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'cctv',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple validation & submit Simulation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = lang === 'ar' ? 'يرجى إدخال اسمكم الكريم' : 'Veuillez saisir votre nom complet';
    }
    if (!formData.phone.trim()) {
      errors.phone = lang === 'ar' ? 'يرجى إدخال رقم الهاتف للتواصل' : 'Veuillez saisir votre numéro de téléphone';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = lang === 'ar' ? 'يرجى كتابة رقم هاتف صالح للاستخدام' : 'Numéro de téléphone invalide';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSending(true);
    // Mimic API server post duration
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'cctv', message: '' });
    }, 1500);
  };

  // Scroll to top assist
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative border-t border-zinc-910 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_right,#b300000a,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Contact Information, Official Coordinates & Sat-map mockup */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-3">
              {lang === 'ar' ? 'أبوابنا مفتوحة لخدمتكم' : 'SUPPORT ET BUREAUX'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              {lang === 'ar' ? 'تفضل بزيارتنا في كربلاء' : 'Coordonnées MUSILM TECH'}
            </h2>
            <p className="text-zinc-440 text-xs md:text-sm leading-relaxed mb-8">
              {d.contactSubtitle}
            </p>

            {/* Coordinates Cards */}
            <div className="space-y-4 mb-8 font-sans">
              
              {/* Address card */}
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-zinc-900/45 border border-zinc-910 text-xs text-zinc-300">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{lang === 'ar' ? 'الموقع الفعلي للمكتب' : 'Adresse de l\'agence'}</h3>
                  <p className="leading-relaxed text-zinc-400">{d.contactAddress}</p>
                </div>
              </div>

              {/* Phones details */}
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-zinc-900/45 border border-zinc-910 text-xs text-zinc-300">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{d.contactPhone}</h3>
                  <div className="space-y-1 mt-1 font-mono text-zinc-300 font-semibold dir-ltr text-right">
                    <p className="hover:text-red-500 transition-colors">
                      <a href="tel:+9647800000000">+964 780 000 0000</a>
                    </p>
                    <p className="hover:text-red-500 transition-colors">
                      <a href="tel:+9647700000000">+964 770 000 0000</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business hours card */}
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-zinc-900/45 border border-zinc-910 text-xs text-zinc-300">
                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{d.contactHours}</h3>
                  <p className="leading-relaxed text-zinc-400 mt-1">{d.contactHoursVal}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Luxury Interactive Mock Satellite/Blueprint Location Area (Avoid slow loading map widgets) */}
          <div className="relative w-full h-48 bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden group flex flex-col justify-between p-4 shadow-inner">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            
            {/* Visual Schematic Radar Accent */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200">
              <circle cx="150" cy="100" r="40" fill="none" stroke="#b30000" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="150" cy="100" r="80" fill="none" stroke="#b30000" strokeWidth="0.5" />
              <path d="M 150,0 L 150,200" stroke="#b30000" strokeWidth="0.5" strokeOpacity="0.3" />
              <path d="M 0,100 L 300,100" stroke="#b30000" strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>

            {/* Glowing marker indicator on Map mock */}
            <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center animate-ping" />
              <div className="absolute w-3.5 h-3.5 rounded-full bg-red-650 border border-white" />
            </div>

            {/* Top and bottom status text inside radar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-850">
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span>32.616° N, 44.025° E</span>
              </span>
              <span className="font-bold text-red-500 font-sans">{lang === 'ar' ? 'وكالة معتمدة' : 'Bureau Karbala'}</span>
            </div>

            <div className="relative z-10 p-3 bg-zinc-900/90 border border-zinc-850 rounded-xl text-[10px] md:text-xs text-zinc-300">
              <span className="font-bold text-white">{lang === 'ar' ? 'فريق التقني - حولي 100' : 'MUSILM TECH - Karbala'}</span>: {lang === 'ar' ? 'قرب تقاطع المجمع الرئيسي لمدخل كربلاء ' : 'Près du grand rond-point principal d\'entrée'}
            </div>
          </div>
        </div>

        {/* Right Side: Consultation Booking Form */}
        <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-900/80 p-6 md:p-10 rounded-3xl relative overflow-hidden backdrop-blur-sm shadow-xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_top_left,#b300000a,transparent_50%)] pointer-events-none" />

          {isSuccess ? (
            <div className="min-h-[300px] flex flex-col items-center justify-center text-center py-12">
              <div className="p-4 bg-emerald-500/10 text-emerald-500 border border-emerald-900/40 rounded-full mb-6 relative animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                {lang === 'ar' ? 'شكراً لثقتكم بفريق التقني' : 'Nous avons bien reçu votre demande !'}
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                {d.contactFormSuccess}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-6 py-2 px-5 hover:text-white rounded-xl bg-zinc-850 border border-zinc-800 text-xs font-semibold text-zinc-400 transition"
              >
                {lang === 'ar' ? 'إرسال طلب استشارة آخر' : 'Nouveau message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="border-b border-zinc-900 pb-4 mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {d.contactFormBtn}
                </h3>
                <p className="text-xs text-zinc-500">
                  {lang === 'ar' ? 'املأ الحقول التالية للتوجه المباشر للتجهيز والتخطيط الفني' : 'Remplissez le formulaire de planification gratuite'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                    {d.contactFormName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={lang === 'ar' ? 'يكتب الاسم الرباعي أو المؤسسة...' : 'Ex: Jean Dupont'}
                    className={`w-full py-3 px-4 rounded-xl bg-zinc-950 text-white text-xs border focus:outline-none focus:border-red-600 transition-colors ${
                      formErrors.name ? 'border-red-650' : 'border-zinc-850'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-red-500 block font-sans">{formErrors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                    {d.contactFormPhone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={lang === 'ar' ? 'مثال: 07800000000...' : 'Ex: +964780...'}
                    className={`w-full py-3 px-4 rounded-xl bg-zinc-950 text-white text-xs border focus:outline-none focus:border-red-600 transition-colors ${
                      formErrors.phone ? 'border-red-650' : 'border-zinc-850'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-500 block font-sans">{formErrors.phone}</span>
                  )}
                </div>

              </div>

              {/* Service list drop */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                  {d.contactFormService}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-xs border border-zinc-850 focus:outline-none focus:border-red-600"
                >
                  <option value="cctv">{lang === 'ar' ? 'تركيب كاميرات المراقبة ' : 'Caméras et CCTV Surveillance'}</option>
                  <option value="solar">{lang === 'ar' ? 'منظومات طاقة شمسية ' : 'Systèmes Solaires / Photovoltaïque'}</option>
                  <option value="smart-home">{lang === 'ar' ? 'تحكيم ومنازل ذكية وأوتوماتيكية' : 'Domotique intelligente (Smart Home)'}</option>
                  <option value="ezviz">{lang === 'ar' ? 'منتجات أمان EZVIZ اللاسلكية' : 'Sécurité et Alarme EZVIZ Wifi'}</option>
                  <option value="repairs">{lang === 'ar' ? 'صيانة حاسبات أو موبايلات' : 'Dépannage Informatique et Mobile'}</option>
                  <option value="graduation">{lang === 'ar' ? 'دعم مشاريع التخرج وعقود الراديو' : 'Support Technique de Fin d\'Études'}</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                  {d.contactFormMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={lang === 'ar' ? 'يرجى كتابة رغبتكم، عدد الكاميرات أو تفاصيل البناء والممتلكات...' : 'Estimez vos besoins...'}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-950 text-white text-xs border border-zinc-850 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              {/* CTA Submit Button with Status checking inside Form markup */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl bg-red-650 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-red-600/15 disabled:opacity-50 active:scale-95"
              >
                {isSending ? (
                  <span>{d.contactFormSending}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{d.contactFormBtn}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[10px] text-zinc-550 border-t border-zinc-900 pt-4 font-sans justify-center">
                <Info className="w-3.5 h-3.5 text-red-500" />
                <span>{d.fastDeliveryWarranty}</span>
              </div>

            </form>
          )}
        </div>

      </div>

      {/* FIXED FLOATING WHATSAPP ASSISTANCE BUTTON */}
      <a
        href="https://wa.me/9647800000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%20MUSILM%20TECH"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 active:scale-90 transition-all flex items-center justify-center animate-pulse group"
        title={d.whatsappTooltip}
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-650 shrink-0" />
        <span className="hidden group-hover:inline-block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 text-xs font-bold font-sans px-2 shrink-0">
          {lang === 'ar' ? 'راسلنا مباشرة' : 'Support WhatsApp'}
        </span>
      </a>

      {/* QUICK JUMP TO TOP SCROLL */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white shadow-xl hover:border-zinc-700 transition"
        title={lang === 'ar' ? 'صعود للأعلى' : 'Retour en haut'}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </section>
  );
}
