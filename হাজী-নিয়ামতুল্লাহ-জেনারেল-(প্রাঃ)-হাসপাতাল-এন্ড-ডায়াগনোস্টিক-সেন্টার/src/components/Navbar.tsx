import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Mail, Hospital } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'হাসপাতাল সম্পর্কে', href: '#about' },
    { name: 'সেবাসমূহ', href: '#services' },
    { name: 'বিশেষজ্ঞ চিকিৎসক', href: '#doctors' },
    { name: 'পরিচালনা পর্ষদ', href: '#management' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-[#061B33] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-[#0A2647]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{HOSPITAL_INFO.address}</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`mailto:${HOSPITAL_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{HOSPITAL_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${HOSPITAL_INFO.phone}`} 
              className="flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>জরুরি হটলাইন: {HOSPITAL_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar with High Density Corporate Navy Theme */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#0A2647] text-white border-b-2 border-[#2C74B3] ${
          isScrolled 
            ? 'shadow-lg py-2.5' 
            : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hospital Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white flex items-center justify-center text-[#0A2647] font-extrabold shadow-md shrink-0">
              <Hospital className="w-6 h-6 text-[#0A2647]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight group-hover:text-blue-200 transition-colors">
                {HOSPITAL_INFO.shortName}
              </span>
              <span className="text-[11px] sm:text-xs text-blue-200 opacity-90 font-medium">
                এন্ড ডায়াগনস্টিক সেন্টার, শেরপুর
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-100 hover:text-white hover:bg-[#2C74B3]/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-2 bg-[#2C74B3] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>এখনই কল করুন</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-1.5 bg-[#2C74B3] text-white font-bold text-xs px-3 py-2 rounded-md shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>কল</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-[#2C74B3]/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay / drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A2647] border-t border-[#2C74B3]/40 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 text-white">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-md text-base font-semibold text-slate-100 hover:text-white hover:bg-[#2C74B3]/30 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#2C74B3]/30 flex flex-col gap-2">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#2C74B3] text-white font-bold py-3 rounded-md shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>এখনই কল করুন (০১৭১১-৩৫০৮৫০)</span>
                </a>
                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-800 text-slate-100 font-semibold py-2.5 rounded-md hover:bg-slate-700"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>গুগল ম্যাপে দেখুন</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
