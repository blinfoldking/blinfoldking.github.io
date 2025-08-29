import fs from "fs";
import path from "path";
import PageView from "./view";

export const dynamicParams = false;

export function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/contents/gallery"),
  );

  const res = files.map((file) => ({
    slug: file.split(".")[0],
  }));

  return res;
}

export default async function Gallery({ params }: any) {
  const { slug } = await params;

  const { default: Page, metadata } = await import(
    `@/contents/gallery/${slug}.mdx`
  );

  return (
    <PageView metadata={metadata}>
      <Page />
    </PageView>
  );
}
