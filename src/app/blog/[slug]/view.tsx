"use client";

import PageComponent from "@/components/PageComponent";
import useNavigation from "@/hook/useNavigation";
import React, { useState } from "react";

export default function PageView({
  children,
  metadata,
}: {
  metadata: any;
  children: React.ReactNode;
}) {
  const { exit } = useNavigation();

  const [scroll, setScroll] = useState(0);

  return (
    <div
      className={`transition-all ${exit && "opacity-0"} w-[100%] h-[100%] animate-appear-l-750 overflow-scroll no-scrollbar`}
      // @ts-ignore
      onScroll={(e) => setScroll(e.target.scrollTop)}
    >
      <PageComponent {...metadata} scroll={scroll}>
        {children}
      </PageComponent>
    </div>
  );
}
