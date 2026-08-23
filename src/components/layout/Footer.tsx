'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer style={{ backgroundColor: '#1a1854', color: 'rgba(255,255,255,0.85)', borderTop: '5px solid #f9b933', paddingTop: '0px', paddingBottom: '32px', position: 'relative' }}>
      <div className="container">
        
        {/* Newsletter Subscription Card (Solid White BG, Half Outside Footer / Half Inside Footer) */}
        <div className="newsletter-card" style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '44px 48px',
          marginTop: '-80px',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 20,
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1854', marginBottom: '4px' }}>
              Stay informed on ISO & cyber standards
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
              Monthly insights, updates on standard revisions, and free resources. No spam.
            </p>
          </div>

          {subscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2c2a75', fontWeight: 800, fontSize: '14px' }}>
              <CheckCircle2 size={18} style={{ color: '#2f9e6e' }} />
              <span>Thank you for subscribing to TRAIBCERT Insights!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '480px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                style={{
                  flexGrow: 1,
                  padding: '12px 18px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#f8fafc',
                  color: '#0f172a',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#f9b933',
                  color: '#1a1854',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Main 4-Column Footer Grid (Matching Screenshot 1) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }} className="footer-grid">
          
          {/* Column 1: Brand & Contact Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <img src="/assets/logos/logo.png" alt="TRAIBCERT Logo" height={42} style={{ objectFit: 'contain' }} />
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                TRAIB<span style={{ color: '#f9b933' }}>CERT</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '380px' }}>
              {siteConfig.tagline}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ color: '#f9b933', flexShrink: 0, marginTop: '3px' }} />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>UK: <a href={siteConfig.contact.ukPhoneTel} style={{ color: '#ffffff', fontWeight: 600 }}>{siteConfig.contact.ukPhone}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span>UAE: <a href={siteConfig.contact.uaePhoneTel} style={{ color: '#ffffff', fontWeight: 600 }}>{siteConfig.contact.uaePhone}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: '#f9b933', flexShrink: 0 }} />
                <span><a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: '#ffffff' }}>{siteConfig.contact.infoEmail}</a></span>
              </div>
            </div>

            {/* Translucent Pill Accreditation Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', color: '#ffffff', fontWeight: 800, letterSpacing: '0.5px' }}>
                ASCB ACCREDITED
              </span>
              <span style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', color: '#ffffff', fontWeight: 800, letterSpacing: '0.5px' }}>
                IASME PARTNER
              </span>
              <span style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', color: '#ffffff', fontWeight: 800, letterSpacing: '0.5px' }}>
                CYBER ESSENTIALS CB
              </span>
            </div>
          </div>

          {/* COMMENTED OUT FOR CLIENT REVIEW - Footer link columns disabled */}
          {/*
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', textTransform: 'none', letterSpacing: '0.5px', marginBottom: '20px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              {footerNavigation.columnCompany.map(link => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', textTransform: 'none', letterSpacing: '0.5px', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              {footerNavigation.columnQuickLinks.map(link => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', textTransform: 'none', letterSpacing: '0.5px', marginBottom: '20px' }}>
              Policies
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              {footerNavigation.columnPolicies.map(link => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          */}
        </div>

        {/* Bottom Copyright Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
          <div>
            Copyrights © {siteConfig.copyrightYear} {siteConfig.legalName}. All Rights Reserved.
          </div>
          <div>
            Registered in England & Wales
          </div>
        </div>
      </div>
    </footer>
  );
};
