const slug = process.argv[2] ?? "untitled";
const now = new Date();
const createdAt = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;

console.log({ slug, createdAt });

const template = `
export const metadata = {
  title: "${slug}",
  createdAt: "${now.toISOString()}",
};

# Hello World

`;

const fs = require("fs");
fs.writeFileSync(
  `${process.cwd()}/src/contents/posts/${createdAt}__${slug}.mdx`,
  template,
);
