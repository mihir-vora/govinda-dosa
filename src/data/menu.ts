/**
 * Govinda Dosa menu
 * ------------------
 * The items below are SAMPLE cards so the menu layout can be seen.
 * They are not a published list of what the restaurant serves.
 *
 * To use the real menu:
 * 1. Replace each item, or delete the samples and add your own.
 * 2. Put photos in public/images/menu/ and point `image` at the new file.
 * 3. Add a price only when you know it. An empty price is hidden.
 * 4. Set `placeholder` to false once an item is real.
 * 5. Set `featured` to true to show it in the signature section.
 *
 * Categories with no items are hidden automatically.
 */

export const menuCategories = [
  "Dosa",
  "Special Dosa",
  "Masala Dosa",
  "Cheese Dosa",
  "South Indian",
  "Snacks",
  "Beverages",
  "Other",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  /** Leave empty until a real price is known. Example: "₹120" */
  price?: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  category: MenuCategory;
  featured?: boolean;
  /** Sample cards stay marked until they are replaced with real dishes. */
  placeholder?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "classic-dosa",
    name: "Classic Dosa",
    description: "A thin, golden dosa with a crisp edge and a soft centre.",
    image: "/images/hero-closeup.jpg",
    imageAlt: "Close-up of a golden dosa with a crisp, lacy surface",
    width: 1400,
    height: 1050,
    category: "Dosa",
    featured: true,
    placeholder: true,
  },
  {
    id: "special-dosa",
    name: "Special Dosa",
    description: "A dosa plate for when you want something a little more special.",
    image: "/images/hero-dosa.jpg",
    imageAlt: "Two crisp dosas on a banana leaf with chutneys",
    width: 1000,
    height: 1313,
    category: "Special Dosa",
    featured: true,
    placeholder: true,
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "A rolled dosa served with chutney and sambar.",
    image: "/images/gallery/golden-roll.jpg",
    imageAlt: "A long golden dosa roll with coconut chutney, sambar, and red chutney",
    width: 864,
    height: 1152,
    category: "Masala Dosa",
    featured: true,
    placeholder: true,
  },
  {
    id: "cheese-dosa",
    name: "Cheese Dosa",
    description: "A crisp dosa on a steel plate, with chutney and sambar beside it.",
    image: "/images/gallery/steel-plate.jpg",
    imageAlt: "A dosa on a steel tray with sambar and chutneys",
    width: 1200,
    height: 900,
    category: "Cheese Dosa",
    placeholder: true,
  },
  {
    id: "folded-dosa",
    name: "Folded Dosa",
    description: "Folded, browned at the edge, and served with a bowl of chutney.",
    image: "/images/gallery/folded-dosa.jpg",
    imageAlt: "A folded dosa on a steel plate with green chutney",
    width: 1200,
    height: 900,
    category: "Dosa",
    placeholder: true,
  },
  {
    id: "south-indian-plate",
    name: "South Indian Plate",
    description: "Idli and vada with sambar and chutney. A sample card for this category.",
    image: "/images/gallery/idli-vada.jpg",
    imageAlt: "Idli and medu vada with sambar and coconut chutney on a steel plate",
    width: 1200,
    height: 900,
    category: "South Indian",
    placeholder: true,
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    description: "Hot South Indian filter coffee in a steel tumbler.",
    image: "/images/gallery/filter-coffee.jpg",
    imageAlt: "Frothy filter coffee in a steel tumbler set inside a davara",
    width: 1200,
    height: 1600,
    category: "Beverages",
    placeholder: true,
  },
];
