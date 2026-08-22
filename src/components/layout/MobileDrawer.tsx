'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const MobileDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [openSub, setOpenSub] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSub = (sub: string) => {
    setOpenSub(openSub === sub ? null : sub);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
      {/* Dark Overlay Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10, 13, 20, 0.65)', backdropFilter: 'blur(4px)' }}
      />

      {/* 360px Off-Canvas Drawer (Matching Screenshot 3) */}
      <div style={{
        position: 'relative',
        width: '360px',
        maxWidth: '100%',
        height: '100%',
        backgroundColor: '#2c2a75',
        color: '#ffffff',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1001
      }}>
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/logos/logo.png" alt="TRAIBCERT Logo" height={34} style={{ objectFit: 'contain' }} />
            <div style={{ fontWeight: 800, fontSize: '20px', color: '#ffffff', letterSpacing: '-0.5px' }}>
              TRAIB<span style={{ color: '#f9b933' }}>CERT</span>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#ffffff' }}>
            <X size={24} />
          </button>
        </div>

        {/* Accordion Navigation Items */}
        <nav style={{ flexGrow: 1, overflowY: 'auto', padding: '16px 0' }}>
          <Link
            href="/"
            onClick={onClose}
            style={{
              display: 'block',
              padding: '16px 28px',
              fontSize: '17px',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            Home
          </Link>

          {/* Certification Accordion */}
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => toggleSub('certification')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 28px',
                fontSize: '17px',
                fontWeight: 700,
                color: '#ffffff',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>Certification</span>
              <ChevronDown size={20} style={{ color: '#f9b933', transform: openSub === 'certification' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openSub === 'certification' && (
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '12px 28px 16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px' }}>
                <Link href="/certification" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>All ISO Standards Overview</Link>
                <Link href="/certification/cyber-essentials" onClick={onClose} style={{ color: '#f9b933', textDecoration: 'none', fontWeight: 700 }}>Cyber Essentials Scheme</Link>
                <Link href="/certification/iso-9001" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>ISO 9001:2015 Quality</Link>
                <Link href="/certification/iso-27001" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>ISO 27001:2022 Information Security</Link>
                <Link href="/certification/iso-14001" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>ISO 14001:2026 Environment</Link>
              </div>
            )}
          </div>

          {/* Training Accordion */}
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => toggleSub('training')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 28px',
                fontSize: '17px',
                fontWeight: 700,
                color: '#ffffff',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>Training</span>
              <ChevronDown size={20} style={{ color: '#f9b933', transform: openSub === 'training' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openSub === 'training' && (
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '12px 28px 16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px' }}>
                <Link href="/training" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>All Training Courses</Link>
                <a href={siteConfig.academyUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#f9b933', textDecoration: 'none', fontWeight: 700 }}>E-Learning Academy ↗</a>
              </div>
            )}
          </div>

          {/* Resources Accordion */}
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => toggleSub('resources')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 28px',
                fontSize: '17px',
                fontWeight: 700,
                color: '#ffffff',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>Resources</span>
              <ChevronDown size={20} style={{ color: '#f9b933', transform: openSub === 'resources' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openSub === 'resources' && (
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '12px 28px 16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px' }}>
                <Link href="/resources/blog" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Blog & Articles</Link>
                <Link href="/resources/industries" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>12 Industry Sectors</Link>
                <Link href="/resources/certificate-transfer" onClick={onClose} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Certificate Transfer</Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            style={{
              display: 'block',
              padding: '16px 28px',
              fontSize: '17px',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Sticky Bottom CTA Block (Matching Screenshot 3) */}
        <div style={{ padding: '24px 28px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
          <Link
            href="/contact/enquiry"
            onClick={onClose}
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#f9b933',
              color: '#2c2a75',
              fontWeight: 800,
              fontSize: '15px',
              padding: '14px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              marginBottom: '12px',
              boxShadow: '0 4px 14px rgba(249, 185, 51, 0.35)'
            }}
          >
            Get a Quote →
          </Link>
          
          <div style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
            <a href={siteConfig.contact.ukPhoneTel} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>{siteConfig.contact.ukPhone}</a>
            <span style={{ margin: '0 6px', color: 'rgba(255,255,255,0.4)' }}>·</span>
            <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: '#ffffff', textDecoration: 'none' }}>Email us</a>
          </div>
        </div>
      </div>
    </div>
  );
};
