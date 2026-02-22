const slug = process.argv[2] ?? "untitled";
const now = new Date();
const createdAt = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;

console.log({ slug: slug, createdAt: createdAt });

const gallery_template = `
export const metadata = {
  title: "${slug}",
  createdAt: "${now.toISOString()}",
  type: "image",
};
`;

const fs = require("fs");
fs.writeFileSync(
  `${process.cwd()}/src/contents/gallery/${createdAt}__${slug}.mdx`,
  gallery_template,
);
