import { BlogMetada } from "@/interfaces/blog";
import path from "path";
import fs from "fs";

const blogService = {
  async getPosts() {
    const files = fs.readdirSync(
      path.join(process.cwd(), "src/contents/posts"),
    );

    const posts: BlogMetada[] = await Promise.all(
      files.map(async (file: string) => {
        const slug = file.split(".")[0];

        const { metadata } = await import(`@/contents/posts/${slug}.mdx`);

        return {
          slug,
          ...metadata,
        };
      }),
    );

    return posts;
  },
};

export default blogService;
