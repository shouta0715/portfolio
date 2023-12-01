"use client";

import clsx from "clsx";
import createGlobe, { COBEOptions } from "cobe";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";
import { FadeIn } from "@/components/fadeIn";

const BASE_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  diffuse: 0.4,
  mapSamples: 10000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.5, 0.5, 0.5],
  markers: [
    { location: [35.6895, 139.6917], size: 0.1 },
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
  dark: 0,
};

const darkGlobeConfig: COBEOptions = {
  ...BASE_GLOBE_CONFIG,
  dark: 1,
};

const lightGlobeConfig: COBEOptions = {
  ...BASE_GLOBE_CONFIG,
  glowColor: [1, 1, 1],
  dark: 0,
};

export function Globe({
  className,
  config = BASE_GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const isDark = useTheme().theme === "dark";

  const onRender = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;

      const newPhi = phi + 0.005;

      return {
        ...state,
        phi: newPhi % (Math.PI * 2),
        width: 1200,
        height: 1200,
      };
    },
    [phi]
  );

  useEffect(() => {
    if (!canvasRef.current) return () => {};

    const globe = createGlobe(canvasRef.current, {
      ...config,
      ...(isDark ? darkGlobeConfig : lightGlobeConfig),
      width: 1200,
      height: 1200,
      onRender,
    });

    return () => globe.destroy();
  }, [canvasRef, config, onRender, isDark]);

  return (
    <FadeIn
      className={clsx(
        "absolute inset-0 -z-10 ml-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={clsx("h-full w-full [contain:layout_paint_size]")}
      />
    </FadeIn>
  );
}
