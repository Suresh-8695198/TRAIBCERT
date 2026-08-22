import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { certificationsData, certificationCategories } from '@/config/certifications';

export default function CertificationLandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>
          <span className="eyebrow">Certification Portfolio</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            UKAS & ASCB Accredited ISO & Cyber Standards
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Explore TRAIBCERT’s comprehensive portfolio of 34 ISO management system certifications, cyber compliance assessments, and inspection services.
          </p>
        </div>

        {/* Standards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {certificationsData.map(cert => (
            <div
              key={cert.slug}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>{cert.code}</span>
                  {cert.tag === 'CURRENT' && <span className="badge badge-current">CURRENT</span>}
                  {cert.tag === 'NEW' && <span className="badge badge-new">NEW</span>}
                  {cert.tag === 'POPULAR' && <span className="badge badge-alert">POPULAR</span>}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>{cert.name}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '20px' }}>{cert.summary}</p>
              </div>

              <Link
                href={cert.slug === 'cyber-essentials' ? '/certification/cyber-essentials' : `/certification/${cert.slug}`}
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '13px', padding: '10px' }}
              >
                <span>View Standard Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
