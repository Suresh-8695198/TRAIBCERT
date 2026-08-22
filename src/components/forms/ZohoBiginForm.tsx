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
    // Capture URL params and page URL for lead source tracking
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
        // Trigger GTM conversion event
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
      <div style={{ background: 'var(--done-soft)', border: '1px solid var(--done)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
        <CheckCircle2 size={48} style={{ color: 'var(--done)', margin: '0 auto 16px' }} />
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
          Enquiry Received Successfully!
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--gray-700)', maxWidth: '440px', margin: '0 auto 16px' }}>
          Thank you for reaching out. Your request has been logged into our lead system. A TRAIBCERT certification specialist will review your details and respond within 24 hours.
        </p>
        <div style={{ fontSize: '12px', color: 'var(--gray-500)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} style={{ color: 'var(--done)' }} />
          <span>A confirmation email has been dispatched to {formData.email}.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {status === 'error' && (
        <div style={{ background: '#fdeaea', border: '1px solid #c94141', color: '#c94141', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7123 456789"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Company / Organization Name *
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Corporation Ltd"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Primary Standard Required *
          </label>
          <select
            name="standardRequired"
            value={formData.standardRequired}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px', backgroundColor: '#fff' }}
          >
            <option value="ISO 9001:2015">ISO 9001:2015 (Quality)</option>
            <option value="ISO 14001:2026">ISO 14001:2026 (Environment)</option>
            <option value="ISO 45001:2018">ISO 45001:2018 (Health & Safety)</option>
            <option value="ISO 27001:2022">ISO 27001:2022 (Information Security)</option>
            <option value="Cyber Essentials">Cyber Essentials</option>
            <option value="Cyber Essentials Plus">Cyber Essentials Plus</option>
            <option value="ISO 22000:2018">ISO 22000:2018 (Food Safety)</option>
            <option value="ISO 13485">ISO 13485 (Medical Devices)</option>
            <option value="ISO 42001:2023">ISO 42001:2023 (AI Management)</option>
            <option value="SOC 2 Type II">SOC 2 Type II Assessment</option>
            <option value="Multiple Standards">Multiple / Integrated Standards</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
            Company Size (Employees)
          </label>
          <select
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px', backgroundColor: '#fff' }}
          >
            <option value="1-10">1 – 10 Employees</option>
            <option value="11-50">11 – 50 Employees</option>
            <option value="51-200">51 – 200 Employees</option>
            <option value="201-500">201 – 500 Employees</option>
            <option value="500+">500+ Employees</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '6px' }}>
          Additional Requirements / Scope Details
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share any existing certifications, target completion date, or multi-site details..."
          style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontSize: '14px' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-gold"
        style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '8px' }}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="spin" />
            <span>Submitting to Zoho CRM...</span>
          </>
        ) : (
          <>
            <span>Submit Quote Enquiry</span>
            <Send size={16} />
          </>
        )}
      </button>

      <div style={{ fontSize: '11px', color: 'var(--gray-500)', textAlign: 'center', marginTop: '4px' }}>
        Protected by reCAPTCHA v3. Direct pipeline integration with Zoho Bigin CRM.
      </div>
    </form>
  );
};
