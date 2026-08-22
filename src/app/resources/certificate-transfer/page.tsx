import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, RefreshCw, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Transfer ISO Certificate to TRAIBCERT | Fee-Free Certificate Transfer',
  description: 'Seamlessly transfer your valid ISO 9001, 14001, 27001, or 45001 certificate to TRAIBCERT with zero transfer fees and zero audit disruption.'
};

export default function CertificateTransferPage() {
  return (
    <main style={{ backgroundColor: 'var(--gray-50)', paddingBottom: '80px' }}>
      <section style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0 72px' }}>
        <div className="container">
          <span className="eyebrow" style={{ background: 'rgba(249,185,51,0.15)', color: '#f9b933', marginBottom: '12px' }}>
            FEE-FREE CERTIFICATE TRANSFER
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Switch Your ISO Certificate to TRAIBCERT
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Seamlessly transfer your valid accredited ISO certification with zero transfer fees, zero audit disruption, and transparent ongoing surveillance pricing.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '48px', maxWidth: '900px' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '14px', padding: '36px', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)', marginBottom: '20px' }}>
            Why Organisations Transfer to TRAIBCERT
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--done)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15px' }}>£0 Transfer Fees</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', marginTop: '4px' }}>We perform desktop transfer reviews completely free of charge.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--done)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15px' }}>Preserve Audit Cycle</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', marginTop: '4px' }}>Your existing 3-year certification cycle and anniversary dates remain intact.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--done)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15px' }}>Transparent Fixed Pricing</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', marginTop: '4px' }}>No hidden travel surcharges or administrative management fees.</p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--gray-50)', padding: '24px', borderRadius: '10px', border: '1px solid var(--gray-200)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
              Ready to Transfer Your Certificate?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-700)', marginBottom: '20px' }}>
              Simply upload a copy of your current ISO certificate and recent surveillance audit report.
            </p>
            <Link href="/contact/enquiry" className="btn btn-gold" style={{ padding: '12px 28px', fontSize: '15px' }}>
              <span>Apply for Certificate Transfer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
