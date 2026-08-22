import React from 'react';
import { CertVerifyLookup } from '@/components/ui/CertVerifyLookup';

export default function VerifyCertificatePage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="eyebrow">Accreditation Registry</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Online Certificate Verification Portal
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Verify the authenticity, validity, and scope of any TRAIBCERT issued certificate in real-time.
          </p>
        </div>

        <CertVerifyLookup />
      </div>
    </div>
  );
}
