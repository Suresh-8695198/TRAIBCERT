'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RotateCw,
  User,
  Building2,
  Mail,
  Phone,
  Award,
  Globe,
  MessageSquare
} from 'lucide-react';

interface ZohoFormProps {
  defaultStandard?: string;
}

export const ZohoBiginForm: React.FC<ZohoFormProps> = ({ defaultStandard = 'Certification' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    organizationName: '',
    email: '',
    stdCode: '',
    contactNo: '',
    serviceRequired: defaultStandard,
    country: '',
    comments: '',
    captchaInput: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    pageUrl: ''
  });

  // Alphanumeric Captcha Generator
  const [captchaCode, setCaptchaCode] = useState('lgulhr');
  const [isRotating, setIsRotating] = useState(false);

  const generateCaptcha = () => {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleRefreshCaptcha = () => {
    setIsRotating(true);
    setCaptchaCode(generateCaptcha());
    setTimeout(() => setIsRotating(false), 400);
  };

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Captcha Code
    if (formData.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setErrorMessage('Incorrect security captcha code. Please click refresh and try again.');
      setCaptchaCode(generateCaptcha());
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/zoho-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.firstName.trim(),
          email: formData.email,
          phone: `${formData.stdCode} ${formData.contactNo}`.trim(),
          companyName: formData.organizationName,
          standardRequired: formData.serviceRequired || 'Certification',
          message: `Country: ${formData.country}, Comments: ${formData.comments}`,
          utmSource: formData.utmSource,
          utmMedium: formData.utmMedium,
          utmCampaign: formData.utmCampaign,
          pageUrl: formData.pageUrl
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'lead_form_submitted',
            formType: 'GetInTouchForm',
            service: formData.serviceRequired
          });
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send query. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection error. Please call +44 7904 664589 directly.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        background: '#f4fbf7',
        border: '1.5px solid #2f9e6e',
        borderRadius: '12px',
        padding: '28px 24px',
        textAlign: 'center',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <CheckCircle2 size={42} style={{ color: '#2f9e6e', margin: '0 auto 12px' }} />
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2c2a75', marginBottom: '8px' }}>
          Query Received!
        </h3>
        <p style={{ fontSize: '13px', color: '#475569', maxWidth: '380px', margin: '0 auto 14px', lineHeight: 1.5 }}>
          Thank you for getting in touch with TRAIBCERT. We try and respond to all queries and comments within 24 hours.
        </p>
        <div style={{ fontSize: '12px', color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} style={{ color: '#2f9e6e' }} />
          <span>Confirmation sent to {formData.email}.</span>
        </div>
      </div>
    );
  }

  const getInputStyle = (name: string, hasIcon: boolean = true): React.CSSProperties => ({
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: hasIcon ? '38px' : '12px',
    paddingRight: '12px',
    borderRadius: '8px',
    border: focusedInput === name ? '1.5px solid #2c2a75' : '1.5px solid #cbd5e1',
    backgroundColor: focusedInput === name ? '#ffffff' : '#f8fafc',
    boxShadow: focusedInput === name ? '0 0 0 3px rgba(44, 42, 117, 0.12)' : 'none',
    fontSize: '13px',
    fontWeight: 500,
    color: '#0f172a',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease'
  });

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    fontWeight: 700,
    color: '#1a1854',
    marginBottom: '5px',
    letterSpacing: '0.1px'
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {status === 'error' && (
        <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b', padding: '10px 14px', borderRadius: '8px', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: First Name & Organisation Name */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
        <div>
          <label style={labelStyle}>
            <span>First Name</span>
            <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <User
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: focusedInput === 'firstName' ? '#2c2a75' : '#64748b',
                pointerEvents: 'none',
                transition: 'color 0.2s ease'
              }}
            />
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={() => setFocusedInput('firstName')}
              onBlur={() => setFocusedInput(null)}
              style={getInputStyle('firstName', true)}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>
            <span>Organisation Name</span>
            <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <Building2
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: focusedInput === 'organizationName' ? '#2c2a75' : '#64748b',
                pointerEvents: 'none',
                transition: 'color 0.2s ease'
              }}
            />
            <input
              type="text"
              name="organizationName"
              required
              placeholder="Organisation Name"
              value={formData.organizationName}
              onChange={handleChange}
              onFocus={() => setFocusedInput('organizationName')}
              onBlur={() => setFocusedInput(null)}
              style={getInputStyle('organizationName', true)}
            />
          </div>
        </div>
      </div>

      {/* Row 2: Email & Phone Number */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
        <div>
          <label style={labelStyle}>
            <span>Email</span>
            <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <Mail
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: focusedInput === 'email' ? '#2c2a75' : '#64748b',
                pointerEvents: 'none',
                transition: 'color 0.2s ease'
              }}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              style={getInputStyle('email', true)}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '75px 1fr', gap: '6px' }}>
          <div>
            <label style={labelStyle}>std code</label>
            <input
              type="text"
              name="stdCode"
              placeholder="code"
              value={formData.stdCode}
              onChange={handleChange}
              onFocus={() => setFocusedInput('stdCode')}
              onBlur={() => setFocusedInput(null)}
              style={getInputStyle('stdCode', false)}
            />
          </div>

          <div>
            <label style={labelStyle}>
              <span>Contact No.</span>
              <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <Phone
                size={15}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: focusedInput === 'contactNo' ? '#2c2a75' : '#64748b',
                  pointerEvents: 'none',
                  transition: 'color 0.2s ease'
                }}
              />
              <input
                type="tel"
                name="contactNo"
                required
                placeholder="Contact No"
                value={formData.contactNo}
                onChange={handleChange}
                onFocus={() => setFocusedInput('contactNo')}
                onBlur={() => setFocusedInput(null)}
                style={getInputStyle('contactNo', true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Select Service You Are Looking For */}
      <div>
        <label style={labelStyle}>
          <span>Select service you looking for</span>
          <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div style={{ position: 'relative' }}>
          <Award
            size={15}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: focusedInput === 'serviceRequired' ? '#2c2a75' : '#64748b',
              pointerEvents: 'none',
              transition: 'color 0.2s ease',
              zIndex: 2
            }}
          />
          <select
            name="serviceRequired"
            required
            value={formData.serviceRequired}
            onChange={handleChange}
            onFocus={() => setFocusedInput('serviceRequired')}
            onBlur={() => setFocusedInput(null)}
            style={{ ...getInputStyle('serviceRequired', true), cursor: 'pointer' }}
          >
            <option value="">--Select Service--</option>
            <option value="Certification">Certification (ISO Audits & Compliance)</option>
            <option value="Training">Training (ISO Auditor Courses)</option>
            <option value="Inspection">Inspection & Third Party Validation</option>
            <option value="E-Learning">E-Learning Courses</option>
            <option value="Regulatory Compliance">Regulatory Compliance</option>
          </select>
        </div>
      </div>

      {/* Row 4: Your Country */}
      <div>
        <label style={labelStyle}>
          <span>Your Country</span>
          <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div style={{ position: 'relative' }}>
          <Globe
            size={15}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: focusedInput === 'country' ? '#2c2a75' : '#64748b',
              pointerEvents: 'none',
              transition: 'color 0.2s ease'
            }}
          />
          <input
            type="text"
            name="country"
            required
            placeholder="Your Country"
            value={formData.country}
            onChange={handleChange}
            onFocus={() => setFocusedInput('country')}
            onBlur={() => setFocusedInput(null)}
            style={getInputStyle('country', true)}
          />
        </div>
      </div>

      {/* Row 5: Your Comments */}
      <div>
        <label style={labelStyle}>
          <span>Your Comments</span>
        </label>
        <div style={{ position: 'relative' }}>
          <MessageSquare
            size={15}
            style={{
              position: 'absolute',
              left: '12px',
              top: '12px',
              color: focusedInput === 'comments' ? '#2c2a75' : '#64748b',
              pointerEvents: 'none',
              transition: 'color 0.2s ease'
            }}
          />
          <textarea
            name="comments"
            rows={2}
            placeholder="Your Comments"
            value={formData.comments}
            onChange={handleChange}
            onFocus={() => setFocusedInput('comments')}
            onBlur={() => setFocusedInput(null)}
            style={{ ...getInputStyle('comments', true), resize: 'vertical' }}
          />
        </div>
      </div>

      {/* Row 6: Captcha Security Box & Refresh Button */}
      <div>
        <label style={labelStyle}>
          <span>Captcha Security Verification</span>
          <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          
          {/* Captcha Image Display Box */}
          <div
            style={{
              backgroundColor: '#e2e4d8',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '6px 18px',
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '6px',
              color: '#111827',
              fontStyle: 'italic',
              textDecoration: 'line-through 2px rgba(0,0,0,0.25)',
              userSelect: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            {captchaCode}
          </div>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={handleRefreshCaptcha}
            title="Refresh Captcha"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
              boxShadow: 'none',
              color: '#2c2a75',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <RotateCw size={17} style={{ transform: isRotating ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s ease' }} />
          </button>
        </div>

        {/* Captcha Code Input */}
        <div style={{ position: 'relative' }}>
          <ShieldCheck
            size={15}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: focusedInput === 'captchaInput' ? '#2c2a75' : '#64748b',
              pointerEvents: 'none',
              transition: 'color 0.2s ease'
            }}
          />
          <input
            type="text"
            name="captchaInput"
            required
            placeholder="Enter Captcha Code"
            value={formData.captchaInput}
            onChange={handleChange}
            onFocus={() => setFocusedInput('captchaInput')}
            onBlur={() => setFocusedInput(null)}
            style={getInputStyle('captchaInput', true)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          backgroundColor: '#2c2a75',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          padding: '13px 24px',
          fontSize: '15px',
          fontWeight: 700,
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          marginTop: '6px',
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
        onMouseOver={(e) => {
          if (status !== 'submitting') {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#1e1c59';
          }
        }}
        onMouseOut={(e) => {
          if (status !== 'submitting') {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#2c2a75';
          }
        }}
      >
        {status === 'submitting' ? (
          <>
            <RotateCw size={17} className="animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Query →</span>
        )}
      </button>
    </form>
  );
};
