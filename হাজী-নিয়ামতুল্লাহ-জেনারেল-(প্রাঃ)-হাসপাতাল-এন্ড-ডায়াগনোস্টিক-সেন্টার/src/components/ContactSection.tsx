import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { LocationCard } from './LocationCard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceOrDoctor: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-[#2C74B3] rounded-full block"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] tracking-tight">
              যোগাযোগ করুন
            </h2>
          </div>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            যেকোনো চিকিৎসা সংক্রান্ত প্রয়োজনে বা তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Hospital Contact Details & 3 Required Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-md border border-slate-200 border-t-4 border-t-[#0A2647] space-y-4 shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[#2C74B3] uppercase tracking-wider block mb-0.5">
                  হাসপাতাল নাম
                </span>
                <h3 className="text-lg font-bold text-[#0A2647] leading-snug">
                  {HOSPITAL_INFO.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="p-2 rounded bg-slate-200 text-rose-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2647] text-xs">ঠিকানা</h4>
                  <p className="text-slate-700 text-xs mt-0.5 leading-relaxed">
                    {HOSPITAL_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="p-2 rounded bg-emerald-100 text-emerald-800 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2647] text-xs">ফোন নম্বর</h4>
                  <p className="text-[#0A2647] font-bold text-sm mt-0.5">
                    {HOSPITAL_INFO.phoneFormatted}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-medium">২৪ ঘণ্টা সেবা চালু</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="p-2 rounded bg-blue-100 text-[#0A2647] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2647] text-xs">ই-মেইল</h4>
                  <p className="text-slate-700 text-xs mt-0.5 font-medium break-all">
                    {HOSPITAL_INFO.email}
                  </p>
                </div>
              </div>

              {/* 3 Interactive Buttons requested */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                {/* Button 1: Call */}
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#2C74B3] hover:bg-blue-600 text-white font-bold py-2.5 px-3 rounded shadow transition-colors text-xs sm:text-sm border border-blue-400/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>কল করুন ({HOSPITAL_INFO.phoneFormatted})</span>
                </a>

                {/* Button 2: Email */}
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#0A2647] hover:bg-slate-900 text-white font-semibold py-2 px-3 rounded transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ই-মেইল করুন</span>
                </a>

                {/* Button 3: Google Maps */}
                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-[#0A2647] font-semibold py-2 px-3 rounded border border-slate-300 transition-colors text-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>গুগল ম্যাপে দেখুন</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment / Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-md border border-slate-200 border-t-4 border-t-[#2C74B3] shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#2C74B3] font-bold text-xs mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>অনলাইন অনুসন্ধান বার্তা</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2647] mb-1.5">
                  পরামর্শ বা অ্যাপয়েন্টমেন্টের আবেদন
                </h3>
                <p className="text-slate-600 text-xs mb-4">
                  নিচের ফরমে আপনার তথ্য পূরণ করুন, আমাদের প্রতিনিধি আপনার সাথে দ্রুত যোগাযোগ করবেন।
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-5 text-center animate-in fade-in duration-300">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900 mb-1">
                      ধন্যবাদ! আপনার বার্তা আমরা পেয়েছি।
                    </h4>
                    <p className="text-slate-600 text-xs mb-4">
                      আমাদের প্রতিনিধি শীঘ্রই আপনার দেয়া নম্বরে যোগাযোগ করবেন। জরুরি সিরিয়ালের জন্য সরাসরি কল করুন।
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <a
                        href={`tel:${HOSPITAL_INFO.phone}`}
                        className="bg-[#2C74B3] text-white font-bold px-4 py-2 rounded text-xs"
                      >
                        সরাসরি কল করুন
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', phone: '', serviceOrDoctor: '', message: '' });
                        }}
                        className="bg-slate-200 text-slate-700 font-semibold px-3 py-2 rounded text-xs"
                      >
                        নতুন বার্তা পাঠান
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0A2647] mb-1">
                          আপনার নাম *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="আপনার পূর্ণ নাম লিখুন"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A2647] mb-1">
                          মোবাইল নম্বর *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="০১৭XXXXXXXX"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2647] mb-1">
                        কাঙ্ক্ষিত সেবা বা চিকিৎসক (ঐচ্ছিক)
                      </label>
                      <select
                        value={formData.serviceOrDoctor}
                        onChange={(e) => setFormData({ ...formData, serviceOrDoctor: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                      >
                        <option value="">রোগী দেখার ডাক্তার বা পরীক্ষা বাছাই করুন...</option>
                        {DOCTORS.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.badge})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2647] mb-1">
                        আপনার বার্তা / সমস্যার বিবরণ
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="আপনার প্রয়োজনীয় তথ্য বা সমস্যা সংক্ষেপে লিখুন..."
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0A2647] hover:bg-slate-900 text-white font-bold py-2.5 px-4 rounded shadow transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95 border-b-2 border-[#2C74B3]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>বার্তা পাঠান</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Quick Info */}
              <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#2C74B3] shrink-0" />
                <span>২৪ ঘণ্টা জরুরী সেবা ও প্যাথলজি টেস্ট অব্যাহত থাকে।</span>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Location Card Requirement */}
        <LocationCard />

      </div>
    </section>
  );
};
