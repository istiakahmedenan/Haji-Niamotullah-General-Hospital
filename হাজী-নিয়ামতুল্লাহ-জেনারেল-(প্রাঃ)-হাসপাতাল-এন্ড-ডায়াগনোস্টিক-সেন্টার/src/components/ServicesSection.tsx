import React from 'react';
import { 
  FlaskConical, 
  Ambulance, 
  Activity, 
  HeartPulse, 
  Heart, 
  Scan, 
  Baby, 
  Stethoscope, 
  Microscope,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES, SERVICE_HIGHLIGHT_STATEMENT, HOSPITAL_INFO } from '../data/hospitalData';

const iconMap: Record<string, React.ReactNode> = {
  FlaskConical: <FlaskConical className="w-6 h-6 text-blue-600" />,
  Ambulance: <Ambulance className="w-6 h-6 text-red-600" />,
  Activity: <Activity className="w-6 h-6 text-cyan-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600" />,
  Heart: <Heart className="w-6 h-6 text-pink-600" />,
  Scan: <Scan className="w-6 h-6 text-indigo-600" />,
  Baby: <Baby className="w-6 h-6 text-emerald-600" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-violet-600" />,
  Microscope: <Microscope className="w-6 h-6 text-teal-600" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 lg:py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-[#2C74B3] rounded-full block"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] tracking-tight">
              আমাদের সেবাসমূহ
            </h2>
          </div>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            আধুনিক যন্ত্রপাতির মাধ্যমে নির্ভুল পরীক্ষা-নিরীক্ষা ও মানসম্মত চিকিৎসা সেবা।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white p-5 rounded-md border transition-all duration-200 hover:shadow-md flex flex-col justify-between border-t-4 ${
                service.isPopular 
                  ? 'border-t-[#2C74B3] border-slate-200 shadow-sm' 
                  : 'border-t-[#0A2647] border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded bg-slate-100 border border-slate-200 inline-block">
                    {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#2C74B3]" />}
                  </div>
                  {service.isPopular && (
                    <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                      ২৪ ঘণ্টা সেবা
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0A2647] mb-1.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>উপলব্ধ সেবা</span>
                <a 
                  href={`tel:${HOSPITAL_INFO.phone}`} 
                  className="text-[#2C74B3] hover:text-blue-800 flex items-center gap-1 group font-bold"
                >
                  <span>তথ্য জানতে</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner (Exact Statement from Poster) */}
        <div className="bg-[#0A2647] text-white rounded-lg p-6 sm:p-7 shadow-md border-t-4 border-[#2C74B3] relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            <div className="max-w-3xl">
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded border border-emerald-400/30 uppercase tracking-wider mb-2 inline-block">
                বিশেষ ঘোষণা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed mt-1">
                “{SERVICE_HIGHLIGHT_STATEMENT}”
              </h3>
              <p className="text-blue-100 text-xs mt-1.5">
                যেকোনো পরীক্ষা বা জরুরি নরমাল ডেলিভারির তথ্য পেতে আমাদের হটলাইনে যোগাযোগ করুন।
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="flex items-center gap-2 bg-[#2C74B3] hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-md shadow transition-all text-sm active:scale-95 border border-blue-400/30"
              >
                <PhoneCall className="w-4 h-4" />
                <span>কল করুন: {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
