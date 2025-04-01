/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

export function SparklesCore({
  id = "tsparticles",
  className = "",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  particleColor = "#ffffff",
}: SparklesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      className={className}
      options={{
        background: {
          color: {
            value: background,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: particleDensity,
            density: {
              enable: true,
              // @ts-expect-error
              value_area: 800,
            },
          },
          color: {
            value: particleColor,
          },
          size: {
            value: { min: minSize, max: maxSize },
          },
          move: {
            enable: true,
            direction: "none",
            speed: 0.3,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          links: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.2,
            width: 1,
          },
        },
      }}
    />
  );
}
