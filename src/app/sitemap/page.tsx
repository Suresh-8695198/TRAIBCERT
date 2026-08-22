import React from 'react';
import Link from 'next/link';
import { certificationsData } from '@/config/certifications';
import { industriesData } from '@/config/industries';
import { trainingCoursesData } from '@/config/training';
import { policiesData } from '@/config/policies';

export const metadata = {
  title: 'Site Directory & HTML Sitemap | TRAIBCERT',
  description: 'Complete index of all TRAIBCERT ISO certification standards, training courses, industry sectors, legal policies, and verification tools.'
};

export default function SitemapPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            SITE INDEX
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            TRAIBCERT Complete Site Directory
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Quick index of all pages, certification standards, training modules, and resources.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
          
          {/* Section 1: ISO & Cyber Standards */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', borderBottom: '2px solid var(--gold)', paddingBottom: '8px' }}>
              ISO & Cyber Security Standards
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link href="/certification" style={{ fontWeight: 700, color: 'var(--ink)' }}>All Certification Standards Overview</Link></li>
              <li><Link href="/certification/cyber-essentials" style={{ fontWeight: 700, color: 'var(--gold-strong)' }}>Cyber Essentials & Plus Scheme</Link></li>
              {certificationsData.map(c => (
                <li key={c.slug}>
                  <Link href={`/certification/${c.slug}`} style={{ color: 'var(--gray-700)' }}>
                    {c.code}: {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Training Courses */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', borderBottom: '2px solid var(--gold)', paddingBottom: '8px' }}>
              Training Courses
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link href="/training" style={{ fontWeight: 700, color: 'var(--ink)' }}>All Training Courses Overview</Link></li>
              {trainingCoursesData.map(t => (
                <li key={t.slug}>
                  <Link href={`/training/${t.slug}`} style={{ color: 'var(--gray-700)' }}>
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Industry Sectors */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', borderBottom: '2px solid var(--gold)', paddingBottom: '8px' }}>
              Industry Sectors
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link href="/resources/industries" style={{ fontWeight: 700, color: 'var(--ink)' }}>12 Industry Verticals</Link></li>
              {industriesData.map(ind => (
                <li key={ind.slug}>
                  <Link href={`/resources/industries/${ind.slug}`} style={{ color: 'var(--gray-700)' }}>
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Resources & Legal */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', borderBottom: '2px solid var(--gold)', paddingBottom: '8px' }}>
              Resources & Legal
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link href="/resources/blog" style={{ color: 'var(--gray-700)' }}>Blog & Insights</Link></li>
              <li><Link href="/resources/knowledge-base" style={{ color: 'var(--gray-700)' }}>Knowledge Base & Guides</Link></li>
              <li><Link href="/resources/downloads" style={{ color: 'var(--gray-700)' }}>Downloads & Whitepapers</Link></li>
              <li><Link href="/resources/further-topics" style={{ color: 'var(--gray-700)' }}>Further Topics</Link></li>
              <li><Link href="/resources/faq" style={{ color: 'var(--gray-700)' }}>Frequently Asked Questions</Link></li>
              <li><Link href="/resources/certificate-transfer" style={{ color: 'var(--gray-700)' }}>Certificate Transfer</Link></li>
              <li><Link href="/verify-certificate" style={{ fontWeight: 700, color: 'var(--ink)' }}>Certificate Verification Lookup</Link></li>
              {policiesData.map(p => (
                <li key={p.slug}>
                  <Link href={`/legal/${p.slug}`} style={{ color: 'var(--gray-500)' }}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
