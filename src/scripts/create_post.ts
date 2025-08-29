const post_slug = process.argv[2] ?? "untitled";
const post_now = new Date();
const post_createdAt = `${post_now.getFullYear()}${post_now.getMonth()}${post_now.getDate()}${post_now.getHours()}${post_now.getMinutes()}${post_now.getSeconds()}`;

const postTemplate = `
export const metadata = {
  title: "${post_slug}",
  createdAt: "${post_now.toISOString()}",
};

# Hello World

`;

const post_fs = require("fs");
post_fs.writeFileSync(
  `${process.cwd()}/src/contents/posts/${post_createdAt}__${post_slug}.mdx`,
  postTemplate,
);
