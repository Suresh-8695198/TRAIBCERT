import React from 'react';
import Link from 'next/link';
import { certificationsData } from '@/config/certifications';

export const MegaMenuCertification: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const isoStandards = certificationsData.filter(c => c.category === 'iso');
  const cyberStandards = certificationsData.filter(c => c.category === 'cyber');
  const sustainabilityStandards = certificationsData.filter(c => c.category === 'sustainability');
  const inspectionStandards = certificationsData.filter(c => c.category === 'inspection');

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
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1.2fr',
        gap: '32px',
        color: '#4a4a5a'
      }}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {/* Col A: ISO Standards */}
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
          ISO Standards
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '380px', overflowY: 'auto' }}>
          <li>
            <Link href="/certification" onClick={onClose} style={{ fontSize: '13.5px', color: '#2c2a75', fontWeight: 700, padding: '5px 0', display: 'block' }}>
              All Standards Overview
            </Link>
          </li>
          {isoStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span>{item.code || item.name}</span>
                {item.tag === 'CURRENT' && <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>CURRENT</span>}
                {item.tag === 'NEW' && <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>NEW</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Col B: Cyber Security & Compliance */}
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
          Cyber Security & Compliance
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {cyberStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span>{item.name}</span>
                {item.tag === 'NEW' && <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>NEW</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Col C: Sustainability */}
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
          Sustainability
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {sustainabilityStandards.map(item => (
            <li key={item.slug}>
              <Link
                href={`/certification/${item.slug}`}
                onClick={onClose}
                style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffffff', backgroundColor: '#f9b933', padding: '2px 6px', borderRadius: '3px' }}>NEW</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Col D: Inspection */}
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
          Inspection
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <li><Link href="/certification/inspection" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'block' }}>Inspection Overview</Link></li>
          <li><Link href="/certification/inspection/what-is-psi" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'block' }}>What is Pre-Shipment Inspection</Link></li>
          <li><Link href="/certification/inspection/why-psi" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'block' }}>Why PSI is Important</Link></li>
          <li><Link href="/certification/inspection/benefits" onClick={onClose} style={{ fontSize: '13.5px', color: '#4a4a5a', fontWeight: 500, padding: '4px 0', display: 'block' }}>Benefits of PSI</Link></li>
        </ul>
      </div>

      {/* Col E: Featured Tile */}
      <div>
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
          minHeight: '220px'
        }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#f9b933', textTransform: 'uppercase', marginBottom: '8px' }}>
              Transition Alert
            </div>
            <h4 style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700, marginBottom: '8px', lineHeight: 1.25 }}>
              ISO 9001:2026 Coming September
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '16px', lineHeight: 1.5 }}>
              The next revision of ISO 9001 is expected September 2026. Book your gap assessment now to plan a smooth transition from the 2015 version.
            </p>
          </div>
          <Link
            href="/certification/iso-9001"
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
            <span>Learn more →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

