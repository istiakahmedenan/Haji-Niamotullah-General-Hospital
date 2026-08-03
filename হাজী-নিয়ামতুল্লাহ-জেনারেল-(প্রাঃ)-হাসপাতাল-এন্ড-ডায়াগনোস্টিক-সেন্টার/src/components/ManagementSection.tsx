import React from 'react';
import { Users, Phone, Award, Building, UserCheck } from 'lucide-react';
import { MANAGEMENT_BOARD } from '../data/hospitalData';

export const ManagementSection: React.FC = () => {
  return (
    <section id="management" className="py-12 lg:py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-[#2C74B3] rounded-full block"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] tracking-tight">
              পরিচালনা পর্ষদ
            </h2>
          </div>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            হাসপাতালের সুষ্ঠু পরিচালনা ও মানসম্পন্ন সেবা নিশ্চিতকরণে নিয়োজিত পরিচালনা পর্ষদ।
          </p>
        </div>

        {/* Management Grid (Strict NO photos rule: Text-based professional cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MANAGEMENT_BOARD.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-md border border-slate-200 shadow-sm hover:shadow-md border-t-4 border-t-[#0A2647] transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Role Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded border ${
                    index === 0 
                      ? 'bg-[#0A2647] text-white border-[#0A2647]' 
                      : 'bg-[#E1E9F0] text-[#0A2647] border-[#2C74B3]/30'
                  }`}>
                    {member.role}
                  </span>
                  <UserCheck className="w-4 h-4 text-slate-400" />
                </div>

                {/* Director Name */}
                <h3 className="text-lg font-bold text-[#0A2647] mb-2">
                  {member.name}
                </h3>

                {/* Additional honorary note if present */}
                {member.note && (
                  <div className="bg-[#E1E9F0]/60 p-2.5 rounded border border-[#2C74B3]/30 mb-3 text-xs font-medium text-[#0A2647] flex items-start gap-2">
                    <Award className="w-4 h-4 text-[#2C74B3] shrink-0 mt-0.5" />
                    <span>{member.note}</span>
                  </div>
                )}
              </div>

              {/* Phone Contacts with direct click-to-call links */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 mt-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  মোবাইল নম্বর
                </span>
                {member.phones.map((phoneNum) => {
                  const displayPhone = phoneNum === '01711350850' ? '০১৭১১-৩৫০৮৫০' :
                                       phoneNum === '01915411829' ? '০১৯১৫-৪১১৮২৯' :
                                       phoneNum === '01988312001' ? '০১৯৮৮-৩১২০০১' :
                                       phoneNum === '01741785166' ? '০১৭৪১-৭৮৫১৬৬' : phoneNum;

                  return (
                    <a
                      key={phoneNum}
                      href={`tel:${phoneNum}`}
                      className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-[#2C74B3] hover:text-white text-slate-800 transition-colors font-bold text-xs border border-slate-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#2C74B3] group-hover:text-white" />
                        <span>{displayPhone}</span>
                      </div>
                      <span className="text-[11px] text-[#2C74B3] group-hover:text-cyan-200 font-semibold">
                        কল করুন →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
