# Multibat

Conversion-focused web application developed for **Multibat Baterias**, an automotive battery sales and installation company based in Vilhena, Rondônia, Brazil.

The application acts as the main digital acquisition endpoint for paid and organic traffic, providing a fast mobile-first experience designed to convert users with urgent battery needs into qualified WhatsApp conversations.

🌐 **Production:** https://multibat.com.br  
📦 **Repository:** https://github.com/webkauadev/multibat-lp

---

## Overview

Multibat provides automotive battery delivery and on-site installation, with a service model focused on speed and availability.

The application was designed around a simple conversion flow:

```text
Traffic Source
      │
      ▼
  Landing Page
      │
      ├── Product / Brand Information
      ├── Service Benefits
      ├── Social Proof
      ├── FAQ / Objection Handling
      │
      ▼
 WhatsApp CTA
      │
      ▼
 Qualified Lead
      │
      ▼
 Sales / Support
````

The primary business objective is to minimize the time between a user's problem and direct contact with the service team.

---

## Core Features

### Conversion-Oriented Interface

The entire UI is structured around a single primary conversion action:

```text
Request a battery through WhatsApp
```

Multiple contextual CTAs are distributed across the page to reduce navigation friction and maintain the conversion path throughout the user journey.

---

### WhatsApp Integration

WhatsApp is used as the primary communication and lead-generation channel.

The application provides direct CTA links that allow users to start a conversation with the commercial team without requiring an intermediate registration flow.

This architecture is particularly useful for high-intent and time-sensitive traffic.

---

### Mobile-First Experience

The interface was designed primarily for smartphone traffic.

Main UX considerations include:

* Responsive layouts
* Mobile-first content hierarchy
* Large touch targets
* Persistent conversion actions
* Reduced navigation complexity
* Fast access to WhatsApp
* Readable typography across viewport sizes

Target breakpoints:

```text
Mobile:   320px+
Tablet:   768px+
Desktop: 1024px+
```

---

## Application Structure

The public application is organized into conversion-oriented content blocks.

```text
Hero
│
├── Main value proposition
├── Urgency message
└── Primary CTA
     │
     ▼
Problem / Pain Points
     │
     ▼
Solution
     │
     ├── Diagnosis
     ├── Battery selection
     └── Professional installation
     │
     ▼
Products / Brands
     │
     ▼
Service Differentiators
     │
     ▼
Social Proof
     │
     ▼
How It Works
     │
     ▼
FAQ
     │
     ▼
Final Conversion CTA
     │
     ▼
Footer
```

---

## Supported Brands

The commercial experience was designed to support multiple automotive battery manufacturers, including:

* Moura
* Heliar
* Pioneiro
* Maxfor

The architecture allows product and brand information to be presented without requiring a traditional e-commerce checkout process.

Instead, product selection is completed through assisted service on WhatsApp.

---

## Conversion Strategy

The application addresses a high-intent use case:

> A driver whose vehicle battery is failing or already discharged.

Because the purchase decision is usually urgent, the application intentionally avoids unnecessary steps such as:

```text
User Account Creation
        ↓
Shopping Cart
        ↓
Checkout
        ↓
Registration Form
```

The implemented experience follows a shorter path:

```text
Need
 ↓
Information
 ↓
Trust
 ↓
WhatsApp
 ↓
Sale
```

---

## Analytics & Conversion Tracking

The application architecture was designed to support marketing and conversion measurement through:

* Meta Pixel
* Google Analytics 4
* CTA interaction tracking
* WhatsApp click tracking
* Conversion events
* Paid traffic attribution

Example conversion flow:

```text
PageView
   │
   ▼
Content Interaction
   │
   ▼
CTA Click
   │
   ▼
WhatsApp Redirect
   │
   ▼
Lead
```

Tracking configuration and platform identifiers should remain environment-specific whenever possible.

---

## SEO

The application follows a local service-oriented SEO structure.

Primary targeting:

```text
automotive batteries
battery delivery
battery installation
battery replacement
automotive battery Vilhena
battery delivery Vilhena
```

Recommended production metadata:

```html
<title>
  Multibat | Bateria com Entrega e Instalação em até 50 Minutos
</title>
```

```html
<meta
  name="description"
  content="Baterias automotivas com entrega e instalação em Vilhena/RO. Atendimento via WhatsApp, garantia de fábrica e instalação profissional."
