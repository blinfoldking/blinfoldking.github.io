"use client";

import { useMeasure } from "@uidotdev/usehooks";
import { FaArrowDown, FaArtstation, FaChevronLeft, FaGithub, FaInstagram, FaItchIo, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import NavLink from "./NavLink";
import { RefObject, useEffect, useRef } from "react";
import { FaInstagramSquare } from "react-icons/fa";

export default function PageComponent({
  children,
  bg,
  back,
  title,
  className,
  scroll,
  is_about,
}: {
  back?: boolean;
  children: React.ReactNode;
  bg?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  scroll?: number;
  is_about?: boolean
}) {
  const [ref, { width, height }] = useMeasure();
  const topRef = useRef(null);
  const bgRef = useRef(null);

  return (
    <div className={`h-[100%] ${className ?? ""} inset-shadow-md`} ref={bgRef}>
      <div className="h-[100%] w-[100%]" ref={ref}>
        <div
          style={{
            minWidth: width ? `${width}px` : "100%",
            minHeight: `${height}px`,
            background: bg && `url('${bg}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`bg-no-repeat bg-cover -z-index-2 rounded-l-xl fixed`}
        ></div>
        <div className="w-[100%] min-h-[100%] relative ">
          <div
            style={{
              height: `${height}px`,
              backdropFilter: `blur(${100 * ((scroll ?? 0) / (height ?? 0))}px)`,
            }}
            className="w-[100%] bg-linear-to-t from-white to-transparent flex justify-between flex-col"
          >
            {back && (
              <NavLink back>
                <div className="bg-white shadow-md p-4 rounded-xl w-fit m-8">
                  <FaChevronLeft />
                </div>
              </NavLink>
            )}
            <div className="flex flex-col justify-center h-[100%] w-[100%] items-center">
              <div className="text-4xl bg-black text-white pl-4 pr-4 pb-1 flex justify-center w-fit">
                {title}
              </div>
              <div className="font-epetri flex justify-end font-bold text-2xl">
                {title?.split(" ").join("").replace(/\W/g, "")}
              </div>
              {
                is_about &&
                <>
                  <div className="text-xl text-black pl-4 pt-4 pr-4 pb-1 flex justify-center w-fit">
                    <div><span className="opacity-50">software_</span><span className="opacity-100 bg-black text-white">engineer</span></div>.
                    <div><span className="opacity-50">game_</span><span className="opacity-100 bg-black text-white">designer</span></div>.
                    <div><span className="opacity-50">digital_</span><span className="opacity-100 bg-black text-white">illustrator</span></div>.
                  </div>


                  <div className="mt-4 flex-row flex w-[300px] justify-between items-center">
                    <a target="_blank" href="https://linkedin.com/in/ganeshad/" className="p-1 rounded-sm text-4xl"><FaLinkedin /></a>
                    <a target="_blank" href="https://github.com/blinfoldking" className="p-1 hover:rounded-sm text-4xl"><FaGithub /></a>
                    <a target="_blank" href="https://blinfoldking.itch.io" className="p-1 hover:rounded-sm text-4xl"><FaItchIo /></a>
                    <a target="_blank" href="https://instagram.com/blinfoldking" className="p-1 hover:rounded-sm text-4xl"><FaInstagram /></a>
                    <a target="_blank" href="https://artstation.com/blinfoldking" className="p-1 hover:rounded-sm text-4xl"><FaArtstation /></a>
                  </div>
                </>
              }

            </div>
            <div className="flex justify-start items-center pb-24 flex-col">
              <div
                className="rounded-full bg-white p-4 m-4 shadow-md"
                onClick={() =>
                  // @ts-ignore
                  topRef?.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <FaArrowDown className="hover:text-black" />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[100%] min-h-[100vh] bg-white">
            <div className="md:w-[50%] sm:w-[75%] min-h-[100vh] border-dashed p-4">
              <div id="top" ref={topRef}></div>
              <div className="prose min-w-[100%]">{children}</div>
              <div className="flex w-[100%] justify-between mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
