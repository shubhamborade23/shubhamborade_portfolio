"use client";

import { useRef } from "react";

import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";
import { DATA } from "@/data/resume";
import BlurFade from "./magicui/blur-fade";

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center dark:from-white dark:to-slate-900/10">
          <ol className="">
            {DATA.achievements.map((achievement, id) => (
              <>
                <li className="text-sx flex gap-5 py-1 items-baseline text-left">
                  <p className="flex flex-col items-start flex-1">
                    {achievement.title}{" "}
                    <span className="text-xs text-muted-foreground">
                      {achievement.org}
                    </span>
                  </p>
                  <p className="flex-end text-xs text-muted-foreground">{achievement.date}</p>
                </li>
              </>
            ))}
          </ol>
        </div>
      </BlurFade>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
