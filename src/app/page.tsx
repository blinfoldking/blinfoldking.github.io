"use client";

import PageComponent from "@/components/PageComponent";
import useNavigation from "@/hook/useNavigation";
// @ts-ignore
import Page, { metadata } from "@/contents/about.mdx";
import { useState } from "react";

export default function Home() {
  "bg-linear-to-r from-black to-black w-[100%] text-white pl-2";

  const { exit } = useNavigation();

  const [scroll, setScroll] = useState(0);

  return (
    <div
      className={`transition-all ${exit && "opacity-0"} w-[100%] h-[100%] animate-appear-l-1000 overflow-scroll no-scrollbar`}
      // @ts-ignore
      onScroll={(e) => setScroll(e.target.scrollTop)}
    >
      <PageComponent {...metadata} scroll={scroll}>
        <Page />
      </PageComponent>
    </div>
  );
}
