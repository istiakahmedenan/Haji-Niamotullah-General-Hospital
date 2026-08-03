import React from 'react';
import { Hospital, MapPin, Phone, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2647] text-slate-300 border-t-4 border-t-[#2C74B3] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-blue-900/60">
          
          {/* Hospital Brand & Intro */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded bg-[#2C74B3] flex items-center justify-center text-white font-bold shadow-sm">
                <Hospital className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {HOSPITAL_INFO.shortName}
                </h3>
                <span className="text-[11px] text-blue-200">এন্ড ডায়াগনস্টিক সেন্টার</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {HOSPITAL_INFO.name} — শেরপুরের জেলা হাসপাতাল রোড, দুর্গানারায়ণপুর, বাগবাড়ী এলাকায় অবস্থিত একটি উন্নত চিকিৎসা ও ডায়াগনস্টিক সেবা প্রতিষ্ঠান।
            </p>

            <div className="pt-1">
              <span className="inline-block bg-[#2C74B3]/20 text-cyan-200 text-xs font-semibold px-2.5 py-1 rounded border border-[#2C74B3]/40">
                বিশ্বস্ত চিকিৎসা • আধুনিক ডায়াগনস্টিক সেবা • আন্তরিক পরিচর্যা
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-white font-bold text-sm mb-2 border-b border-[#2C74B3]/40 pb-1.5 inline-block">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">হোম</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">হাসপাতাল সম্পর্কে</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">আমাদের সেবাসমূহ</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-cyan-300 transition-colors">বিশেষজ্ঞ চিকিৎসকবৃন্দ</a>
              </li>
              <li>
                <a href="#management" className="hover:text-cyan-300 transition-colors">পরিচালনা পর্ষদ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">যোগাযোগ</a>
              </li>
            </ul>
          </div>

          {/* Full Contact Information */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-sm mb-2 border-b border-[#2C74B3]/40 pb-1.5 inline-block">
              যোগাযোগের ঠিকানা
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-emerald-300 font-bold">
                  {HOSPITAL_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-cyan-200">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-200 bg-[#2C74B3]/30 px-2.5 py-1 rounded border border-[#2C74B3]/50 hover:bg-[#2C74B3]/50 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span>লোকেশন দেখুন (গুগল ম্যাপস)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {HOSPITAL_INFO.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 bg-[#2C74B3]/30 hover:bg-[#2C74B3]/50 text-white px-2.5 py-1 rounded border border-[#2C74B3]/40 transition-colors text-xs font-semibold"
          >
            <span>উপরে যান</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
