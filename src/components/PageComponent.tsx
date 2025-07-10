"use client";

import { useMeasure } from "@uidotdev/usehooks";
import { FaArrowDown, FaChevronLeft } from "react-icons/fa6";
import NavLink from "./NavLink";
import { useRef } from "react";

export default function PageComponent({
  children,
  bg,
  back,
  title,
  className,
}: {
  back?: boolean;
  children: React.ReactNode;
  bg?: string;
  title?: string;
  className?: string;
}) {
  const [ref, { width, height }] = useMeasure();
  const topRef = useRef(null);

  return (
    <div className={`h-[100%] ${className ?? ""} inset-shadow-md`} ref={ref}>
      <div
        style={{
          minWidth: width ? `${width}px` : "100%",
          minHeight: `${height}px`,
          background: `url('${bg}')`,
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
              {title?.split(" ").join("")}
            </div>
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
  );
}
