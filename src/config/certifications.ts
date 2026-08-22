export interface CertificationItem {
  slug: string;
  code: string;
  name: string;
  category: 'iso' | 'cyber' | 'sustainability' | 'inspection';
  tag?: 'NEW' | 'CURRENT' | 'POPULAR';
  summary: string;
  benefits: string[];
  scope: string;
}

export const certificationCategories = {
  iso: 'ISO Management Systems',
  cyber: 'Cyber Security & Compliance',
  sustainability: 'Sustainability & ESG',
  inspection: 'Pre-Shipment & Technical Inspection'
};

export const certificationsData: CertificationItem[] = [
  // ISO Standards (18 items)
  {
    slug: 'iso-9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management Systems',
    category: 'iso',
    tag: 'POPULAR',
    summary: 'The world’s recognized benchmark for quality management, enabling customer satisfaction and operational excellence.',
    benefits: ['Improve process efficiency', 'Enhance customer trust', 'Win tenders & contracts', 'Streamline operations'],
    scope: 'Applicable to any organization regardless of size or sector.'
  },
  {
    slug: 'iso-14001',
    code: 'ISO 14001:2026',
    name: 'Environmental Management Systems',
    category: 'iso',
    tag: 'CURRENT',
    summary: 'Framework to reduce environmental impact, ensure regulatory compliance, and drive sustainable growth.',
    benefits: ['Lower carbon footprint & waste', 'Ensure environmental compliance', 'Reduce operational costs'],
    scope: 'Organizations seeking to manage environmental responsibilities systematically.'
  },
  {
    slug: 'iso-45001',
    code: 'ISO 45001:2018',
    name: 'Occupational Health & Safety Management',
    category: 'iso',
    tag: 'POPULAR',
    summary: 'Global standard for workplace health and safety, preventing injury and ill-health while creating safe work environments.',
    benefits: ['Reduce workplace accidents', 'Lower insurance premiums', 'Improve workforce well-being'],
    scope: 'Any enterprise striving to improve occupational safety.'
  },
  {
    slug: 'iso-22000',
    code: 'ISO 22000:2018',
    name: 'Food Safety Management Systems',
    category: 'iso',
    summary: 'End-to-end food safety framework mapping HACCP principles across the farm-to-fork supply chain.',
    benefits: ['Ensure food product safety', 'Comply with international food laws', 'Build consumer trust'],
    scope: 'Food producers, processors, distributors, and packaging manufacturers.'
  },
  {
    slug: 'iso-22301',
    code: 'ISO 22301:2019',
    name: 'Business Continuity Management',
    category: 'iso',
    summary: 'Protect your business against disruptions, IT outages, cyber threats, and unforeseen crises.',
    benefits: ['Minimize downtime impact', 'Protect corporate reputation', 'Build organizational resilience'],
    scope: 'Critical infrastructure, financial services, tech, and healthcare enterprises.'
  },
  {
    slug: 'iso-20000-1',
    code: 'ISO 20000-1:2018',
    name: 'IT Service Management',
    category: 'iso',
    summary: 'Deliver aligned IT services with high reliability, performance, and continuous service improvement.',
    benefits: ['Align IT with business goals', 'Enhance IT service quality', 'Optimize IT service delivery costs'],
    scope: 'Internal IT departments, managed service providers (MSPs), and SaaS companies.'
  },
  {
    slug: 'iso-10002',
    code: 'ISO 10002:2018',
    name: 'Customer Satisfaction & Complaint Handling',
    category: 'iso',
    summary: 'Best practice framework for handling customer feedback and turning complaints into operational improvements.',
    benefits: ['Increase customer retention', 'Standardize complaint resolution', 'Boost brand reputation'],
    scope: 'Customer service focused businesses.'
  },
  {
    slug: 'iso-21001',
    code: 'ISO 21001:2018',
    name: 'Educational Organisations Management',
    category: 'iso',
    summary: 'Specialized quality management standard for schools, universities, and corporate training academies.',
    benefits: ['Enhance learner outcomes', 'Ensure equal educational access', 'Align curriculum standards'],
    scope: 'Schools, colleges, universities, and training institutes.'
  },
  {
    slug: 'iso-41001',
    code: 'ISO 41001:2018',
    name: 'Facility Management Systems',
    category: 'iso',
    summary: 'Framework to optimize facility operations, workspace efficiency, safety, and infrastructure sustainability.',
    benefits: ['Reduce building running costs', 'Improve workspace safety', 'Maximize property asset performance'],
    scope: 'Property management, real estate, and facilities operators.'
  },
  {
    slug: 'iso-31000',
    code: 'ISO 31000:2018',
    name: 'Risk Management Guidelines',
    category: 'iso',
    summary: 'Principles and guidelines for identifying, assessing, and mitigating operational and strategic risks.',
    benefits: ['Proactive threat identification', 'Strategic decision confidence', 'Protect asset value'],
    scope: 'Enterprise risk management teams across all industries.'
  },
  {
    slug: 'iso-26000',
    code: 'ISO 26000:2010',
    name: 'Social Responsibility Guidance',
    category: 'iso',
    summary: 'Framework for operating in an ethical and transparent way that contributes to sustainable development.',
    benefits: ['Enhance CSR standing', 'Attract ethical investors', 'Engage community stakeholders'],
    scope: 'Corporate organizations pursuing robust CSR programs.'
  },
  {
    slug: 'iso-50001',
    code: 'ISO 50001:2018',
    name: 'Energy Management Systems',
    category: 'iso',
    summary: 'Systematic approach to continually improve energy performance, efficiency, and greenhouse gas reduction.',
    benefits: ['Reduce energy bills', 'Cut carbon emissions', 'Ensure energy compliance'],
    scope: 'Energy-intensive manufacturing, data centers, and commercial facilities.'
  },
  {
    slug: 'iso-13485',
    code: 'ISO 13485',
    name: 'Medical Devices Quality Management',
    category: 'iso',
    summary: 'Comprehensive quality management standard for medical device design, manufacturing, and servicing.',
    benefits: ['Comply with medical device regulations', 'Ensure patient safety', 'Global market access'],
    scope: 'Manufacturers and suppliers of medical equipment and devices.'
  },
  {
    slug: 'iso-29001',
    code: 'ISO 29001:2020',
    name: 'Oil & Gas Quality Management',
    category: 'iso',
    summary: 'Quality management requirements for petroleum, petrochemical, and natural gas sector providers.',
    benefits: ['Minimize defect risk in harsh environments', 'Ensure supply chain safety', 'Meet oil major requirements'],
    scope: 'Oil & gas contractors, equipment manufacturers, and service providers.'
  },
  {
    slug: 'iso-42001',
    code: 'ISO 42001:2023',
    name: 'Artificial Intelligence Management System (AIMS)',
    category: 'iso',
    tag: 'NEW',
    summary: 'The world’s first AI management system standard for responsible, ethical, and secure AI adoption.',
    benefits: ['Ensure ethical AI governance', 'Mitigate AI risk and bias', 'Build trust with AI customers'],
    scope: 'AI developers, tech companies, and enterprises deploying AI models.'
  },
  {
    slug: 'iso-55001',
    code: 'ISO 55001',
    name: 'Asset Management Systems',
    category: 'iso',
    tag: 'NEW',
    summary: 'Lifecycle asset management standard for optimizing financial, physical, and digital asset performance.',
    benefits: ['Maximize asset lifecycle value', 'Reduce capital expenditure risk', 'Optimize maintenance schedules'],
    scope: 'Infrastructure, utilities, logistics, and heavy industrial owners.'
  },
  {
    slug: 'iso-14064',
    code: 'ISO 14064',
    name: 'Greenhouse Gas Accounting & Verification',
    category: 'iso',
    tag: 'NEW',
    summary: 'Quantification and reporting standard for greenhouse gas emissions and carbon removal validation.',
    benefits: ['Third-party GHG verification', 'Accurate Scope 1, 2 & 3 reporting', 'Support Net-Zero targets'],
    scope: 'Organizations reporting carbon footprints and sustainability compliance.'
  },
  {
    slug: 'certification-landing',
    code: 'ALL STANDARDS',
    name: 'Certification Services Overview',
    category: 'iso',
    summary: 'Explore TRAIBCERT’s complete portfolio of UKAS and ASCB accredited ISO certifications.',
    benefits: ['Global recognition', 'Expert lead auditors', 'Transparent pricing'],
    scope: 'All businesses worldwide.'
  },

  // Cyber Security & Compliance (10 items)
  {
    slug: 'cyber-essentials',
    code: 'CYBER ESSENTIALS',
    name: 'Cyber Essentials Scheme',
    category: 'cyber',
    tag: 'POPULAR',
    summary: 'UK Government-backed cyber security certification protecting against 80% of common internet threats.',
    benefits: ['Qualify for UK government contracts', 'Protect against malware & phishing', 'Free £25k cyber insurance'],
    scope: 'All UK businesses, SMEs, and government suppliers.'
  },
  {
    slug: 'cyber-essentials-plus',
    code: 'CYBER ESSENTIALS PLUS',
    name: 'Cyber Essentials Plus (Audited)',
    category: 'cyber',
    tag: 'POPULAR',
    summary: 'Hands-on technical verification including internal vulnerability scans and endpoint testing.',
    benefits: ['Rigorous technical validation', 'Reassure enterprise clients', 'Demonstrate robust cyber defense'],
    scope: 'Businesses seeking verified cyber posture.'
  },
  {
    slug: 'iso-27001',
    code: 'ISO 27001:2022',
    name: 'Information Security Management System (ISMS)',
    category: 'cyber',
    tag: 'POPULAR',
    summary: 'The gold standard for information security management, data protection, and cyber resilience.',
    benefits: ['Protect sensitive data & IP', 'Comply with GDPR and regulatory security', 'Win enterprise SaaS deals'],
    scope: 'Tech companies, SaaS platforms, financial institutions, and data processors.'
  },
  {
    slug: 'iso-27701',
    code: 'ISO 27701',
    name: 'Privacy Information Management (PIMS)',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Extension to ISO 27001 for managing Personally Identifiable Information (PII) and global privacy compliance.',
    benefits: ['Demonstrate GDPR compliance', 'Manage PII risks systematically', 'Build user privacy confidence'],
    scope: 'Data controllers and processors handling user data.'
  },
  {
    slug: 'iso-27017',
    code: 'ISO 27017',
    name: 'Cloud Security Controls',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Guidelines for information security controls applicable to the provision and use of cloud services.',
    benefits: ['Safeguard cloud environments', 'Clarify cloud provider vs customer duties', 'Accelerate cloud sales'],
    scope: 'AWS, Azure, GCP users, cloud service providers, and SaaS vendors.'
  },
  {
    slug: 'iso-27018',
    code: 'ISO 27018',
    name: 'Cloud Privacy Protection',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Code of practice for protection of personally identifiable information (PII) in public clouds.',
    benefits: ['Protect public cloud data', 'Ensure cloud PII compliance', 'Increase cloud tenant trust'],
    scope: 'Public cloud service providers and data hosters.'
  },
  {
    slug: 'soc-2',
    code: 'SOC 2 Type II',
    name: 'SOC 2 Attestation & Assessment',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Audit report validating Security, Availability, Processing Integrity, Confidentiality, and Privacy controls.',
    benefits: ['Essential for US & global SaaS sales', 'Demonstrate operational security', 'Unblock enterprise deals'],
    scope: 'SaaS companies, cloud providers, and managed IT services.'
  },
  {
    slug: 'pci-dss',
    code: 'PCI DSS Compliance',
    name: 'Payment Card Industry Data Security Standard',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Security standards for organizations that handle branded credit and debit card payments.',
    benefits: ['Avoid card non-compliance fines', 'Protect customer cardholder data', 'Secure payment gateways'],
    scope: 'E-commerce merchants, payment gateways, and retail networks.'
  },
  {
    slug: 'gdpr-assessment',
    code: 'GDPR Assessment',
    name: 'UK & EU GDPR Compliance Review',
    category: 'cyber',
    tag: 'NEW',
    summary: 'Independent audit of data protection practices, consent mechanisms, and subject rights procedures.',
    benefits: ['Mitigate high regulatory fines', 'Verify privacy impact assessments', 'Build consumer transparency'],
    scope: 'Businesses processing UK/EU citizen data.'
  },
  {
    slug: 'penetration-testing',
    code: 'Penetration Testing',
    name: 'Ethical Hacking & Vulnerability Assessment',
    category: 'cyber',
    tag: 'NEW',
    summary: 'CREST-aligned penetration testing of web applications, internal networks, cloud infra, and mobile apps.',
    benefits: ['Uncover real vulnerabilities', 'Remediation guidance', 'Satisfy compliance mandates'],
    scope: 'All digital infrastructure and web applications.'
  },

  // Sustainability & ESG (2 items)
  {
    slug: 'esg-sustainability',
    code: 'ESG SERVICES',
    name: 'ESG Assessment & Verification',
    category: 'sustainability',
    tag: 'NEW',
    summary: 'Independent evaluation of Environmental, Social, and Governance metrics for corporate reporting.',
    benefits: ['Attract ESG investment', 'Enhance stakeholder trust', 'Transparent ESG disclosures'],
    scope: 'Public and private enterprises seeking ESG credibility.'
  },
  {
    slug: 'carbon-net-zero',
    code: 'NET-ZERO ADVISORY',
    name: 'Carbon Footprint & Net-Zero Advisory',
    category: 'sustainability',
    tag: 'NEW',
    summary: 'Advisory and verification framework to measure, manage, and offset corporate carbon emissions.',
    benefits: ['Achieve verified Net-Zero goals', 'Scope 1, 2, 3 carbon mapping', 'Cut carbon tax liabilities'],
    scope: 'Organizations working towards carbon neutrality.'
  },

  // Inspection Services (4 items)
  {
    slug: 'inspection',
    code: 'INSPECTION',
    name: 'Pre-Shipment Inspection Overview',
    category: 'inspection',
    summary: 'Third-party quality and quantity verification of goods prior to export dispatch.',
    benefits: ['Prevent defective shipments', 'Verify order specifications', 'Ensure customs clearance'],
    scope: 'Exporters, importers, and trading companies.'
  },
  {
    slug: 'inspection-what-is-psi',
    code: 'PSI GUIDE',
    name: 'What is Pre-Shipment Inspection?',
    category: 'inspection',
    summary: 'Detailed overview of the Pre-Shipment Inspection process, sampling methods, and pass criteria.',
    benefits: ['Understand inspection steps', 'Prepare factory goods efficiently', 'Clear documentation'],
    scope: 'Global trade suppliers.'
  },
  {
    slug: 'inspection-why-psi',
    code: 'PSI IMPORTANCE',
    name: 'Why Pre-Shipment Inspection is Important',
    category: 'inspection',
    summary: 'Risk mitigation guide on how pre-shipment inspections protect buyers from supply chain losses.',
    benefits: ['Minimize financial loss', 'Protect brand quality standards', 'Enforce contract terms'],
    scope: 'Supply chain managers and procurement leads.'
  },
  {
    slug: 'inspection-benefits',
    code: 'PSI BENEFITS',
    name: 'Benefits of Pre-Shipment Inspection',
    category: 'inspection',
    summary: 'Key advantages of working with accredited independent inspectors for international cargo.',
    benefits: ['Accredited inspection certificates', 'Immediate defect reporting', 'Global inspector network'],
    scope: 'International trade participants.'
  }
];
