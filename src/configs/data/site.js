// src/configs/data/site.js
export const SITE_DATA = {
  avatar: '/img/profil.jpeg',
  icon: '/img/optimized/icon-placeholder.webp',
  email: 'faysaloumzil1@gmail.com', // 👈 Cambia esto
  name: "Faycal oumzil",
  
  title: "Pflegefachkraft",
  location: "Fes, Marokko ",
  credentials: ["B2 Deutsch (TELC)"],
  heroPhrases: [
    "Empathie in der täglichen Pflege.",
    "Fachkraft mit Herz und Verstand.",
    "Bereit für neue Herausforderungen in Deutschland.",
    "Spezialisiert auf Alten- und Krankenpflege."
  ],
  btnDownload: "Unterlagen herunterladen (PDF)",
  btnContact: "Kontakt aufnehmen",
  social: {
    
    whatsapp: "https://wa.me/+212613487814", // More relevant for Pfleger
    email: "faysaloumzil1@gmail.com"
  },
  cvUrl: '/Unterlagen.pdf', // 👈 Sube tu CV a public/cv/
  gallery: {
    title: "Qualifikationen & Einblicke",
    subtitle: "Zertifikate und Impressionen aus meiner praktischen Arbeit.",
    items: [
      { title: "B2 Deutsch Zertifikat", category: "Sprachen", img: "/gallery/1.png" },
      { title: "Ausbildung in der Altenpflege", category: "Bildung", img: "/diploma.jpg" },
      { title: "Erste-Hilfe-Kurs (Lebensretter)", category: "Bildung", img: "/diploma.jpg" },
      { title: "Praktikum als Physiotherapie-Assistent", category: "Bildung", img: "/diploma.jpg" },
      // { title: "Praktikum bei Ford", category: "Werkstatt", img: "/ford-work.jpg" },
      // { title: "LKW Ersatzteile Management", category: "Berufserfahrung", img: "/truck-parts.jpg" }
    ]
  }
};
