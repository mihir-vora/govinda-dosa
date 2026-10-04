/**
 * Food gallery
 * ------------
 * These photographs are stand-ins, not pictures of the Govinda Dosa premises.
 * Replace them with the restaurant's own photos:
 * 1. Add the file to public/images/gallery/
 * 2. Update `src`, `alt`, `width`, and `height`
 * 3. Set `placeholder` to false
 * 4. Remove the stock credit if the photo is yours
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  placeholder?: boolean;
  creditId?: string;
};

export type PhotoCredit = {
  id: string;
  author: string;
  license: string;
  href: string;
};

export const photoCredits: PhotoCredit[] = [
  {
    id: "pexels-platter",
    author: "Pexels",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/5560763/",
  },
  {
    id: "unsplash-closeup",
    author: "Unsplash",
    license: "Unsplash License",
    href: "https://unsplash.com/photos/a-delicious-dosa-is-served-with-sides-3qHDm3IQCUs",
  },
  {
    id: "wannabefoodii",
    author: "Wannabefoodii",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Masala_Dosa,_South_Indian_Food.jpg",
  },
  {
    id: "marajozkee",
    author: "Marajozkee",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Masala_dosa_01.jpg",
  },
  {
    id: "scott-dexter",
    author: "Scott Dexter",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Rava_Dosa.jpg",
  },
  {
    id: "arjunm",
    author: "Arjunm101",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Mysore_Masala_Dosa.jpg",
  },
  {
    id: "harikrishnan",
    author: "Harikrishnan N",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Filter_Coffee_-_CTR_Shri_Sagar,_Bangalore_-_Karnataka_-_PXL0254.jpg",
  },
  {
    id: "secretlondon",
    author: "secretlondon123",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Cheese_dosa.jpg",
  },
  {
    id: "saind147",
    author: "Saind147",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:South_Indian_Breakast_Idli_Vada_Sambar_Chutney.JPG",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "platter",
    src: "/images/hero-dosa.jpg",
    alt: "Two crisp dosas on a banana leaf with bowls of chutney",
    caption: "Crisp dosa, ready to share",
    width: 1000,
    height: 1313,
    placeholder: true,
    creditId: "pexels-platter",
  },
  {
    id: "closeup",
    src: "/images/hero-closeup.jpg",
    alt: "Close-up of a golden dosa with a lacy, toasted surface",
    caption: "Hot off the tawa",
    width: 1400,
    height: 1050,
    placeholder: true,
    creditId: "unsplash-closeup",
  },
  {
    id: "golden-roll",
    src: "/images/gallery/golden-roll.jpg",
    alt: "A long golden dosa roll with coconut chutney, sambar, and red chutney",
    caption: "Rolled, with chutney and sambar",
    width: 864,
    height: 1152,
    placeholder: true,
    creditId: "wannabefoodii",
  },
  {
    id: "banana-leaf",
    src: "/images/gallery/banana-leaf.jpg",
    alt: "A dosa on a banana leaf with two bowls of chutney",
    caption: "Served on a banana leaf",
    width: 1200,
    height: 738,
    placeholder: true,
    creditId: "marajozkee",
  },
  {
    id: "crisp-surface",
    src: "/images/gallery/crisp-surface.jpg",
    alt: "Close-up of a lacy, crisp dosa on a steel plate",
    caption: "A lacy, crisp surface",
    width: 1200,
    height: 795,
    placeholder: true,
    creditId: "scott-dexter",
  },
  {
    id: "coffee",
    src: "/images/gallery/filter-coffee.jpg",
    alt: "Frothy filter coffee in a steel tumbler set inside a davara",
    caption: "Filter coffee",
    width: 1200,
    height: 1600,
    placeholder: true,
    creditId: "harikrishnan",
  },
  {
    id: "folded",
    src: "/images/gallery/folded-dosa.jpg",
    alt: "A folded dosa on a steel plate with green chutney",
    caption: "Folded and served",
    width: 1200,
    height: 900,
    placeholder: true,
    creditId: "arjunm",
  },
  {
    id: "steel",
    src: "/images/gallery/steel-plate.jpg",
    alt: "A dosa on a steel tray with sambar and chutneys",
    caption: "A steel-plate dosa",
    width: 1200,
    height: 900,
    placeholder: true,
    creditId: "secretlondon",
  },
  {
    id: "idli",
    src: "/images/gallery/idli-vada.jpg",
    alt: "Idli and medu vada with sambar and coconut chutney",
    caption: "Idli, vada, and chutney",
    width: 1200,
    height: 900,
    placeholder: true,
    creditId: "saind147",
  },
];
