export interface TrainingCourse {
  slug: string;
  code: string;
  name: string;
  levels: string[];
  summary: string;
}

export const trainingCoursesData: TrainingCourse[] = [
  {
    slug: 'training-overview',
    code: 'ALL COURSES',
    name: 'Training & Certification Courses Landing',
    levels: ['Foundation', 'Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'Comprehensive CQI IRCA accredited and TRAIBCERT certified training programs.'
  },
  {
    slug: 'iso-9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management Training',
    levels: ['Foundation', 'Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'Master quality management system implementation, auditing, and continuous improvement.'
  },
  {
    slug: 'iso-10002',
    code: 'ISO 10002:2018',
    name: 'Customer Satisfaction Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'Develop skills to handle complaints and improve customer satisfaction.'
  },
  {
    slug: 'iso-14001',
    code: 'ISO 14001:2026',
    name: 'Environmental Management Training',
    levels: ['Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'Learn environmental impact assessment, compliance auditing, and ESG alignment.'
  },
  {
    slug: 'iso-45001',
    code: 'ISO 45001:2018',
    name: 'Health & Safety Training',
    levels: ['Foundation', 'Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'Workplace risk assessment, hazard control, and OH&S auditor certification.'
  },
  {
    slug: 'iso-22000',
    code: 'ISO 22000:2018',
    name: 'Food Safety Management Training',
    levels: ['Foundation', 'Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'HACCP principles, food safety hazard management, and food auditor training.'
  },
  {
    slug: 'iso-27001',
    code: 'ISO 27001:2022',
    name: 'Information Security Training',
    levels: ['Foundation', 'Awareness', 'Internal Auditor', 'Lead Auditor'],
    summary: 'Cyber security risk assessment, ISMS implementation, and lead auditor certification.'
  },
  {
    slug: 'iso-41001',
    code: 'ISO 41001:2018',
    name: 'Facility Management Training',
    levels: ['Foundation', 'Awareness', 'Internal Auditor'],
    summary: 'Facility operational management, asset performance, and safety auditing.'
  },
  {
    slug: 'iso-20000-1',
    code: 'ISO 20000-1:2018',
    name: 'IT Service Management Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'IT service lifecycle, SLA management, and ITSM internal auditing.'
  },
  {
    slug: 'iso-22301',
    code: 'ISO 22301:2019',
    name: 'Business Continuity Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'Business impact analysis, disaster recovery planning, and continuity auditing.'
  },
  {
    slug: 'iso-31000',
    code: 'ISO 31000:2018',
    name: 'Risk Management Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'Enterprise risk identification, risk evaluation, and mitigation techniques.'
  },
  {
    slug: 'iso-26000',
    code: 'ISO 26000:2010',
    name: 'Social Responsibility Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'Understand core social responsibility principles and implementation guidelines.'
  },
  {
    slug: 'iso-50001',
    code: 'ISO 50001:2018',
    name: 'Energy Management Training',
    levels: ['Awareness', 'Internal Auditor'],
    summary: 'Energy baseline mapping, efficiency auditing, and carbon reduction.'
  },
  {
    slug: 'iso-17025',
    code: 'ISO/IEC 17025:2017',
    name: 'Testing & Calibration Laboratories Training',
    levels: ['Foundation', 'Awareness'],
    summary: 'Laboratory competence, measurement uncertainty, and quality control.'
  },
  {
    slug: 'iso-17043',
    code: 'ISO/IEC 17043:2010',
    name: 'Proficiency Testing Schemes Training',
    levels: ['Foundation', 'Awareness'],
    summary: 'Proficiency testing scheme design, statistical evaluation, and quality management.'
  },
  {
    slug: 'iso-13528',
    code: 'ISO 13528:2015',
    name: 'Statistical Methods for Proficiency Testing',
    levels: ['Foundation', 'Awareness'],
    summary: 'Statistical algorithms and data analysis for interlaboratory comparisons.'
  }
];
