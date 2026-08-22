import React from 'react';
import Link from 'next/link';
import { Download, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'ISO Whitepapers & Downloadable Guides | TRAIBCERT',
  description: 'Download free ISO compliance whitepapers, audit readiness checklists, and 6-step certification guides.'
};

export default function DownloadsPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            FREE RESOURCES
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Downloads & Compliance Whitepapers
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Download practical step-by-step guides written by lead auditors to simplify your path to ISO certification.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ backgroundColor: 'var(--gold)', color: 'var(--ink)', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '12px', display: 'inline-block' }}>
              POPULAR WHITEPAPER
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              6 Essential Steps to ISO Certification
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
              Our practical guide to achieving certification the first time without unnecessary consultancy overhead. Downloaded by 500+ UK & UAE organisations.
            </p>
            <Link href="/contact/enquiry" className="btn btn-gold" style={{ width: '100%', fontSize: '14px' }}>
              <span>Download PDF Guide</span>
              <Download size={16} />
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '12px', display: 'inline-block' }}>
              2026 AUDIT CHECKLIST
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              ISO 9001:2026 Transition Gap Checklist
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
              Self-assessment questionnaire to evaluate your organization's readiness for the upcoming ISO 9001 September 2026 revisions.
            </p>
            <Link href="/contact/enquiry" className="btn btn-outline" style={{ width: '100%', fontSize: '14px' }}>
              <span>Request Gap Checklist</span>
              <FileText size={16} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
