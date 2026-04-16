# THZ Innenrenovierung-Hausmeisterdienste Website

Eine hochkonvertierende, blitzschnelle und 100% DSGVO-konforme Website für THZ Innenrenovierung-Hausmeisterdienste.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Schriften:** [Inter](https://fonts.google.com/specimen/Inter) (lokal via @fontsource)
- **Hosting:** Optimized für [Netlify](https://www.netlify.com/)
- **Kontaktformular:** [Web3Forms](https://web3forms.com/)

## 📁 Projektstruktur

```
/
├── src/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── BaseHead.astro       # SEO & Meta-Management
│   │   ├── CookieBanner.astro   # DSGVO Cookie-Banner
│   │   ├── Footer.astro         # 3-Spalten Footer
│   │   ├── Header.astro         # Sticky Header + Mobile Menu
│   │   └── WhatsAppButton.astro # Sticky WhatsApp Button
│   ├── layouts/          # Layout-Komponenten
│   │   └── BaseLayout.astro
│   ├── pages/            # Astro-Seiten (Routing)
│   │   ├── index.astro          # Startseite
│   │   ├── leistungen.astro     # Leistungen
│   │   ├── referenzen.astro     # Referenzen
│   │   ├── ueber-uns.astro      # Über uns
│   │   ├── kontakt.astro        # Kontakt + Formular
│   │   ├── impressum.astro      # Impressum
│   │   ├── datenschutz.astro    # Datenschutz
│   │   └── 404.astro            # 404 Fehlerseite
│   ├── styles/
│   │   └── global.css    # CSS-Variablen & Design-System
│   └── assets/
│       └── images/       # Bilder für WebP/AVIF-Optimierung
├── public/
│   └── favicon.svg
├── netlify.toml          # Netlify Config (Security Headers)
└── astro.config.mjs      # Astro Konfiguration
```

## 🛠️ Lokale Entwicklung

### Voraussetzungen
- Node.js 20+
- npm

### Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build erstellen
npm run build

# Build preview
npm run preview
```

## 🔧 Konfiguration

### Web3Forms API Key

1. Kostenlosen Key bei [web3forms.com](https://web3forms.com/) erstellen
2. `.env` Datei im Root-Verzeichnis erstellen:

```env
PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

3. Die `.env` Datei ist bereits in `.gitignore` eingetragen

### Anpassungen

- **Farben:** `src/styles/global.css` (CSS-Variablen)
- **Kontaktdaten:** In den Komponenten und Seiten direkt
- **Bilder:** Nach `src/assets/images/` kopieren und in den Komponenten referenzieren

## 🎨 Design System

### Farben
| Name | Wert | Verwendung |
|------|------|------------|
| Primary | `#004252` | Header, Footer, Akzente |
| Accent | `#fd5909` | CTAs, Buttons, Highlights |

### Typografie
- **Font:** Inter (400, 500, 600, 700)
- **Base Size:** 16px

## 🔒 DSGVO / Datenschutz

- ✅ 100% lokale Ressourcen (keine CDNs)
- ✅ Lokale Schriften (kein Google Fonts CDN)
- ✅ Keine externen Tracking-Scripts
- ✅ Cookie-Banner (Opt-In)
- ✅ Web3Forms (EU-Server)
- ✅ Vollständige Datenschutzerklärung

## 📱 Features

- ✅ Responsive Design (Mobile-first)
- ✅ 8 statische Seiten
- ✅ Kontaktformular mit Validierung
- ✅ Schema.org JSON-LD (LocalBusiness)
- ✅ Open Graph Tags
- ✅ Sticky WhatsApp Button
- ✅ 404 Fehlerseite
- ✅ Security Headers (netlify.toml)

## 🚀 Deployment (Netlify)

### Automatisches Deployment
1. Repository mit GitHub verbinden
2. Netlify wird automatisch via `netlify.toml` konfiguriert
3. Build-Einstellungen:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

### Manuelles Deployment
```bash
npm run build
# dist/ Ordner auf Netlify deployen
```

## 📋 TODOs vor Go-Live

- [ ] Web3Forms API Key in `.env` eintragen
- [ ] Echte Bilder in `src/assets/images/` kopieren
- [ ] Hero-Bild auf Startseite einfügen
- [ ] Porträt-Foto auf "Über uns" einfügen
- [ ] Referenz-Bilder in Galerie einfügen
- [ ] Google Maps iFrame auf Kontaktseite einfügen (optional)
- [ ] Echte Kundenbewertungen einfügen
- [ ] Domain in `astro.config.mjs` aktualisieren
- [ ] Favicon anpassen (optional)

## 📞 Kontakt

**THZ Innenrenovierung-Hausmeisterdienste**  
Halil Zeka  
Roster str 66, 57074 Siegen  
📞 0155 1169 3355  
✉️ Info@thz-renovierung.de

---

Built with ❤️ using Astro & Tailwind CSS
