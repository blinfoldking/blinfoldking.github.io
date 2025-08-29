"use client";

import { useMeasure } from "@uidotdev/usehooks";
import { Bound, CanvasSpace, Space } from "pts";
import { useEffect, useRef } from "react";

interface Props {
  width?: number;
  height?: number;
  onDraw?: (canvas: CanvasSpace) => void;
}

const PtsCanvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef) {
      /* @ts-ignore */
      const canvas = new CanvasSpace(canvasRef.current);

      props.onDraw ? props.onDraw(canvas) : {};
    }
  }, [canvasRef]);

  const [ref, { width, height }] = useMeasure();

  return (
    <div className="bg-gray-50 w-[100%] h-[100%]" ref={ref}>
      <canvas
        width={props.width ?? width ?? 500}
        height={props.height ?? height ?? 500}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default PtsCanvas;
