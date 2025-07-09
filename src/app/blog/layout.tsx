"use client";

import useNavigation from "@/hook/useNavigation";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { exit } = useNavigation();

  return (
    <div
      className={`transition-all ${exit && "opacity-0"} shadow-md w-[100%] h-[100%] rounded-xl p-4 animate-appear-l-750 bg-white`}
    >
      <div className="prose font-baskerville">{children}</div>
    </div>
  );
}
