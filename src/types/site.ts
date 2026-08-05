// All content and theming for the site is typed here so that cloning the
// template for a new company is a matter of filling in `site.config.ts`
// against these interfaces — no component code should need to change.

export interface ThemeConfig {
  /** Deep brand color used for header, hero, footer, dark sections */
  primary: string;
  primaryLight: string;
  primaryDark: string;
  /** Call-to-action / highlight color used for buttons and emphasis */
  accent: string;
  accentLight: string;
  accentDark: string;
  /** Page background (light sections) */
  surface: string;
  surfaceAlt: string;
  /** Text colors */
  ink: string;
  inkSoft: string;
  inkMuted: string;
  /** Google Fonts family names */
  fontDisplay: string;
  fontBody: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  logo: string;
  tagline: string;
  foundedYear: number;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  serviceRegion: string;
  hours: { label: string; value: string }[];
  emergencyNote: string;
  googleRating: number;
  googleReviewCount: number;
  googleProfileUrl: string;
  socials: { label: string; href: string }[];
}

export interface HeroConfig {
  eyebrow: string;
  headingLine1: string;
  headingEmphasis: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustBadges: string[];
  backgroundImage: string;
}

export interface StoryConfig {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: string;
  stat: { value: string; label: string };
  credentials: string[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  city: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
}

export interface CtaSectionConfig {
  eyebrow: string;
  heading: string;
  description: string;
  emergencyLabel: string;
  emergencyNote: string;
  formEyebrow: string;
  formTitle: string;
  formSubtitle: string;
}

export interface FormConfig {
  defaultEyebrow: string;
  defaultTitle: string;
  serviceFieldLabel: string;
  serviceFieldPlaceholder: string;
  messageLabelOptional: string;
  messageLabelRequired: string;
  messagePlaceholderOptional: string;
  messagePlaceholderRequired: string;
  successMessage: string;
  disclaimerText: string;
  submitButtonText: string;
  footerNote: string;
}

export interface SiteConfig {
  theme: ThemeConfig;
  company: CompanyInfo;
  nav: NavLink[];
  hero: HeroConfig;
  story: StoryConfig;
  services: ServiceItem[];
  process: ProcessStep[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  serviceAreas: ServiceArea[];
  mapEmbedSrc: string;
  blogPosts: BlogPost[];
  ctaSection: CtaSectionConfig,
  formConfig: FormConfig,
  footer: {
    description: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    legalLinks: { label: string; href: string }[];
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    ogImage: string;
    locale: string;
  };
}
