import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { certificationsData } from '@/config/certifications';

export const MegaMenuCertification: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const isoStandards = certificationsData.filter(c => c.category === 'iso');
  const cyberStandards = certificationsData.filter(c => c.category === 'cyber');
  const sustainabilityStandards = certificationsData.filter(c => c.category === 'sustainability');
  const inspectionStandards = certificationsData.filter(c => c.category === 'inspection');

  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '1240px',
      backgroundColor: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
      border: '1px solid var(--gray-100)',
      borderTop: '3px solid var(--ink)',
      padding: '28px',
      zIndex: 100,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr) 280px',
      gap: '24px'
    }}>
      {/* Column 1: ISO Standards */}
      <div>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={16} /> ISO Standards ({isoStandards.length})
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '380px', overflowY: 'auto', paddingRight: '6px' }}>
          {isoStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={item.slug === 'certification-landing' ? '/certification' : `/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13px', color: 'var(--gray-900)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '4px 0', transition: 'color 0.2s' }}
                className="mega-link"
              >
                <span>{item.code}</span>
                {item.tag === 'CURRENT' && <span className="badge badge-current">CURRENT</span>}
                {item.tag === 'NEW' && <span className="badge badge-new">NEW</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Cyber Security & Compliance */}
      <div>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} /> Cyber & Compliance ({cyberStandards.length})
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {cyberStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13px', color: 'var(--gray-900)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '4px 0' }}
                className="mega-link"
              >
                <span>{item.name}</span>
                {item.tag === 'NEW' && <span className="badge badge-new">NEW</span>}
                {item.tag === 'POPULAR' && <span className="badge badge-alert">POPULAR</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Sustainability & ESG */}
      <div>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={16} /> Sustainability ({sustainabilityStandards.length})
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          {sustainabilityStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13px', color: 'var(--gray-900)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '4px 0' }}
                className="mega-link"
              >
                <span>{item.name}</span>
                <span className="badge badge-new">NEW</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Inspection Services Subsection */}
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileText size={16} /> Inspection ({inspectionStandards.length})
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {inspectionStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '12.5px', color: 'var(--gray-700)', padding: '2px 0' }}
                className="mega-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Key Service Quick Links */}
      <div>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-strong)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px' }}>
          Service Actions
        </h4>
        <div style={{ background: 'var(--gray-50)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-100)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/certification/cyber-essentials" onClick={onClose} style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Cyber Essentials Target Page →
          </Link>
          <Link href="/contact/enquiry" onClick={onClose} style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Request Fast ISO Quote →
          </Link>
          <Link href="/resources/certificate-transfer" onClick={onClose} style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Transfer Certificate to TRAIBCERT →
          </Link>
        </div>
      </div>

      {/* Column 5: Featured Promotional Campaign Tile */}
      <div style={{
        background: 'linear-gradient(145deg, var(--topbar), var(--ink2))',
        color: '#fff',
        padding: '20px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div>
          <span className="badge badge-alert" style={{ marginBottom: '12px', display: 'inline-block' }}>
            TRANSITION ALERT
          </span>
          <h5 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '8px' }}>
            ISO 9001:2026 Coming September
          </h5>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, marginBottom: '16px' }}>
            The next revision of ISO 9001 is expected September 2026. Book your gap assessment now for a smooth transition.
          </p>
        </div>
        <Link
          href="/certification/iso-9001"
          onClick={onClose}
          className="btn btn-gold"
          style={{ width: '100%', fontSize: '12px', padding: '10px 14px' }}
        >
          <span>Learn more</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
