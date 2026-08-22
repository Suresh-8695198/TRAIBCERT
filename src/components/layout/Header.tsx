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
    }, 350); // Generous 350ms grace period so cursor movement between button and mega-menu is 100% smooth
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: '#ffffff' }}>
      {/* Topbar */}
      <Topbar />

      {/* Main Header (78px height) */}
      <div
        style={{
          height: '78px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s ease',
          position: 'relative'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo - Official Circular Emblem */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', outline: 'none', border: 'none' }}>
            <img
              src="/assets/logos/logo.png"
              alt="TRAIBCERT Certification Body Emblem"
              height={52}
              style={{ objectFit: 'contain', height: '52px' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logos/traibcert-logo.svg';
              }}
            />
          </Link>

          {/* Center Primary Navigation (Hover Auto-Open & Smooth Auto-Close) */}
          <nav className="desktop-nav" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', height: '100%' }}>
            {/* 1. Home */}
            <Link
              href="/"
              className="nav-link-btn"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#2c2a75',
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '3px solid transparent',
                outline: 'none'
              }}
            >
              Home
            </Link>

            {/* 2. Certification (Hoverable Mega-Menu) */}
            <div
              onMouseEnter={() => handleMouseEnter('certification')}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === 'certification' ? null : 'certification')}
                className="nav-link-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeMenu === 'certification' ? '#f9b933' : '#2c2a75',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  height: '100%',
                  borderBottom: activeMenu === 'certification' ? '3px solid #f9b933' : '3px solid transparent',
                  padding: 0
                }}
              >
                <span>Certification</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'certification' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            </div>

            {/* 3. Training (Hoverable Dropdown) */}
            <div
              onMouseEnter={() => handleMouseEnter('training')}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === 'training' ? null : 'training')}
                className="nav-link-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeMenu === 'training' ? '#f9b933' : '#2c2a75',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  height: '100%',
                  borderBottom: activeMenu === 'training' ? '3px solid #f9b933' : '3px solid transparent',
                  padding: 0
                }}
              >
                <span>Training</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'training' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            </div>

            {/* 4. Resources (Hoverable Mega-Menu) */}
            <div
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
                className="nav-link-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeMenu === 'resources' ? '#f9b933' : '#2c2a75',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  height: '100%',
                  borderBottom: activeMenu === 'resources' ? '3px solid #f9b933' : '3px solid transparent',
                  padding: 0
                }}
              >
                <span>Resources</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'resources' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            </div>

            {/* 5. Contact Us */}
            <div
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === 'contact' ? null : 'contact')}
                className="nav-link-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeMenu === 'contact' ? '#f9b933' : '#2c2a75',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  height: '100%',
                  borderBottom: activeMenu === 'contact' ? '3px solid #f9b933' : '3px solid transparent',
                  padding: 0
                }}
              >
                <span>Contact Us</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'contact' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            </div>
          </nav>

          {/* Right Action Block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Phone Link with Gold Filled Icon */}
            <a
              href={siteConfig.contact.ukPhoneTel}
              className="phone-display topbar-hover"
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#2c2a75',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Phone size={17} style={{ color: '#f9b933', fill: '#f9b933' }} />
              <span>{siteConfig.contact.ukPhone}</span>
            </a>

            {/* Circular Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="search-toggle-btn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1.5px solid #cbd5e1',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                outline: 'none'
              }}
              title="Search Website"
            >
              <Search size={18} style={{ color: '#2c2a75' }} />
            </button>

            {/* Get a Quote → Button (Turns Yellow on Hover!) */}
            <Link
              href="/contact/enquiry"
              className="btn btn-quote"
              style={{
                fontSize: '14.5px',
                fontWeight: 700,
                padding: '11px 22px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
              }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Drawer Toggle (<900px) */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="mobile-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', outline: 'none' }}
              aria-label="Toggle Navigation"
            >
              <Menu size={26} style={{ color: '#2c2a75' }} />
            </button>
          </div>
        </div>

        {/* Hover Dropdowns with Fade-in Animation & Mouse Keepalive */}
        {activeMenu === 'certification' && (
          <div
            onMouseEnter={() => handleMouseEnter('certification')}
            onMouseLeave={handleMouseLeave}
            className="dropdown-animate"
            style={{ position: 'absolute', top: '78px', left: 0, width: '100%', zIndex: 999 }}
          >
            <MegaMenuCertification onClose={() => setActiveMenu(null)} />
          </div>
        )}

        {activeMenu === 'resources' && (
          <div
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
            className="dropdown-animate"
            style={{ position: 'absolute', top: '78px', left: 0, width: '100%', zIndex: 999 }}
          >
            <MegaMenuResources onClose={() => setActiveMenu(null)} />
          </div>
        )}

        {activeMenu === 'training' && (
          <div
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
            className="dropdown-animate"
            style={{ position: 'absolute', top: '78px', left: 0, width: '100%', zIndex: 999 }}
          >
            <DropdownTraining onClose={() => setActiveMenu(null)} />
          </div>
        )}

        {activeMenu === 'contact' && (
          <div
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            className="dropdown-animate"
            style={{
              position: 'absolute',
              top: '78px',
              right: '240px',
              width: '240px',
              backgroundColor: '#ffffff',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: '0 0 var(--radius-md) var(--radius-md)',
              border: '1px solid var(--gray-100)',
              borderTop: '3px solid #f9b933',
              padding: '12px',
              zIndex: 999
            }}
          >
            <Link href="/contact" onClick={() => setActiveMenu(null)} style={{ display: 'block', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
              Contact Details & Locations
            </Link>
            <Link href="/contact/enquiry" onClick={() => setActiveMenu(null)} style={{ display: 'block', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
              Get a Fast Quote / Enquiry
            </Link>
          </div>
        )}

        {/* Floating Search Bar Input Overlay */}
        {isSearchOpen && (
          <div style={{
            position: 'absolute',
            top: '78px',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '2px solid var(--ink)',
            padding: '16px 0',
            boxShadow: 'var(--shadow-md)',
            zIndex: 99
          }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Search size={20} style={{ color: 'var(--ink)' }} />
              <input
                type="text"
                autoFocus
                placeholder="Search ISO standards (e.g. ISO 9001, ISO 27001), Cyber Essentials, training courses..."
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '15px', color: 'var(--ink)' }}
              />
              <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 700, color: 'var(--gray-500)' }}>
                Close [ESC]
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Mobile Drawer (<900px) */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
};
