'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

interface ZohoFormProps {
  defaultStandard?: string;
}

export const ZohoBiginForm: React.FC<ZohoFormProps> = ({ defaultStandard = 'ISO 9001:2015' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    standardRequired: defaultStandard,
    employeeCount: '1-10',
    message: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    pageUrl: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setFormData(prev => ({
        ...prev,
        utmSource: urlParams.get('utm_source') || 'direct',
        utmMedium: urlParams.get('utm_medium') || 'website',
        utmCampaign: urlParams.get('utm_campaign') || 'organic',
        pageUrl: window.location.href
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/zoho-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'lead_form_submitted',
            formType: 'ZohoBiginEnquiry',
            standard: formData.standardRequired
          });
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection error. Please try calling us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ background: 'var(--done-soft)', border: '1px solid var(--done)', borderRadius: 'var(--radius-lg)', padding: 'clamp(20px, 4vw, 32px)', textAlign: 'center' }}>
        <CheckCircle2 size={40} style={{ color: 'var(--done)', margin: '0 auto 16px' }} />
        <h3 style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
          Enquiry Received!
        </h3>
        <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: 'var(--gray-700)', maxWidth: '440px', margin: '0 auto 16px' }}>
          Thank you for reaching out. A TRAIBCERT specialist will respond within 24 hours.
        </p>
        <div style={{ fontSize: 'clamp(11px, 2vw, 12px)', color: 'var(--gray-500)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={12} style={{ color: 'var(--done)' }} />
          <span>Confirmation sent to {formData.email}.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 16px)' }}>
      {status === 'error' && (
        <div style={{ background: '#fdeaea', border: '1px solid #c94141', color: '#c94141', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name & Email - Single column on mobile */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px' }}
          />
        </div>
      </div>

      {/* Phone & Company */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7123 456789"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Company / Organization *
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Corp Ltd"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px' }}
          />
        </div>
      </div>

      {/* Standard & Employee Count */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Standard Required *
          </label>
          <select
            name="standardRequired"
            value={formData.standardRequired}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px', backgroundColor: '#fff' }}
          >
            <option value="ISO 9001:2015">ISO 9001:2015</option>
            <option value="ISO 14001:2026">ISO 14001:2026</option>
            <option value="ISO 45001:2018">ISO 45001:2018</option>
            <option value="ISO 27001:2022">ISO 27001:2022</option>
            <option value="Cyber Essentials">Cyber Essentials</option>
            <option value="Cyber Essentials Plus">Cyber Essentials Plus</option>
            <option value="Multiple Standards">Multiple Standards</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
            Company Size
          </label>
          <select
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px', backgroundColor: '#fff' }}
          >
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>
        </div>
      </div>

      {/* Message - Full width */}
      <div>
        <label style={{ display: 'block', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>
          Additional Details
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any existing certifications or special requirements..."
          style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '13px', resize: 'vertical', minHeight: '70px' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-gold"
        style={{ width: '100%', padding: 'clamp(10px, 2vw, 14px)', fontSize: 'clamp(13px, 2vw, 15px)', marginTop: '4px' }}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={14} className="spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send size={14} />
          </>
        )}
      </button>

      <div style={{ fontSize: '10px', color: 'var(--gray-500)', textAlign: 'center', marginTop: '4px' }}>
        Protected by reCAPTCHA v3
      </div>
    </form>
  );
};
