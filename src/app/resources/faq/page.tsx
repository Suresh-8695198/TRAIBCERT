import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | TRAIBCERT',
  description: 'Common questions about ISO certification costs, audit duration, ASCB & UKAS accreditation alignment, and Cyber Essentials.'
};

const faqs = [
  {
    q: 'How long does ISO certification take?',
    a: 'For most small to medium-sized organisations, the end-to-end certification process takes 4 to 8 weeks depending on system readiness and documentation maturity.'
  },
  {
    q: 'How much does ISO certification cost?',
    a: 'TRAIBCERT operates transparent fixed pricing based on organisation headcount and risk category, with micro-business packages starting from £850.'
  },
  {
    q: 'Can I transfer my existing ISO certificate to TRAIBCERT?',
    a: 'Yes! Transferring your valid accredited certificate to TRAIBCERT is seamless, 100% free of transfer fees, and preserves your current 3-year audit cycle.'
  },
  {
    q: 'What is the difference between Cyber Essentials and Cyber Essentials Plus?',
    a: 'Cyber Essentials is a verified self-assessment for core baseline controls, while Cyber Essentials Plus includes hands-on technical vulnerability testing and workstation scans.'
  }
];

export default function FAQPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            HELP & SUPPORT
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Answers to common questions regarding certification procedures, audit schedules, and accreditation compliance.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '28px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
                {faq.q}
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid var(--gray-200)' }}>
          <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
            Have a specific question about your audit?
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--gray-500)', marginBottom: '20px' }}>
            Our UK lead auditors are available to answer your technical questions.
          </p>
          <Link href="/contact" className="btn btn-gold" style={{ padding: '10px 22px' }}>
            Contact Lead Auditor
          </Link>
        </div>
      </section>
    </main>
  );
}
