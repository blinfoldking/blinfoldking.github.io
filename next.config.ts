// @ts-nocheck

import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  basePath: "",

  images: {
    unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

/* @ts-ignore */
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-toc", { heading: "Table of Contents", ordered: true }],
      ["remark-gfm"],
    ],
    /* @ts-ignore */
    rehypePlugins: [],
  },
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
