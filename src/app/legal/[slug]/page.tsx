import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { policiesData } from '@/config/policies';

export function generateStaticParams() {
  return policiesData.map(policy => ({ slug: policy.slug }));
}

export default function PolicyDetailPage({ params }: { params: { slug: string } }) {
  const policy = policiesData.find(p => p.slug === params.slug);

  if (!policy) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
          <span className="badge badge-alert" style={{ marginBottom: '12px', display: 'inline-block' }}>OFFICIAL POLICY</span>
          <h1 className="heading-lg" style={{ marginBottom: '8px' }}>{policy.title}</h1>
          <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '24px' }}>
            TRAIBCERT Limited · Last Reviewed: {policy.lastUpdated}
          </div>

          <div style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>{policy.summary}</p>
            <p style={{ marginBottom: '16px' }}>
              TRAIBCERT Limited is committed to maintaining high standards of governance, confidentiality, and technical impartiality across all accreditation, certification, and training operations.
            </p>
            <p style={{ marginBottom: '16px' }}>
              For any questions regarding this policy document, please contact our legal compliance team at <a href="mailto:info@traibcert.org.uk" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>info@traibcert.org.uk</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
