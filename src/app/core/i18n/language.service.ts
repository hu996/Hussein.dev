import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { PORTFOLIO_AR } from '../../data/portfolio-ar.data';

export type AppLanguage = 'en' | 'ar';

const UI_LABELS = {
  en: {
    nav: {
      home: 'Home',
      profile: 'Profile',
      strengths: 'Strengths',
      experience: 'Experience',
      projects: 'Projects',
      capabilities: 'Capabilities',
      contact: 'Contact',
      downloadCv: 'Download CV',
      switchLanguage: 'العربية'
    },
    hero: {
      summary: 'Specialized in ASP.NET Core, Angular, SQL Server, backend architecture, reporting systems, and business-focused web solutions.',
      viewProjects: 'View Projects',
      contact: 'Contact',
      trusted: ['Government systems', 'Saudi enterprise systems', 'Insurance platforms', 'Dashboards', 'API integrations'],
      roles: ['Backend API Developer', 'Angular Frontend Developer', 'Dashboard Builder', 'Enterprise Systems Developer'],
      metricApi: 'API Health',
      metricKpi: 'Dashboard KPIs',
      terminal: ['optimized data layer', 'enterprise screens', 'secure integrations', 'PDF / Excel workflows']
    },
    sections: {
      profileTitle: 'Professional Profile',
      strengthsTitle: 'Core Strengths',
      strengthsSubtitle: 'What I bring to enterprise projects and teams',
      careerKicker: 'Career',
      careerTitle: 'Premium Career Timeline',
      projectsKicker: 'Selected Projects',
      projectsTitle: 'Case Studies',
      capabilitiesTitle: 'Technical Capabilities',
      capabilitiesSubtitle: 'Services and expertise delivered across enterprise projects',
      techTitle: 'Tech Stack',
      techSubtitle: 'Languages, frameworks, tools, and architectural patterns',
      contactKicker: 'Contact',
      contactTitle: 'Professional Contact'
    },
    projects: {
      filters: ['All', 'Enterprise', 'Dashboard', 'Backend', 'Frontend', 'E-commerce', 'Integrations'],
      all: 'All',
      businessContext: 'Business Context',
      problem: 'Problem',
      myRole: 'My Role',
      professionalValue: 'Professional Value',
      keyFeatures: 'Key Features',
      backend: 'Backend Implementation',
      frontend: 'Frontend Implementation',
      database: 'Database & Performance',
      integrations: 'Integrations',
      challenges: 'Technical Challenges',
      solution: 'Solution Delivered',
      viewCaseStudy: 'View Case Study',
      close: 'Close case study'
    },
    contact: {
      availability: 'Available for professional opportunities and consulting conversations',
      intro: 'For enterprise web applications, APIs, dashboards, integrations, and backend architecture discussions.',
      copyEmail: 'Copy Email',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Message',
      nameError: 'Name is required.',
      emailError: 'Enter a valid email address.',
      messageError: 'Message must be at least 10 characters.',
      sending: 'Sending...',
      send: 'Send Message',
      copied: 'Email copied to clipboard',
      success: 'Message sent successfully.',
      validationError: 'Please enter a valid name, email, and message of at least 10 characters.',
      configError: 'Contact form is not configured yet. Please add the Google Apps Script Web App URL.',
      requestError: 'Could not send your message. Please try again or email me directly.'
    },
    footer: {
      summary: 'Full Stack .NET Developer building scalable web systems with .NET, Angular, and SQL Server.',
      backToTop: 'Back to top',
      copyright: 'Copyright'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      profile: 'الملف المهني',
      strengths: 'نقاط القوة',
      experience: 'الخبرات',
      projects: 'المشاريع',
      capabilities: 'القدرات',
      contact: 'تواصل',
      downloadCv: 'تحميل السيرة الذاتية',
      switchLanguage: 'English'
    },
    hero: {
      summary: 'متخصص في ASP.NET Core وAngular وSQL Server وبناء البنية الخلفية وأنظمة التقارير والحلول web الموجهة للأعمال.',
      viewProjects: 'عرض المشاريع',
      contact: 'تواصل معي',
      trusted: ['أنظمة حكومية', 'أنظمة شركات سعودية', 'منصات تأمين', 'لوحات تحكم', 'تكاملات API'],
      roles: ['مطوّر Backend APIs', 'مطوّر Angular Frontend', 'مطوّر Dashboards', 'مطوّر أنظمة مؤسسية'],
      metricApi: 'صحة الـ API',
      metricKpi: 'مؤشرات Dashboard',
      terminal: ['طبقة بيانات محسّنة', 'شاشات مؤسسية', 'تكاملات آمنة', 'تقارير PDF / Excel']
    },
    sections: {
      profileTitle: 'الملف المهني',
      strengthsTitle: 'نقاط القوة الأساسية',
      strengthsSubtitle: 'القيمة التي أقدمها للمشاريع والفرق المؤسسية',
      careerKicker: 'المسار المهني',
      careerTitle: 'خبرات عملية في أنظمة مؤسسية',
      projectsKicker: 'مشاريع مختارة',
      projectsTitle: 'دراسات حالة',
      capabilitiesTitle: 'القدرات التقنية',
      capabilitiesSubtitle: 'خدمات وخبرات تم تقديمها في مشاريع مؤسسية',
      techTitle: 'التقنيات',
      techSubtitle: 'لغات وأطر عمل وأدوات وأنماط معمارية',
      contactKicker: 'تواصل',
      contactTitle: 'تواصل مهني'
    },
    projects: {
      filters: ['الكل', 'مؤسسي', 'لوحات تحكم', 'Backend', 'Frontend', 'تجارة إلكترونية', 'تكاملات'],
      all: 'الكل',
      businessContext: 'سياق العمل',
      problem: 'المشكلة',
      myRole: 'دوري',
      professionalValue: 'القيمة المهنية',
      keyFeatures: 'أهم الخصائص',
      backend: 'تنفيذ Backend',
      frontend: 'تنفيذ Frontend',
      database: 'قاعدة البيانات والأداء',
      integrations: 'التكاملات',
      challenges: 'التحديات التقنية',
      solution: 'الحل المنفذ',
      viewCaseStudy: 'عرض دراسة الحالة',
      close: 'إغلاق دراسة الحالة'
    },
    contact: {
      availability: 'متاح للفرص المهنية ومناقشات الاستشارات التقنية',
      intro: 'لمناقشة تطبيقات الويب المؤسسية، APIs، لوحات التحكم، التكاملات، وبنية الـ Backend.',
      copyEmail: 'نسخ البريد',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      namePlaceholder: 'اكتب اسمك',
      emailPlaceholder: 'اكتب بريدك الإلكتروني',
      messagePlaceholder: 'اكتب رسالتك',
      nameError: 'الاسم مطلوب.',
      emailError: 'اكتب بريدًا إلكترونيًا صحيحًا.',
      messageError: 'الرسالة يجب ألا تقل عن 10 أحرف.',
      sending: 'جاري الإرسال...',
      send: 'إرسال الرسالة',
      copied: 'تم نسخ البريد الإلكتروني',
      success: 'تم إرسال الرسالة بنجاح.',
      validationError: 'من فضلك اكتب اسمًا وبريدًا صحيحًا ورسالة لا تقل عن 10 أحرف.',
      configError: 'نموذج التواصل غير مفعّل بعد. أضف رابط Google Apps Script Web App.',
      requestError: 'تعذر إرسال الرسالة. حاول مرة أخرى أو راسلني عبر البريد مباشرة.'
    },
    footer: {
      summary: 'مطوّر Full Stack .NET أبني أنظمة ويب قابلة للتوسع باستخدام .NET وAngular وSQL Server.',
      backToTop: 'العودة للأعلى',
      copyright: 'حقوق النشر'
    }
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language = signal<AppLanguage>('en');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.applyDocumentLanguage('en');
  }

  get isArabic(): boolean {
    return this.language() === 'ar';
  }

  portfolio() {
    return this.isArabic ? PORTFOLIO_AR : PORTFOLIO;
  }

  labels() {
    return UI_LABELS[this.language()];
  }

  navLabel(key: string): string {
    return this.labels().nav[key as keyof typeof UI_LABELS.en.nav];
  }

  toggle(): void {
    this.setLanguage(this.isArabic ? 'en' : 'ar');
  }

  setLanguage(language: AppLanguage): void {
    this.language.set(language);
    this.applyDocumentLanguage(language);
  }

  private applyDocumentLanguage(language: AppLanguage): void {
    const html = this.document.documentElement;
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
  }
}
