import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, Calendar, Building } from 'lucide-react';
import { certificationsData } from '@/config/certifications';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export function generateStaticParams() {
  return certificationsData.map(cert => ({ slug: cert.slug }));
}

export default function CertificationDetailPage({ params }: { params: { slug: string } }) {
  const cert = certificationsData.find(c => c.slug === params.slug);

  if (!cert) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--topbar), var(--ink))', color: '#fff', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--gold)', marginBottom: '12px' }}>
            <Link href="/certification">Certification</Link> / <span>{cert.code}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px' }}>
              {cert.code}
            </span>
            {cert.tag && <span className="badge badge-alert">{cert.tag}</span>}
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>{cert.name}</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '700px', lineHeight: 1.6 }}>{cert.summary}</p>
        </div>
      </section>

      {/* Main Content & Quote Form */}
      <div className="container" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }}>
        <div>
          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', marginBottom: '32px' }}>
            <h2 className="heading-md" style={{ marginBottom: '16px' }}>Key Benefits of {cert.code}</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              {cert.benefits.map((benefit, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--gray-900)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--done)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
            <h2 className="heading-md" style={{ marginBottom: '16px' }}>Target Scope & Applicability</h2>
            <p style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: 1.7 }}>{cert.scope}</p>
          </div>
        </div>

        {/* Sidebar Quote Form */}
        <div style={{ background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-md)', alignSelf: 'start' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>Request Quote for {cert.code}</h3>
          <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '20px' }}>Fast response via Zoho Bigin lead pipeline.</p>
          <ZohoBiginForm defaultStandard={cert.code} />
        </div>
      </div>
    </div>
  );
}
