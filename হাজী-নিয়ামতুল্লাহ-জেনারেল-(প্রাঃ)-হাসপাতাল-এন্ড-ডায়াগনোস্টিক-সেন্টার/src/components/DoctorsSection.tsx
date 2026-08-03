import React, { useState } from 'react';
import { UserCheck, Search, Phone, Stethoscope, Building, Calendar, CheckCircle } from 'lucide-react';
import { DOCTORS, DOCTOR_CATEGORIES, HOSPITAL_INFO, Doctor } from '../data/hospitalData';

export const DoctorsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('সব চিকিৎসক');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'সব চিকিৎসক' || doc.category === selectedCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.workplace && doc.workplace.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="doctors" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-[#2C74B3] rounded-full block"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] tracking-tight">
              বিশেষজ্ঞ চিকিৎসকবৃন্দ
            </h2>
          </div>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            পোস্টার অনুযায়ী আমাদের হাসপাতালে সেবা প্রদানকারী অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকদের তালিকা।
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-8 space-y-3">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ডাক্তারের নাম বা রোগ বিভাগ লিখে খুঁজুন..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2C74B3] focus:bg-white text-xs sm:text-sm transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 bg-slate-200 px-2 py-0.5 rounded"
              >
                ক্লিয়ার
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 pt-1">
            {DOCTOR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0A2647] text-white shadow-sm border-b-2 border-[#2C74B3]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards Grid (Strict NO photo rule: clean text-based cards) */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-md border border-slate-200 shadow-sm hover:shadow-md border-t-4 border-t-[#0A2647] transition-all p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Category / Specialty Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block bg-[#E1E9F0] text-[#0A2647] text-xs font-bold px-2.5 py-1 rounded border border-[#2C74B3]/30">
                      {doctor.badge}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      সিরিয়াল উন্মুক্ত
                    </span>
                  </div>

                  {/* Doctor Icon Header placeholder replacement: Text Avatar */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-[#0A2647] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm border border-[#2C74B3]/40">
                      {doctor.name.replace('ডাঃ ', '').charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0A2647] group-hover:text-[#2C74B3] transition-colors leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        রোগী দেখার স্থান: {HOSPITAL_INFO.shortName}
                      </p>
                    </div>
                  </div>

                  {/* Qualification / Designation */}
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200/80 mb-3">
                    <p className="text-xs font-medium text-slate-800 leading-relaxed">
                      {doctor.designation}
                    </p>
                  </div>

                  {/* Workplace info if specified in poster */}
                  {doctor.workplace && (
                    <div className="flex items-start gap-2 text-xs text-slate-700 mb-3 bg-amber-50/80 p-2.5 rounded border border-amber-200">
                      <Building className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span className="font-medium text-[11px]">{doctor.workplace}</span>
                    </div>
                  )}
                </div>

                {/* Call Action CTA */}
                <div className="pt-3 border-t border-slate-100 mt-2">
                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#2C74B3] hover:bg-blue-600 text-white font-bold py-2 px-3 rounded transition-colors text-xs shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>সিরিয়ালের জন্য কল করুন</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-md border border-dashed border-slate-300">
            <UserCheck className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-700">কোনো চিকিৎসক খুঁজে পাওয়া যায়নি</h3>
            <p className="text-slate-500 text-xs mt-1">
              অনুগ্রহ করে অন্য শব্দ বা ক্যাটাগরি দিয়ে চেষ্টা করুন।
            </p>
            <button
              onClick={() => {
                setSelectedCategory('সব চিকিৎসক');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 bg-[#0A2647] text-white text-xs font-bold rounded"
            >
              সব চিকিৎসক দেখুন
            </button>
          </div>
        )}

        {/* Note Box */}
        <div className="mt-8 p-3.5 rounded-md bg-[#E1E9F0] border border-[#2C74B3]/30 text-center text-xs text-slate-800">
          <p className="font-medium">
            💡 ডাক্তারের সিরিয়াল ও সময়সূচি সংক্রান্ত বিষদে জানতে হাসপাতাল রিসেপশনে সরাসরি কল করুন: {' '}
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="font-bold text-[#0A2647] underline">
              {HOSPITAL_INFO.phoneFormatted}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
