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
| [Decap CMS](https://decapcms.org/) | ^3.0.0 | Git-based CMS für Content-Management |
| [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) | – | Authentifizierung für CMS |
| [Netlify Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/) | – | Git-Zugriff für CMS |

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
│   │   ├── index.astro       # Startseite (Hero, Services-Teaser, Trust-Bar, Prozess, Testimonials, CTA)
│   │   ├── leistungen.astro  # Detaillierte Service-Beschreibungen (5 Leistungen, alternierendes Layout)
│   │   ├── referenzen.astro  # 7 Vorher-Nachher-Vergleiche (interaktive Slider)
│   │   ├── ueber-uns.astro   # Über uns mit Portrait, Werte, Unternehmensdaten
│   │   ├── kontakt.astro     # Kontakt + Web3Forms-Formular + Google Maps iFrame
│   │   ├── impressum.astro   # Impressum (rendert Markdown aus Content Collection)
│   │   ├── datenschutz.astro # Datenschutzerklärung (rendert Markdown aus Content Collection)
│   │   └── 404.astro         # 404 Fehlerseite (noindex)
│   ├── data/                 # JSON-Datenquellen für Seiteninhalte
│   │   ├── global.json       # Firmendaten, Navigation, Footer, Öffnungszeiten
│   │   ├── services.json     # 5 Dienstleistungen mit Features
│   │   ├── projects.json     # 7 Vorher-Nachher-Referenzprojekte
│   │   └── pages/            # Seitenspezifische Inhalte (home, kontakt, leistungen, referenzen, ueber-uns)
│   ├── content/              # Astro Content Collections
│   │   └── legal/            # Markdown-Dateien für Impressum & Datenschutz
│   │       ├── impressum.md
│   │       └── datenschutz.md
│   ├── styles/
│   │   └── global.css        # Tailwind-Import, CSS-Variablen, Base Styles, Utility-Klassen
│   └── assets/
│       └── images/           # Bilddateien (dupliziert unter public/images/cms/)
├── public/
│   ├── admin/                # Decap CMS Admin-Panel (index.html + config.yml)
│   ├── fonts/                # Lokale Schriftarten (leer; Schriften via @fontsource)
│   ├── images/               # Statische Bilder
│   │   ├── cms/              # CMS-verwaltete Bilder (Logo, Hero, Leistungen, Referenzen, Über uns)
│   │   └── og-image.jpg      # Open Graph Social-Media-Bild
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
├── netlify.toml              # Netlify Config (Build, Security Headers, Redirects, Caching)
├── astro.config.mjs          # Astro Konfiguration
├── tsconfig.json             # TypeScript Konfiguration mit Pfad-Aliassen
├── package.json              # Dependencies & Scripts
├── src/content.config.ts     # Content-Collection-Definition (legal: Markdown mit Zod-Schema)
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

**Hinweis:** Die Aliasse sind konfiguriert, werden im bestehenden Code jedoch kaum genutzt. Die meisten Komponenten verwenden relative Imports (z. B. `../components/Header.astro`).

### Content Collections (`src/content.config.ts`)

Es gibt eine Collection `legal`, die Markdown-Dateien aus `src/content/legal/` lädt. Schema:
- `title`: string (Pflicht)
- `description`: string (Optional)
- `noindex`: boolean (Default: false)

Die Seiten `impressum.astro` und `datenschutz.astro` rendern diese Markdown-Inhalte via `getEntry()` und `render()`.

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

## Content-Architektur

### JSON-Datenquellen

Die Website trennt Inhalt von Präsentation durch zentrale JSON-Dateien:

| Datei | Verwendung |
|-------|------------|
| `src/data/global.json` | Firmendaten, Navigation, Footer, Öffnungszeiten, Schema.org-Geo-Daten |
| `src/data/services.json` | 5 Dienstleistungen mit Teaser-/Detail-Beschreibungen, Features, Bildern |
| `src/data/projects.json` | 7 Referenzprojekte mit Vorher-/Nachher-Bildpfaden |
| `src/data/pages/home.json` | Startseite: Hero, Trust-Bar, Prozess-Schritte, Testimonials, CTA |
| `src/data/pages/kontakt.json` | Kontaktseite: Formularfelder, Labels, Erfolgs-/Fehlermeldungen, Maps-URL |
| `src/data/pages/leistungen.json` | Leistungen-Seite: Hero, CTA |
| `src/data/pages/referenzen.json` | Referenzen-Seite: Hero, CTA |
| `src/data/pages/ueber-uns.json` | Über-uns-Seite: Portrait, Werte, Unternehmensdaten |

### Decap CMS (`public/admin/config.yml`)

Das CMS verwaltet alle JSON-Datenquellen und die Markdown-Legal-Content über eine 473-zeilige `config.yml`. Wichtige Einstellungen:
- **Backend:** git-gateway (Branch: master)
- **Media-Folder:** `public/images/cms`
- **Public-Folder:** `/images/cms`
- **Publish-Mode:** editorial_workflow
- **Locale:** de

Das Admin-Panel ist unter `/admin/` erreichbar und lädt Decap CMS sowie Netlify Identity von unpkg.com.

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
| `--color-text-muted` | `--color-gray-500` | Platzhaltertext |
| `--color-bg-primary` | `--color-white` | Hintergrund |
| `--color-bg-secondary` | `--color-gray-50` | Sekundärer Hintergrund |
| `--color-bg-dark` | `--color-primary` | Dunkler Hintergrund |
| `--color-border` | `--color-gray-200` | Rahmen, Trennlinien |

### Schatten, Abstände & Transitionen

- **Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Spacing:** `--spacing-xs` (0.25rem) bis `--spacing-3xl` (4rem)
- **Border Radius:** `--radius-sm` (0.25rem) bis `--radius-xl` (1rem)
- **Transitions:** `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (350ms)

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

### Weitere globale Styles

- **Formular-Styles:** Globale `input`, `textarea`, `select` Styles mit Fokus-Ring
- **Animation:** `fadeInUp` Keyframe + `.animate-fade-in-up`
- **Print-Styles:** `.no-print` Klasse für nicht druckbare Elemente
- **Reduced Motion:** Respektiert `prefers-reduced-motion`

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

- **Wichtig:** Die Website verwendet **keine** Astro `<Image />`-Komponente. Alle Bilder werden mit standard `<img>`-Tags aus dem `public/`-Verzeichnis geladen (z. B. `src="/images/cms/hero.jpg"`).
- Das `public/images/cms/`-Verzeichnis ist das zentrale Bildverzeichnis und wird auch vom Decap CMS genutzt (`media_folder: "public/images/cms"`).
- `src/assets/images/` enthält Duplikate der gleichen Dateien, wird aber aktuell nicht vom Code referenziert.
- Attribute wie `width`, `height`, `alt` sind Pflicht.
- Das `public/`-Verzeichnis enthält nur statische Assets wie Favicon, OG-Image, `robots.txt`, `sitemap.xml`, `site.webmanifest`.

### Accessibility (A11y) Standards

- **Semantisches HTML:** `<header>`, `<main>`, `<section>`, `<nav>`, `<article>` verwenden
- **ARIA-Labels:** Bei allen interaktiven Elementen und Dialogen
- **Skip-Link:** Vorhanden in `BaseLayout.astro` für Screenreader
- **Focus-Styles:** Sichtbarer Focus-Ring (`*:focus-visible`)
- **Alt-Texte:** Bei allen Bildern Pflicht
- **Kontrast:** WCAG AA konforme Farbkontraste
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` wird in `global.css` berücksichtigt

### Performance-Optimierungen

- Inline-SVGs statt Icon-Fonts
- `loading="lazy"` für unter-the-fold Bilder
- CSS-Variablen für schnelle Theme-Updates
- `compressHTML: true` und `prefetch: true` in Astro Config
- Preconnect/DNS-Prefetch zu `api.web3forms.com`

---

## Seiten-Architektur

| Seite | URL | Beschreibung |
|-------|-----|--------------|
| Startseite | `/` | Hero, Services-Teaser (5 Karten), Trust-Bar, 3-Schritte-Prozess, 3 Testimonials, CTA |
| Leistungen | `/leistungen` | 5 Dienstleistungen mit alternierendem Bild/Text-Layout und Feature-Listen |
| Referenzen | `/referenzen` | 7 interaktive Vorher-Nachher-Vergleiche mit Slider-Funktion |
| Über uns | `/ueber-uns` | Unternehmensinfos, Portrait von Halil Zeka, 4 Werte-Karten, Firmendaten |
| Kontakt | `/kontakt` | Web3Forms-Formular + Kontaktdaten + Google Maps iFrame |
| Impressum | `/impressum` | Rechtliches (Pflichtseite, rendert Markdown aus Content Collection) |
| Datenschutz | `/datenschutz` | DSGVO-Text (Pflichtseite, rendert Markdown aus Content Collection) |
| 404 | `/404` | Fehlerseite mit `noindex` |
| CMS Admin | `/admin` | Decap CMS Backend für Content-Management |

---

## DSGVO / Datenschutz

Die Website ist auf DSGVO-Konformität ausgelegt:

- **100% lokale Ressourcen** (keine externen CDNs für Schriften oder Scripts auf der öffentlichen Website)
- **Lokale Schriften** (@fontsource/inter, kein Google Fonts CDN)
- **Keine Tracking-Scripts** (kein Google Analytics)
- **Cookie-Banner** mit Opt-In/Opt-Out (localStorage)
- **Web3Forms** (Formular-Backend)
- **Vollständige Datenschutzerklärung**
- **Security Headers** via `netlify.toml`

**Ausnahme:** Das Decap CMS Admin-Panel (`/admin/`) lädt `decap-cms.js` und `netlify-identity-widget.js` von `unpkg.com`. Die CSP in `netlify.toml` erlaubt daher explizit `script-src 'unsafe-eval' https://unpkg.com https://identity.netlify.com`.

### Cookie-Banner-Implementierung

- Speichert Zustand in `localStorage` unter Schlüssel `thz_cookie_consent`
- Werte: `'accepted'` | `'declined'`
- Wird nur bei fehlendem Consent nach 1 Sekunde angezeigt
- Implementiert in `src/components/CookieBanner.astro`
- ESC-Taste lehnt Cookies ab und schließt das Banner
- Fokus-Trap innerhalb des Banners

---

## Security Headers (`netlify.toml`)

```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://identity.netlify.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://api.web3forms.com https://thz-renovierung.de https://*.netlify.com; frame-src 'self' https://www.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com;"
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
4. Netlify Identity aktivieren und Git Gateway konfigurieren für Decap CMS

### Manuelles Deployment

```bash
npm run build
# dist/-Ordner auf Netlify deployen
```

---

## SEO & Marketing

### Schema.org JSON-LD

In `BaseHead.astro` implementiert:
- **LocalBusiness:** Firmendaten, Adresse (Roster str 66, 57074 Siegen), Geo-Koordinaten (50.8756, 8.0160), Öffnungszeiten (Mo–Fr 08:00–18:00)
- **WebSite:** Website-Struktur

### Open Graph Tags

Alle Seiten haben vollständige OG-Tags für Social Sharing:
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card` für Twitter/X

### Meta-Tags

- Canonical URL (Query-Parameter und Hash werden entfernt)
- Robots (`index, follow`; auf 404/noindex-Seiten `noindex, nofollow`)
- Theme Color (`#004252`)
- Viewport (responsive)
- Preconnect/DNS-Prefetch zu `api.web3forms.com`

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

### WhatsApp-Button (`WhatsAppButton.astro`)

- Fixed-Position Button unten rechts
- Link zu `https://wa.me/4915511693355` mit vorbereitetem Nachrichtentext
- Pulsierende Animation beim Laden (respektiert `prefers-reduced-motion`)
- Tooltip bei Hover

---

## Wartung & Updates

### Regelmäßige Checks

- [ ] Node.js Version aktuell halten (>=22.12.0)
- [ ] `npm audit` für Security-Updates
- [ ] Bilder optimieren (siehe Hinweis unten)
- [ ] Lighthouse-Score prüfen

### Änderungen an Kerninhalten

Folgende Daten sind redundant an mehreren Stellen hinterlegt und müssen bei Änderungen synchronisiert werden:
- **Unternehmensname, Adresse, Telefon, E-Mail:** In `src/data/global.json` (zentrale Quelle), sowie hartcodiert in den Markdown-Dateien `src/content/legal/impressum.md` und `src/content/legal/datenschutz.md`
- **Öffnungszeiten:** In `src/data/global.json` (Schema.org JSON-LD und Kontaktseite)
- **Navigation:** In `src/data/global.json`
- **Dienstleistungen:** In `src/data/services.json`
- **Testimonials/Referenzen:** In `src/data/pages/home.json` bzw. `src/data/projects.json`

**Empfohlen:** Änderungen über das Decap CMS (`/admin/`) vornehmen, damit die JSON-Dateien konsistent bleiben.

---

## Troubleshooting

| Problem | Lösung |
|---------|--------|
| `astro` Befehl nicht gefunden | `npm install` ausführen |
| Styles nicht geladen | Prüfen ob `@import "tailwindcss";` in `global.css` vorhanden ist |
| Formular sendet nicht | Web3Forms Key prüfen (`PUBLIC_WEB3FORMS_KEY`) |
| Build schlägt fehl | Node.js Version prüfen (>=22.12.0) |
| CMS lädt nicht | Netlify Identity und Git Gateway in Netlify-Settings aktivieren |
| Bilder erscheinen nicht | Prüfen ob Dateien in `public/images/cms/` vorhanden sind |

---

## Ressourcen

- [Astro Dokumentation](https://docs.astro.build/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Web3Forms Dokumentation](https://docs.web3forms.com/)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Netlify Dokumentation](https://docs.netlify.com/)
- [Decap CMS Dokumentation](https://decapcms.org/docs/)
