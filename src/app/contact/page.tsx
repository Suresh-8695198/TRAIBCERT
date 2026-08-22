import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--gray-50)', padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span className="eyebrow">Contact TRAIBCERT</span>
          <h1 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            We Are Ready to Help Your Business
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Reach out to our certification team in the UK or UAE for assistance with ISO audits, Cyber Essentials, or training courses.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '48px' }}>
          {/* UK Headquarters Card */}
          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
            <span className="badge badge-alert" style={{ marginBottom: '12px', display: 'inline-block' }}>UK HEADQUARTERS</span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>United Kingdom Office</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--gray-700)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--gold-strong)', flexShrink: 0 }} />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Phone: <a href={siteConfig.contact.ukPhoneTel} style={{ fontWeight: 700, color: 'var(--ink)' }}>{siteConfig.contact.ukPhone}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Email: <a href={`mailto:${siteConfig.contact.infoEmail}`} style={{ color: 'var(--ink)' }}>{siteConfig.contact.infoEmail}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Hours: Mon – Fri (09:00 – 17:30 GMT)</span>
              </div>
            </div>
          </div>

          {/* UAE Regional Office Card */}
          <div style={{ background: 'var(--white)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
            <span className="badge badge-new" style={{ marginBottom: '12px', display: 'inline-block' }}>UAE REGIONAL OFFICE</span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>Middle East & UAE Office</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--gray-700)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--gold-strong)', flexShrink: 0 }} />
                <span>TRAIBCERT Middle East Operations, UAE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Phone: <a href={siteConfig.contact.uaePhoneTel} style={{ fontWeight: 700, color: 'var(--ink)' }}>{siteConfig.contact.uaePhone}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Email: <a href={`mailto:${siteConfig.contact.trainingEmail}`} style={{ color: 'var(--ink)' }}>{siteConfig.contact.trainingEmail}</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} style={{ color: 'var(--gold-strong)' }} />
                <span>Hours: Sun – Thu (09:00 – 18:00 GST)</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/contact/enquiry" className="btn btn-gold" style={{ padding: '14px 28px', fontSize: '15px' }}>
            <span>Go to Fast Quote Enquiry Form</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
