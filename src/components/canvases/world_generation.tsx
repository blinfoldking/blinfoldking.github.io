"use client";

import PtsCanvas from "@/components/PTSCanvas";
import { Num, Polygon, Pt, Rectangle } from "pts";

const WorldGeneration = () => {
  return (
    <PtsCanvas
      onDraw={(canvas) => {
        var form = canvas.getForm();

        const scale = 10;
        canvas
          .add((time, ftime) => {
            const { width, height } = canvas;
            form.polygon(Polygon.fromCenter(canvas.pointer, 10, 6));
            for (let i = 0; i < height / scale; i++) {
              for (let j = 0; j < width / scale; j++) {
                const pt = Pt.from([j * scale, i * scale]);
                form.rect(Rectangle.fromCenter(pt, scale, scale));
              }
            }
          })
          .play()
          .bindMouse().bindCanvas;
      }}
    />
  );
};

export default WorldGeneration;
