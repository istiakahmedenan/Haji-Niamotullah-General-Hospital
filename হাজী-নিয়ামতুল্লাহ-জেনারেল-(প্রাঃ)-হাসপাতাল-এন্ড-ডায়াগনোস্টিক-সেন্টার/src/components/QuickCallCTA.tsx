import React from 'react';
import { Phone, PhoneCall } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const QuickCallCTA: React.FC = () => {
  return (
    <>
      {/* Inline Section CTA */}
      <section className="py-10 bg-[#0A2647] text-white border-y-2 border-[#2C74B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              চিকিৎসা পরামর্শ বা প্রয়োজনীয় সেবার জন্য যোগাযোগ করুন
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm">
              আমাদের অভিজ্ঞ মেডিকেল টিম এবং হটলাইন নাম্বার ২৪ ঘণ্টা আপনার সেবায় নিয়োজিত।
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="flex items-center gap-2.5 bg-[#2C74B3] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-md shadow-md text-sm sm:text-base transition-all active:scale-95 border border-blue-400/30"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" />
                <span>এখনই কল করুন: {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Hotline Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <a
          href={`tel:${HOSPITAL_INFO.phone}`}
          className="flex items-center gap-2 bg-[#2C74B3] text-white font-bold px-4 py-2.5 rounded-md shadow-lg border border-white text-xs"
          aria-label="Call Hospital Hotline"
        >
          <Phone className="w-4 h-4" />
          <span>জরুরি কল</span>
        </a>
      </div>
    </>
  );
};
