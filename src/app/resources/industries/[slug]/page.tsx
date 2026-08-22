import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { industriesData } from '@/config/industries';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export function generateStaticParams() {
  return industriesData.map(ind => ({ slug: ind.slug }));
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const ind = industriesData.find(i => i.slug === params.slug);

  if (!ind) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--topbar), var(--ink))', color: '#fff', padding: '64px 0' }}>
        <div className="container">
          <div style={{ fontSize: '13px', color: 'var(--gold)', marginBottom: '12px' }}>
            <Link href="/resources/industries">Industries</Link> / <span>{ind.name}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>{ind.name} Sector Compliance</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '700px', lineHeight: 1.6 }}>{ind.description}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }}>
        <div>
          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', marginBottom: '32px' }}>
            <h2 className="heading-md" style={{ marginBottom: '16px' }}>Recommended ISO & Cyber Standards for {ind.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {ind.relevantStandards.map((std, i) => (
                <div key={i} style={{ border: '1px solid var(--gray-200)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 800, color: 'var(--ink)', fontSize: '15px' }}>{std}</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--gray-500)', marginTop: '4px' }}>Essential for sector compliance</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', alignSelf: 'start' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>Get a Sector Proposal</h3>
          <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '20px' }}>Directly routed into Zoho Bigin CRM.</p>
          <ZohoBiginForm defaultStandard={ind.relevantStandards[0] || 'ISO 9001:2015'} />
        </div>
      </div>
    </div>
  );
}
