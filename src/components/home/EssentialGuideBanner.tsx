import React from 'react';
import Link from 'next/link';
import { Download, FileText, ArrowRight } from 'lucide-react';

export const EssentialGuideBanner: React.FC = () => {
  return (
    <section id="essential-guide" style={{ backgroundColor: '#2c2a75', color: '#ffffff', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(249,185,51,0.3)',
          borderRadius: '24px',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)'
        }}>
          <div>
            <span className="eyebrow" style={{ background: '#f9b933', color: '#2c2a75', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={14} />
              <span>FREE CERTIFICATION GUIDE</span>
            </span>

            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
              6 Step Essential Guide for Certification
            </h2>

            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, marginBottom: '28px', maxWidth: '600px' }}>
              Start your Certification journey with our expert guidance - Your step-by-step document for a seamless and effortless certification process now.
            </p>

            <Link href="/resources/downloads/6-essential-steps" className="btn btn-gold" style={{ padding: '14px 28px', fontSize: '15px' }}>
              <Download size={18} />
              <span>Download Now</span>
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', color: '#0f172a', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2c2a75', marginBottom: '12px' }}>
              What's Inside the 6-Step Guide?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#475569' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 1: Standard Requirements & Gap Analysis
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 2: System Implementation & Documentation
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 3: Stage 1 Readiness Audit
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 4: Stage 2 Accredited Assessment
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 5: Certificate Issuance & Recognition
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#c99327', fontWeight: 800 }}>✓</span> Step 6: Continuous Annual Maintenance
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
