'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ThumbsUp,
  Globe,
  HardHat,
  UtensilsCrossed,
  Users,
  Factory,
  Cog,
  Handshake,
  Lock,
  Umbrella,
  HeartHandshake,
  Lightbulb,
  Database,
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';

const quickLinks = [
  { text: 'ISO 9001:2015 Quality management systems', icon: CheckCircle2, color: '#0284c7', slug: 'iso-9001' },
  { text: 'ISO 10002:2018 Customer Satisfaction', icon: ThumbsUp, color: '#ef4444', slug: 'iso-10002' },
  { text: 'ISO 14001:2015 Environmental Management Systems', icon: Globe, color: '#10b981', slug: 'iso-14001' },
  { text: 'ISO 45001:2018 Occupational Health & safety Management System', icon: HardHat, color: '#06b6d4', slug: 'iso-45001' },
  { text: 'ISO 22000:2018 Food Safety Management Systems', icon: UtensilsCrossed, color: '#f97316', slug: 'iso-22000' },
  { text: 'ISO 20000-1:2018 IT Service Management System', icon: Users, color: '#3b82f6', slug: 'iso-20000-1' },
  { text: 'ISO 29001:2020 QMS for the Oil and Natural Gas Industry', icon: Factory, color: '#dc2626', slug: 'iso-29001' },
  { text: 'ISO 41001:2018 Facilities Management Systems', icon: Cog, color: '#14b8a6', slug: 'iso-41001' },
  { text: 'ISO 22301:2019 Business Continuity Management Systems', icon: Handshake, color: '#eab308', slug: 'iso-22301' },
  { text: 'ISO 27001:2022 Information Security Management System', icon: Lock, color: '#2563eb', slug: 'iso-27001' },
  { text: 'ISO 31000:2018 - Risk Management', icon: Umbrella, color: '#f97316', slug: 'iso-31000' },
  { text: 'ISO 26000:2010 Guidance on social responsibility', icon: HeartHandshake, color: '#16a34a', slug: 'iso-26000' },
  { text: 'ISO 50001:2018 - Energy management', icon: Lightbulb, color: '#eab308', slug: 'iso-50001' },
  { text: 'ISO 13485:2016 Medical devices-Quality management systems', icon: Database, color: '#e11d48', slug: 'iso-13485' },
  { text: 'ISO 21001:2018 Educational organization management systems', icon: GraduationCap, color: '#475569', slug: 'iso-21001' }
];

export const ISOStandardsShowcaseGrid: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/assets/images/Home/process_meeting.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '72px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Floating White Card with Quick Links (Matching Screenshot 2) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '36px 32px',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.22)'
            }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#1a1854', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              Quick <span style={{ color: '#1a1854' }}>Links</span>
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px 20px'
              }}
            >
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={`/certification/${item.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      textDecoration: 'none',
                      color: '#334155',
                      fontSize: '13px',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#1a1854';
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#334155';
                    }}
                  >
                    <div style={{ color: item.color, flexShrink: 0, marginTop: '2px' }}>
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span>{item.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: CERTIFICATION Hero Statement */}
          <div style={{ color: '#ffffff', paddingLeft: '12px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              CERTIFICATION
            </h2>

            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.7, marginBottom: '32px', fontWeight: 400 }}>
              At <strong>TRAIBCERT</strong>, we offer certification services to our clients applicable to any type of manufacturing or service industry and is administered in a non-discriminatory manner.
            </p>

            <Link
              href="/certification"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#f9b933',
                color: '#1a1854',
                padding: '10px 20px 10px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: 'none',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e0a520';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                const badge = (e.currentTarget as HTMLElement).querySelector('.arrow-badge') as HTMLElement;
                if (badge) badge.style.transform = 'translate(3px, -3px) rotate(45deg) scale(1.15)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f9b933';
                (e.currentTarget as HTMLElement).style.transform = 'none';
                const badge = (e.currentTarget as HTMLElement).querySelector('.arrow-badge') as HTMLElement;
                if (badge) badge.style.transform = 'none';
              }}
            >
              <span>View More</span>
              <span
                className="arrow-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: '#1a1854',
                  color: '#f9b933',
                  flexShrink: 0,
                  transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
