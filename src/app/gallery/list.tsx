"use client";

import { useMeasure } from "@uidotdev/usehooks";

export default function GalleryList({ data }: { data: any[] }) {
  const [ref, { height }] = useMeasure();

  let columns = [];

  const cols = Math.min(4, data.length);
  console.log(cols);
  const rows = Math.floor(data.length / cols);
  const rem = data.length % cols;

  for (let i = 0; i < cols; i++) {
    let column = [];
    for (let j = 0; j < rows; j++) {
      const idx = i * rows + j;
      column.push(data[idx]);
    }

    columns.push(column);
  }

  for (let i = 0; i < rem; i++) {
    const idx = cols + rows + i;
    const target = i % 2 == 0 ? 0 : 2;
    columns[target].push(data[idx]);
  }

  columns.reverse();

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
            {row.map((item, j) => (
              <div
                key={j}
                style={{
                  minHeight: height
                    ? `${height / Math.max(...columns.map((c) => c.length))}px`
                    : "300px",
                }}
                className={`max-w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 hover:z-50 transition`}
              >
                <div
                  className="h-[100%] w-[100%] justify-center items-center flex"
                  style={{
                    background:
                      "url(https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-black text-white">
                    {i},{j}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
