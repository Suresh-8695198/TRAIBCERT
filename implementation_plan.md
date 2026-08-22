# Corporate Implementation Plan: TRAIBCERT Next.js Website Modernization (76 Pages)

This implementation plan outlines the full corporate-level development strategy for the **TRAIBCERT Limited** website redesign. The platform will be built using **Next.js (App Router), React, TypeScript, and a Modular CSS Design System**, following the official **TRAIBCERT Navigation Sub-Flow v4 Specification** and **Header/Footer Spec v2**.

---

## 1. Executive Summary & Brand Identity Specs

- **Client**: TRAIBCERT Limited (UK & UAE)
- **Production Target**: `https://www.traibcert.org.uk`
- **Academy Handoff**: `https://academy.traibcert.org.uk`
- **Total Scope**: Exactly **76 Pages** across 5 Primary Menu Categories + Footer Policies + Isolated E-Commerce Cart option.
- **Design Inspiration**:
  - `cyber-essentials.php` (Target design language, deep indigo, honey-yellow accents, serif + sans typography).
  - `amtivo.com/uk/` (Clean white-dominant corporate layout, typography rhythm).
  - `qmsuk.com/` (Header phone CTAs, trust signals above fold, conversion focus).
- **Brand Palette Tokens**:
  - **Primary Indigo (`--ink`)**: `#2c2a75`
  - **Topbar Navy (`--topbar`)**: `#1a1854`
  - **Honey Yellow Accent (`--gold`)**: `#f9b933`
  - **Yellow Text on White WCAG AA (`--gold-strong`)**: `#c99327`
  - **Soft Gold Glow (`--gold-soft`)**: `#fff4d1`
  - **Featured Tile Gradients**: `#3f3b8f` $\rightarrow$ `#5b56af`
- **Typography System**:
  - Primary Sans: `DM Sans` / `Plus Jakarta Sans`
  - Display/Heading Serif Accent: `Fraunces` / `Cinzel`

---

## 2. Key Business & Integration Requirements

> [!IMPORTANT]
> **1. Native React Form + Zoho Bigin API Integration**
> - No iframe embeds! Fully native React forms matching site design.
> - Server-side validation & anti-spam (Google reCAPTCHA v3).
> - Post submissions directly to Zoho Bigin CRM API / Webhook.
> - Auto-responder email to enquirer + instant notification to `info@traibcert.org.uk`.
> - Hidden UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `page_url`) for lead attribution.

> [!NOTE]
> **2. Google Analytics & GTM Conversion Tracking**
> - Global GTM Container ID: `AW-835011731`.
> - Custom conversion event trigger (`lead_form_submitted`) fired on successful form completion.

> [!NOTE]
> **3. Business Communication & Direct Contact Widgets**
> - Sticky WhatsApp Business Chat Widget linked to `+44 7904 664589`.
> - Header Topbar with direct dial action for UK (`+44 7904 664589`) and UAE (`+971 0526 909311`).

> [!TIP]
> **4. High-Speed Native MDX CMS for Blog & Resources**
> - Replaces WordPress with zero maintenance overhead, lightning-fast static generation (SSG), and complete design control.

---

## 3. Enterprise Next.js Project Folder Structure

The project is structured with strict separation of concerns, configuration-driven menus, modular reusable UI components, and static page routes:

