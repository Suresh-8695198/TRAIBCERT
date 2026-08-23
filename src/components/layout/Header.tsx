'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, Phone, Search, ArrowRight, ChevronDown } from 'lucide-react';
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
    }, 250);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: '#ffffff' }}>
      {/* Topbar */}
      <Topbar />

      {/* Main Header */}
      <div
        style={{
          height: '78px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #ededf0',
          boxShadow: isScrolled ? '0 1px 0 #f9b933, 0 2px 12px rgba(0,0,0,0.04)' : 'none',
          transition: 'all 0.25s ease',
          position: 'relative'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', outline: 'none', border: 'none', flexShrink: 0 }}>
            <img
              src="/assets/logos/logo.png"
              alt="TRAIBCERT Certification Body Emblem"
              style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logos/traibcert-logo.svg';
              }}
            />
          </Link>

          {/* Center Primary Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '100%', position: 'relative' }}>
            
            {/* 1. HOME */}
            <div className="nav-item" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: '#2c2a75',
                  padding: '0 18px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                Home
              </Link>
            </div>

            {/* 2. CERTIFICATION */}
            <div
              className="nav-item"
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('certification')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/certification"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: activeMenu === 'certification' ? '#c99327' : '#2c2a75',
                  padding: '0 18px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                <span>Certification</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'certification' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {/* COMMENTED OUT FOR CLIENT REVIEW - Certification submenu dropdown disabled */}
              {/* activeMenu === 'certification' && (
                <MegaMenuCertification onClose={() => setActiveMenu(null)} />
              ) */}
            </div>

            {/* 3. TRAINING */}
            <div
              className="nav-item"
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('training')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/training"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: activeMenu === 'training' ? '#c99327' : '#2c2a75',
                  padding: '0 18px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                <span>Training</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'training' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {/* COMMENTED OUT FOR CLIENT REVIEW - Training submenu dropdown disabled */}
              {/* activeMenu === 'training' && (
                <DropdownTraining onClose={() => setActiveMenu(null)} />
              ) */}
            </div>

            {/* COMMENTED OUT FOR CLIENT REVIEW - Resources menu disabled */}
            {/*
            <div
              className="nav-item"
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/resources"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: activeMenu === 'resources' ? '#c99327' : '#2c2a75',
                  padding: '0 18px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                <span>Resources</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'resources' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {activeMenu === 'resources' && (
                <MegaMenuResources onClose={() => setActiveMenu(null)} />
              )}
            </div>
            */}

            {/* COMMENTED OUT FOR CLIENT REVIEW - Contact Us menu disabled */}
            {/*
            <div
              className="nav-item"
              style={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: activeMenu === 'contact' ? '#c99327' : '#2c2a75',
                  padding: '0 18px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                <span>Contact Us</span>
                <ChevronDown size={14} style={{ transform: activeMenu === 'contact' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {activeMenu === 'contact' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '240px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 12px 40px rgba(20,20,40,0.12)',
                  borderRadius: '0 0 8px 8px',
                  borderTop: '2px solid #f9b933',
                  padding: '12px',
                  zIndex: 100
                }}>
                  <Link
                    href="/contact"
                    onClick={() => setActiveMenu(null)}
                    style={{ display: 'block', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: '#2c2a75', textDecoration: 'none', borderRadius: '4px' }}
                  >
                    Contact Details
                  </Link>
                  <Link
                    href="/contact/enquiry"
                    onClick={() => setActiveMenu(null)}
                    style={{ display: 'block', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: '#2c2a75', textDecoration: 'none', borderRadius: '4px' }}
                  >
                    Get a Quote / Enquiry
                  </Link>
                </div>
              )}
            </div>
            */}

          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            {/* Phone */}
            <a
              href={siteConfig.contact.ukPhoneTel}
              className="phone-display topbar-hover"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#2c2a75',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Phone size={15} style={{ color: '#f9b933', fill: '#f9b933', flexShrink: 0 }} />
              <span>{siteConfig.contact.ukPhone}</span>
            </a>

            {/* Search Toggle Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="action-search"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#f8f8fa',
                border: 'none',
                color: '#2c2a75',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Search"
            >
              <Search size={16} />
            </button>

            {/* Get a Quote Button */}
            {/* COMMENTED OUT FOR CLIENT REVIEW - Get a Quote button disabled */}
            {/*
            <Link
              href="/contact/enquiry"
              className="btn-quote"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                backgroundColor: '#2c2a75',
                color: '#ffffff',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={14} />
            </Link>
            */}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="menu-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#2c2a75', padding: '4px' }}
              aria-label="Menu"
            >
              ☰
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
            borderBottom: '2px solid #2c2a75',
            padding: '14px 0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            zIndex: 99
          }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Search size={18} style={{ color: '#2c2a75' }} />
              <input
                type="text"
                autoFocus
                placeholder="Search ISO standards, training courses, and resources..."
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '15px', color: '#2c2a75' }}
              />
              <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 700, color: '#64748b' }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
};

