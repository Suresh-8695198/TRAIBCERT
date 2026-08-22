import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industriesData } from '@/config/industries';

export const MegaMenuResources: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '1140px',
      backgroundColor: '#ffffff',
      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      borderRadius: '0 0 16px 16px',
      border: '1px solid var(--gray-100)',
      borderTop: 'none',
      padding: '32px 36px',
      zIndex: 100,
      display: 'grid',
      gridTemplateColumns: '260px 1fr 300px',
      gap: '40px'
    }}>
      {/* Column 1: Knowledge Hub */}
      <div>
        <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
          KNOWLEDGE HUB
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px' }}>
          <li>
            <Link href="/resources/blog" onClick={onClose} style={{ color: 'var(--gray-900)', fontWeight: 500, textDecoration: 'none' }}>
              Blog / Latest Insights
            </Link>
          </li>
          <li>
            <Link href="/resources/knowledge-base" onClick={onClose} style={{ color: 'var(--gray-900)', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Knowledge Base & Guides</span>
              <span className="badge badge-alert" style={{ fontSize: '9px', padding: '2px 6px' }}>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="/resources/downloads" onClick={onClose} style={{ color: 'var(--gray-900)', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Downloads & Whitepapers</span>
              <span className="badge badge-alert" style={{ fontSize: '9px', padding: '2px 6px' }}>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="/resources/further-topics" onClick={onClose} style={{ color: 'var(--gray-900)', fontWeight: 500, textDecoration: 'none' }}>
              Further Topics
            </Link>
          </li>
          <li>
            <Link href="/resources/faq" onClick={onClose} style={{ color: 'var(--gray-900)', fontWeight: 500, textDecoration: 'none' }}>
              Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2: Industries */}
      <div>
        <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
          INDUSTRIES
        </h4>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '13px' }}>
          <li style={{ gridColumn: 'span 2' }}>
            <Link href="/resources/industries" onClick={onClose} style={{ color: 'var(--ink)', fontWeight: 700, textDecoration: 'none' }}>
              All Industries Overview
            </Link>
          </li>
          {industriesData.map(ind => (
            <li key={ind.slug}>
              <Link href={`/resources/industries/${ind.slug}`} onClick={onClose} style={{ color: 'var(--gray-700)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {ind.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Featured Card + Client Services */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* 6 Essential Steps Card */}
        <div style={{
          background: 'linear-gradient(145deg, #2c2a75, #3f3b8f)',
          borderRadius: '14px',
          padding: '24px',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(44, 42, 117, 0.25)'
        }}>
          <span style={{ background: '#ffffff', color: '#2c2a75', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', display: 'inline-block' }}>
            FREE DOWNLOAD
          </span>
          <h5 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '8px' }}>
            6 Essential Steps to ISO Certification
          </h5>
          <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginBottom: '20px' }}>
            Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.
          </p>
          <Link
            href="/resources/downloads"
            onClick={onClose}
            style={{
              backgroundColor: '#f9b933',
              color: '#2c2a75',
              fontWeight: 800,
              fontSize: '13px',
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Get the guide →</span>
          </Link>
        </div>

        {/* Client Services Sub-section */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            CLIENT SERVICES
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li>
              <Link href="/resources/certificate-transfer" onClick={onClose} style={{ color: 'var(--gray-900)', textDecoration: 'none', fontWeight: 500 }}>
                Certificate Transfer
              </Link>
            </li>
            <li>
              <Link href="/sitemap" onClick={onClose} style={{ color: 'var(--gray-900)', textDecoration: 'none', fontWeight: 500 }}>
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
