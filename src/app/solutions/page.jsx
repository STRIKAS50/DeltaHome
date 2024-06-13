"use client"
import Image from 'next/image'
import React from 'react'
import Solutions from "../../../public/Group 22340THis.png"
import RetroGrid from '@/components/magicui/retro-grid'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { ProductPreview } from '@/components/component/product-preview'
import { CardStack } from '@/components/ui/card-stack'
import { cn } from '../utils/cn'
import Highlight from "@/app/widgets/Highlight"
// import Explore from "@/components/NewUi/Explore"


const page = () => {


    const projects = [
        {
            title: "By Industry",
            description:
                "",
            link: "#",
            image: "",
            feature: "Pump Manufacturing\nEngineering Manufacturing\nConstruction and Contracting\nTrading and Distribution\nEducation Domain"
        },
        {
            title: "By Technology",
            description:
                "",
            link: "#",
            image: "",
            feature: "Artificial Intelligence\nERP\nCRM\nZoho\nOdoo\nWeb Development\nApp Development\n UI UX Designing\nQA",

        },
        {
            title: "By Software",
            description:
                "",
            link: "#",
            image: "",
            feature: "MyTime\niStock\niERP\niAttendance\niAccount"
        },

    ];


    const CARDS = [
        {
            id: 0,
            name: "Q.1 ) What types of solutions do you offer?",
            designation: "",
            content: (
                <p>We offer a wide range of solutions tailored to meet your business needs, including <Highlight> Enterprise Resource Planning </Highlight>(ERP), <Highlight> Customer Relationship Management</Highlight> (CRM), <Highlight> Supply Chain Management</Highlight> (SCM), <Highlight> Business Intelligence</Highlight> (BI), and <Highlight> Human Resource Management</Highlight> (HRM) systems. Our solutions are designed to <Highlight> streamline operations, enhance productivity, and drive business growth.</Highlight>
                </p>
            ),
        },
        {
            id: 1,
            name: "Q.2 )How can your solutions improve our business operations?",
            designation: "",
            content: (
                <p> Our solutions are designed to <Highlight>Automate and Optimize</Highlight> various business processes, <Highlight>Reducing manual effort and minimizing errors.</Highlight> By implementing our solutions, you can expect improved <Highlight> operational efficiency, better decision-making </Highlight> through real-time data insights, <Highlight> enhanced customer satisfaction, and overall increased productivity.</Highlight></p>
            ),
        },
        {
            id: 2,
            name: "Q.3 )What industries do you serve?",
            designation: "",
            content: (
                <p>We serve a diverse range of industries including <Highlight> manufacturing, retail, healthcare, finance, logistics, and more.</Highlight> Our solutions are <Highlight> customizable to meet the specific needs and challenges </Highlight> of each industry, ensuring maximum impact and effectiveness.
                </p>
            ),
        },
        {
            id: 3,
            name: "Q.4 )How do we get started?",
            designation: "",
            content: (
                <p>To get started, simply <Highlight> contact us to schedule a consultation.</Highlight> We will discuss your business <Highlight>needs and objectives</Highlight>, and provide a<Highlight> tailored proposal outlining how our solutions can help </Highlight>you achieve your goals. From there, <Highlight> we will guide you through the implementation process and beyond.</Highlight></p>
            ),
        },
    ];
    return (
        <>


            <div className="relative flex h-full  pt-20 mt-10 flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
                <div className="flex justify-center items-center mb-10">
                    <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Solutions
                    </span>
                </div>


                <div className="relative h-screen pr-5  flex-grow flex items-center">
                    <div className="z-10 p-4 text-lg pl-10 text-white w-1/2">
                        <span className="pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#90BEDE] via-[#DFFDFF] to-[#62A2D0] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                            Join US
                        </span>
                        <h1 className="text-md md:text-3xl my-8 bg-clip-text  bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
                            We deliver solutions that enhance efficiency, boost productivity, and drive growth to meet your critical business needs. Partner with us to achieve rapid value realization.
                        </h1>
                    </div>
                    <RetroGrid />
                    <div className="w-1/2 pr-10 pb-20 flex justify-end cursor-pointer" >
                        <Image
                            src={Solutions}
                            alt="Solution logo"
                            height={500}
                            width={500}
                            className="z-10"
                        />
                    </div>

                </div>
            </div>

            <div className="relative flex h-full  flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
                <div className="flex justify-center items-center mb-10">
                    <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        {/* Solutions */}
                    </span>
                </div>


                <div className="gradient-03 z-0" />
                <div className='p-5'>
                    <HoverEffect items={projects} />
                </div>

            </div>
            <div className="relative flex h-full  flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
                <div className="flex justify-center items-center mb-10">
                    <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Some Of Our Solutions
                    </span>
                </div>


                <div className="gradient-03 z-0" />
                <div className='p-5'>
                    <ProductPreview />
                </div>
            </div>
            <div className="h-[40rem] w-full  my-4 dark:bg-black bg-white relative flex flex-col items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-start justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <span className=" md:text-4xl sm:3xl lg:text-7xl pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#177E89] via-[#62D7E4] to-[#A8E9F0] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                    FAQ's
                </span>
                <div className="w-full  h-full item-center px-4 mt-16">
                    <div className="h-full flex items-center p-10 justify-center w-full">
                        <CardStack items={CARDS} />
                    </div>
                </div>
            </div>






        </>
    )
}

export default page