```text
e:\Fiverr Projects\TRAIBCERT\
├── public/
│   ├── assets/
│   │   ├── logo.png                   # Official TRAIBCERT Logo
│   │   ├── accreditations/            # ASCB, IASME, Cyber CB Seals
│   │   ├── icons/                     # 12-Icon Industry Grid SVG Icons
│   │   └── downloads/                 # 6-Step ISO Whitepaper PDFs
├── src/
│   ├── config/                        # SINGLE SOURCE OF TRUTH CONFIGURATIONS
│   │   ├── site.ts                    # Contact details, address, emails, social links
│   │   ├── navigation.ts              # 5 primary menus, mega-menu structures, campaign tiles
│   │   ├── certifications.ts          # 34 ISO & Cyber standards specs & tags
│   │   ├── industries.ts              # 12 Industry sector descriptions & icons
│   │   ├── training.ts                # 14 Training standard course levels
│   │   ├── policies.ts                # 6 Legal policy page contents & metadata
│   │   └── redirects.ts               # Legacy 301 Redirect URL mappings
│   ├── app/                           # NEXT.JS APP ROUTER (76 PAGES)
│   │   ├── layout.tsx                 # Master Root Layout (Topbar, Header, Footer, WhatsApp, GTM)
│   │   ├── page.tsx                   # Homepage (10 Absorbed Sections)
│   │   ├── certification/             # MENU 2 — CERTIFICATION (34 Pages)
│   │   │   ├── page.tsx               # Certification Landing
│   │   │   ├── [slug]/page.tsx        # Dynamic ISO & Cyber Standard Page Template
│   │   │   ├── cyber-essentials/      # Target Aesthetic Showcase Page
│   │   │   └── inspection/            # Inspection Overview & 3 Sub-pages
│   │   ├── training/                  # MENU 3 — TRAINING (14 Pages)
│   │   │   ├── page.tsx               # Training Landing
│   │   │   └── [slug]/page.tsx        # ISO Training Course Page (Foundation, Auditor, Lead)
│   │   ├── resources/                 # MENU 4 — RESOURCES (19 Pages)
│   │   │   ├── blog/                  # Blog Landing & MDX Articles
│   │   │   ├── knowledge-base/        # Guides & FAQ
│   │   │   ├── downloads/             # Whitepapers & ISO 6-Step Guide
│   │   │   ├── industries/            # 12 Industry Vertical Pages
│   │   │   └── certificate-transfer/  # Certificate Transfer Application Flow
│   │   ├── contact/                   # MENU 5 — CONTACT US (2 Pages)
│   │   │   ├── page.tsx               # Contact Info & Map Page
│   │   │   └── enquiry/page.tsx       # Native Zoho Bigin Quote Enquiry Page
│   │   ├── verify-certificate/        # Online Certificate Search Portal
│   │   ├── legal/                     # FOOTER POLICIES (6 Pages)
│   │   │   └── [slug]/page.tsx        # Privacy, Terms, Impartiality, Refund, Cookies, Confidentiality
│   │   ├── api/                       # API ROUTES
│   │   │   ├── zoho-lead/route.ts     # Zoho Bigin Lead API Proxy with reCAPTCHA validation
│   │   │   └── verify-cert/route.ts   # Certificate Lookup API
│   │   └── sitemap.ts                 # Dynamic XML Sitemap Generator (76 URLs)
│   ├── components/                    # MODULAR REUSABLE UI COMPONENTS
│   │   ├── layout/
│   │   │   ├── Topbar.tsx             # Indigo topbar with contact numbers & Academy link
│   │   │   ├── Header.tsx             # 78px Sticky Main Header
│   │   │   ├── MegaMenuCertification.tsx # 4-Column + Campaign Tile MegaMenu
│   │   │   ├── MegaMenuResources.tsx  # 3-Column + Download Tile MegaMenu
│   │   │   ├── DropdownTraining.tsx   # 520px Flat Course Dropdown
│   │   │   ├── MobileDrawer.tsx       # 320px Off-Canvas Responsive Navigation
│   │   │   └── Footer.tsx             # 4-Column Corporate Footer + Copyright Strip
│   │   ├── forms/
│   │   │   ├── ZohoBiginForm.tsx      # Native React Lead Capture Form
│   │   │   ├── QuickQuoteModal.tsx    # Slide-in Quick Quote Drawer
│   │   │   └── CertTransferForm.tsx   # Certificate Transfer Multi-Step Form
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Dynamic Page Hero with Campaign Anchors
│   │   │   ├── StandardDetails.tsx    # ISO Benefits, Requirements & Scope Tabs
│   │   │   ├── IndustryGrid.tsx       # 12-Icon Industry Grid Component
│   │   │   ├── TrustBadges.tsx        # ASCB, IASME, UKAS Accreditation Badges
│   │   │   ├── TestimonialsSlider.tsx # Client Social Proof & Stats
│   │   │   └── CampaignTile.tsx       # ISO 9001:2026 September Transition Callout
│   │   └── ui/
│   │       ├── Button.tsx             # Indigo / Honey-Yellow CTA Buttons
│   │       ├── Badge.tsx              # "NEW" / "CURRENT" / "TRANSITION ALERT" Tags
│   │       ├── Breadcrumb.tsx         # Accessible Breadcrumb with JSON-LD Schema
│   │       ├── WhatsAppWidget.tsx     # Floating WhatsApp Chat Button
│   │       └── CertVerifyLookup.tsx   # Search Input & Result Card
│   ├── lib/
│   │   ├── zoho.ts                    # Zoho Bigin API POST client
│   │   ├── recaptcha.ts               # Google reCAPTCHA v3 Server Verification
│   │   ├── analytics.ts               # GTM & Google Ads Conversion Event Emitter
│   │   └── seo.ts                     # Schema.org JSON-LD Generator (Organization, Service, Course)
│   └── styles/
│       ├── globals.css                # CSS Variables & Global Resets
│       └── typography.css             # Fraunces & DM Sans Font Definitions
├── next.config.js                     # 301 Redirect Rules Configured
└── tsconfig.json
```

---

## 4. Page Architecture & Menu Breakdown (76 Pages)

