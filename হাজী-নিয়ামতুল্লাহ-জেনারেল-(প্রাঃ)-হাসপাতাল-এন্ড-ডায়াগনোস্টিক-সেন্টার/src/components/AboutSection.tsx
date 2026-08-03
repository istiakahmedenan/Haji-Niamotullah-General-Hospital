import React from 'react';
import { Hospital, CheckCircle2, HeartHandshake, Stethoscope, Building2 } from 'lucide-react';
import { ABOUT_TEXT, HOSPITAL_INFO } from '../data/hospitalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Card Highlight */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg p-6 bg-[#0A2647] text-white shadow-md border-t-4 border-[#2C74B3] flex-1 flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-blue-300 mb-5">
                  <Hospital className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-white leading-snug">
                  {HOSPITAL_INFO.shortName}
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mb-5 leading-relaxed">
                  শেরপুর সদরে নির্ভরযোগ্য ও মানসম্মত চিকিৎসা সেবার একটি পরিচিত নাম।
                </p>

                <div className="space-y-2.5 pt-4 border-t border-blue-900 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>বিশেষজ্ঞ চিকিৎসকদের নিয়মিত পরামর্শ সেবা</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ডিজিটাল ডায়াগনস্টিক ও প্যাথলজি সেবা</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>২৪ ঘণ্টা জরুরি প্রসূতি ও অপারেশন সেবা</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-900 flex items-center justify-between text-xs text-slate-300">
                <span>ঠিকানা: জেলা হাসপাতাল রোড, শেরপুর</span>
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-cyan-300 font-bold hover:underline">
                  কল করুন
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#0A2647] flex-1">
              {/* Section Heading with Left Vertical Accent Bar */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-[#2C74B3] rounded-full block"></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] tracking-tight">
                  {ABOUT_TEXT.heading}
                </h2>
              </div>

              {/* Exact Bengali Descriptions */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="bg-slate-50 p-4 rounded-md border border-slate-200 text-slate-800 font-normal">
                  {ABOUT_TEXT.paragraph1}
                </p>
                
                <p className="bg-[#E1E9F0]/60 p-4 rounded-md border border-[#2C74B3]/20 text-slate-800 font-normal">
                  {ABOUT_TEXT.paragraph2}
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="p-3.5 rounded-md bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#2C74B3]/10 text-[#2C74B3] shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] text-xs mb-0.5">বিশেষজ্ঞ পরামর্শ</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      বিভিন্ন বিভাগের অভিজ্ঞ ও বিশেষজ্ঞ চিকিৎসকদের পরামর্শ সেবা।
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-md bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 text-emerald-700 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] text-xs mb-0.5">আন্তরিক সেবা</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      রোগীদের জন্য সর্বোচ্চ যত্ন, পরিচ্ছন্ন পরিবেশ ও আন্তরিক পরিচর্যা।
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
