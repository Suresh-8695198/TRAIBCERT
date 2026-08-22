import React from 'react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';
import { CheckCircle2, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const ContactCTASection: React.FC = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#f8fafc', color: 'var(--ink)', padding: '88px 0', borderTop: '1px solid var(--gray-200)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'flex-start' }}>
        
        {/* Left Column: Form Header & Guarantees */}
        <div>
          <span className="eyebrow" style={{ marginBottom: '16px' }}>
            GET A FAST CERTIFICATION QUOTE
          </span>
          
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '20px' }}>
            Request Your Free ISO & Cyber Security Proposal
          </h2>

          <p style={{ fontSize: '15.5px', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '32px' }}>
            Complete our simple 60-second enquiry form below to receive a transparent fixed-fee quote from our UK lead audit team within 2 business hours.
          </p>

          {/* Value Guarantees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--done-soft)', color: 'var(--done)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15.5px' }}>Transparent Fixed Pricing</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-600)', marginTop: '2px', lineHeight: 1.5 }}>No hidden auditor travel surcharges, unexpected expenses, or management overhead fees.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--done-soft)', color: 'var(--done)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15.5px' }}>UKAS & ASCB Accredited Alignment</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-600)', marginTop: '2px', lineHeight: 1.5 }}>Internationally recognized certificates valid for corporate procurement & government tenders in 45+ countries.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--done-soft)', color: 'var(--done)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ color: 'var(--ink)', fontSize: '15.5px' }}>Direct Zoho CRM Integration</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--gray-600)', marginTop: '2px', lineHeight: 1.5 }}>Automated instant lead acknowledgment sent directly to your inbox with direct lead auditor assignment.</p>
              </div>
            </div>
          </div>

          {/* Direct Contact Details Block */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} style={{ color: 'var(--gold-strong)' }} />
              <span>Prefer to speak with an auditor directly?</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13.5px' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>UK HEAD OFFICE</div>
                <a href={siteConfig.contact.ukPhoneTel} style={{ color: 'var(--ink)', fontWeight: 800, fontSize: '15px' }}>
                  {siteConfig.contact.ukPhone}
                </a>
              </div>

              <div>
                <div style={{ fontWeight: 700, color: 'var(--gray-500)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>UAE MIDDLE EAST</div>
                <a href={siteConfig.contact.uaePhoneTel} style={{ color: 'var(--ink)', fontWeight: 800, fontSize: '15px' }}>
                  {siteConfig.contact.uaePhone}
                </a>
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
              <Mail size={15} style={{ color: 'var(--ink)' }} />
              <span>Direct Enquiry: <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: 'var(--ink)', fontWeight: 700 }}>{siteConfig.contact.infoEmail}</a></span>
            </div>
          </div>

        </div>

        {/* Right Column: Zoho Bigin CRM Form Container */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '40px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-md)', color: 'var(--gray-900)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)', margin: 0 }}>
              Fast Quote Request
            </h3>
            <span style={{ backgroundColor: 'var(--done-soft)', color: 'var(--done)', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} />
              2-HOUR RESPONSE
            </span>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--gray-600)', marginBottom: '28px' }}>
            Select your target ISO standard or cyber service below for an instant fixed quotation.
          </p>

          <ZohoBiginForm defaultStandard="ISO 9001:2015" />
        </div>

      </div>
    </section>
  );
};
