export interface Doctor {
  id: string;
  name: string;
  badge: string;
  designation: string;
  workplace?: string;
  category: string;
}

export interface ManagementMember {
  name: string;
  role: string;
  note?: string;
  phones: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
}

export const HOSPITAL_INFO = {
  name: 'হাজী নিয়ামতুল্লাহ জেনারেল (প্রাঃ) হাসপাতাল এন্ড ডায়াগনোস্টিক সেন্টার',
  shortName: 'হাজী নিয়ামতুল্লাহ হাসপাতাল',
  tagline: 'বিশ্বস্ত চিকিৎসা, আধুনিক ডায়াগনস্টিক সেবা ও আন্তরিক পরিচর্যা',
  address: 'জেলা হাসপাতাল রোড, দুর্গানারায়ণপুর, বাগবাড়ী, শেরপুর।',
  phone: '01711350850',
  phoneFormatted: '০১৭১১-৩৫০৮৫০',
  email: 'haziniyamotullahospital@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/dA6ShC7y2bSvn6xE6?g_st=ic',
  // Direct hospital image URL provided by user
  heroImageUrl: 'https://i.ibb.co.com/7dQzzKBV/61751870-6-C7-B-4-E4-B-99-BB-23-AC29-A0-C3-AE.png',
  fallbackImageUrl: 'https://ibb.co.com/7dQzzKBV',
};

export const ABOUT_TEXT = {
  heading: 'হাসপাতাল সম্পর্কে',
  paragraph1: 'হাজী নিয়ামতুল্লাহ জেনারেল (প্রাঃ) হাসপাতাল এন্ড ডায়াগনোস্টিক সেন্টার শেরপুরের জেলা হাসপাতাল রোড, দুর্গানারায়ণপুর, বাগবাড়ী এলাকায় অবস্থিত একটি চিকিৎসা ও ডায়াগনস্টিক সেবা প্রতিষ্ঠান।',
  paragraph2: 'এখানে বিভিন্ন বিশেষজ্ঞ চিকিৎসকের পরামর্শ, চিকিৎসা, সার্জারি এবং বিভিন্ন ধরনের ডায়াগনস্টিক পরীক্ষা-নিরীক্ষার সেবা প্রদান করা হয়।',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'lab',
    title: 'কম্পিউটারাইজড প্যাথলজিক্যাল ল্যাব',
    description: 'আধুনিক ও কম্পিউটারাইজড প্রযুক্তির মাধ্যমে নিখুঁত ও নির্ভুল প্যাথলজিক্যাল পরীক্ষা।',
    iconName: 'FlaskConical',
    isPopular: true,
  },
  {
    id: 'ambulance',
    title: 'সার্বক্ষণিক অ্যাম্বুলেন্স সার্ভিস',
    description: 'জরুরি রোগী পরিবহনে ২৪ ঘণ্টা প্রস্তুত সুসজ্জিত অ্যাম্বুলেন্স সেবা।',
    iconName: 'Ambulance',
    isPopular: true,
  },
  {
    id: 'usg',
    title: 'ডিজিটাল আল্ট্রাসনোগ্রাম',
    description: 'উচ্চক্ষমতাসম্পন্ন ডিজিটাল আল্ট্রাসনোগ্রাফি দ্বারা প্রসূতি ও অন্যান্য অঙ্গের স্পষ্ট পরীক্ষা।',
    iconName: 'Activity',
  },
  {
    id: 'ecg',
    title: 'ডিজিটাল ই.সি.জি',
    description: 'হৃদরোগ নির্ণয়ে দ্রুত ও নির্ভুল ডিজিটাল ইলেক্ট্রোকার্ডিওগ্রাম সেবা।',
    iconName: 'HeartPulse',
  },
  {
    id: 'echo',
    title: 'ইকো কার্ডিওগ্রাফি',
    description: 'হৃৎপিণ্ডের গঠন ও কর্মক্ষমতা পর্যবেক্ষণে উন্নতমানের ইকো পরীক্ষা।',
    iconName: 'Heart',
  },
  {
    id: 'xray',
    title: 'ডিজিটাল এক্স-রে',
    description: 'স্বল্প রেডিয়েশন ও পরিষ্কার ফলাফলের ডিজিটাল এক্স-রে সুবিধা।',
    iconName: 'Scan',
  },
  {
    id: 'delivery',
    title: '২৪ ঘণ্টা নরমাল ডেলিভারি',
    description: 'অভিজ্ঞ প্রসূতি বিশেষজ্ঞ ও নার্সদের তত্ত্বাবধানে প্রসূতি মায়েদের ২৪ ঘণ্টা নরমাল ডেলিভারি।',
    iconName: 'Baby',
    isPopular: true,
  },
  {
    id: 'surgery',
    title: 'মেজর ও মাইনর অপারেশন',
    description: 'আধুনিক শীতাতপ নিয়ন্ত্রিত ও জীবাণুমুক্ত অপারেশন থিয়েটারে দক্ষ সার্জন দ্বারা অপারেশন।',
    iconName: 'Stethoscope',
  },
  {
    id: 'pathology_all',
    title: 'বিভিন্ন ধরনের প্যাথলজিক্যাল টেস্ট',
    description: 'রক্ত, প্রস্রাব, হরমোন সহ রক্ত সংক্রান্ত সব ধরনের বায়োকেমিকেল পরীক্ষা।',
    iconName: 'Microscope',
  },
];

