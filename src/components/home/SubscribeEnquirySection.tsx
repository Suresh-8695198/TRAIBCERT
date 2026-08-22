import React from 'react';
import { ZohoBiginForm } from '@/components/forms/ZohoBiginForm';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const SubscribeEnquirySection: React.FC = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#f8fafc', color: '#2c2a75', padding: '88px 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'flex-start' }}>
        
        {/* Left Column */}
        <div>
          <span className="eyebrow" style={{ marginBottom: '16px' }}>
            GET A FAST CERTIFICATION QUOTE
          </span>
          
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#2c2a75', lineHeight: 1.2, marginBottom: '20px' }}>
            Subscribe & Request Your ISO Proposal
          </h2>

          <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6, marginBottom: '32px' }}>
            In today’s business era, with the maturity in technology and its adoption, the set of associated services is bound to increase in number and features.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e5f6ee', color: '#2f9e6e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ color: '#2c2a75', fontSize: '15.5px' }}>Independent & Impartial Auditing</strong>
                <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '2px', lineHeight: 1.5 }}>Delivered in a non-discriminatory manner across all manufacturing and service industries.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e5f6ee', color: '#2f9e6e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ color: '#2c2a75', fontSize: '15.5px' }}>Well Qualified Audit Team</strong>
                <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '2px', lineHeight: 1.5 }}>Delivering consistent and reliable reports recognized internationally.</p>
              </div>
            </div>
          </div>

          {/* Contact Direct Box */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#2c2a75', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} style={{ color: '#c99327' }} />
              <span>Contact Audit Desk Directly</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13.5px' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#64748b', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>UK OFFICE</div>
                <a href={siteConfig.contact.ukPhoneTel} style={{ color: '#2c2a75', fontWeight: 800, fontSize: '15px' }}>
                  {siteConfig.contact.ukPhone}
                </a>
              </div>

              <div>
                <div style={{ fontWeight: 700, color: '#64748b', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>UAE OFFICE</div>
                <a href={siteConfig.contact.uaePhoneTel} style={{ color: '#2c2a75', fontWeight: 800, fontSize: '15px' }}>
                  {siteConfig.contact.uaePhone}
                </a>
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
              <Mail size={15} style={{ color: '#2c2a75' }} />
              <span>Email: <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: '#2c2a75', fontWeight: 700 }}>{siteConfig.contact.infoEmail}</a></span>
            </div>
          </div>

        </div>

        {/* Right Column: Zoho Form Container */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)', color: '#0f172a' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#2c2a75', marginBottom: '8px' }}>
            Fast Quote Request
          </h3>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            Submit your details below to receive a transparent fixed quote from our lead audit team.
          </p>

          <ZohoBiginForm defaultStandard="ISO 9001:2015" />
        </div>

      </div>
    </section>
  );
};
