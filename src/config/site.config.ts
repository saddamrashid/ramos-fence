import { SiteConfig } from "@/types/site";

/**
 * ────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — RAFAEL RAMOS FENCE CONTRACTOR
 * ────────────────────────────────────────────────────────────────────────
 */
export const siteConfig: SiteConfig = {
  theme: {
    primary: "#1E3A8A",      // Deep Navy Blue
    primaryLight: "#2563EB", // Royal Blue
    primaryDark: "#172554",  // Midnight Blue
    accent: "#F59E0B",       // Warm Amber/Gold Accent
    accentLight: "#FBBF24",  // Light Gold
    accentDark: "#D97706",   // Dark Amber
    surface: "#F8FAFC",      // Very Light Blue-Gray Surface
    surfaceAlt: "#EFF6FF",   // Soft Ice Blue Tint
    ink: "#0F172A",          // Dark Slate Text
    inkSoft: "#334155",      // Medium Slate Text
    inkMuted: "#64748B",     // Muted Slate Text
    fontDisplay: "'Playfair Display', serif",
    fontBody: "'Inter', sans-serif",
  },

  company: {
    name: "Rafael Ramos Fence Contractor",
    shortName: "Ramos Fencing",
    logo: "/images/logo.png",
    tagline: "Quality Fencing, Built to Last a Lifetime.",
    foundedYear: 2012,
    phone: "(559) 667-8371",
    phoneHref: "+15596678371",
    email: "ramosrafael497@gmail.com",
    address: "Fresno, CA & Surrounding Areas",
    serviceRegion: "Central Valley & Surrounding Areas",
    hours: [
      { label: "Mon–Fri", value: "7am – 6pm" },
      { label: "Sat", value: "8am – 4pm" },
      { label: "Sun", value: "Closed" },
    ],
    emergencyNote: "Emergency fence repairs and storm damage response available 7 days a week.",
    googleRating: 5.0,
    googleReviewCount: 94,
    googleProfileUrl: "https://www.google.com/search?q=Rafael+Ramos+Fence+Contractor#lrd=google_reviews",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Google Business", href: "#" },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Wood Fencing", href: "#services", description: "Custom cedar, redwood, and pine privacy fences" },
        { label: "Vinyl Fencing", href: "#services", description: "Durable, low-maintenance residential & commercial fences" },
        { label: "Chain Link & Metal", href: "#services", description: "Secure, weather-resistant security fencing solutions" },
      ],
    },
    { label: "Gallery", href: "#gallery" },
    {
      label: "Service Areas",
      href: "#service-areas",
      children: [
        { label: "Fresno", href: "#service-areas" },
        { label: "Clovis", href: "#service-areas" },
        { label: "Madera", href: "#service-areas" },
        { label: "Sanger", href: "#service-areas" },
        { label: "Selma", href: "#service-areas" },
      ],
    },
    // { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#get-started" },
  ],

  hero: {
    eyebrow: "Trusted Local Fence Craftsmanship",
    headingLine1: "Protect Your Property With",
    headingEmphasis: "Durable, Custom Fencing.",
    description:
      "Whether you need residential privacy wood fencing, low-maintenance vinyl, heavy-duty metal security, or quick post repairs, Rafael Ramos Fence Contractor delivers expert installation and top-tier materials engineered for safety, security, and curb appeal.",
    primaryCta: { label: "Get Your Free On-Site Estimate", href: "#get-started" },
    secondaryCta: { label: "Call (559) 667-8371", href: "tel:+15596678371" },
    trustBadges: ["Licensed & Insured", "Free Estimates", "Quality Workmanship"],
    backgroundImage: "https://fencesunlimited.com/wp-content/uploads/elementor/thumbs/gallery-wood-1-r3th404yczwwrxmn9o4j4jwbbzlw7ok7awveu3hw94.webp",
  },

  story: {
    eyebrow: "Our Story",
    heading: "Crafting Strong Boundaries & Timeless Curb Appeal.",
    paragraphs: [
      "At Rafael Ramos Fence Contractor, we believe a quality fence does more than mark a property line—it provides privacy, protection, and aesthetic value for your home or commercial property.",
      "With years of hands-on experience across the region, Rafael Ramos and his dedicated crew take personal pride in every post set and panel installed. We don't cut corners on concrete footings or hardware, ensuring your investment withstands high winds and heavy weather for years to come.",
    ],
    image: "https://chambleefence.com/wp-content/uploads/2023/09/Copy-of-Build-Your-Own-Fence.webp",
    stat: { value: "12+", label: "Years of professional craftsmanship" },
    credentials: ["Licensed & Insured", "Locally Owned & Operated", "Commercial & Residential", "Satisfaction Guaranteed"],
  },

  services: [
    {
      slug: "wood-fencing",
      title: "Wood Privacy Fencing",
      description:
        "Custom cedar and redwood privacy fences designed for beauty and durability. Includes custom gates, trim options, and weather sealing.",
      image: "https://cascadefenceanddeck.com/wp-content/uploads/1020370-scaled.jpg",
      featured: true,
    },
    {
      slug: "vinyl-fencing",
      title: "Vinyl & PVC Fencing",
      description:
        "Low-maintenance, rot-resistant fencing available in privacy, picket, and ranch rail styles. Never needs painting or staining.",
      image: "https://mobileimages.lowes.com/productimages/03724c27-ee27-48c7-9af3-47c271e4e34e/63678607.jpg?size=pdhism",
      featured: true,
    },
    {
      slug: "chain-link-metal",
      title: "Chain Link & Steel Fencing",
      description:
        "Reliable security fencing for homes, commercial grounds, and industrial properties. Custom height and privacy slat configurations available.",
      image: "https://martinfence.com/wp-content/uploads/2020/02/P1010803.jpg",
      featured: true,
    },
  ],

  process: [
    {
      title: "Free Consultation & Estimate",
      description: "We visit your property to measure boundaries, inspect terrain, discuss design choices, and give a transparent quote.",
    },
    {
      title: "Material Selection & Planning",
      description: "Select your preferred wood, vinyl, or metal materials and colors. We manage utility line marking and local permits.",
    },
    {
      title: "Post Setting & Foundation",
      description: "We dig deep post holes below frost lines and secure steel/wood posts in solid concrete for maximum stability.",
    },
    {
      title: "Panel & Gate Installation",
      description: "Pickets, rails, hardware, and custom gates are hand-assembled and leveled for clean lines and flawless operation.",
    },
    {
      title: "Final Inspection & Cleanup",
      description: "We perform a walk-through with you, inspect every gate latch, and leave your property spotlessly clean.",
    },
  ],

  gallery: [
    {
      title: "Cedar Privacy Fence with Lattice Top",
      category: "Wood Fencing",
      image: "https://cascadefenceanddeck.com/wp-content/uploads/1020370-scaled.jpg",
    },
    {
      title: "White Vinyl Privacy Enclosure",
      category: "Vinyl Fencing",
      image: "https://mobileimages.lowes.com/productimages/03724c27-ee27-48c7-9af3-47c271e4e34e/63678607.jpg?size=pdhism",
    },
    {
      title: "Black Commercial Chain Link Fence",
      category: "Metal Security",
      image: "https://martinfence.com/wp-content/uploads/2020/02/P1010803.jpg",
    },
    {
      title: "Custom Wooden Driveway Gate",
      category: "Custom Gates",
      image: "https://vintagemillworkrestoration.com/wp-content/uploads/2021/03/Vintage-Millwork-Restoration-Driveway-Gates-1.jpg",
    },
    {
      title: "Residential Ranch Rail Fencing",
      category: "Agricultural & Farm",
      image: "https://d1qpm27e29dlmy.cloudfront.net/wp-content/uploads/2025/08/13130238/ranch-rail-4.webp",
    },
    {
      title: "Post Installation & Drilling Work",
      category: "Fence Repair",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    },
  ],

  testimonials: [
    {
      quote:
        "Rafael and his crew installed 150 feet of cedar privacy fence with a double RV gate. The precision and straightness of the fence line is amazing. They finished on schedule, and the price was fair. Highly recommend Rafael Ramos Fence Contractor!",
      name: "Carlos Mendez",
      location: "Fresno, CA",
      rating: 5,
    },
    {
      quote:
        "After a severe storm knocked down half of our old backyard fence, Rafael responded immediately. He gave us a clear quote for a clean vinyl fence replacement and completed the job in two days. Outstanding craft and service.",
      name: "Sarah Jenkins",
      location: "Clovis, CA",
      rating: 5,
    },
    {
      quote:
        "Fair pricing, exceptional communication, and unmatched work ethic. They used heavy concrete footings on every post, which was crucial given our windy area. My property looks ten times better!",
      name: "David Rivera",
      location: "Madera, CA",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How much does a new fence cost per linear foot?",
      answer:
        "Fencing costs vary depending on the material (wood, vinyl, chain link, ornamental iron), total linear footage, height, and terrain. We provide completely free on-site consultations with line-item estimates so you know the exact cost.",
    },
    {
      question: "Do you handle local permits and utility line location?",
      answer:
        "Yes. Before digging post holes, we arrange for public utility line marking (811 call) to protect underground pipes and wires, and we can guide you through local municipal permitting requirements.",
    },
    {
      question: "Which fence material lasts the longest?",
      answer:
        "Vinyl and steel chain link fencing offer the longest lifespan with minimal maintenance. High-quality cedar or redwood with protective stains also offers decades of beauty when properly cared for.",
    },
    {
      question: "How long does a typical installation take?",
      answer:
        "Most residential fence replacements take 2 to 4 days, depending on footage, weather conditions, and concrete curing times.",
    },
    {
      question: "Do you repair existing fences and gates?",
      answer:
        "Yes! We repair leaning posts, broken pickets, storm damage, and sagging gates, restoring security to your existing fence.",
    },
  ],

  serviceAreas: [
    { city: "Fresno" },
    { city: "Clovis" },
    { city: "Madera" },
    { city: "Sanger" },
    { city: "Selma" },
    { city: "Reedley" },
    { city: "Kerman" },
    { city: "Kingsburg" },
    { city: "Fowler" },
    { city: "Parlier" },
    { city: "Chowchilla" },
    { city: "Tulare" },
    { city: "Visalia" },
  ],

  mapEmbedSrc: "https://www.google.com/maps?q=Fresno,CA&output=embed",

  blogPosts: [
    {
      title: "Wood vs. Vinyl Fencing: Which is Right for Your Property?",
      excerpt:
        "Compare costs, long-term maintenance, aesthetics, and lifespan to determine the best fencing material for your home...",
      category: "Buying Guide",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=800&auto=format&fit=crop",
      href: "#",
    },
    {
      title: "How Deep Should Fence Posts Be Set for Maximum Wind Resistance?",
      excerpt:
        "Discover why proper post hole depth, gravel bases, and solid concrete footings prevent leaning fences during severe storms...",
      category: "Installation Insights",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      href: "#",
    },
    {
      title: "Top Maintenance Tips to Extend the Life of Your Wooden Fence",
      excerpt:
        "Simple steps like annual power washing, staining, and clearing soil contact can double the lifespan of your custom wooden fence...",
      category: "Maintenance",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=800&auto=format&fit=crop",
      href: "#",
    },
  ],

  ctaSection: {
    eyebrow: "Get started today",
    heading: "Ready to Upgrade Your Property's Security & Privacy?",
    description:
      "Book your free on-site estimate today. Our local fence experts will evaluate your property, discuss design options, and provide a clear, no-obligation quote.",
    emergencyLabel: "Emergency Repairs",
    emergencyNote: "Storm damage & urgent post repairs available 7 days a week.",
    formEyebrow: "Book online",
    formTitle: "Schedule Your Free On-Site Estimate",
    formSubtitle: "We'll call you back within 30 minutes to confirm.",
  },

  formConfig: {
    defaultEyebrow: "Get a free estimate",
    defaultTitle: "Request Your Free On-Site Estimate",
    serviceFieldLabel: "Type of Fencing Needed *",
    serviceFieldPlaceholder: "e.g., Wood privacy, vinyl, chain link, gate repair...",
    messageLabelOptional: "Tell us more about your project (optional)",
    messageLabelRequired: "Details about your fence project *",
    messagePlaceholderOptional:
      "Describe the fence size, linear footage, terrain, or any specific gate preferences...",
    messagePlaceholderRequired:
      "Send us a quick message about your project and we'll reply right away!",
    successMessage:
      "Estimate request received! We'll call you back shortly to confirm your appointment time.",
    disclaimerText:
      "I agree to the Terms & Conditions provided by the company. By providing my phone number, I agree to receive text messages from Rafael Ramos Fence Contractor. We respect your privacy.",
    submitButtonText: "Request Free Estimate",
    footerNote:
      "No spam. No pressure. We'll call once to confirm your appointment. Your information is secure & never shared.",
  },

  footer: {
    description: "Quality residential and commercial fencing solutions. Family owned, locally operated, and built to stand strong.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Wood Fencing", href: "#services" },
          { label: "Vinyl Fencing", href: "#services" },
          { label: "Chain Link Fencing", href: "#services" },
          { label: "Custom Gates", href: "#services" },
          { label: "Fence Repair", href: "#services" },
          { label: "Commercial Fencing", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#our-story" },
          { label: "Our Work", href: "#gallery" },
          { label: "Blog", href: "#blog" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#get-started" },
        ],
      },
      {
        title: "Service Areas",
        links: [
          { label: "Fresno", href: "#service-areas" },
          { label: "Clovis", href: "#service-areas" },
          { label: "Madera", href: "#service-areas" },
          { label: "Sanger", href: "#service-areas" },
          { label: "Selma", href: "#service-areas" },
          { label: "Reedley", href: "#service-areas" },
          { label: "View all areas →", href: "#service-areas" },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },

  seo: {
    titleTemplate: "%s | Rafael Ramos Fence Contractor",
    defaultTitle: "Rafael Ramos Fence Contractor | Quality Wood, Vinyl & Metal Fencing",
    description:
      "Professional fence installation and repair services by Rafael Ramos Fence Contractor. Serving Fresno and surrounding areas with custom wood, vinyl, and metal fencing. Get your free estimate today!",
    keywords: [
      "fence contractor Fresno",
      "wood privacy fence installation",
      "vinyl fence contractor",
      "chain link fencing",
      "custom fence gates",
      "fence repair Fresno CA",
      "Rafael Ramos fencing",
    ],
    siteUrl: "https://www.example.com",
    ogImage: "/images/og-cover.jpg",
    locale: "en_US",
  },
};

export default siteConfig;