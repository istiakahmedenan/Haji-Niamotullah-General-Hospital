import React from 'react';
import { MapPin, ExternalLink, Navigation, Compass } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const LocationCard: React.FC = () => {
  return (
    <div className="bg-[#0A2647] text-white rounded-lg p-5 sm:p-6 shadow-md border-t-4 border-[#2C74B3] relative overflow-hidden my-6">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 text-emerald-400 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-200 bg-[#2C74B3]/30 px-2 py-0.5 rounded border border-[#2C74B3]/40 mb-1.5">
              <Compass className="w-3 h-3 text-cyan-300" />
              <span>লোকেশন ম্যাপিং</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-0.5">
              আমাদের অবস্থান
            </h3>
            <p className="text-blue-100 text-xs font-medium mb-1">
              {HOSPITAL_INFO.address}
            </p>
            <p className="text-slate-300 text-xs">
              হাসপাতালের সঠিক অবস্থান ও যাওয়ার নির্দেশনা দেখতে Google Maps-এ দেখুন।
            </p>
          </div>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <a
            href={HOSPITAL_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#2C74B3] hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-md shadow transition-all text-xs sm:text-sm w-full lg:w-auto active:scale-95 border border-blue-400/30"
          >
            <Navigation className="w-4 h-4" />
            <span>গুগল ম্যাপে দেখুন</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
