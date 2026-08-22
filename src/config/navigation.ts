export interface NavItem {
  label: string;
  href: string;
  tag?: 'NEW' | 'CURRENT' | 'POPULAR';
  description?: string;
}

export interface MegaColumn {
  title: string;
  items: NavItem[];
}

export const primaryNavigation = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    type: 'direct'
  },
  {
    id: 'certification',
    label: 'Certification',
    href: '/certification',
    type: 'mega-certification',
    featuredTile: {
      tag: 'TRANSITION ALERT',
      heading: 'ISO 9001:2026 Coming September',
      body: 'The next revision of ISO 9001 is expected September 2026. Book your gap assessment now to plan a smooth transition from the 2015 version.',
      ctaLabel: 'Learn more →',
      ctaHref: '/certification/iso-9001'
    }
  },
  {
    id: 'training',
    label: 'Training',
    href: '/training',
    type: 'dropdown-training'
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',
    type: 'mega-resources',
    featuredTile: {
      tag: 'FREE DOWNLOAD',
      heading: '6 Essential Steps to ISO Certification',
      body: 'Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.',
      ctaLabel: 'Get the guide →',
      ctaHref: '/resources/downloads/6-essential-steps'
    }
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
    type: 'dropdown-contact',
    items: [
      { label: 'Contact Details & Locations', href: '/contact' },
      { label: 'Get a Fast Quote / Enquiry', href: '/contact/enquiry' },
      { label: 'Verify a Certificate', href: '/verify-certificate' }
    ]
  }
];

export const footerNavigation = {
  columnCompany: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Services', href: '/#services' },
    { label: 'Why Choose Us', href: '/#why-choose-us' },
    { label: 'Accreditations', href: '/#accreditations' },
    { label: 'Careers', href: '/#careers' },
    { label: 'Certificate Transfer', href: '/resources/certificate-transfer' }
  ],
  columnQuickLinks: [
    { label: 'All Certification Standards', href: '/certification' },
    { label: 'Cyber Essentials', href: '/certification/cyber-essentials' },
    { label: 'Training Courses', href: '/training' },
    { label: 'Blog & Articles', href: '/resources/blog' },
    { label: 'FAQ', href: '/resources/faq' },
    { label: 'Industries We Serve', href: '/resources/industries' },
    { label: 'Get a Quote', href: '/contact/enquiry' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'E-Learning Academy ↗', href: 'https://academy.traibcert.org.uk', external: true }
  ],
  columnPolicies: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms & Conditions', href: '/legal/terms' },
    { label: 'Confidentiality Policy', href: '/legal/confidentiality' },
    { label: 'Impartiality Policy', href: '/legal/impartiality' },
    { label: 'Refund & Cancellation Policy', href: '/legal/refund' },
    { label: 'Cookie Policy', href: '/legal/cookies' }
  ]
};
