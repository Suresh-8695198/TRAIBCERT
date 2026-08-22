import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Settings, ShieldCheck, RefreshCw } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Get Started',
    icon: Play,
    description: 'Initial enquiry, scope determination & custom fixed proposal.'
  },
  {
    step: '02',
    title: 'Implementation',
    icon: Settings,
    description: 'QMS/ISMS system setup & team training requirement alignment.'
  },
  {
    step: '03',
    title: 'Certification',
    icon: ShieldCheck,
    description: 'Stage 1 & Stage 2 accredited auditing & certificate issuance.'
  },
  {
    step: '04',
    title: 'Maintenance',
    icon: RefreshCw,
    description: 'Annual surveillance audits & 3-year continuous improvement.'
  }
];

export const CertificationProcessTimeline: React.FC = () => {
  return (
    <section id="process" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            STEP-BY-STEP WORKFLOW
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Our Certification Process and Time Line
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6 }}>
            Our certification & training services are offered for various ISO STANDARDS.
          </p>
        </div>

        {/* 4 Process Timeline Nodes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  textAlign: 'center'
                }}
              >
                <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '12px', fontWeight: 800, color: '#c99327', backgroundColor: '#fff4d1', padding: '3px 8px', borderRadius: '4px' }}>
                  STEP {s.step}
                </div>

                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#2c2a75', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 20px rgba(44,42,117,0.2)' }}>
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#2c2a75', marginBottom: '10px' }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Training Support Callout Box */}
        <div style={{
          backgroundColor: '#fff4d1',
          border: '1px solid #fde68a',
          borderRadius: '16px',
          padding: '28px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '780px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#2c2a75', margin: '0 0 6px' }}>
              Need Implementation & Training Guidance?
            </h4>
            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              Our training services help organisation teams to understand the standard requirements better during implementation. We will also help you understand what implementation of a quality management system is all about – Contact Us to know more on our training modules.
            </p>
          </div>

          <Link href="/contact" className="btn btn-ink" style={{ padding: '12px 24px', fontSize: '14px' }}>
            <span>Contact Us / View More</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};
