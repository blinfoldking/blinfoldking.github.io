import PageComponent from "@/components/PageComponent";
import fs from "fs";
import path from "path";

export const dynamicParams = false;

export function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const res = files.map((file) => ({
    slug: file.split(".")[0],
  }));

  return res;
}

export default async function Blog({ params }: any) {
  const { slug } = await params;

  const { default: Page, metadata } = await import(
    `../../../../posts/${slug}.mdx`
  );

  return (
    <PageComponent {...metadata}>
      <Page></Page>
    </PageComponent>
  );
}
