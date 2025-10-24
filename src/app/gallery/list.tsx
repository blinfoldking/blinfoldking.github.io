"use client";

import useNavigation from "@/hook/useNavigation";
import { GalleryMetadata } from "@/interfaces/gallery";
import { useMeasure } from "@uidotdev/usehooks";

export default function GalleryList({ data }: { data: any[] }) {
  const [ref, { height }] = useMeasure();

  let columns = [];

  const cols = Math.min(4, data.length);
  const rows = Math.floor(data.length / cols);
  const rem = data.length % cols;

  for (let i = 0; i < cols; i++) {
    let column = [];
    for (let j = 0; j < rows; j++) {
      const idx = i * rows + j;
      const item = data[idx];
      console.log({ item }, idx);
      column.push(item);
    }

    columns.push(column);
  }

  for (let i = 0; i < rem; i++) {
    const idx = cols + rows + i - 1;
    const target = i % 2 == 0 ? 1 : 3;
    const item = data[idx];
    console.log({ item }, idx);
    columns[target] = [item, ...columns[target]];
  }

  columns.reverse();

  const { navigate } = useNavigation();

  return (
    <div
      style={
        cols <= 4
          ? {
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }
          : {}
      }
      className={`h-[100%] grid grid-cols-2 md:grid-cols-4 gap-4 content-center justify-center`}
      ref={ref}
    >
      {columns.map((row, i) => {
        return (
          <div className="grid gap-4" key={i}>
            {row.map((item: GalleryMetadata, j) => (
              <div
                key={j}
                style={{
                  minHeight: height
                    ? `${height / Math.max(...columns.map((c) => c.length))}px`
                    : "300px",
                }}
                onClick={
                  item.link
                    ? () => window.open(item.link)
                    : () => navigate(`/gallery/${item.slug}`)
                }
                className={`max-w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 hover:z-50 transition grayscale hover:grayscale-0`}
              >
                <div
                  className="h-[100%] w-[100%] justify-center items-center flex"
                  style={{
                    background: `url(${item?.thumbnail ?? "cat-typing.gif"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
