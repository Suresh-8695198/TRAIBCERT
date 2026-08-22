import React from 'react';
import { CertVerifyLookup } from '@/components/ui/CertVerifyLookup';
import { ShieldCheck, Award, Lock, CheckCircle2 } from 'lucide-react';

export const AccreditationsSection: React.FC = () => {
  return (
    <section id="accreditations" style={{ backgroundColor: '#f8fafc', padding: '88px 0', borderTop: '1px solid var(--gray-200)' }}>
      <div className="container">
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            GLOBAL RECOGNITION & VERIFICATION
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Accreditations & Live Certificate Verification
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            TRAIBCERT holds official accreditation alignment, certifying organisations to recognized global standards with verifiable digital credentials.
          </p>
        </div>

        {/* Accreditations Badges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '28px 24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={24} />
            </div>
            <div>
              <span className="badge badge-current" style={{ fontSize: '10px', marginBottom: '6px', display: 'inline-block' }}>ASCB ACCREDITED</span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px' }}>
                ASCB UK Accreditation
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.5, margin: 0 }}>
                Accreditation Service for Certifying Bodies, verifying auditor competence & independence internationally.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '28px 24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Lock size={24} />
            </div>
            <div>
              <span className="badge badge-new" style={{ fontSize: '10px', marginBottom: '6px', display: 'inline-block' }}>IASME GOLD PARTNER</span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px' }}>
                Cyber Essentials CB
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.5, margin: 0 }}>
                Official IASME licensed Certification Body for Cyber Essentials and Cyber Essentials Plus assessments.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '28px 24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--done-soft)', color: 'var(--done)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="badge badge-current" style={{ fontSize: '10px', marginBottom: '6px', display: 'inline-block' }}>CQI IRCA APPROVED</span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px' }}>
                IRCA Lead Auditor Training
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.5, margin: 0 }}>
                Chartered Quality Institute recognized training courses across Quality, Environmental & Security standards.
              </p>
            </div>
          </div>

        </div>

        {/* Live Certificate Verification Portal */}
        <CertVerifyLookup />

      </div>
    </section>
  );
};
