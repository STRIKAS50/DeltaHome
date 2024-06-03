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
import Iaccount from "../../public/Frame 22115Iaccount.png"
import GateModule from "../../public/Group 22239GateMOdule.png"
import MyTIme from "../../public/Group 22269MYtime.png"
import { MarqueeDemo } from "./widgets/Reviews";
import { Grid } from "./widgets/Grid";
import weLesds from "../../public/Group 22277We leads you .png";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import AnimatedGridPatternDemo from "./widgets/Grid-Pattern";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import NumberTicker from "@/components/magicui/number-ticker";
import showcase from "../../public/Group 22276showcase.png"
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Icons from '../app/widgets/IconCircle'; 
import { SparklesCore } from "../components/ui/sparkles";
import { RetroGridDemo } from "./widgets/retroGrid";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import Contactus from "@/app/widgets/ContactUs"
import SiteHeader from "@/app/widgets/header"
import {SiteFooter} from "@/app/widgets/Footer"


export default function Home() {


  const projects = [
    {
      title: "Strategy",
      description:
          "Focuses on delivering scalable, integrated solutions that enhance efficiency, user experience, and business value for clients.",
      link: "#",
      image: strategy.src,
      feature:""
  },
  {
      title: "Branding",
      description:
      "Branding is the process of creating a unique identity and image for a product or company in the consumers' mind through consistent theme, messaging, and visual elements.",
      link: "#",
      image: braning.src,
      feature:"",
      
  },
  {
      title: "Development",
      description:
      "Development is the systematic process of growth and improvement through planning, innovation, and implementation of effective strategies.",
      link: "#",
      image: dev.src,
      feature:""
  },
  {
      title: "Web Design",
      description:
      "Web design is the art and science of creating visually appealing, user-friendly, and responsive websites that provide an optimal user experience across all devices.",
      link: "#",
      image: webd.src,
      feature:""
  },
  {
      title: "Social Media",
      description:
      "Social media is a dynamic platform for communication and engagement, enabling individuals and businesses to connect, share content, and build communities online.",
      link: "#",
      image: media.src,
      feature:""
  },
  {
      title: "Ecommerce",
      description:
      "Ecommerce is the buying and selling of goods and services over the internet, offering convenience, a wide selection, and seamless transactions for consumers and businesses alike.",
      link: "#",
      image: ECOM.src,
      feature:""
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
      {/* <Navbar /> */}
     
      <div >
        <HeroParalla />
      </div>

      <div className="p-3">
        <AnimatedGridPatternDemo />
      </div>



      {/* 
      <div className="pt-5">
        <MarqueeDemo />
      </div> */}



      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col">
        <div className="absolute top-8 left-10  mt-4 ml-4 z-20">
          <p className="text-4xl p-5 sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200  to-neutral-500 py-8">
            Solutions
          </p>
        </div>
        <div className="absolute top-24 left-10 ml-4 z-20">
          <p className="text-2xl pt-10 mt-5 ml-5 sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
            Emphasize your expertise in providing comprehensive ERP solutions tailored to meet the specific needs of businesses.
          </p>
          <div className="flex sm:flex-row pr-10 w-full justify-between  flex-col gap-5">

            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Inventory Management
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Optimize stock levels, reduce waste, and ensure timely replenishments.
                </CardItem>
                <CardItem translateZ="100" className="w-full flex  item-center justify-center mt-8">
                  <Image
                    src={GateModule.src}
                    height={180}
                    width={180}
                    className=" rounded-xl  "
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-18">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Explore More →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Financial
                  Management
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >General ledger, accounts payable, accounts receivable
                </CardItem>
                <CardItem translateZ="100" className="mt-10 item-center w-full flex justify-center">
                  <Image
                    src={Iaccount.src}
                    height={150}
                    width={180}
                    className=" rounded-xl  "
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Explore More →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Human Resource Management
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Employee records and self-service portals
                </CardItem>
                <CardItem translateZ="100" className="w-full flex justify-center mt-8">
                  <Image
                    src={MyTIme.src}
                    height={60}
                    width={150}
                    className=" rounded-xl  "
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-13">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4  rounded-xl text-xs font-normal dark:text-white"
                  >
                    Explore More →
                  </CardItem>
                  {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
                </div>
              </CardBody>
            </CardContainer>
          </div>
          {/* <div className="flex justify-center  item-center">
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Explore More
            </button>
          </div> */}
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
      </div>


      <div className="h-[70rem] relative w-full bg-black flex flex-col  overflow-hidden my-10 pt-5 rounded-md">
        <div className="w-full absolute inset-0 h-[70rem]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col pt-20 justify-start">
            <p className="text-4xl p-5 pt-10 mt-10 ml-5 sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Why Choose Delta?
            </p>
            <p className="text-2xl ml-5 pl-8 sm:text-2xl  text-white font-bold bg-clip-text">
              We are ready, <br /> to start <span className="text-teal-400"><em>solving challenges</em></span> before they become <span className="text-teal-400"><em>problems.</em></span>
            </p>
          </div>

          <div className="flex pt-20 mt-10 justify-end mr-10">
            <Image
              src={weLesds.src}
              alt="Picture of the author"
              width={750}
              height={750}
              objectFit="cover"
              quality={100}
              className="z-100"
            />
          </div>

        </div>

        <div>

        </div>
        <div className="relative flex h-[110rem] w-full max-w-[52rem] items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
          <span className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Our Clients
          </span>
          {/* Inner Circles */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none   bg-transparent"
            reverse
            radius={250}
            duration={20}
            delay={5}
          >
            <Icons.GAInfra size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={250}
            duration={20}
            delay={15}
          >
            <Icons.Desire size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={250}
            duration={20}
            delay={20}
          >
            <Icons.Duke size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={250}
            duration={20}
            delay={30}
          >
            <Icons.prompt size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={180}
            duration={20}
            delay={20}
          >
            <Icons.Chem size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={180}
            duration={15}
            delay={20}
          >
            <Icons.Acem size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={180}
            duration={10}
            delay={20}
          >
            <Icons.Angel size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={130}
            duration={10}
            delay={5}
          >
            <Icons.Bodal size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={130}
            duration={10}
            delay={15}
          >
            <Icons.rotodel size={50} color="yellow" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none  bg-transparent"
            reverse
            radius={130}
            duration={10}
            delay={20}
          >
            <Icons.banas size={50} color="yellow" />
          </OrbitingCircles>

        </div>

        {/* <div className="flex justify-end h-auto" >
          yihi
          <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={100} />
          </p>
        </div> */}
      </div>

      <div className="max-w-8xl mx-auto px-8 h-screen py-10 pt-10 mt-10">
        <h2 className=" text-4xl p-5 sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500   my-3 flex justify-center">
          Services We Provide<br />
        </h2>
       <div className="h-40">
       <HoverEffect items={projects}  />
       </div>
      </div>
   
      <div className="relative flex h-screen w-screen  justify-center overflow-hidden bg-background md:shadow-xl"> 
      <div className="relative z-10 ">
      <p className="whitespace-pre-wrap text-8xl mt-10 pt-20 font-medium tracking-tighter text-black dark:text-white">
          Latest <span className="text-teal-400">Showcase</span> & <span className="text-teal-400">Solutions</span><br />
        </p>
      </div>
        <Meteors number={170}  />

   
      
      <div className="absolute  rounded-xl bottom-0 mt-10 pt-20 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={showcase.src}
          alt="Background Image"
          width={800} 
          height={800}
          objectFit="cover"
          quality={100}
        />
      <BorderBeam size={250} duration={12} delay={9} />
      </div>

        <Meteors number={170}  />
    </div>

        
      {/* <div className="p-5 flex justify-end">
          <Grid />
        </div> */}
      {/* <div className="relative flex h-full w-full  items-center justify-center   bg-background p-20 md:shadow-xl">
        <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
       
        </div>
        <RadialGradient />
      </div> */}

    </>);
}