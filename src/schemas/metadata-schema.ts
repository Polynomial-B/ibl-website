const baseSalon = {
  "@type": "BeautySalon",
  name: "Inside Beauty London",
  url: "https://inside-beauty.netlify.app/",
  bookingUrl:
    "https://www.fresha.com/en-GB/a/insidebeautylondon-shepperton-ashford-13-chessholme-road-th8rk3em",
  datePublished: "2026-06-05",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13 Chessholme Road",
    addressLocality: "Ashford",
    addressRegion: "Surrey",
    addressCountry: "UK",
  },
};

export const homepageSchema = {
  "@context": "https://schema.org",
  ...baseSalon,
  description:
    "Advanced skincare, aesthetics, and beauty treatments in Ashford.",
  makesOffer: [
    {
      "@type": "Service",
      name: "Facials",
      description: "Customized facial treatments for all skin types.",
    },
    {
      "@type": "Service",
      name: "Dermaplaning",
      description: "Exfoliation treatment removing dead skin and vellus hair.",
    },
    {
      "@type": "Service",
      name: "Anti-wrinkle injections",
      description: "Injections for fine lines and wrinkles.",
    },
    {
      "@type": "Service",
      name: "Dermal filler",
      description: "Volume restoration.",
    },
    {
      "@type": "Service",
      name: "Skin boosters",
      description: "Injections for skin quality.",
    },
    {
      "@type": "Service",
      name: "Polynucleotides",
      description:
        "Polynucleotide injections for tissue repair and regeneration.",
    },
    {
      "@type": "Service",
      name: "Lash lifts, brows & tints",
      description:
        "Lash lifts, brow shaping, eyelash curling and lifting, and tinting.",
    },
    {
      "@type": "Service",
      name: "Waxing & hair removal",
      description: "Professional waxing for face and body.",
    },
  ],
};

export const facialsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facials",
  description: "Customized facial treatments for all skin types.",
  provider: baseSalon,
  serviceType: "Facial",
};

export const dermaplaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dermaplaning",
  description: "Exfoliation treatment removing dead skin and vellus hair.",
  provider: baseSalon,
  serviceType: "Dermaplaning",
};

export const antiWrinkleSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Anti-wrinkle injections",
  description: "Injections for fine lines and wrinkles.",
  provider: baseSalon,
  serviceType: "Injectables",
};

export const dermalFillerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dermal filler",
  description: "Volume restoration.",
  provider: baseSalon,
  serviceType: "Injectables",
};

export const skinBoostersSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skin boosters",
  description: "Injections for skin quality.",
  provider: baseSalon,
  serviceType: "Injectables",
};

export const polynucleotidesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Polynucleotides",
  description: "Polynucleotide injections for tissue repair and regeneration.",
  provider: baseSalon,
  serviceType: "Injectables",
};

export const lashBrowSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lash lifts, brows & tints",
  description:
    "Lash lifts, brow shaping, eyelash curling and lifting, and tinting.",
  provider: baseSalon,
  serviceType: "Lash & Brow",
};

export const waxingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Waxing & hair removal",
  description: "Professional waxing for face and body.",
  provider: baseSalon,
  serviceType: "Waxing",
};
