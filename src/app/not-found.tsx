import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--gray-50)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span className="badge badge-alert" style={{ marginBottom: '16px' }}>404 ERROR</span>
      <h1 className="heading-lg" style={{ marginBottom: '16px' }}>Page Not Found</h1>
      <p style={{ fontSize: '16px', color: 'var(--gray-700)', maxWidth: '480px', margin: '0 auto 24px' }}>
        The requested TRAIBCERT page could not be located or has moved to a new route structure.
      </p>
      <Link href="/" className="btn btn-gold" style={{ padding: '12px 24px' }}>
        Return to Homepage
      </Link>
    </div>
  );
}
