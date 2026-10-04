/**
 * Restaurant facts.
 * Only details that were provided for Govinda Dosa live here.
 * Do not add opening hours, ratings, or social URLs unless they are real.
 */

export const restaurant = {
  name: "Govinda Dosa",
  tagline: "Pure Surti Taste",
  shortDescription:
    "Delicious dosas and a memorable dining experience in Nikol, Ahmedabad.",
  phoneDisplay: "063540 05386",
  phoneTel: "tel:06354005386",
  cityLine: "Nikol, Ahmedabad",
  mapsUrl:
    "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgkIBBAhGAoYoAEyBwgFECEYkgMyBwgGECEYkgMyBwgHECEYkgMyBwgIECEYkgMyBwgJECEYkgPSAQgzNTE0ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kc87pIs_h145MUizCIJ8BsFR&daddr=Govinda+dosa,+Bhakti+Cir+Rd,+near+patel+samaj+vadi,+Ankur+Chokadi,+New+India+Colony,+Ankur+Tenament,+Nikol,+Ahmedabad,+Gujarat+382350",
  reviewsUrl:
    "https://www.google.com/maps/place/Govinda+dosa/@23.0515666,72.678419,17z/data=!4m8!3m7!1s0x395e873f8ba43bcf:0x51c1067c8208b348!8m2!3d23.0515666!4d72.678419!9m1!1b1!16s%2Fg%2F11zd50s2wk",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Govinda+Dosa,+Bhakti+Cir+Rd,+near+Patel+Samaj+Vadi,+Ankur+Chokadi,+New+India+Colony,+Ankur+Tenament,+Nikol,+Ahmedabad,+Gujarat+382350&hl=en&z=16&output=embed",
} as const;

export const addressLines = [
  "Bhakti Cir Rd, near Patel Samaj Vadi,",
  "Ankur Chokadi, New India Colony,",
  "Ankur Tenament, Nikol,",
  "Ahmedabad, Gujarat 382350",
] as const;

export const footerAddressLines = [
  "Bhakti Cir Rd, near Patel Samaj Vadi,",
  "Ankur Chokadi, New India Colony,",
  "Nikol, Ahmedabad, Gujarat 382350",
] as const;

export const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#menu", id: "menu", label: "Menu" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
  { href: "#reels", id: "reels", label: "Reels" },
  { href: "#reviews", id: "reviews", label: "Reviews" },
  { href: "#location", id: "location", label: "Location" },
] as const;

/**
 * Leave href as an empty string until the real profile URL is known.
 * Empty links are shown as labels, not clickable buttons.
 */
export const socialLinks = [
  { name: "Instagram", href: "" },
  { name: "YouTube", href: "" },
  { name: "Facebook", href: "" },
] as const;

export const highlights = [
  {
    id: "variety",
    title: "Wide variety of dosas",
    text: "Dosas are the reason to come, with specials and other plates to explore when you sit down.",
  },
  {
    id: "flavour",
    title: "Delicious and flavourful",
    text: "Crisp edges, warm spices, and the kind of taste that makes a dosa worth the trip.",
  },
  {
    id: "fresh",
    title: "Freshly prepared",
    text: "Cooked to order, so it reaches the table hot from the tawa.",
  },
  {
    id: "passion",
    title: "Made with passion",
    text: "A neighbourhood dosa kitchen focused on flavour and a proper plate.",
  },
  {
    id: "service",
    title: "A welcoming table",
    text: "Come in for a quick dosa, or stay longer with family and friends.",
  },
  {
    id: "reach",
    title: "Easy to reach",
    text: "On Bhakti Cir Rd in Nikol, Ahmedabad. Simple to find, and simple to call.",
  },
] as const;
