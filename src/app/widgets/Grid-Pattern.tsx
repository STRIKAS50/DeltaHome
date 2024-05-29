"use client";

import { cn } from "@/app/utils/cn";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FlipWords } from "../../components/ui/flip-words";
import Image from "next/image";
import {
  MagicCard,
  MagicContainer,
} from "@/components/magicui/magic-card";

const AnimatedGridPatternDemo = () => {
  

  const words = ["EXPONENTIAL-GROWTH-PARTNER", "INNOVATIVE-GROWTH-PARTNER", "STRATEGIC-MARKETING-PARTNER"];
  return (
    <>
      <div  className="relative flex  h-[30rem] w-200 items-start justify-start overflow-hidden bg-background  md:p-8 md:shadow-xl">
        <div className="relative z-10  pt-8 mt-10 ">
          <span className="text-1xl md:text-2xl  text-teal-400 justify-start" >98 % retention ratio</span>
          <h2 className="text-2xl md:text-7xl pt-3 font-bold dark:text-white justify-start">
            LET US BE YOUR<br />
          </h2>
        <FlipWords className="text-2xl md:text-4xl pt-3 justify-start flex " words={words} /> <br />
        </div>
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={0.4}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12",
          )}
          />
        <div className="hidden sm:block  absolute right-10 top-1/2 transform -translate-y-1/2">
          <Image
            src="/Group 22259.png"
            alt="laptopimage"
            width={600}
            height={600}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>

      </div>
      <div className="mt-5" >
      <MagicContainer
        className={
          "flex h-full w-full flex-col gap-10 sm:h-[300px] md:h-[350px]  lg:h-[350px] lg:flex-row"
        }
      >
        <MagicCard
        borderWidth={3}
        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
      >
        <div className="hidden dark:block">
          <Image
            src="/Frame 22086.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/Frame 22086dark.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
        <div className="hidden dark:block">
          <Image
            src="/Frame 22085.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/Frame 22085dark.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c43ff_50%,transparent_100%)] p-20 shadow-2xl">
        <div className="hidden dark:block">
          <Image
            src="/Frame 22084.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/Frame 22084dark.png"
            alt="laptopimage"
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            className="z-100"
          />
        </div>
      </MagicCard>      </MagicContainer>
      </div>




    </>);
};

export default AnimatedGridPatternDemo;
