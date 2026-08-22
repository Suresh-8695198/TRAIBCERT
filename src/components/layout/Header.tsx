'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, Phone, Search, ArrowRight } from 'lucide-react';
import { Topbar } from './Topbar';
import { MegaMenuCertification } from './MegaMenuCertification';
import { MegaMenuResources } from './MegaMenuResources';
import { DropdownTraining } from './DropdownTraining';
import { MobileDrawer } from './MobileDrawer';
import { siteConfig } from '@/config/site';

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 350);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: '#ffffff' }}>
      {/* Topbar */}
      <Topbar />

      {/* Main Header */}
      <div
        style={{
          height: 'auto',
          minHeight: '56px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s ease',
          position: 'relative',
          paddingTop: '8px',
          paddingBottom: '8px'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', outline: 'none', border: 'none', flexShrink: 0 }}>
            <img
              src="/assets/logos/logo.png"
              alt="TRAIBCERT Certification Body Emblem"
              style={{ objectFit: 'contain', height: 'clamp(40px, 8vw, 52px)', width: 'auto' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logos/traibcert-logo.svg';
              }}
            />
          </Link>

          {/* Center Primary Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'clamp(16px, 3vw, 32px)', height: '100%' }}>
            {['Home', 'Certification', 'Training', 'Resources', 'Contact Us'].map((item, idx) => (
              <Link
                key={idx}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="nav-link-btn"
                style={{
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontWeight: 600,
                  color: '#2c2a75',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Action Block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)', flexShrink: 0 }}>
            {/* Phone Link */}
            <a
              href={siteConfig.contact.ukPhoneTel}
              className="phone-display topbar-hover"
              style={{
                fontSize: 'clamp(12px, 2vw, 15px)',
                fontWeight: 700,
                color: '#2c2a75',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              <Phone size={14} style={{ color: '#f9b933', fill: '#f9b933', flexShrink: 0 }} />
              <span style={{ display: 'none' }}>
                {siteConfig.contact.ukPhone}
              </span>
            </a>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="search-toggle-btn"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1.5px solid #cbd5e1',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                outline: 'none',
                flexShrink: 0
              }}
              title="Search Website"
            >
              <Search size={14} style={{ color: '#2c2a75' }} />
            </button>

            {/* Get a Quote Button */}
            <Link
              href="/contact/enquiry"
              className="btn btn-quote"
              style={{
                fontSize: 'clamp(11px, 2vw, 14.5px)',
                fontWeight: 700,
                padding: 'clamp(7px, 1.5vw, 11px) clamp(12px, 2vw, 22px)',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Quote</span>
              <ArrowRight size={12} />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="mobile-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', outline: 'none', flexShrink: 0 }}
              aria-label="Toggle Navigation"
            >
              <Menu size={22} style={{ color: '#2c2a75' }} />
            </button>
          </div>
        </div>

        {/* Floating Search Bar */}
        {isSearchOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '2px solid var(--ink)',
            padding: '12px 0',
            boxShadow: 'var(--shadow-md)',
            zIndex: 99
          }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Search size={16} style={{ color: 'var(--ink)' }} />
              <input
                type="text"
                autoFocus
                placeholder="Search ISO standards..."
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px', color: 'var(--ink)' }}
              />
              <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700, color: 'var(--gray-500)' }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      <style>{`
        @media (max-width: 768px) {
          .phone-display span {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