/>
```

Content hierarchy should preserve semantic headings:

```text
H1
├── H2
│   ├── H3
│   └── H3
├── H2
└── H2
```

---

## Performance

Performance is especially important because a significant portion of the traffic originates from mobile advertising.

The project follows performance-oriented practices such as:

* Optimized image assets
* WebP where appropriate
* Lazy loading for below-the-fold media
* Reduced initial payload
* Responsive images
* Minimal blocking resources
* Optimized mobile rendering
* Core Web Vitals awareness

Target priorities:

```text
LCP  → Fast hero rendering
CLS  → Stable page layout
INP  → Responsive interactions
```

---

## Accessibility

The interface is designed with accessibility fundamentals in mind.

Including:

* Semantic HTML
* Keyboard-accessible interactive elements
* Sufficient contrast
* Descriptive alternative text
* Accessible labels
* ARIA attributes where necessary
* Visible interaction states

Target:

```text
WCAG 2.1 AA
```

---

## Development

### Requirements

Make sure the following tools are installed:

```text
Node.js
npm
Git
```

Using a Node.js version manager such as `nvm` is recommended.

---

### Clone the Repository

```bash
git clone https://github.com/webkauadev/speedy-battery-link.git
```

Enter the project directory:

```bash
cd speedy-battery-link
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The development server will expose the application through the local URL provided by the development environment.

---

## Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the generated build locally:

```bash
npm run preview
```

---

## Development Workflow

The project can be maintained through both the local development environment and Lovable.

```text
Local Development
      │
      ├── Git
      │
      ▼
 GitHub Repository
      │
      ▼
    Lovable
      │
      ▼
 Production
```

Changes synchronized through the connected repository remain part of the standard Git workflow.

---

## Git Workflow

Example development flow:

```bash
git checkout -b feature/my-feature

git add .
git commit -m "feat: implement my feature"

git push origin feature/my-feature
```

Recommended commit convention:

```text
feat:     new functionality
fix:      bug fixes
refactor: code restructuring
style:    visual or formatting changes
docs:     documentation
chore:    maintenance tasks
perf:     performance improvements
```

---

## Environment Configuration

Sensitive configuration should never be committed directly to the repository.

Typical environment-specific values may include:

```env
VITE_META_PIXEL_ID=
VITE_GA_MEASUREMENT_ID=
VITE_WHATSAPP_NUMBER=
```

The actual variable names should follow the application's implementation.

Use:

```text
.env
.env.local
.env.production
```

as appropriate for the deployment environment.

Ensure environment files containing credentials or private configuration are included in `.gitignore`.

---

## Security Considerations

Do not commit:

```text
API keys
Access tokens
Private credentials
Analytics secrets
Authentication credentials
Private customer information
```

Client-side environment variables must also be treated as publicly accessible once included in a production bundle.

Only non-sensitive public configuration should be exposed through frontend environment variables.

---

## Deployment

Production environment:

```text
https://multibat.com.br
```

The production domain is used as the main acquisition endpoint for Multibat's digital campaigns and organic traffic.

Before deployment, validate:

```text
[ ] Production build succeeds
[ ] Responsive layout
[ ] WhatsApp links
[ ] Tracking events
[ ] Analytics configuration
[ ] SEO metadata
[ ] Image loading
[ ] Mobile navigation
[ ] HTTPS
[ ] Production domain
```

---

## Project Goals

The technical and business goals of the application are:

1. Provide a fast mobile experience.
2. Convert high-intent visitors into WhatsApp conversations.
3. Reduce friction between traffic acquisition and commercial service.
4. Support paid media attribution and conversion measurement.
5. Communicate service reliability and urgency.
6. Improve the digital acquisition infrastructure of the business.
7. Maintain a scalable frontend that can evolve alongside the operation.

---

## Business Context

Multibat operates in the automotive battery market in **Vilhena/RO**, providing battery sales, delivery and professional installation.

The digital experience focuses on customers who need immediate assistance and prioritizes:

```text
Speed
Availability
Trust
Warranty
Professional installation
Direct communication
```

---

## Built With

The project was developed using **Lovable** and is synchronized with this GitHub repository for source control and continued development.

Development and dependency management are handled through the Node.js/npm ecosystem.

---

## Author

**Kauã Fernandes**

Software Development · Systems · Integrations · Automation

🌐 [https://kauadev.net.br](https://kauadev.net.br)
📧 [contato@kauadev.net.br](mailto:contato@kauadev.net.br)
📦 [https://github.com/webkauadev](https://github.com/webkauadev)

