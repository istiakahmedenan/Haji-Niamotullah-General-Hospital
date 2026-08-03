import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';
import { HOSPITAL_INFO, SERVICE_HIGHLIGHT_STATEMENT } from '../data/hospitalData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative bg-[#0A2647] text-white min-h-[540px] lg:min-h-[580px] flex flex-col justify-between overflow-hidden">
      {/* Background Hospital Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={HOSPITAL_INFO.heroImageUrl}
            alt={HOSPITAL_INFO.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          />
        ) : (
          <div className="w-full h-full bg-[#0A2647]" />
        )}
        {/* Dark Corporate Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/95 via-[#0A2647]/85 to-[#0A2647]/65" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top Trust Tag */}
          <div className="inline-flex items-center gap-2 bg-[#2C74B3]/30 backdrop-blur-md border border-[#2C74B3]/50 text-blue-100 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>আধুনিক চিকিৎসা ও ডায়াগনস্টিক সেবায় আপনার বিশ্বস্ত প্রতিষ্ঠান</span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug tracking-normal mb-3 text-balance">
            {HOSPITAL_INFO.name}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-100 font-medium mb-4 leading-relaxed">
            “{HOSPITAL_INFO.tagline}”
          </p>

          {/* Location Badge */}
          <div className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm mb-7 max-w-2xl bg-[#0A2647]/80 backdrop-blur-sm p-3 rounded-lg border border-[#2C74B3]/40">
            <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>{HOSPITAL_INFO.address}</span>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Button 1: Call Now */}
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center justify-center gap-2.5 bg-[#2C74B3] hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-md shadow-md transition-all text-base active:scale-95 border border-blue-400/30"
            >
              <Phone className="w-5 h-5 animate-pulse text-white" />
              <span>এখনই কল করুন</span>
            </a>

            {/* Button 2: Email Us */}
            <a
              href={`mailto:${HOSPITAL_INFO.email}`}
              className="flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-900 text-slate-100 font-semibold px-4 py-3 rounded-md border border-slate-700 transition-all text-sm backdrop-blur-md active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>ই-মেইল করুন</span>
            </a>

            {/* Button 3: Google Maps */}
            <a
              href={HOSPITAL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 font-semibold px-4 py-3 rounded-md border border-emerald-600/60 transition-all text-sm backdrop-blur-md active:scale-95"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>গুগল ম্যাপে দেখুন</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Emergency Announcement Banner */}
      <div className="relative z-10 bg-[#061B33] border-t-2 border-[#2C74B3] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <div className="flex items-center gap-2.5 text-cyan-200 text-xs sm:text-sm font-semibold">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{SERVICE_HIGHLIGHT_STATEMENT}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-medium">
              জরুরি সেবা ২৪/৭
            </span>
            <span>হটলাইন: {HOSPITAL_INFO.phoneFormatted}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
