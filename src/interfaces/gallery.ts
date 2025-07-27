export interface GalleryMetadata {
  slug: string;
  type: "image" | "link" | "interactive";
  link?: string;
  description?: string;
  thumbnail?: string;
}
