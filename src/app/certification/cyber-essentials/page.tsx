'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Award, Zap, HelpCircle } from 'lucide-react';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';

export default function CyberEssentialsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#0a1628', color: '#fff', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>
      {/* Target Aesthetic Hero Header */}
      <section style={{ padding: '80px 0 60px', background: 'radial-gradient(circle at 80% 20%, rgba(0,201,167,0.12) 0%, transparent 60%)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,201,167,0.15)', color: '#00c9a7', fontSize: '12px', fontWeight: 800, padding: '6px 14px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Official IASME Delivery Partner
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: '20px' }}>
              Protect Your Enterprise with <span style={{ color: '#00c9a7' }}>Cyber Essentials</span> Certification
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '620px' }}>
              The UK Government-backed cyber security scheme that guards against 80% of common internet threats, qualifies your company for public sector tenders, and includes free £25,000 cyber insurance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => setIsCartOpen(true)} className="btn" style={{ backgroundColor: '#00c9a7', color: '#0a1628', fontWeight: 800, padding: '14px 28px', fontSize: '15px' }}>
                <Lock size={16} />
                <span>Buy & Assess Online Now</span>
              </button>
              <a href="#quote-form" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', padding: '14px 24px' }}>
                <span>Request Custom Scope Quote</span>
              </a>
            </div>
          </div>

          {/* Quick Pricing Badge Card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,201,167,0.3)', borderRadius: 'var(--radius-lg)', padding: '32px', backdropFilter: 'blur(10px)' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#f0b742', textTransform: 'uppercase', letterSpacing: '1px' }}>INSTANT DIRECT CHECKOUT</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#fff', marginTop: '4px', marginBottom: '16px' }}>Cyber Essentials Basic</h3>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#00c9a7', fontFamily: 'var(--font-mono)' }}>£300 <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>+ VAT</span></div>
            <ul style={{ listStyle: 'none', margin: '20px 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'rgba(255,255,255,0.85)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7' }} /> Verified IASME Portal Access</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7' }} /> Technical Assessor Guidance</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7' }} /> Official Certification Badge & Listing</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#00c9a7' }} /> Free £25,000 Cyber Liability Insurance</li>
            </ul>
            <button onClick={() => setIsCartOpen(true)} className="btn" style={{ width: '100%', backgroundColor: '#00c9a7', color: '#0a1628', fontWeight: 800, padding: '12px' }}>
              Select Package & Proceed
            </button>
          </div>
        </div>
      </section>

      {/* Package Comparison Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#0e1d33' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: '#fff' }}>Choose Your Cyber Assurance Level</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>Select between verified self-assessment or hands-on technical audit.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {/* Package 1: Basic */}
            <div style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-new" style={{ backgroundColor: 'rgba(0,201,167,0.15)', color: '#00c9a7', border: 'none' }}>STAGE 1</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#fff', margin: '12px 0' }}>Cyber Essentials Basic</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Verified self-assessment questionnaire covering firewall security, secure configuration, user access control, malware protection, and security update management.
                </p>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>£300 <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>+ VAT</span></div>
              </div>
              <button onClick={() => setIsCartOpen(true)} className="btn" style={{ backgroundColor: '#00c9a7', color: '#0a1628', fontWeight: 800, width: '100%' }}>
                Order Cyber Essentials Basic
              </button>
            </div>

            {/* Package 2: Plus */}
            <div style={{ background: '#0a1628', border: '2px solid #f0b742', borderRadius: 'var(--radius-lg)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', right: '24px', background: '#f0b742', color: '#0a1628', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px' }}>RECOMMENDED FOR ENTERPRISE</div>
              <div>
                <span className="badge badge-alert" style={{ backgroundColor: 'rgba(240,183,66,0.15)', color: '#f0b742', border: 'none' }}>STAGE 2 (AUDITED)</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#fff', margin: '12px 0' }}>Cyber Essentials Plus</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Hands-on technical validation audit, including internal & external vulnerability scans, endpoint security checks, and email sample testing by TRAIBCERT cyber assessors.
                </p>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#f0b742', marginBottom: '24px' }}>£850 <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>+ VAT</span></div>
              </div>
              <button onClick={() => setIsCartOpen(true)} className="btn" style={{ backgroundColor: '#f0b742', color: '#0a1628', fontWeight: 800, width: '100%' }}>
                Order Cyber Essentials Plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form Section */}
      <section id="quote-form" style={{ padding: '80px 0', backgroundColor: '#0a1628' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#fff' }}>Have Custom Cyber Security Scope Requirements?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>Send your details directly to our technical assessment team via Zoho Bigin CRM.</p>
          </div>
          <div style={{ background: '#fff', padding: '36px', borderRadius: 'var(--radius-lg)', color: 'var(--gray-900)' }}>
            <ZohoBiginForm defaultStandard="Cyber Essentials" />
          </div>
        </div>
      </section>

      {/* Cart Drawer Overlay */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
