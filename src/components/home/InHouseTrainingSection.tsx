import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

const inHouseCourses = [
  { code: 'ISO 9001', name: 'ISO 9001 Quality Management Certification Training', tag: 'In House Training', slug: 'iso-9001' },
  { code: 'ISO 10002', name: 'ISO 10002:2018 Customer Satisfaction Training', tag: 'In House Training', slug: 'iso-10002' },
  { code: 'ISO 14001', name: 'ISO 14001:2015 Environmental Management Systems Training', tag: 'In House Training', slug: 'iso-14001' },
  { code: 'ISO 45001', name: 'ISO 45001:2018 Occupational Health & Safety Training', tag: 'In House Training', slug: 'iso-45001' },
  { code: 'ISO 22000', name: 'ISO 22000:2018 Food Safety Management Systems Training', tag: 'In House Training', slug: 'iso-22000' },
  { code: 'ISO 20000-1', name: 'ISO 20000-1:2018 IT Service Management Training', tag: 'In House Training', slug: 'iso-20000-1' },
  { code: 'ISO 22301', name: 'ISO 22301:2019 Business Continuity Management Training', tag: 'In House Training', slug: 'iso-22301' },
  { code: 'ISO 27001', name: 'ISO 27001:2022 Information Security Training', tag: 'In House Training', slug: 'iso-27001' },
  { code: 'ISO 31000', name: 'ISO 31000:2018 Risk Management Training', tag: 'In House Training', slug: 'iso-31000' },
  { code: 'ISO 26000', name: 'ISO 26000:2010 Guidance on Social Responsibility Training', tag: 'In House Training', slug: 'iso-26000' },
  { code: 'ISO 50001', name: 'ISO 50001:2018 Energy Management Training', tag: 'In House Training', slug: 'iso-50001' }
];

export const InHouseTrainingSection: React.FC = () => {
  return (
    <section id="in-house-training" style={{ backgroundColor: '#f8fafc', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            IN-HOUSE CORPORATE TRAINING
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            ISO Training & Risk Management Programs
          </h2>
          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6 }}>
            Risk management is an increasingly important business driver and stakeholders have become much more concerned about risk. At TRAIBCERT, we have developed a suite of ISO training courses, highly interactive with real world examples.
          </p>
        </div>

        {/* 11 In House Training Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {inHouseCourses.map((c) => (
            <div
              key={c.slug}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#fff4d1', color: '#c99327', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={20} />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 800, backgroundColor: '#e0e7ff', color: '#4f46e5', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {c.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2c2a75', lineHeight: 1.35, marginBottom: '16px' }}>
                  {c.name}
                </h3>
              </div>

              <div>
                <Link
                  href={`/training/${c.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2c2a75',
                    fontSize: '13.5px',
                    fontWeight: 800,
                    textDecoration: 'none'
                  }}
                >
                  <span>View Course Details</span>
                  <ArrowRight size={14} style={{ color: '#c99327' }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
