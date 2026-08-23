import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industriesData } from '@/config/industries';

export const MegaMenuResources: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1120px',
        maxWidth: 'calc(100vw - 48px)',
        backgroundColor: '#ffffff',
        boxShadow: '0 12px 40px rgba(20, 20, 40, 0.14)',
        borderRadius: '0 0 8px 8px',
        border: '1px solid #ededf0',
        borderTop: '2px solid #f9b933',
        padding: '32px 40px 36px',
        zIndex: 1000,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1.2fr',
        gap: '32px',
        color: '#4a4a5a'
      }}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {/* Sub A: Knowledge Hub */}
      <div>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#c99327',
          marginBottom: '14px',
          paddingBottom: '10px',
          borderBottom: '1px solid #ededf0'
        }}>
          Knowledge Hub
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>
            <Link href="/resources/blog" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '5px 0', display: 'block' }}>
              Blog / Latest Insights
            </Link>
          </li>
          <li>
            <Link href="/resources/knowledge-base" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Knowledge Base & Guides</span>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="/resources/downloads" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Downloads & Whitepapers</span>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="/resources/further-topics" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '5px 0', display: 'block' }}>
              Further Topics
            </Link>
          </li>
          <li>
            <Link href="/resources/faq" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '5px 0', display: 'block' }}>
              Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>

      {/* Sub B: Industries */}
      <div>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#c99327',
          marginBottom: '14px',
          paddingBottom: '10px',
          borderBottom: '1px solid #ededf0'
        }}>
          Industries
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px', maxHeight: '360px', overflowY: 'auto' }}>
          <li>
            <Link href="/resources/industries" onClick={onClose} style={{ fontSize: '13.5px', color: '#2c2a75', fontWeight: 700, padding: '5px 0', display: 'block' }}>
              All Industries Overview →
            </Link>
          </li>
          {industriesData.map(ind => (
            <li key={ind.slug}>
              <Link href={`/resources/industries/${ind.slug}`} onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'block' }}>
                {ind.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sub C: Featured Tile + Client Services */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Featured Campaign Tile */}
        <div style={{
          background: 'linear-gradient(135deg, #2c2a75 0%, #5b56af 100%)',
          borderRadius: '6px',
          padding: '24px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '220px',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#f9b933', textTransform: 'uppercase', marginBottom: '8px' }}>
              Free Download
            </div>
            <h4 style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700, marginBottom: '8px', lineHeight: 1.25 }}>
              6 Essential Steps to ISO Certification
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '16px', lineHeight: 1.5 }}>
              Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.
            </p>
          </div>
          <Link
            href="/resources/downloads"
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 16px',
              backgroundColor: '#f9b933',
              color: '#2c2a75',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 700,
              alignSelf: 'flex-start',
              textDecoration: 'none'
            }}
          >
            <span>Get the guide →</span>
          </Link>
        </div>

        {/* Client Services */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#c99327', marginBottom: '8px' }}>
            Client Services
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>
              <Link href="/resources/certificate-transfer" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '3px 0', display: 'block' }}>
                Certificate Transfer
              </Link>
            </li>
            <li>
              <Link href="/sitemap" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '3px 0', display: 'block' }}>
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

