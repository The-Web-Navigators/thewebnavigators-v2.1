import { cn } from "../../lib/utils";
import Marquee from "../magicui/marquee";
import React from "react";

export function MarqueeComponent({ items }) {
    const halfIndex = Math.ceil(items.length / 2);
    const firstRow = items.slice(0, halfIndex);
    const secondRow = items.slice(halfIndex);

    const MarqueeItem = ({ item }) => (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt={item.name} src={item.img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{item.name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{item.username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm dark:text-white">{item.body}</blockquote>
        </figure>
    );

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((item, index) => (
                    <MarqueeItem key={index} item={item} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((item, index) => (
                    <MarqueeItem key={index} item={item} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
    );
}
