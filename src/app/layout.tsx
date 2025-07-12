"use client";

// Supports weights 400-900

import "./globals.css";
import useNavigation from "@/hook/useNavigation";
import React from "react";
import { FaPalette, FaNewspaper, FaRocket } from "react-icons/fa6";

// font source
import "@fontsource-variable/ibm-plex-sans";
import "@fontsource/ibm-plex-serif";
import "@fontsource/ibm-plex-mono";
import NavLink from "@/components/NavLink";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navigate, pathname, segment } = useNavigation();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={` antialiased w-[100vw] h-[100vh] pt-4 pb-4 pl-12 `}>
        <div className="absolute left-0 top-0 h-[100%] w-[45px]">
          <div className="flex flex-col items-center pt-10 gap-4 absolute justify-center w-[100%]">
            {[
              { elem: FaRocket, path: "/" },
              { elem: FaNewspaper, path: "/blog", segment: "blog" },
              { elem: FaPalette, path: "/projects" },
            ].map((item) => (
              <a
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`h-[30px] w-[30px] flex hover:bg-black ${item.path === pathname || item.segment === segment ? "bg-black" : ""} rounded-full`}
              >
                <div className="w-[30px] h-[30px] flex justify-center items-center">
                  {
                    <item.elem
                      className={`hover:text-white ${item.path === pathname || item.segment === segment ? "text-white" : ""}`}
                    ></item.elem>
                  }
                </div>
                <div className="ml-4 hidden group-hover:block">pathname</div>
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center h-[100%]">
            <div className="text-black text-2xl vertical-text">
              <NavLink className="font-epetri" target="/">
                blinfoldking
              </NavLink>
            </div>
          </div>
        </div>
        <div className="rounded-bl-xl rounded-tl-xl min-w-[100%] h-[100%] bg-white overflow-scroll inset-shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
