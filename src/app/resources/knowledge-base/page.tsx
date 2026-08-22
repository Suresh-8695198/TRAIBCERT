import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileCheck, ShieldCheck, Award } from 'lucide-react';

export const metadata = {
  title: 'ISO & Cyber Knowledge Base | TRAIBCERT',
  description: 'Comprehensive documentation, compliance templates, audit preparation guides, and standard overview frameworks.'
};

export default function KnowledgeBasePage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            DOCUMENTS & GUIDES
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            ISO & Cyber Security Knowledge Base
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Access authoritative compliance frameworks, audit readiness checklists, and ISO implementation documentation.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <FileCheck size={28} style={{ color: 'var(--ink)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              ISO 9001 Stage 1 & 2 Audit Readiness
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '20px' }}>
              Detailed breakdown of mandatory Quality Management System (QMS) policies, internal audit records, and management review inputs required for Stage 1 desktop evaluation.
            </p>
            <Link href="/certification/iso-9001" className="btn btn-outline" style={{ fontSize: '13px' }}>
              View QMS Framework →
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <ShieldCheck size={28} style={{ color: 'var(--ink)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              Cyber Essentials Assessment Guide
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '20px' }}>
              Technical requirements for firewall configuration, boundary security, software patch management, malware protection, and access control.
            </p>
            <Link href="/certification/cyber-essentials" className="btn btn-outline" style={{ fontSize: '13px' }}>
              View Cyber Essentials Guide →
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '32px' }}>
            <Award size={28} style={{ color: 'var(--ink)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              ISO 27001 ISMS Controls Index
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '20px' }}>
              Mapping of Annex A controls across organizational, people, physical, and technological security domains under the ISO 27001:2022 standard.
            </p>
            <Link href="/certification/iso-27001" className="btn btn-outline" style={{ fontSize: '13px' }}>
              View ISMS Controls →
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
