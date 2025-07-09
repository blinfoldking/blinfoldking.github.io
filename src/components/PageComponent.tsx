import { useMeasure } from "@uidotdev/usehooks";

export default function PageComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ref, { width }] = useMeasure();

  return (
    <>
      <div
        style={{ minWidth: `${width}px` }}
        className={`min-h-[60vh] bg-black bg-[url(/vercel.svg)] bg-no-repeat bg-cover -z-index-1 rounded-tl-xl rounded-tr-xl fixed`}
      ></div>
      <div className="w-[100%] min-h-[100%] relative" ref={ref}>
        <div className="min-h-[60vh] w-[100%] bg-linear-to-t from-white to-transparent"></div>
        <div className="flex justify-center z-1 w-[100%] bg-white">
          <div className="w-[50%] h-[100vh] border-dashed">
            <div className="prose min-w-[100%]">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
