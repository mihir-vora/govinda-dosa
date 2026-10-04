/**
 * Reels and videos
 * ----------------
 * Do not invent video links. Leave `url` empty until a real one exists.
 *
 * url examples:
 * - Instagram reel: https://www.instagram.com/reel/...
 * - YouTube: https://www.youtube.com/watch?v=...
 * - Local file: /videos/dosa-tawa.mp4  (place the file in public/videos/)
 *
 * source helps the player choose an embed, a link, or a local video.
 * Instagram opens in a new tab so the page does not load a heavy embed.
 */

export type ReelSource = "instagram" | "youtube" | "file";

export type Reel = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Leave empty until a real Instagram, YouTube, or local video URL exists. */
  url?: string;
  source?: ReelSource;
};

export const reels: Reel[] = [
  {
    id: "made",
    title: "Watch the Dosa Being Made",
    category: "On the tawa",
    thumbnail: "/images/hero-closeup.jpg",
    thumbnailAlt: "Close-up of a golden dosa",
  },
  {
    id: "fresh",
    title: "Fresh Off the Tawa",
    category: "Just served",
    thumbnail: "/images/gallery/golden-roll.jpg",
    thumbnailAlt: "A golden dosa roll with chutneys",
  },
  {
    id: "taste",
    title: "A Taste of Govinda Dosa",
    category: "The plate",
    thumbnail: "/images/hero-dosa.jpg",
    thumbnailAlt: "Two dosas served on a banana leaf",
  },
];
