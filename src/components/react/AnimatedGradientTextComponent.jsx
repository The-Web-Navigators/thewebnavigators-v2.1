import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";

export function AnimatedGradientTextComponent({ text }) {
  return (
    <AnimatedGradientText className="z-10">
      🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
      <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>
        {text}
      </span>
      <ChevronRight className="ml-1 size-3 transition-transform ease-in-out duration-300 text-primary-dark dark:text-primary-light group-hover:translate-x-0.5" />
    </AnimatedGradientText>
  );
}
