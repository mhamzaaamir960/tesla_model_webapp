"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { PiSunLight } from "react-icons/pi";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  ({ className, cn1, cn2, cn3, cn4, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center ",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={`relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 cursor-pointer ${cn1}`}
      >
        <SliderPrimitive.Range
          className={`absolute h-full bg-primary cursor-pointer ${cn2}`}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={`block h-10 w-10 rounded-full flex items-center justify-center border-primary bg-gray-100  cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blend-overlay ${cn3}`}
      >
        <PiSunLight className={`text-2xl font-bold ${cn4} `} />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
