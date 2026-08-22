export interface PolicyItem {
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
}

export const policiesData: PolicyItem[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'August 2026',
    summary: 'TRAIBCERT Limited is committed to protecting your personal data in full compliance with the UK GDPR and Data Protection Act 2018.'
  },
  {
    slug: 'terms',
    title: 'Terms & Conditions',
    lastUpdated: 'August 2026',
    summary: 'Terms governing the use of TRAIBCERT Limited website services, certification audits, training enrollments, and client portals.'
  },
  {
    slug: 'confidentiality',
    title: 'Confidentiality Policy',
    lastUpdated: 'August 2026',
    summary: 'TRAIBCERT ensures all client information, audit findings, intellectual property, and documentation remain strictly confidential.'
  },
  {
    slug: 'impartiality',
    title: 'Impartiality Policy',
    lastUpdated: 'August 2026',
    summary: 'Statement of commitment to absolute independence, objectivity, and freedom from commercial bias in all certification decisions.'
  },
  {
    slug: 'refund',
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'August 2026',
    summary: 'Clear guidelines regarding training course cancellations, audit rescheduling fees, and fee refund eligibility.'
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    lastUpdated: 'August 2026',
    summary: 'Information on how TRAIBCERT uses essential, analytical (GTM), and functional cookies to enhance browsing experience.'
  }
];
