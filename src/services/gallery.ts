import { GalleryMetadata } from "@/interfaces/gallery";
import path from "path";
import fs from "fs";

const galleryService = {
  async getPosts() {
    const files = fs.readdirSync(
      path.join(process.cwd(), "src/contents/gallery"),
    );

    const posts: GalleryMetadata[] = await Promise.all(
      files.map(async (file: string) => {
        const slug = file.split(".")[0];

        const { metadata } = await import(`@/contents/gallery/${slug}.mdx`);

        return {
          slug,
          ...metadata,
        };
      }),
    );

    return posts;
  },
};

export default galleryService;
