import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import { industriesData } from '@/config/industries';

export default function IndustriesLandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>
          <span className="eyebrow">Industry Vertical Solutions</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Tailored ISO & Cyber Assurance for Your Sector
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Every sector faces unique regulatory compliance, supply chain safety, and security requirements. Discover tailored certification packages for 12 industries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {industriesData.map(ind => (
            <div
              key={ind.slug}
              style={{
                background: 'var(--white)',
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>{ind.name}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '16px' }}>{ind.description}</p>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '24px' }}>
                  <strong>Key Standards:</strong> {ind.relevantStandards.join(' · ')}
                </div>
              </div>

              <Link href={`/resources/industries/${ind.slug}`} className="btn btn-outline" style={{ width: '100%', fontSize: '13px' }}>
                <span>View Sector Overview</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