### Menu 1: Home (1 Page — Absorbed 10 Sections)
- Anchor-based landing page incorporating: Hero, About Us, Why Choose Us, Our Services, Accreditations, Testimonials & Stats, 12-Icon Industry Grid, Latest Insights, Careers Callout, Contact CTA.

### Menu 2: Certification (34 Pages)
- **Column A — ISO Standards (18 Pages)**: ISO 9001:2015, ISO 14001:2026 [CURRENT], ISO 45001:2018, ISO 22000:2018, ISO 22301:2019, ISO 20000-1:2018, ISO 10002:2018, ISO 21001:2018, ISO 41001:2018, ISO 31000:2018, ISO 26000:2010, ISO 50001:2018, ISO 13485, ISO 29001:2020, ISO 42001:2023 [NEW], ISO 55001 [NEW], ISO 14064 [NEW], Certification Landing.
- **Column B — Cyber Security & Compliance (10 Pages)**: Cyber Essentials, Cyber Essentials Plus, ISO 27001:2022, ISO 27701 [NEW], ISO 27017 [NEW], ISO 27018 [NEW], SOC 2 Type II [NEW], PCI DSS [NEW], GDPR Assessment [NEW], Penetration Testing [NEW].
- **Column C — Sustainability (2 Pages)**: ESG & Sustainability [NEW], Carbon & Net-Zero Advisory [NEW].
- **Column D — Inspection (4 Pages)**: Inspection Overview, What is Pre-Shipment Inspection, Why Pre-Shipment Inspection, Benefits of PSI.
- **Column E — Featured Campaign**: ISO 9001:2026 September Transition Alert Tile.

### Menu 3: Training (14 Pages)
- Wide 520px Dropdown hosting 14 ISO Standard course pages: ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 41001, ISO 20000-1, ISO 22301, ISO 31000, ISO 50001, ISO 17025, ISO 17043, ISO 13528, Training Landing. (Links seamlessly to `https://academy.traibcert.org.uk`).

### Menu 4: Resources (19 Pages)
- **Knowledge Hub (5 Pages)**: Blog Landing, Knowledge Base/Guides [NEW], Downloads/Whitepapers [NEW], Further Topics, FAQ.
- **Industries (12 Pages)**: Industries Landing, Technology & SaaS [NEW], Banking & Financial [NEW], Healthcare [NEW], Manufacturing [NEW], Construction [NEW], Energy & Oil/Gas [NEW], Public Sector [NEW], Education [NEW], Food & Beverage [NEW], Retail & E-Commerce [NEW], Transport & Logistics [NEW].
- **Client Services (2 Pages)**: Certificate Transfer Application, HTML Sitemap.
- **Featured Campaign**: 6 Essential Steps to ISO Certification Download.

### Menu 5: Contact Us (2 Pages)
- Contact Location & Info Page, Quote Enquiry Page (Zoho Bigin Integrated).

### Footer Column 4: Legal & Policies (6 Pages)
- Privacy Policy, Terms & Conditions, Confidentiality Policy, Impartiality Policy, Refund & Cancellation Policy, Cookie Policy.

---

## 5. 30-Day, 4-Milestone Delivery Roadmap

---

### Milestone 1: Project Setup, Design System & Core Pages (Days 1–7)

#### [NEW] [package.json](file:///e:/Fiverr%20Projects/TRAIBCERT/package.json)
#### [NEW] [next.config.js](file:///e:/Fiverr%20Projects/TRAIBCERT/next.config.js)
#### [NEW] [src/config/site.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/site.ts)
#### [NEW] [src/config/navigation.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/navigation.ts)
#### [NEW] [src/styles/globals.css](file:///e:/Fiverr%20Projects/TRAIBCERT/src/styles/globals.css)
#### [NEW] [src/components/layout/Topbar.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/layout/Topbar.tsx)
#### [NEW] [src/components/layout/Header.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/layout/Header.tsx)
#### [NEW] [src/components/layout/Footer.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/layout/Footer.tsx)
#### [NEW] [src/app/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/page.tsx)
#### [NEW] [src/app/certification/cyber-essentials/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/certification/cyber-essentials/page.tsx)

**Key Deliverables**:
- Next.js 14 App Router project setup with TypeScript.
- Design Tokens (`--ink: #2c2a75`, `--topbar: #1a1854`, `--gold: #f9b933`, `--gold-strong: #c99327`).
- Master Sticky Header with Topbar, MegaMenus (Certification & Resources), Training Dropdown, and Mobile Drawer.
- 4-Column Footer with policies & contact details.
- Homepage with 10 scroll-anchored sections & Cyber Essentials target aesthetic page.

---

### Milestone 2: Main Website Pages & Certification Hub (Days 8–15)

