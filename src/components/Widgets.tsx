/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { dictionary } from '../data';
import { Sun, Camera, Shield, HardDrive, Compass, Info, Check, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WidgetsProps {
  lang: Language;
}

export default function Widgets({ lang }: WidgetsProps) {
  const d = dictionary[lang];
  const [activeTab, setActiveTab] = useState<'solar' | 'cctv'>('solar');

  // Solar state (Amps)
  const [amps, setAmps] = useState<number>(20);

  // CCTV states
  const [camerasCount, setCamerasCount] = useState<number>(4);
  const [resolution, setResolution] = useState<'1080p' | '4mp' | '8mp'>('4mp');
  const [days, setDays] = useState<number>(30);

  // Pre-configured Solar Presets for faster understanding
  const solarPresets = [
    {
      amps: 5,
      label: { ar: 'شقة صغيرة • تشغيل أساسي', fr: 'Petit appartement • Basique' },
      desc: { ar: 'إنارة، مراوح، شاشات، ثلاجة صغيرة', fr: 'Éclairage, ventilateurs, TV, petit frigo' }
    },
    {
      amps: 10,
      label: { ar: 'منزل اقتصادي متكامل', fr: 'Maison standard • Éco' },
      desc: { ar: 'تشغيل كافة الأجهزة المنزلية عدا المكيف', fr: 'Tous les appareils électroménagers sauf climatisation' }
    },
    {
      amps: 20,
      label: { ar: 'منزل متوسط مع مكيف واحد', fr: 'Maison moyenne • Confort' },
      desc: { ar: 'تشغيل كامل مع تكييف واحد (طن ونصف)', fr: 'Équipement complet avec 1 climatiseur' }
    },
    {
      amps: 30,
      label: { ar: 'منزل كبير أو فيلا متكاملة', fr: 'Grande villa • Premium' },
      desc: { ar: 'تشغيل كامل مع تشغيل مكيفين في نفس الوقت', fr: 'Villa avec 2 climatiseurs simultanés' }
    }
  ];

  // Pre-configured CCTV Presets
  const cctvPresets = [
    { cameras: 4, label: { ar: 'منزل صغير أو شقة', fr: 'Petite maison / Appt' } },
    { cameras: 8, label: { ar: 'محل تجاري أو منزل كبير', fr: 'Commerce ou grande maison' } },
    { cameras: 16, label: { ar: 'شركة أو مستودع متوسط', fr: 'Entreprise ou dépôt' } },
    { cameras: 32, label: { ar: 'شبكة مراقبة مؤسساتية', fr: 'Réseau d\'entreprise' } }
  ];

  // Calculations: Solar
  // 1. Panels needed = load * 1.35 efficiency factor / 550W panel standard capacity
  const panelsNeeded = Math.ceil((amps * 220 * 1.35) / 550);
  // 2. Battery storage in kWh = (Amps * 220V * 6 hours average selective backup) / 1000
  const batteryKwhValue = ((amps * 220 * 6) / 1000).toFixed(1);
  // 3. Savings: estimated average neighborhood generator charges in Iraq (~300,000 to 400,000 IQD per amp yearly)
  const rawSavingsIqd = amps * 340000;

  // Calculations: CCTV
  const storageRatesGb = {
    '1080p': 12, // 1080p (2MP) H.265+ daily storage in GB per camera
    '4mp': 22,   // 4MP standard H.265+ daily storage in GB
    '8mp': 42    // 8MP/4K standard H.265+ daily storage in GB
  };
  const totalGbRequired = camerasCount * storageRatesGb[resolution] * days;
  const totalTbRequired = (totalGbRequired / 1024).toFixed(2);

  // Dynamic advice for focal length standard lenses based on camera counts/intent
  const getCameraLensAdvice = () => {
    if (camerasCount <= 4) {
      return {
        lens: '2.8 mm',
        label: {
          ar: 'عدسة بزاوية عريضة (102° درجة)',
          fr: 'Lentille grand-angle (102°)'
        },
        use: {
          ar: 'مثالية لكشف الصالات والغرف والمناطق القريبة من الكاميرا بوضوح تام.',
          fr: 'Parfaite pour les salons, chambres et les zones rapprochées sans angles morts.'
        }
      };
    } else if (camerasCount <= 12) {
      return {
        lens: '4.0 mm',
        label: {
          ar: 'عدسة بزاوية متوسطة متوازنة (80° درجة)',
          fr: 'Lentille standard équilibrée (80°)'
        },
        use: {
          ar: 'مثالية لكراجات السيارات، الحدائق والممرات الطويلة لتقديم رؤية متميزة.',
          fr: 'Recommandée pour les cours intérieures, parkings et couloirs extérieurs.'
        }
      };
    } else {
      return {
        lens: '6.0 mm',
        label: {
          ar: 'عدسة بزاوية ضيقة وتركيز تفصيلي (55° درجة)',
          fr: 'Lentille étroite ciblée (55°)'
        },
        use: {
          ar: 'مصممة للتركيز على الوجوه، الأبواب البعيدة، وقراءة لوحات المركبات بدقة.',
          fr: 'Conçue pour capturer les visages sur de longues distances et lire les plaques.'
        }
      };
    }
  };

  const lensAdvice = getCameraLensAdvice();

  return (
    <section
      id="calculator-section"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900 font-sans"
    >
      {/* Visual background grids */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,#b300000d,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,#b300000d,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header section with badge */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-red-950/50 text-red-500 border border-red-900/40 tracking-wider uppercase mb-4 animate-pulse">
            <Sparkles className="w-3 h-3 text-red-500 animate-pulse" />
            {lang === 'ar' ? 'حاسبات ذكية مبسطة' : 'OUTILS CONCIS & CALCULATEURS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white bg-gradient-to-r from-white via-zinc-100 to-zinc-455 bg-clip-text text-transparent">
            {d.calcTitle}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'ar' 
              ? 'تخلى عن الحسابات المعقدة. جرب أدواتنا البسيطة لتقدير احتياجات منزلك من الطاقة المتجددة وسعة أقراص الكاميرات بثوانٍ معدودة.'
              : 'Oubliez les calculs laborieux. Estimez rapidement vos besoins en panneaux solaires ou la capacité de stockage requise pour vos caméras.'}
          </p>
        </div>

        {/* Unified switcher pill */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-850 shadow-2xl">
            <button
              onClick={() => setActiveTab('solar')}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'solar'
                  ? 'bg-red-650 text-white shadow-md shadow-red-600/15'
                  : 'text-zinc-455 hover:text-white hover:bg-zinc-850/50'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>{lang === 'ar' ? 'حاسبة الطاقة الشمسية' : 'Calculateur Solaire'}</span>
            </button>
            <button
              onClick={() => setActiveTab('cctv')}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'cctv'
                  ? 'bg-red-650 text-white shadow-md shadow-red-600/15'
                  : 'text-zinc-455 hover:text-white hover:bg-zinc-850/50'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{lang === 'ar' ? 'سعة تخزين الكاميرات' : 'Stockage Caméras'}</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* SOLAR CALCULATOR TAB */}
          {activeTab === 'solar' && (
            <motion.div
              key="solar-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Interactive Inputs & Presets */}
              <div className="lg:col-span-5 bg-zinc-900/35 p-6 md:p-8 rounded-[28px] border border-zinc-900 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="p-3 bg-zinc-950 text-amber-500 rounded-xl border border-zinc-900">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-zinc-100">
                        {lang === 'ar' ? '1. اختر حجم احتياجك المنزلي' : '1. Choisissez votre besoin'}
                      </h3>
                      <p className="text-[11px] text-zinc-450">
                        {lang === 'ar' ? 'انقر على أحد الخيارات الجاهزة المقترحة لمطابقتها فوراً' : 'Cliquez sur l\'une de nos configurations prêtes à l\'emploi'}
                      </p>
                    </div>
                  </div>

                  {/* Preset Buttons */}
                  <div className="grid grid-cols-1 gap-2.5 mb-6">
                    {solarPresets.map((preset) => {
                      const isSelected = amps === preset.amps;
                      return (
                        <button
                          key={preset.amps}
                          onClick={() => setAmps(preset.amps)}
                          className={`relative p-4 rounded-xl text-right border transition-all text-xs flex flex-col gap-1 ${
                            lang === 'ar' ? 'text-right' : 'text-left'
                          } ${
                            isSelected
                              ? 'bg-red-950/20 border-red-500/80 text-red-200 shadow-sm ring-1 ring-red-500/50'
                              : 'bg-zinc-950/50 hover:bg-zinc-900/40 border-zinc-900 text-zinc-350'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="font-extrabold text-sm text-zinc-100">
                              {preset.label[lang]}
                            </span>
                            <span className={`font-mono font-black text-xs px-2.5 py-0.5 rounded-full ${
                              isSelected ? 'bg-red-650 text-white' : 'bg-zinc-900 text-zinc-450'
                            }`}>
                              {preset.amps} Amp
                            </span>
                          </div>
                          <span className="text-[11px] text-zinc-450">
                            {preset.desc[lang]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Manual Fine-tuning Range */}
                  <div className="pt-4 border-t border-zinc-900">
                    <div className="flex justify-between text-xs mb-3 font-mono">
                      <span className="text-zinc-400 font-extrabold">{d.solarCalcLabelAmps}</span>
                      <span className="text-red-500 font-black text-sm">{amps} A</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="5"
                      value={amps}
                      onChange={(e) => setAmps(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-red-650 focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-550 mt-2 font-mono">
                      <span>5A</span>
                      <span>20A</span>
                      <span>40A</span>
                      <span>60A</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <a
                    href={`https://wa.me/9647800000000?text=${encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً فريق التقني، قمت باختيار منظومة طاقة شمسية بقدرة ${amps} أمبير، كم الكلفة وتفاصيل الضمان؟`
                        : `Bonjour MUSILM TECH, j'ai sélectionné un système solaire de ${amps}A sur votre site, je souhaite avoir les prix.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-red-650 hover:bg-red-700 font-bold text-white transition-all text-sm shadow-md shadow-red-600/10 active:scale-95"
                  >
                    <span>{lang === 'ar' ? 'اطلب تسعيرة دقيقة الآن' : 'Demander un devis gratuit'}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Dynamic Simple Output Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Panels Requirement Card */}
                  <div className="bg-zinc-900/35 p-6 rounded-[24px] border border-zinc-900 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/[0.04] rounded-bl-full pointer-events-none" />
                    <div>
                      <Sun className="w-8 h-8 text-amber-500 mb-4" />
                      <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-1">
                        {d.solarCalcPlatesText}
                      </h4>
                      <div className="text-3xl font-black text-white font-mono mt-1 flex items-baseline gap-2">
                        {panelsNeeded}
                        <span className="text-xs font-normal text-zinc-450">
                          {lang === 'ar' ? 'ألواح (550W)' : 'panneaux'}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-4 leading-relaxed border-t border-zinc-900 pt-3">
                      {lang === 'ar'
                        ? 'ألواح أحادية البلورة كفاءة من فئة Tier 1 ممتازة لمناخ كربلاء.'
                        : 'Haute technologie Tier-1 particulièrement résistante aux grandes chaleurs.'}
                    </p>
                  </div>

                  {/* Battery Backup Recommendation */}
                  <div className="bg-zinc-900/35 p-6 rounded-[24px] border border-zinc-900 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/[0.04] rounded-bl-full pointer-events-none" />
                    <div>
                      <Shield className="w-8 h-8 text-red-500 mb-4" />
                      <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-1">
                        {d.solarCalcBatteryText}
                      </h4>
                      <div className="text-3xl font-black text-white font-mono mt-1 flex items-baseline gap-2">
                        {batteryKwhValue}
                        <span className="text-xs font-normal text-zinc-450">kWh (48V)</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-4 leading-relaxed border-t border-zinc-900 pt-3">
                      {lang === 'ar'
                        ? 'تخزين ليتيوم آمن مع نظام حماية ذكي لعمر افتراضي يتجاوز 10 سنوات.'
                        : 'Batteries au Lithium LiFePO4 de haute densité et longue durée de vie.'}
                    </p>
                  </div>
                </div>

                {/* Savings Box */}
                <div className="bg-red-950/15 p-6 rounded-[24px] border border-red-900/60 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#b3000004,transparent_45%)] pointer-events-none" />
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-zinc-950 text-red-500 rounded-xl border border-zinc-900">
                      <Compass className="w-6 h-6 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white mb-0.5">
                        {d.solarCalcSavingText}
                      </h4>
                      <p className="text-xs text-zinc-400 max-w-sm">
                        {lang === 'ar'
                          ? 'توفير التكلفة الإجمالية لدفعات المولدات الأهلية وصيانتها السنوية.'
                          : 'Économie directe sur les factures mensuelles des alternateurs privés de quartier.'}
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right shrink-0">
                    <div className="text-2xl md:text-3xl font-black text-red-500 font-mono">
                      ~ {rawSavingsIqd.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-extrabold tracking-wider block mt-0.5">
                      {lang === 'ar' ? 'دينار عراقي / سنوياً' : 'IQD / AN'}
                    </span>
                  </div>
                </div>

                {/* Info Note */}
                <div className="flex items-start gap-2.5 p-3.5 bg-zinc-900/40 rounded-xl border border-zinc-900 text-[11px] text-zinc-400 font-sans leading-normal">
                  <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <p>
                    {lang === 'ar'
                      ? 'ملاحظة: هذه الأرقام تقديرية ممتازة مبنية على الكفاءة الهندسية المعتمدة لضمان استمرارية مستقرة للأشعة الساقطة في العراق.'
                      : 'Note: Ces chiffres sont des approximations scientifiques pour assurer une totale autonomie sous l\'ensoleillement de l\'Irak.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CCTV STORAGE TAB */}
          {activeTab === 'cctv' && (
            <motion.div
              key="cctv-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Direct Slider Inputs */}
              <div className="lg:col-span-5 bg-zinc-900/35 p-6 md:p-8 rounded-[28px] border border-zinc-900 shadow-2xl flex flex-col justify-between">
                <div className="space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-zinc-950 text-red-500 rounded-xl border border-zinc-900">
                      <Camera className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-zinc-200">
                        {lang === 'ar' ? '1. ضبط خيارات الكاميرات' : '1. Configurez vos caméras'}
                      </h3>
                      <p className="text-[11px] text-zinc-450">
                        {lang === 'ar' ? 'قم بتعديل الخواص للحصول على الحجم المناسب فوراً' : 'Ajustez pour obtenir la taille d\'archivage idéale'}
                      </p>
                    </div>
                  </div>

                  {/* Camera Count Selector */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2.5 font-mono">
                      <span className="text-zinc-400 font-bold">{d.cctvCalcLabelCameras}</span>
                      <span className="text-red-500 font-black text-sm">{camerasCount}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 mb-3">
                      {cctvPresets.map((preset) => (
                        <button
                          key={preset.cameras}
                          onClick={() => setCamerasCount(preset.cameras)}
                          className={`py-2 px-1 rounded-lg border text-center text-[10px] leading-tight font-extrabold transition-all duration-200 ${
                            camerasCount === preset.cameras
                              ? 'bg-red-650 border-red-650 text-white shadow-sm'
                              : 'bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-800 border-zinc-900 text-zinc-400'
                          }`}
                          title={preset.label[lang]}
                        >
                          {preset.cameras} Cam
                        </button>
                      ))}
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="32"
                      value={camerasCount}
                      onChange={(e) => setCamerasCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-red-650 focus:outline-none"
                    />
                  </div>

                  {/* Camera Resolution Buttons */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-2 font-mono">
                      {d.cctvCalcLabelRez}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['1080p', '4mp', '8mp'] as const).map((rez) => {
                        const isSel = resolution === rez;
                        return (
                          <button
                            key={rez}
                            onClick={() => setResolution(rez)}
                            className={`py-2.5 px-2 rounded-xl text-xs font-mono font-bold border transition-all text-center ${
                              isSel
                                ? 'bg-red-650 border-red-650 text-white shadow-sm shadow-red-600/10'
                                : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-800'
                            }`}
                          >
                            <span className="block font-black">{rez === '1080p' ? '1080p' : rez === '4mp' ? '4 MP' : '8 MP / 4K'}</span>
                            <span className="block text-[8px] opacity-70 font-semibold uppercase mt-0.5">
                              {rez === '1080p' ? 'Full HD' : rez === '4mp' ? 'Super HD' : 'Ultra Ultra'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Archivability Range Slider (Days) */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2 font-mono">
                      <span className="text-zinc-400 font-bold">{d.cctvCalcLabelDays}</span>
                      <span className="text-red-500 font-black text-sm">
                        {days} {lang === 'ar' ? 'يوم تسجيل' : 'jours'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="7"
                      max="90"
                      step="7"
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-red-650 focus:outline-none"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-550 mt-1 font-mono">
                      <span>7 {lang === 'ar' ? 'أيام' : 'j'}</span>
                      <span>30 {lang === 'ar' ? 'يوم' : 'j'}</span>
                      <span>60 {lang === 'ar' ? 'يوم' : 'j'}</span>
                      <span>90 {lang === 'ar' ? 'يوم' : 'j'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <a
                    href={`https://wa.me/9647800000000?text=${encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً فريق التقني، قمت بحساب السعة المطلوبة لكاميرات المراقبة لدي: ${camerasCount} كاميرات بدقة ${resolution} لفترة ${days} يوم تطلب سعة ${totalTbRequired} تيرا. أود الاستفسار عن كلفة العرض.`
                        : `Bonjour MUSILM TECH, j'ai estimé le stockage de mes caméras (${camerasCount} caméras en ${resolution} pour ${days} jours = ${totalTbRequired} TB). Je souhaite obtenir des tarifs.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-red-650 hover:bg-red-700 font-bold text-white transition-all text-sm shadow-md shadow-red-600/10 active:scale-95"
                  >
                    <span>{lang === 'ar' ? 'احصل على تسعير الكاميرات' : 'Acheter le pack caméras'}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hard Drive & Interactive Simple Camera Lens Advisory */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                
                {/* Result Block: Storage HDD Required */}
                <div className="bg-zinc-900/35 p-6 rounded-[24px] border border-zinc-900 shadow-xl relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-zinc-500/[0.04] rounded-bl-full pointer-events-none" />
                  <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-zinc-950 text-zinc-400 rounded-2xl border border-zinc-900">
                        <HardDrive className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-1">
                          {d.cctvResultSiz}
                        </h4>
                        <div className="text-3xl font-black text-white font-mono mt-0.5">
                          {totalTbRequired} TB
                        </div>
                      </div>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-green-950/20 border border-green-900/55 text-[10px] font-bold text-green-500 font-mono uppercase tracking-wider shrink-0 mt-2 md:mt-0">
                      Standard H.265+ Codec
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-4 leading-relaxed border-t border-zinc-900 pt-3">
                    {lang === 'ar'
                      ? 'تم الحساب طبقا لضغط فيديو H.265+ الذكي من هيكفجن لضمان الحفاظ على دقة الأرشفة وتقليص الضياع بمعدل يصل 60%.'
                      : 'Espace calculé avec le standard intelligent Hikvision H.265+ réduisant l\'encombrement réseau.'}
                  </p>
                </div>

                {/* Simplified Lens advisory card (replaces high complex SVG diagrams for absolute clarity) */}
                <div className="bg-zinc-900/35 p-6 rounded-[24px] border border-zinc-900 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-900">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4.5 h-4.5 text-red-500" />
                        <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
                          {lang === 'ar' ? 'العدسة المقترحة لنظامك' : 'Lentille recommandée pour votre projet'}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-zinc-950 text-zinc-400 px-2.5 py-0.5 rounded-full">
                        Hikvision Standard Select
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xl md:text-2xl font-black text-red-500 font-mono">
                        {lensAdvice.lens}
                      </span>
                      <span className="text-xs font-extrabold text-zinc-350">
                        ({lensAdvice.label[lang]})
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {lensAdvice.use[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap justify-between items-center text-[10px] text-zinc-500 font-semibold font-mono gap-y-2">
                    <span className="flex items-center gap-1.5 text-green-500 bg-green-950/15 px-2 py-0.5 rounded border border-green-900/30">
                      <Check className="w-3.5 h-3.5" /> {lang === 'ar' ? 'توصيات دقيقة مستضافة' : 'Garanties Professionnelles'}
                    </span>
                    <span>HIKVISION PARTNERS</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
