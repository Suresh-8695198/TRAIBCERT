'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, AlertCircle, Calendar, Building, Award } from 'lucide-react';

export const CertVerifyLookup: React.FC = () => {
  const [certQuery, setCertQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certQuery.trim()) return;

    setIsSearching(true);
    setSearched(false);

    // Mock search lookup logic for TRAIBCERT database
    setTimeout(() => {
      setIsSearching(false);
      setSearched(true);
      if (certQuery.toLowerCase().includes('gb') || certQuery.toLowerCase().includes('tra') || certQuery.length > 5) {
        setResult({
          certNumber: certQuery.toUpperCase(),
          companyName: 'Acme International Logistics Ltd',
          standard: 'ISO 9001:2015 Quality Management Systems',
          status: 'ACTIVE / VALID',
          issueDate: '15 January 2024',
          expiryDate: '14 January 2027',
          accreditationBody: 'ASCB (Accreditation Service for Certifying Bodies)',
          scope: 'Provision of international freight forwarding, warehousing, and customs clearance services.'
        });
      } else {
        setResult(null);
      }
    }, 800);
  };

  return (
    <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-200)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShieldCheck size={24} style={{ color: 'var(--gold-strong)' }} />
        Verify TRAIBCERT Accreditation Certificate
      </h3>
      <p style={{ fontSize: '13.5px', color: 'var(--gray-700)', marginBottom: '24px' }}>
        Enter the Certificate Number or Registered Company Name to verify authenticity and current validity status.
      </p>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-500)' }} />
          <input
            type="text"
            required
            value={certQuery}
            onChange={(e) => setCertQuery(e.target.value)}
            placeholder="e.g. GB-9001-2024 / Acme International"
            style={{ width: '100%', padding: '12px 14px 12px 42px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '14px' }}
          />
        </div>
        <button type="submit" className="btn btn-ink" disabled={isSearching} style={{ padding: '12px 24px' }}>
          {isSearching ? 'Searching...' : 'Verify Now'}
        </button>
      </form>

      {/* Result Display */}
      {searched && (
        result ? (
          <div style={{ background: 'var(--done-soft)', border: '1.5px solid var(--done)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(47,158,110,0.2)' }}>
              <div>
                <span className="badge badge-current" style={{ fontSize: '12px' }}>STATUS: {result.status}</span>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginTop: '6px' }}>{result.companyName}</h4>
              </div>
              <CheckCircle2 size={32} style={{ color: 'var(--done)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '13px', color: 'var(--gray-900)' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase' }}>Certificate Number</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{result.certNumber}</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase' }}>Standard</div>
                <div style={{ fontWeight: 700 }}>{result.standard}</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase' }}>Valid Until</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Calendar size={14} style={{ color: 'var(--done)' }} /> {result.expiryDate}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase' }}>Accreditation Body</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Award size={14} style={{ color: 'var(--gold-strong)' }} /> {result.accreditationBody}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(47,158,110,0.2)', fontSize: '12.5px', color: 'var(--gray-700)' }}>
              <strong>Certified Scope:</strong> {result.scope}
            </div>
          </div>
        ) : (
          <div style={{ background: '#fdeaea', border: '1px solid #c94141', color: '#c94141', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={24} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>No Certificate Record Found</div>
              <div style={{ fontSize: '12.5px', marginTop: '2px' }}>Please double check the Certificate Number or contact info@traibcert.org.uk for manual verification.</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
