export interface IndustryItem {
  slug: string;
  name: string;
  name_full?: string;
  tag?: 'NEW';
  description: string;
  relevantStandards: string[];
}

export const industriesData: IndustryItem[] = [
  {
    slug: 'technology-saas',
    name: 'Technology & SaaS',
    tag: 'NEW',
    description: 'ISO 27001, SOC 2, ISO 27017, ISO 27018, and Cyber Essentials for software platforms and IT providers.',
    relevantStandards: ['ISO 27001', 'SOC 2', 'ISO 27017', 'Cyber Essentials']
  },
  {
    slug: 'banking-finance',
    name: 'Banking & Financial Services',
    tag: 'NEW',
    description: 'Robust information security, business continuity, and PCI DSS compliance for financial institutions.',
    relevantStandards: ['ISO 27001', 'ISO 22301', 'PCI DSS', 'SOC 2']
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tag: 'NEW',
    description: 'ISO 13485 medical device quality and ISO 27701 privacy management for health systems.',
    relevantStandards: ['ISO 13485', 'ISO 9001', 'ISO 27701', 'ISO 45001']
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    tag: 'NEW',
    description: 'ISO 9001 quality, ISO 14001 environment, and ISO 45001 health and safety for factories.',
    relevantStandards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001']
  },
  {
    slug: 'construction',
    name: 'Construction & Infrastructure',
    tag: 'NEW',
    description: 'Integrated ISO 9001, 14001, and 45001 management systems for principal contractors.',
    relevantStandards: ['ISO 45001', 'ISO 14001', 'ISO 9001', 'ISO 41001']
  },
  {
    slug: 'energy-oil-gas',
    name: 'Energy & Oil/Gas',
    tag: 'NEW',
    description: 'ISO 29001 sector quality, ISO 50001 energy efficiency, and ISO 14064 GHG verification.',
    relevantStandards: ['ISO 29001', 'ISO 50001', 'ISO 14064', 'ISO 14001']
  },
  {
    slug: 'public-sector',
    name: 'Public Sector & Government',
    tag: 'NEW',
    description: 'Cyber Essentials, ISO 27001, and ISO 9001 compliance for public sector tender qualification.',
    relevantStandards: ['Cyber Essentials', 'ISO 27001', 'ISO 9001', 'ISO 22301']
  },
  {
    slug: 'education',
    name: 'Education & Training Institutes',
    tag: 'NEW',
    description: 'ISO 21001 educational organization management and ISO 27001 student data protection.',
    relevantStandards: ['ISO 21001', 'ISO 9001', 'ISO 27001', 'Cyber Essentials']
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    tag: 'NEW',
    description: 'ISO 22000 food safety management across food processing and distribution networks.',
    relevantStandards: ['ISO 22000', 'ISO 9001', 'ISO 14001', 'ISO 45001']
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    tag: 'NEW',
    description: 'PCI DSS card data security, GDPR data protection, and ISO 27001 for online retailers.',
    relevantStandards: ['PCI DSS', 'ISO 27001', 'GDPR Assessment', 'Cyber Essentials']
  },
  {
    slug: 'transport-logistics',
    name: 'Transport & Freight Logistics',
    tag: 'NEW',
    description: 'ISO 9001 quality, ISO 45001 safety, and Pre-Shipment Inspection for trade flows.',
    relevantStandards: ['ISO 9001', 'ISO 45001', 'Pre-Shipment Inspection', 'ISO 14001']
  },
  {
    slug: 'professional-services',
    name: 'Professional & Legal Services',
    name_full: 'Professional & Corporate Services',
    description: 'ISO 27001 client confidentiality and ISO 9001 service quality management.',
    relevantStandards: ['ISO 27001', 'ISO 9001', 'ISO 22301', 'Cyber Essentials']
  }
];
