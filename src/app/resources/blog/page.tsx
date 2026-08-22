import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'ISO & Cyber Security Insights Blog | TRAIBCERT',
  description: 'Latest expert articles, ISO standard revision news, Cyber Essentials guides, and industry compliance updates from TRAIBCERT certification auditors.'
};

const blogPosts = [
  {
    slug: 'iso-9001-2026-revision-key-changes',
    title: 'ISO 9001:2026 Revision: Key Changes & What Your Organisation Needs to Know',
    category: 'ISO Revision',
    date: 'August 14, 2026',
    readTime: '6 min read',
    excerpt: 'The International Organization for Standardization is updating ISO 9001 in September 2026. Discover the new climate action requirements and risk framework updates.'
  },
  {
    slug: 'cyber-essentials-montreal-v3-1-compliance-guide',
    title: 'Cyber Essentials & Cyber Essentials Plus: Complete 2026 Assessment Checklist',
    category: 'Cyber Security',
    date: 'August 02, 2026',
    readTime: '8 min read',
    excerpt: 'Step-by-step guide to passing your IASME Cyber Essentials assessment first time. Covers multi-factor authentication, patch management, and cloud controls.'
  },
  {
    slug: 'iso-27001-2022-transition-deadline',
    title: 'ISO 27001:2022 Transition Deadline Approaching: Action Plan for CISOs',
    category: 'Information Security',
    date: 'July 28, 2026',
    readTime: '5 min read',
    excerpt: 'Ensure your Information Security Management System (ISMS) aligns with Annex A 93 controls before the official transition deadline.'
  },
  {
    slug: 'seamless-iso-certificate-transfer-guide',
    title: 'How to Transfer Your ISO Certificate to TRAIBCERT Without Extra Fees or Downtime',
    category: 'Certification Transfer',
    date: 'July 19, 2026',
    readTime: '4 min read',
    excerpt: 'Switching certification bodies is simple under UKAS & ASCB rules. Learn how TRAIBCERT maintains your 3-year audit cycle without disruption.'
  }
];

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            KNOWLEDGE HUB
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            ISO & Cyber Security Insights
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Expert analysis, compliance strategies, and regulatory updates written by UKAS & ASCB accredited lead auditors.
          </p>
        </div>
      </section>

      {/* Main Blog Post Grid */}
      <section className="container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {blogPosts.map(post => (
            <article key={post.slug} style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ backgroundColor: 'var(--gold-soft)', color: 'var(--gold-strong)', fontSize: '11px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--gray-500)' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35, marginBottom: '12px' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {post.excerpt}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{post.date}</span>
                <Link href="/contact/enquiry" className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '12px' }}>
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
