export interface GalleryMetadata {
  slug: string;
  title?: string;
  type: "image" | "link" | "interactive";
  link?: string;
  description?: string;
  thumbnail?: string;
  published?: boolean;
}
