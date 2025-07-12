import fs from "fs";
import path from "path";
import PageView from "./view";

export const dynamicParams = false;

export function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/contents/posts"));

  const res = files.map((file) => ({
    slug: file.split(".")[0],
  }));

  return res;
}

export default async function Blog({ params }: any) {
  const { slug } = await params;

  const { default: Page, metadata } = await import(
    `@/contents/posts/${slug}.mdx`
  );

  return (
    <PageView metadata={metadata}>
      <Page></Page>
    </PageView>
  );
}
