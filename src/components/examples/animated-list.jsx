"use client";

import React, { useMemo } from "react";
import { cn } from "../../lib/utils";
import { AnimatedList } from "../magicui/animated-list"; // Import AnimatedList

// Notifications data
const notifications = [
    {
        name: "New User",
        description: "User signed up",
        time: "15m ago",
        icon: "👤",
        color: "#00C9A7",
    },
    {
        name: "Subscription",
        description: "Renewal processed",
        time: "10m ago",
        icon: "🔄",
        color: "#FFB800",
    },
    {
        name: "Payment",
        description: "Payment received",
        time: "5m ago",
        icon: "💸",
        color: "#FF3D71",
    },
    {
        name: "New Event",
        description: "Event created",
        time: "2m ago",
        icon: "📅",
        color: "#1E86FF",
    },
];

// Expand notifications to a larger array
const expandedNotifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

const MemoizedNotification = React.memo(Notification);

export function AnimatedListComponent({ className }) {
    // Memoize the notifications to prevent unnecessary re-renders
    const memoizedNotifications = useMemo(() => expandedNotifications, []);

    return (
        <div
            className={cn(
                "relative h-[500px] w-full flex flex-col p-6 overflow-y-auto overflow-hidden",
                className
            )}
        >
            <AnimatedList>
                {memoizedNotifications.map((item, idx) => (
                    <MemoizedNotification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
