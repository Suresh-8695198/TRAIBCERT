'use client';

import React, { useState } from 'react';
import { ShoppingCart, X, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export const CartDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'plus'>('basic');

  if (!isOpen) return null;

  const packages = {
    basic: { name: 'Cyber Essentials Basic (Self-Assessment)', price: '£300 + VAT', id: 'ce-basic' },
    plus: { name: 'Cyber Essentials Plus (Audited)', price: '£850 + VAT', id: 'ce-plus' }
  };

  const currentPkg = packages[selectedPackage];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(3px)' }} />

      <div style={{
        position: 'relative',
        width: '420px',
        maxWidth: '100%',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1001,
        padding: '28px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--gray-100)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '18px', color: 'var(--ink)' }}>
            <ShoppingCart size={22} style={{ color: 'var(--gold-strong)' }} />
            <span>Cyber Essentials Order</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <X size={22} style={{ color: 'var(--gray-700)' }} />
          </button>
        </div>

        <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: '10px', display: 'block' }}>
              Select Certification Package
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                onClick={() => setSelectedPackage('basic')}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: selectedPackage === 'basic' ? '2px solid var(--ink)' : '1px solid var(--gray-200)',
                  background: selectedPackage === 'basic' ? 'var(--gold-soft)' : 'var(--white)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '15px' }}>{packages.basic.name}</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--gold-strong)', marginTop: '4px' }}>{packages.basic.price}</div>
              </div>

              <div
                onClick={() => setSelectedPackage('plus')}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: selectedPackage === 'plus' ? '2px solid var(--ink)' : '1px solid var(--gray-200)',
                  background: selectedPackage === 'plus' ? 'var(--gold-soft)' : 'var(--white)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '15px' }}>{packages.plus.name}</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--gold-strong)', marginTop: '4px' }}>{packages.plus.price}</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--gray-50)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', fontSize: '13px', color: 'var(--gray-700)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
              <ShieldCheck size={16} style={{ color: 'var(--done)' }} /> What’s included:
            </div>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>Official IASME portal assessment access</li>
              <li>TRAIBCERT Assessor guidance</li>
              <li>Verified Certification Badge</li>
              <li>Free £25,000 Cyber Insurance (for UK SMEs)</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--gray-100)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--gray-700)' }}>Subtotal:</span>
            <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)' }}>{currentPkg.price}</span>
          </div>

          <button
            onClick={() => alert(`Proceeding to secure payment gateway for ${currentPkg.name}...`)}
            className="btn btn-gold"
            style={{ width: '100%', padding: '14px', fontSize: '15px' }}
          >
            <Lock size={16} />
            <span>Proceed to Payment Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
