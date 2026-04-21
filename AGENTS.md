<!-- AGENTS.md -->
# THZ Innenrenovierung-Hausmeisterdienste Website

## Projekt-Übersicht

Dies ist eine statische Website für **THZ Innenrenovierung-Hausmeisterdienste**, ein Einzelunternehmen in Siegen, Deutschland. Inhaber ist Halil Zeka. Die Website wird mit Astro als Static Site Generator erstellt und ist für das Hosting auf Netlify optimiert.

- **Inhaber:** Halil Zeka
- **Adresse:** Roster str 66, 57074 Siegen
- **Kontakt:** 0155 1169 3355 | Info@thz-renovierung.de
- **Live-URL:** https://thz-renovierung.de

---

## Tech Stack

| Technologie | Version | Verwendung |
|-------------|---------|------------|
| [Astro](https://docs.astro.build/) | ^6.1.3 | Static Site Generator |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.2 | CSS-Framework (global importiert) |
| [@tailwindcss/vite](https://tailwindcss.com/docs/guides/astro) | ^4.2.2 | Vite-Plugin für Tailwind |
| [@fontsource/inter](https://fontsource.org/fonts/inter) | ^5.2.8 | Lokale Schriftart (400/500/600/700) |
| [Web3Forms](https://web3forms.com/) | – | Kontaktformular-Backend |
| [Netlify](https://www.netlify.com/) | – | Hosting & Deployment |

**Node.js Version:** >=22.12.0 (laut `package.json` engines). `netlify.toml` setzt `NODE_VERSION = "22"`.

---

## Projektstruktur

```
/
├── src/
│   ├── components/           # Wiederverwendbare Astro-Komponenten
│   │   ├── BaseHead.astro    # SEO, Meta-Tags, Schema.org JSON-LD
│   │   ├── CookieBanner.astro # DSGVO-konformes Cookie-Banner (localStorage)
│   │   ├── Footer.astro      # 3-Spalten Footer mit Kontaktdaten
│   │   ├── Header.astro      # Sticky Header + Mobile Navigation
│   │   └── WhatsAppButton.astro # Sticky WhatsApp-Button (wa.me)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Hauptlayout mit Skip-Link, Header, Footer, CookieBanner, WhatsAppButton
│   ├── pages/                # Astro-Seiten (File-based Routing)
│   │   ├── index.astro       # Startseite (Hero, Services, Trust-Bar, Prozess, Testimonials, CTA)
│   │   ├── leistungen.astro  # Detaillierte Service-Beschreibungen (5 Leistungen, alternierendes Layout)
│   │   ├── referenzen.astro  # 7 Vorher-Nachher-Vergleiche (interaktive Slider)
│   │   ├── ueber-uns.astro   # Über uns mit Portrait, Werte, Unternehmensdaten
│   │   ├── kontakt.astro     # Kontakt + Web3Forms-Formular + Google Maps iFrame
│   │   ├── impressum.astro   # Impressum (Pflichtseite)
│   │   ├── datenschutz.astro # Datenschutzerklärung (Pflichtseite)
│   │   └── 404.astro         # 404 Fehlerseite (noindex)
│   ├── styles/
│   │   └── global.css        # Tailwind-Import, CSS-Variablen, Base Styles, Utility-Klassen
│   └── assets/
│       └── images/           # 34 Bilddateien (JPEG/JPG) für die gesamte Website
├── public/
│   ├── fonts/                # Lokale Schriftarten (falls vorhanden)
│   ├── images/               # Statische Bilder (OG-Image)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
├── netlify.toml              # Netlify Config (Build, Security Headers, Redirects, Caching)
├── astro.config.mjs          # Astro Konfiguration
├── tsconfig.json             # TypeScript Konfiguration mit Pfad-Aliassen
├── package.json              # Dependencies & Scripts
├── .env                      # Umgebungsvariablen (nicht im Git)
└── .env.example              # Beispiel-Env-Datei
```

---

## Build- & Entwicklungsbefehle

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (localhost:4321)
npm run dev

# Produktions-Build erstellen (Output: dist/)
npm run build

# Build lokal previewen
npm run preview

# Astro CLI
npm run astro [command]
```

**Wichtig:** Es ist kein Test-Framework im Projekt konfiguriert. Es gibt keine Unit-Tests, Integrationstests oder E2E-Tests.

---

## Konfiguration

### Astro-Konfiguration (`astro.config.mjs`)

```javascript
{
  site: 'https://thz-renovierung.de',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: { format: 'directory' },
  compressHTML: true,
  prefetch: true
}
```

### TypeScript-Pfade (`tsconfig.json`)

| Alias | Ziel |
|-------|------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@assets/*` | `src/assets/*` |
| `@styles/*` | `src/styles/*` |

### Umgebungsvariablen

Kopiere `.env.example` nach `.env` und konfiguriere:

```env
# Web3Forms API Key für Kontaktformular
# Kostenlos erhältlich bei: https://web3forms.com/
PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here

# Site URL (für Produktion)
# PUBLIC_SITE_URL=https://thz-renovierung.de
```

**Wichtig:** `.env` ist in `.gitignore` eingetragen und wird nie committed.

---

## Design-System

### Farbpalette (CSS-Variablen in `global.css`)

| Name | Wert | Verwendung |
|------|------|------------|
| `--color-primary` | `#004252` | Header, Footer, Akzente |
| `--color-primary-dark` | `#003540` | Hover-States |
| `--color-primary-light` | `#005a6e` | Light-Variante |
| `--color-accent` | `#fd5909` | CTAs, Buttons, Highlights |
| `--color-accent-hover` | `#e54d00` | Button-Hover |
| `--color-accent-light` | `#ff7a3a` | Light-Variante |
| `--color-white` | `#ffffff` | Hintergründe, Text auf dunklem Grund |
| `--color-gray-50` bis `--color-gray-900` | Graustufen | UI-Elemente, Text-Hierarchie |
| `--color-text-primary` | `--color-gray-900` | Haupttext |
| `--color-text-secondary` | `--color-gray-600` | Sekundärer Text |
| `--color-border` | `--color-gray-200` | Rahmen, Trennlinien |

### Typografie

- **Font:** Inter (400, 500, 600, 700) – lokal via `@fontsource/inter`
- **Base Size:** 16px
- **Line Height:** 1.6

### Komponenten-Klassen (in `global.css`)

```css
.btn           /* Basis-Button */
.btn-primary  /* Akzent-Farbe (Orange) */
.btn-secondary /* Primär-Farbe (Dunkelblau) */
.btn-outline  /* Transparent mit Border */
.btn-lg       /* Größere Padding-Variante */
.btn-sm       /* Kleinere Padding-Variante */
.container    /* Max-width: 1280px, zentriert */
.section      /* Padding: 4rem oben/unten */
.section-sm   /* Padding: 2rem oben/unten */
.page-hero    /* Gemeinsamer Hero für Unterseiten */
```

---

## Code-Style-Richtlinien

### Allgemein

- **Sprache:** Deutsch für alle UI-Texte, Englisch für Code-Kommentare
- **Komponenten:** PascalCase (z.B. `CookieBanner.astro`)
- **Seiten:** kebab-case (z.B. `ueber-uns.astro`)
- **CSS-Klassen:** kebab-case, semantisch benannt

### Astro-Komponenten-Struktur

```astro
---
// 1. Imports
import Component from './Component.astro';

// 2. Props-Interface
interface Props {
  title?: string;
}

// 3. Props-Destrukturierung
const { title = 'Default' } = Astro.props;

// 4. Daten/Logik
const items = [...];
---

<!-- 5. Template -->
<div class="component">
  {items.map(item => <span>{item}</span>)}
</div>

<!-- 6. Scoped Styles (sehr stark genutzt im Projekt) -->
<style>
  .component { ... }
</style>

<!-- 7. Client-Side Scripts (optional) -->
<script>
  // Vanilla JS, modularer IIFE-Style; teilweise mit TypeScript-Annotationen
  (function() { ... })();
</script>
```

**Architektur-Hinweis:** Das Projekt verwendet primär **scoped `<style>`-Blöcke** innerhalb der Astro-Dateien anstelle von Tailwind-Utility-Klassen im HTML. Tailwind wird in `global.css` importiert (`@import "tailwindcss";`), dient aber hauptsächlich als Reset- und Design-System-Grundlage. Jede Seite und Komponente definiert ihre eigenen semantischen CSS-Klassen.

### Bildverwendung

- Astro's `<Image />`-Komponente wird für alle Bilder verwendet (`import { Image } from 'astro:assets'`)
- Bilder werden aus `src/assets/images/` importiert
- Attribute wie `width`, `height`, `alt` sind Pflicht
- Das `public/`-Verzeichnis enthält nur statische Assets wie Favicon, OG-Image, `robots.txt`, `sitemap.xml`

### Accessibility (A11y) Standards

- **Semantisches HTML:** `<header>`, `<main>`, `<section>`, `<nav>`, `<article>` verwenden
- **ARIA-Labels:** Bei allen interaktiven Elementen und Dialogen
- **Skip-Link:** Vorhanden in `BaseLayout.astro` für Screenreader
- **Focus-Styles:** Sichtbarer Focus-Ring (`*:focus-visible`)
- **Alt-Texte:** Bei allen Bildern Pflicht
- **Kontrast:** WCAG AA konforme Farbkontraste
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` wird in `global.css` berücksichtigt

### Performance-Optimierungen

- `<Image />` Komponente von Astro verwendet (optimiert WebP/AVIF)
- Inline-SVGs statt Icon-Fonts
- `loading="lazy"` für unter-the-fold Bilder (wird von Astro Image automatisch gesetzt)
- CSS-Variablen für schnelle Theme-Updates
- `compressHTML: true` und `prefetch: true` in Astro Config

---

## Seiten-Architektur

| Seite | URL | Beschreibung |
|-------|-----|--------------|
| Startseite | `/` | Hero, Services-Teaser (5 Karten), Trust-Bar, 3-Schritte-Prozess, 3 Testimonials, CTA |
| Leistungen | `/leistungen` | 5 Dienstleistungen mit alternierendem Bild/Text-Layout und Feature-Listen |
| Referenzen | `/referenzen` | 7 interaktive Vorher-Nachher-Vergleiche mit Slider-Funktion |
| Über uns | `/ueber-uns` | Unternehmensinfos, Portrait von Halil Zeka, 4 Werte-Karten, Firmendaten |
| Kontakt | `/kontakt` | Web3Forms-Formular + Kontaktdaten + Google Maps iFrame |
| Impressum | `/impressum` | Rechtliches (Pflicht) |
| Datenschutz | `/datenschutz` | DSGVO-Text (Pflicht) |
| 404 | `/404` | Fehlerseite mit `noindex` |

---

## DSGVO / Datenschutz

Die Website ist auf DSGVO-Konformität ausgelegt:

- **100% lokale Ressourcen** (keine externen CDNs für Schriften oder Scripts)
- **Lokale Schriften** (@fontsource/inter, kein Google Fonts CDN)
- **Keine Tracking-Scripts** (kein Google Analytics)
- **Cookie-Banner** mit Opt-In/Opt-Out (localStorage)
- **Web3Forms** (Formular-Backend)
- **Vollständige Datenschutzerklärung**
- **Security Headers** via `netlify.toml`

### Cookie-Banner-Implementierung

- Speichert Zustand in `localStorage` unter Schlüssel `thz_cookie_consent`
- Werte: `'accepted'` | `'declined'`
- Wird nur bei fehlendem Consent nach 1 Sekunde angezeigt
- Implementiert in `src/components/CookieBanner.astro`

---

## Security Headers (`netlify.toml`)

```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://api.web3forms.com; frame-src 'self' https://www.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com;"
```

Zusätzlich sind Cache-Header für statische Assets (`/_astro/*`, `*.woff2`, `*.webp`, `*.avif`) auf 1 Jahr konfiguriert.

### Redirect-Regeln

- `/kontakt.html` → `/kontakt` (301)
- `/impressum.html` → `/impressum` (301)
- `/datenschutz.html` → `/datenschutz` (301)

---

## Deployment

### Automatisches Deployment (empfohlen)

1. Repository mit GitHub verbinden
2. Netlify erkennt `netlify.toml` automatisch
3. Build-Einstellungen:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

### Manuelles Deployment

```bash
npm run build
# dist/-Ordner auf Netlify deployen
```

---

## SEO & Marketing

### Schema.org JSON-LD

In `BaseHead.astro` implementiert:
- **LocalBusiness:** Firmendaten, Adresse, Geo-Koordinaten, Öffnungszeiten (Mo–Fr 08:00–18:00)
- **WebSite:** Website-Struktur, SearchAction

### Open Graph Tags

Alle Seiten haben vollständige OG-Tags für Social Sharing:
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card` für Twitter/X

### Meta-Tags

- Canonical URL
- Robots (`index, follow`; auf 404/noindex-Seiten `noindex, nofollow`)
- Theme Color (`#004252`)
- Viewport (responsive)

---

## Besondere Features

### Interaktive Vorher-Nachher-Slider (`referenzen.astro`)

- 7 Projekte mit je einem "Before/After"-Vergleich
- Interaktiver Slider per Maus/Touch
- CSS `clip-path` für das Überblenden
- Intersection Observer für Fade-in-Animationen
- Vanilla-JavaScript in IIFE innerhalb der Seite
- Jedes Bild-Paar: `vor{n}.jpeg` / `nach{n}.jpeg` (n = 1–7)

### Kontaktformular (`kontakt.astro`)

- Web3Forms-Integration mit Umgebungsvariable `PUBLIC_WEB3FORMS_KEY`
- Client-seitige Validierung (Name, E-Mail, Nachricht, Datenschutz-Checkbox)
- Honeypot-Spam-Schutz (`botcheck`)
- Fetch-basierte Formularübertragung für inline Erfolgs-/Fehlermeldungen
- Ladezustand am Submit-Button
- Erfolgsmeldung bei `?success=true` URL-Parameter (Legacy-Support)
- Google Maps iFrame mit Standort Siegen

### Mobile Navigation (`Header.astro`)

- Hamburger-Menü mit Animation
- Overlay bei geöffnetem Menü
- ESC-Taste schließt das Menü
- Klick auf Link schließt das Menü
- Scroll-Shadow für den Header
- Fokus-Trap im mobilen Menü für Barrierefreiheit

---

## Wartung & Updates

### Regelmäßige Checks

- [ ] Node.js Version aktuell halten (>=22.12.0)
- [ ] `npm audit` für Security-Updates
- [ ] Bilder optimieren (WebP/AVIF via Astro Image)
- [ ] Lighthouse-Score prüfen

### Änderungen an Kerninhalten

Folgende Daten sind redundant an mehreren Stellen hinterlegt und müssen bei Änderungen synchronisiert werden:
- **Unternehmensname, Adresse, Telefon, E-Mail:** In `BaseHead.astro`, `Footer.astro`, `Header.astro`, `kontakt.astro`, `impressum.astro`, `datenschutz.astro`, `ueber-uns.astro`
- **Öffnungszeiten:** In `BaseHead.astro` (Schema.org JSON-LD) und `kontakt.astro`
- **Navigation:** In `Header.astro`

---

## Troubleshooting

| Problem | Lösung |
|---------|--------|
| `astro` Befehl nicht gefunden | `npm install` ausführen |
| Bilder werden nicht optimiert | `Image` Komponente verwenden, nicht `<img>` |
| Styles nicht geladen | Prüfen ob `@import "tailwindcss";` in `global.css` vorhanden ist |
| Formular sendet nicht | Web3Forms Key prüfen (`PUBLIC_WEB3FORMS_KEY`) |
| Build schlägt fehl | Node.js Version prüfen (>=22.12.0) |

---

## Ressourcen

- [Astro Dokumentation](https://docs.astro.build/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Web3Forms Dokumentation](https://docs.web3forms.com/)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Netlify Dokumentation](https://docs.netlify.com/)
