/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldAlert, RefreshCw, Layers } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing Security Core...');

  // Boost progress simulation quickly
  useEffect(() => {
    const intervals = [
      { t: 0, text: 'Connecting to MUSILM TECH network...' },
      { t: 300, text: 'Booting Solar PV & BMS regulators...' },
      { t: 600, text: 'Configuring Hikvision AcuSense streams...' },
      { t: 900, text: 'Loading Iraq Karbala Maps & GPS Coordinates...' },
      { t: 1200, text: 'Setting up Bilingual Dictionary (AR/FR)...' },
      { t: 1400, text: 'System Armed. Rendering Luxury Canvas...' }
    ];

    intervals.forEach((step) => {
      setTimeout(() => {
        setBootText(step.text);
      }, step.t);
    });

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Trigger fade reveal
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-100 bg-zinc-950 flex flex-col items-center justify-center text-white font-sans p-6 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:30px_30px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-650/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative text-center max-w-sm w-full z-10">
        
        {/* Animated Brand Emblem logo */}
        <div className="relative w-16 h-16 rounded-2xl bg-red-650 flex items-center justify-center shadow-2xl shadow-red-600/30 mx-auto mb-8 animate-pulse">
          <Layers className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '6s' }} />
          <div className="absolute -inset-2 rounded-2xl bg-red-600 opacity-10 blur-md" />
        </div>

        {/* Corporate Title branding block */}
        <h2 className="text-xl font-bold tracking-widest font-mono mb-2">
          MUSILM TECH
        </h2>
        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider mb-8">
          فريق التقني • Security & Solar Engineering
        </p>

        {/* Progress bar line slider */}
        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-3 border border-zinc-900/60 shadow">
          <div
            className="h-full bg-red-600 shadow-md shadow-red-650/40 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Boot descriptions ticking */}
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
          <span className="truncate max-w-[250px]">{bootText}</span>
          <span className="font-extrabold text-red-500">{progress}%</span>
        </div>

      </div>
    </div>
  );
}
