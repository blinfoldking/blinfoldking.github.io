"use client";

import useNavigation from "@/hook/useNavigation";
import React from "react";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  const { exit } = useNavigation();

  return (
    <div className={`prose lg:prose-xl transition-all ${exit && "opacity-0"}`}>
      {children}
    </div>
  );
}
