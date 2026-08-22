import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { CertVerifyLookup } from '@/components/ui/CertVerifyLookup';

export const AccreditationsBanner: React.FC = () => {
  return (
    <section id="accreditations" style={{ backgroundColor: '#ffffff', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Top Header Block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>
              GLOBAL RECOGNITION & VERIFICATION
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1.2, margin: 0 }}>
              TRAIBCERT is an Accredited Certification Body
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Over the years, we have received global accreditation alignment and industry recognition, enabling our certified clients to qualify for major corporate and government tenders worldwide.
            </p>
          </div>
        </div>

        {/* 6 Accreditation Badges Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          marginBottom: '40px',
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '32px 24px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          
          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fff4d1', color: '#c99327', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>ASCB UK</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Accredited Body</div>
          </div>

          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fff4d1', color: '#c99327', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lock size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>IASME Partner</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Cyber Essentials</div>
          </div>

          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#e5f6ee', color: '#2f9e6e', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>CQI IRCA</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Approved Training</div>
          </div>

          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#f0f4ff', color: '#2563eb', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>ISO 9001:2015</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Quality Management</div>
          </div>

          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fff4d1', color: '#c99327', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lock size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>ISO 27001:2022</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Information Security</div>
          </div>

          <div style={{ padding: '12px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#e5f6ee', color: '#2f9e6e', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={26} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2c2a75' }}>ISO 14001:2026</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Environmental</div>
          </div>

        </div>

        {/* Live Certificate Lookup Component */}
        <CertVerifyLookup />

      </div>
    </section>
  );
};
