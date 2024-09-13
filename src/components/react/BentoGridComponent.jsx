import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "../../lib/utils";
import { AnimatedBeamMultipleOutput } from "../examples/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import Marquee from "../magicui/marquee";
import { AnimatedListDemo } from "../examples/animated-list";

const techStackFiles = [
  {
    name: "React",
    body: "A powerful JavaScript library for building user interfaces, allowing for component-based architecture and efficient rendering.",
  },
  {
    name: "Tailwind CSS",
    body: "A utility-first CSS framework that provides low-level utility classes to build custom designs quickly and efficiently.",
  },
  {
    name: "Node.js",
    body: "A runtime environment for executing JavaScript code server-side, enabling scalable and high-performance web applications.",
  },
  {
    name: "MySQL",
    body: "A widely-used relational database management system known for its reliability, robustness, and performance.",
  },
  {
    name: "Firebase",
    body: "A comprehensive app development platform that offers a variety of tools, including real-time databases, authentication, and hosting.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Tech Stack",
    description: "We use React, Tailwind, Node.js, MySQL, and Firebase for scalable web apps.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee pauseOnHover className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {techStackFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn("relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs dark:text-white">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Real-Time Apps",
    description: "Build responsive apps that keep you updated instantly.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute -right-28 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Effortless API integration for seamless connectivity.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutput className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Advanced Analytics",
    description: "Get insights and optimize operations with advanced analytics.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: "",
  },
];

export function BentoGridComponent() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
