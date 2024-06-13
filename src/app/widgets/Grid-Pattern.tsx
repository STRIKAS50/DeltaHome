"use client";

import { cn } from "@/app/utils/cn";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FlipWords } from "../../components/ui/flip-words";
import Image from "next/image";
import {
  MagicCard,
  MagicContainer,
} from "@/components/magicui/magic-card";
import { Visiongrid } from "@/components/component/visiongrid";

const AnimatedGridPatternDemo = () => {


  const words = ["EXPONENTIAL-GROWTH-PARTNER", "INNOVATIVE-GROWTH-PARTNER", "STRATEGIC-MARKETING-PARTNER"];
  return (
    <>
      <div className="relative flex   h-[30rem] w-200 items-start justify-start overflow-hidden bg-background  md:p-8 ">
        <div className="relative z-10  lg:pl-12  lg:mx-20 pt-8 mt-10 ">
          <span className="text-1xl md:text-2xl  lg:pl-12  lg:mx-20 text-teal-400 justify-start" >98 % retention ratio</span>
          <h2 className="text-2xl md:text-7xl pt-3 font-bold lg:pl-12  lg:mx-20 dark:text-white justify-start">
            LET US BE YOUR<br />
          </h2>
          <FlipWords className="text-2xl md:text-4xl pt-3 lg:pl-12  lg:mx-20 justify-start flex " words={words} /> <br />
        </div>
        {/* <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={0.4}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12",
          )}
          /> */}
        <div className="hidden sm:block  absolute right-14 mr-20 top-1/2 transform -translate-y-1/2">
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
      <div>
        <Visiongrid/>
      </div>

    </>);
};

export default AnimatedGridPatternDemo;