export const SERVICE_HIGHLIGHT_STATEMENT = '২৪ ঘণ্টা নরমাল ডেলিভারী সহ মেজর/মাইনর অপারেশন ও সকল ধরনের প্যাথলজিক্যাল টেস্ট করা হয়।';

export const MANAGEMENT_BOARD: ManagementMember[] = [
  {
    name: 'মোঃ ইব্রাহিম খলিল',
    role: 'ব্যবস্থাপনা পরিচালক',
    note: 'সাবেক সভাপতি, শেরপুর জেলা কড়া ব্যবসায়ী সমিতি',
    phones: ['01711350850', '01915411829'],
  },
  {
    name: 'মোঃ ইউনুস হাসান উৎস',
    role: 'পরিচালক',
    phones: ['01988312001'],
  },
  {
    name: 'ইশতিয়াক আহমেদ ইশান',
    role: 'পরিচালক',
    phones: ['01741785166'],
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'ডাঃ লুৎফর রহমান',
    badge: 'স্ত্রী ও প্রসূতি বিশেষজ্ঞ',
    designation: 'স্ত্রী ও প্রসূতি বিশেষজ্ঞ সার্জন',
    category: 'গাইনি ও প্রসূতি',
  },
  {
    id: 'doc-2',
    name: 'ডাঃ মায়া হোড়',
    badge: 'গাইনি ও অবস্ বিশেষজ্ঞ',
    designation: 'গাইনি বিশেষজ্ঞ এবং সার্জন',
    category: 'গাইনি ও প্রসূতি',
  },
  {
    id: 'doc-3',
    name: 'ডাঃ আরিফুন সুলতানা',
    badge: 'গাইনি ও বন্ধ্যাত্ব বিশেষজ্ঞ',
    designation: 'গাইনি, প্রসূতি ও বন্ধ্যাত্ব রোগ বিশেষজ্ঞ ও সার্জন',
    category: 'গাইনি ও প্রসূতি',
  },
  {
    id: 'doc-4',
    name: 'ডাঃ তানিয়া ইয়াসমিন এটনি',
    badge: 'গাইনি ও প্রসূতি সার্জন',
    designation: 'গাইনি, প্রসূতি ও বন্ধ্যাত্ব রোগের চিকিৎসক এবং সার্জন',
    category: 'গাইনি ও প্রসূতি',
  },
  {
    id: 'doc-5',
    name: 'ডাঃ জাকিয়া রেজোয়ানা',
    badge: 'গাইনি ও প্রসূতি চিকিৎসক',
    designation: 'গাইনি, প্রসূতি ও বন্ধ্যাত্ব রোগের চিকিৎসক',
    category: 'গাইনি ও প্রসূতি',
  },
  {
    id: 'doc-6',
    name: 'ডাঃ মোঃ রবিউল হক খান',
    badge: 'চর্ম, যৌন ও শিশু চর্ম',
    designation: 'চর্ম, যৌন, এলার্জি ও শিশু চর্ম রোগের চিকিৎসক',
    workplace: 'মেডিকেল অফিসার, জেলা সদর হাসপাতাল, শেরপুর',
    category: 'চর্ম ও যৌন',
  },
  {
    id: 'doc-7',
    name: 'ডাঃ মাসুম রানা (মাসুম)',
    badge: 'মেডিসিন ও বক্ষব্যাধি',
    designation: 'মেডিসিন, বক্ষব্যাধি, গ্যাস্ট্রোলিভার ও বাত-ব্যথা রোগের বিশেষজ্ঞ চিকিৎসক',
    category: 'মেডিসিন',
  },
  {
    id: 'doc-8',
    name: 'ডাঃ মোঃ মাহফুজুর রহমান',
    badge: 'মেডিসিন ও হৃদরোগ',
    designation: 'মেডিসিন, হৃদরোগ, বক্ষব্যাধি, চর্ম-যৌন, কিডনি ও ডায়াবেটিস রোগের চিকিৎসক',
    category: 'মেডিসিন',
  },
  {
    id: 'doc-9',
    name: 'ডাঃ মোঃ শামছুর রহমান',
    badge: 'বিশেষজ্ঞ সার্জন',
    designation: 'বিশেষজ্ঞ সার্জন (সার্জারী)',
    category: 'সার্জারী',
  },
  {
    id: 'doc-10',
    name: 'ডাঃ মোঃ মাজেদুর রহমান',
    badge: 'ইউরোলজি ও কিডনি',
    designation: 'কিডনি, প্রোস্টেট, মূত্রথলি, মূত্রনালী ও অণ্ডকোষ রোগের বিশেষজ্ঞ ও সার্জন',
    category: 'ইউরোলজি',
  },
  {
    id: 'doc-11',
    name: 'অধ্যাপক ডাঃ মোঃ রবিউল করিম',
    badge: 'অধ্যাপক ও সার্জারী বিশেষজ্ঞ',
    designation: 'সার্জারী বিশেষজ্ঞ',
    workplace: 'অধ্যাপক ও বিভাগীয় প্রধান (সার্জারী বিভাগ), ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল',
    category: 'সার্জারী',
  },
  {
    id: 'doc-12',
    name: 'ডাঃ মোঃ আব্দুল করিম',
    badge: 'নাক, কান ও গলা বিশেষজ্ঞ',
    designation: 'নাক, কান ও গলা রোগ বিশেষজ্ঞ ও সার্জন',
    category: 'নাক-কান-গলা',
  },
  {
    id: 'doc-13',
    name: 'ডাঃ রায়হান ইসলাম রনি',
    badge: 'আবাসিক সার্জন',
    designation: 'জেনারেল সার্জারী, কোলোরেক্টাল ও ব্রেস্ট বিশেষজ্ঞ ও সার্জন',
    workplace: 'আবাসিক সার্জন',
    category: 'সার্জারী',
  },
  {
    id: 'doc-14',
    name: 'ডাঃ মোঃ আশরাফুল হক (সোহেল)',
    badge: 'অর্থোপেডিক সার্জন',
    designation: 'হাড় জোড়া, বাত ব্যথা, জয়েন্ট, পঙ্গুরোগ বিশেষজ্ঞ ও অর্থোপেডিক সার্জন',
    category: 'অর্থোপেডিকস',
  },
];

export const DOCTOR_CATEGORIES = [
  'সব চিকিৎসক',
  'গাইনি ও প্রসূতি',
  'মেডিসিন',
  'সার্জারী',
  'চর্ম ও যৌন',
  'অর্থোপেডিকস',
  'ইউরোলজি',
  'নাক-কান-গলা',
];
