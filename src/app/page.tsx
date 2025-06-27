"use client";

import useNavigation from "@/hook/useNavigation";
import Link from "next/link";

export default function Home() {
  const cardStyle = "flex shadow-md rounded-xl overflow-hidden";
  const titleStyle =
    "bg-linear-to-r from-black to-black w-[100%] text-white pl-2";

  const { navigate, exit } = useNavigation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div
        className={`grid grid-flow-col grid-cols-3 w-[100%] h-[100%] gap-4 transition-all ${exit && "opacity-0"}`}
      >
        <div
          className={`${cardStyle} row-span-2 col-span-2 bg-gray-100 animate-appear-l-500`}
        >
          <div className="bg-linear-to-l from-white to-transparent h-[100%] w-[100%] prose flex flex-col items-start justify-end">
            <h1 className="font-epetri text-8xl font-black opacity-5 p-8">
              About
            </h1>
          </div>
          <div className="bg-white h-[100%] w-[100%] flex flex-col justify-center gap-4 prose">
            <div>
              <h1 className={titleStyle}>About</h1>
              <div className="pl-8 pr-8">
                <p>
                  Experienced worked as A front developer using react and
                  angular, building microservices with golang, and developing a
                  chat app as an IOS Developer. Currently making my own game as
                  an indie developer.
                </p>
              </div>
            </div>
            <div className="p-8 self-end">
              <a onClick={() => handleNavigate("/about")} className="underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className={`${cardStyle} bg-gray-100 animate-appear-l-750`}>
          <div className="flex flex-col prose w-[100%] h-[200%] transition-all duration-500 hover:h-[100%]">
            <div className=" bg-linear-to-t from-white to-transparent h-[60%] w-[100%] flex items-end">
              <h2 style={{ margin: 0 }} className={titleStyle}>
                Devlog #0:
              </h2>
            </div>

            <div className="bg-white h-[40%] w-[100%] p-8 flex flex-col justify-between">
              <div>TODO: content</div>
              <Link className="self-end" href="">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${cardStyle} bg-white  flex-col flex justify-center items-center prose delay-500 animate-appear-l-1000`}
        >
          <h2 className="m-0" style={{ margin: 0 }}>
            Find me anywhere:
          </h2>
          <a
            href="https://google.com/?q=blinfoldking "
            className="font-mono z-10"
            target="_blank"
          >
            @blinfoldking
          </a>
          <div className="font-epetri text-8xl opacity-5 absolute">
            <div>blin</div>
            <div>fold</div>
            <div>king</div>
          </div>
        </div>
      </div>
    </>
  );
}
