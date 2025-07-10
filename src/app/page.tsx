"use client";

import PageComponent from "@/components/PageComponent";
import useNavigation from "@/hook/useNavigation";
// @ts-ignore
import Page, { metadata } from "@/contents/about.mdx";

export default function Home() {
  const cardStyle = "flex shadow-md rounded-xl overflow-hidden";
  const titleStyle =
    "bg-linear-to-r from-black to-black w-[100%] text-white pl-2";

  const { navigate, exit } = useNavigation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={`transition-all ${exit && "opacity-0"} w-[100%] h-[100%] animate-appear-l-1000 overflow-scroll no-scrollbar`}
    >
      <PageComponent {...metadata}>
        <Page />
      </PageComponent>
    </div>
  );
}
