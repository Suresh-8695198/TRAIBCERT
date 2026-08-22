import React from 'react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export default function EnquiryPage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="eyebrow">Zoho Bigin Integrated Quote Form</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Request Your Official ISO Certification Proposal
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Please fill out the technical form below to receive a formal quotation from TRAIBCERT Limited.
          </p>
        </div>

        <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-md)' }}>
          <ZohoBiginForm defaultStandard="ISO 9001:2015" />
        </div>
      </div>
    </div>
  );
}
