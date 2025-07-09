"use client";

import useNavigation from "@/hook/useNavigation";
import React from "react";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  const { exit } = useNavigation();

  return (
    <div>
      <div className="prose font-baskerville">{children}</div>
    </div>
  );
}