#### [NEW] [src/config/certifications.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/certifications.ts)
#### [NEW] [src/config/industries.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/industries.ts)
#### [NEW] [src/app/certification/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/certification/page.tsx)
#### [NEW] [src/app/certification/[slug]/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/certification/[slug]/page.tsx)
#### [NEW] [src/app/resources/industries/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/resources/industries/page.tsx)
#### [NEW] [src/app/resources/industries/[slug]/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/resources/industries/[slug]/page.tsx)
#### [NEW] [src/components/sections/StandardDetails.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/sections/StandardDetails.tsx)
#### [NEW] [src/components/sections/IndustryGrid.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/sections/IndustryGrid.tsx)

**Key Deliverables**:
- Implementation of **34 Certification Pages** (ISO 9001, ISO 27001, ISO 14001:2026, ISO 45001, ISO 42001 AI, Cyber Essentials Plus, SOC 2, PCI DSS, ESG, Inspection pages).
- Implementation of **12 Industry Vertical Pages** (Tech & SaaS, Healthcare, Banking, Manufacturing, Construction, Energy, Public Sector, Education, Food & Beverage, Transport).
- Reusable dynamic templates rendering accreditation seals, standard benefits, audit steps, and quick quote triggers.

---

### Milestone 3: Business Integrations, Academy & Cyber Essentials Cart (Days 16–23)

#### [NEW] [src/config/training.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/training.ts)
#### [NEW] [src/app/training/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/training/page.tsx)
#### [NEW] [src/app/training/[slug]/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/training/[slug]/page.tsx)
#### [NEW] [src/app/contact/enquiry/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/contact/enquiry/page.tsx)
#### [NEW] [src/app/api/zoho-lead/route.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/api/zoho-lead/route.ts)
#### [NEW] [src/components/forms/ZohoBiginForm.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/forms/ZohoBiginForm.tsx)
#### [NEW] [src/components/ui/WhatsAppWidget.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/ui/WhatsAppWidget.tsx)
#### [NEW] [src/app/verify-certificate/page.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/verify-certificate/page.tsx)
#### [NEW] [src/components/cart/CartDrawer.tsx](file:///e:/Fiverr%20Projects/TRAIBCERT/src/components/cart/CartDrawer.tsx)

**Key Deliverables**:
- **14 Training Course Pages** with external course enrollment triggers to `https://academy.traibcert.org.uk`.
- **Native React Zoho Bigin Enquiry Form**: Server-side reCAPTCHA v3, auto-responder, `info@traibcert.org.uk` notifications, hidden UTM lead tracking.
- **Google Analytics & GTM Container `AW-835011731`** conversion event triggers.
- **WhatsApp Floating Widget** (`+44 7904 664589`).
- **Certificate Verification Lookup Tool**.
- **Cyber Essentials Shopping Cart & Payment Gateway Checkout Component**.

---

### Milestone 4: SEO Setup, 301 Redirects, Performance & Final Delivery (Days 24–30)

#### [NEW] [src/lib/seo.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/lib/seo.ts)
#### [NEW] [src/app/sitemap.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/sitemap.ts)
#### [NEW] [src/app/robots.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/app/robots.ts)
#### [NEW] [src/config/redirects.ts](file:///e:/Fiverr%20Projects/TRAIBCERT/src/config/redirects.ts)

**Key Deliverables**:
- Complete SEO Optimization for all 76 pages (Dynamic Titles, Meta Descriptions, OpenGraph cards, Canonical tags, JSON-LD Schema markup).
- **301 Redirect Mapping** in `next.config.js` to preserve legacy `.php` traffic (`about.php`, `services.php`, `cyber-essentials.php`, `enquiry.php`).
- Google Lighthouse Performance Audit (targeting 90+ Score, WebP image conversion, font optimization).
- Full Mobile & Cross-Browser Responsive QA.
- Production deployment handoff.

---

## 6. Verification & Quality Assurance Strategy

### Automated Verification Tests
1. **Next.js Type-check & Production Build**:
   ```bash
   npm run build
   ```
   Validates zero TypeScript errors, missing routes, or compilation issues across all 76 pages.
2. **76-Page Route Audit Script**:
   Automated check ensuring all 76 paths in `navigation.ts` respond with `HTTP 200 OK`.

### Manual QA Verification
1. **Zoho Bigin CRM Lead Test**: Submit a test inquiry on `/contact/enquiry` and confirm lead arrival in Zoho Bigin with correct UTM parameters and email notification.
2. **GTM Event Tracking**: Test tag container `AW-835011731` conversion trigger firing on quote submission.
3. **Responsive Menu QA**: Verify MegaMenu behavior on Desktop and 320px off-canvas drawer on Mobile (<1024px).
4. **Certificate Lookup QA**: Test search verification tool with test certificate IDs.
