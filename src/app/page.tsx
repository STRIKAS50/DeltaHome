"use client"
import Image from "next/image";
import RadialGradient from "@/components/magicui/radial-gradient";
import React, { useState } from "react";
import Navbar from "./widgets/Navbar";
import Background from "@/components/Background";
import strategy from "../../public/strategystrategy.png"
import braning from "../../public/marketingmarketing.png"
import dev from "../../public/developmentdev.png"
import webd from "../../public/designdesign.png"
import { HeroParalla } from "./widgets/heroScreen";
import media from "../../public/socialmedia.png"
import ECOM from "../../public/ecommerceecom.png"
import { MarqueeDemo } from "./widgets/Reviews";
import { Grid } from "./widgets/Grid";
import AnimatedGridPatternDemo from "./widgets/Grid-Pattern";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  const projects = [
    {
      title: "Strategy",
      description:
        "Focuses on delivering scalable, integrated solutions that enhance efficiency, user experience, and business value for clients.",
      link: "#",
      image: strategy.src
    },
    {
      title: "Branding",
      description:
        "Branding is the process of creating a unique identity and image for a product or company in the consumers' mind through consistent theme, messaging, and visual elements.",
      link: "#",
      image: braning.src
    },
    {
      title: "Development",
      description:
        "Development is the systematic process of growth and improvement through planning, innovation, and implementation of effective strategies.",
      link: "#",
      image: dev.src
    },
    {
      title: "Web Design",
      description:
        "Web design is the art and science of creating visually appealing, user-friendly, and responsive websites that provide an optimal user experience across all devices.",
      link: "#",
      image: webd.src
    },
    {
      title: "Social Media",
      description:
        "Social media is a dynamic platform for communication and engagement, enabling individuals and businesses to connect, share content, and build communities online.",
      link: "#",
      image: media.src
    },
    {
      title: "Ecommerce",
      description:
        "Ecommerce is the buying and selling of goods and services over the internet, offering convenience, a wide selection, and seamless transactions for consumers and businesses alike.",
      link: "#",
      image: ECOM.src
    },
  ];
  return (
    <>


      {/* <Background
        image={
          <Image
            src={homeImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        }
      >
      
      </Background> */}
      <Navbar />

      <div >
        <HeroParalla />
      </div>
      {/* <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <p className="text-4xl p-5 sm:text-7xl font-bold absolute top-0 left-0 mt-4 ml-4 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Services
        </p>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">



        </div>
        <div className="p-5 flex justify-end">
          <Grid />
        </div>
      </div> */}
      <div className="max-w-8xl mx-auto px-8">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-teal-300 my-5 justify-start">
          Services We Provide<br />
        </h2>
        <HoverEffect items={projects} />
      </div>


      {/* <div className="pt-5">
        <MarqueeDemo />
      </div> */}


      <div className="p-3 mt-5">
        <AnimatedGridPatternDemo />
      </div>
      {/* <div className="relative flex h-full w-full  items-center justify-center   bg-background p-20 md:shadow-xl">
        <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
       
        </div>
        <RadialGradient />
      </div> */}

    </>);
}
