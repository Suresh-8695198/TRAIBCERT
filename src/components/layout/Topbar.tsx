import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Topbar: React.FC = () => {
  return (
    <div id="topbar" style={{ backgroundColor: '#151347', color: 'rgba(255,255,255,0.88)', fontSize: '12px', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap' }}>
        {/* Left Side: Contact Phones & Email */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a href={siteConfig.contact.ukPhoneTel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none', fontSize: '12px' }}>
            <Phone size={13} style={{ color: '#f9b933', fill: '#f9b933' }} />
            <span>UK: <strong>{siteConfig.contact.ukPhone}</strong></span>
          </a>

          <a href={siteConfig.contact.uaePhoneTel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none', fontSize: '12px' }}>
            <Phone size={13} style={{ color: '#f9b933', fill: '#f9b933' }} />
            <span>UAE: <strong>{siteConfig.contact.uaePhone}</strong></span>
          </a>

          <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none', fontSize: '12px' }}>
            <Mail size={13} style={{ color: '#f9b933', fill: '#f9b933' }} />
            <span>{siteConfig.contact.infoEmail}</span>
          </a>
        </div>

        {/* Right Side: Quick Links & Language Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href={siteConfig.academyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}
          >
            E-Learning Academy
          </a>

          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>|</span>

          <Link href="/verify-certificate" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}>
            Certificate Verification
          </Link>

          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>|</span>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 600,
            color: '#ffffff',
            cursor: 'pointer'
          }}>
            <Globe size={13} style={{ color: '#ffffff' }} />
            <span>EN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
