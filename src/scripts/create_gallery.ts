const slug = process.argv[2] ?? "untitled";
const now = new Date();
const createdAt = `${post_now.getFullYear()}${post_now.getMonth()}${post_now.getDate()}${post_now.getHours()}${post_now.getMinutes()}${post_now.getSeconds()}`;

console.log({ slug: post_slug, createdAt: post_createdAt });

const template = `
export const metadata = {
  title: "${post_slug}",
  createdAt: "${post_now.toISOString()}",
  type: "image",
};

# Hello World

`;

const fs = require("fs");
post_fs.writeFileSync(
  `${process.cwd()}/src/contents/gallery/${post_createdAt}__${post_slug}.mdx`,
  postTemplate,
);
