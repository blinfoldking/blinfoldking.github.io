import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 w-[100%] h-[100%] inset-shadow-md">
        <div className="bg-white row-span-2 col-span-2">test 1</div>
        <div className="bg-white">test 2</div>
        <div className="bg-white">test 3</div>
      </div>
    </>
  );
}
