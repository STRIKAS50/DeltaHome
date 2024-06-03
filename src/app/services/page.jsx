"use client"
import React from 'react'
import RetroGrid from '@/components/magicui/retro-grid'
import service from "../../../public/Group 22303service.png"
import Approach from "../../../public/Component 26approach.png"
import strategy from "../../../public/strategystrategy.png"
import braning from "../../../public/marketingmarketing.png"
import dev from "../../../public/developmentdev.png"
import webd from "../../../public/designdesign.png"
import Image from 'next/image'
import media from "../../../public/socialmedia.png"
import ECOM from "../../../public/ecommerceecom.png"
import { HoverEffect } from '@/components/ui/card-hover-effect'
const page = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };


    const projects = [
        {
            title: "Strategy",
            description:
                "Focuses on delivering scalable, integrated solutions that enhance efficiency, user experience, and business value for clients.",
            link: "#",
            image: strategy.src,
            feature: "Enhanced interoperability \n Streamlined data exchange\nImproved workflow automation"
        },
        {
            title: "Branding",
            description:
                "Branding is the process of creating a unique identity and image for a product or company in the consumers' mind through consistent theme, messaging, and visual elements.",
            link: "#",
            image: braning.src,
            feature: "Personalized customer solutions \n24/7 support services\nClient satisfaction guarantee",

        },
        {
            title: "Development",
            description:
                "Development is the systematic process of growth and improvement through planning, innovation, and implementation of effective strategies.",
            link: "#",
            image: dev.src,
            feature: "Mobile-friendly interface\nSecure access to business data\nOffline capabilities"
        },
        {
            title: "Web Design",
            description:
                "Web design is the art and science of creating visually appealing, user-friendly, and responsive websites that provide an optimal user experience across all devices.",
            link: "#",
            image: webd.src,
            feature: "Enhanced interoperability\nStreamlined data exchange\nImproved workflow automation"
        },
        {
            title: "Social Media",
            description:
                "Social media is a dynamic platform for communication and engagement, enabling individuals and businesses to connect, share content, and build communities online.",
            link: "#",
            image: media.src,
            feature: "Enhanced interoperability\nStreamlined data exchange\nImproved workflow automation"
        },
        {
            title: "Ecommerce",
            description:
                "Ecommerce is the buying and selling of goods and services over the internet, offering convenience, a wide selection, and seamless transactions for consumers and businesses alike.",
            link: "#",
            image: ECOM.src,
            feature: "Enhanced interoperability\n Streamlined data exchange\nImproved workflow automation"
        },
    ];
    return (
        <><div className="relative flex h-full w-screen flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
            <div className="flex justify-center items-center mb-10">
                <span className="pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Services
                </span>
            </div>


            <div className="relative h-screen pr-5 flex-grow flex items-center">
                <div className="z-10 p-4 text-lg text-white w-1/2">
                    <h1 className="text-md md:text-5xl bg-clip-text bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
                        We provide the best and fast<br /> service and solutions.
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400">Join with us to get service from us.</p>
                </div>
                <RetroGrid />
                <div className="w-1/2 flex justify-end">
                    <Image
                        src={service}
                        alt="Service logo"
                        height={500}
                        width={500}
                        className="z-10"
                    />
                </div>
            </div>

            <div className="relative h-full z-10 p-4 text-white">
                <div className="flex justify-center items-center ">
                    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36A3AB] via-[#245655] to-[#5FBFF9] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Discover The Key Features
                    </span>
                </div>
                <div className="z-10  text-white">
                    <div className="max-w-8xl mx-auto  px-8 py-5 pt-5 mt-5">
                        <HoverEffect items={projects} />
                    </div>
                </div>
            </div>
            <div className="relative h-full z-10 p-4 text-white">
                <div className="flex justify-center items-center mb-10">
                    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#EFE9F4] via-[#C4AED6] to-[#5FBFF9] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Our Approach
                    </span>
                </div>
                <div className="flex h-full">
                    <div className="w-1/2 flex flex-col">
                        <div className="p-4">
                            <div className="z-10 p-4 text-lg text-white">
                                <h1 className="text-md my-2 md:text-5xl bg-clip-text bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
                                    Client-Centric Design
                                </h1>
                                <h2 className="text-md text-gray-500 dark:text-gray-400">
                                    We prioritize understanding your business needs and processes to deliver solutions that offer real value and tangible benefits. </h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="z-10 p-4 text-lg text-white">
                                <h1 className="text-md my-2 md:text-5xl bg-clip-text bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
                                    Agile Methodology
                                </h1>
                                <p className="text-lg text-gray-500 dark:text-gray-400">Our agile development process ensures flexibility, transparency, and faster delivery of high-quality software.</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="z-10 p-4 text-lg text-white">
                                <h1 className="text-md my-2 md:text-5xl bg-clip-text bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
                                    Continuous Support
                                </h1>
                                <p className="text-lg text-gray-500 dark:text-gray-400">From initial consultation to post-deployment support, we provide continuous assistance to ensure your ERP system evolves with your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end  p-4">
                        <Image
                            src={Approach}
                            alt="Service logo"
                            width={600}
                            className="z-10 "
                        />
                    </div>
                </div>
            </div>

            <RetroGrid />
        </div>




        </>
    )
}

export default page