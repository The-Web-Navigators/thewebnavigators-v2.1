import Marquee from "../magicui/marquee";
import React from "react";

export function MarqueeComponent({ marqueeItems }) {
    if (!marqueeItems || marqueeItems.length === 0) {
        return null; // Early return if no items are provided
    }

    const halfIndex = Math.ceil(marqueeItems.length / 2);
    const firstRow = marqueeItems.slice(0, halfIndex);
    const secondRow = marqueeItems.slice(halfIndex);

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:50s]">
                {firstRow}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:50s]">
                {secondRow}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/5 bg-gradient-to-r from-primary-light dark:from-primary-dark"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-primary-light dark:from-primary-dark"></div>
        </div>
    );
}
