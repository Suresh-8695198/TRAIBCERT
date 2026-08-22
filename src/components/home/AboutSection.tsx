import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
        <div>
          <span className="eyebrow">About TRAIBCERT</span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '20px' }}>
            Independent UK Certification Body Committed to Excellence
          </h2>
          <p style={{ fontSize: '15.5px', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '20px' }}>
            TRAIBCERT Limited ({siteConfig.contact.address}) is an established independent accreditation and certification body operating across the United Kingdom, Middle East (UAE), and internationally.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '24px' }}>
            We specialize in ISO Management System Certifications, Cyber Essentials assessments, CQI IRCA training, and Pre-Shipment Inspection services for global trade flows.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--ink)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--done)' }} /> UKAS & ASCB Aligned
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--ink)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--done)' }} /> Transparent Fixed Fees
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--ink)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--done)' }} /> Pragmatic Audit Approach
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--ink)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--done)' }} /> 3-Year Certification Validity
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
            Need to Transfer an Existing Certificate?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
            Switching your certification body to TRAIBCERT is seamless, fee-free, and preserves your remaining 3-year audit cycle without disruption.
          </p>
          <Link href="/resources/certificate-transfer" className="btn btn-ink">
            <span>Apply for Certificate Transfer</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
