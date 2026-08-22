import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Further Topics & Compliance Information | TRAIBCERT',
  description: 'Explore specialized topics in ISO accreditation, pre-shipment inspection, CQI IRCA training, and multi-site certification.'
};

export default function FurtherTopicsPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            SPECIALIZED GUIDES
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Further Topics & Standards Guidance
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            In-depth documentation covering multi-site certification sampling, Integrated Management Systems (IMS), and trade inspection procedures.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
              Integrated Management Systems (IMS)
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '16px' }}>
              Combine ISO 9001, ISO 14001, and ISO 45001 into a single streamlined audit process to reduce audit days and certification fees by up to 35%.
            </p>
            <Link href="/certification" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: '13px' }}>
              Learn about IMS Audits →
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
              Pre-Shipment Inspection Services
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '16px' }}>
              Verify quantity, physical condition, and compliance of export shipments before dispatch to meet international customs and trade regulations.
            </p>
            <Link href="/contact/enquiry" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: '13px' }}>
              Enquire Inspection Services →
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
