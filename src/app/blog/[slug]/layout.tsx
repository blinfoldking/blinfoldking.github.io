"use client";

import useNavigation from "@/hook/useNavigation";
import React from "react";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  const { exit } = useNavigation();

  return (
    <div
      className={`transition-all ${exit && "opacity-0"} w-[100%] h-[100%] animate-appear-l-750 overflow-scroll no-scrollbar`}
    >
      {children}
    </div>
  );
}
