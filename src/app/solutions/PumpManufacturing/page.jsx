"use client"
import React from 'react'
import service from "../../../../public/Group 22355Solutionss.png"
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { GridStrucutre } from '@/components/component/grid-strucutre'
const page = () => {

    const words = `iERP is developed to help management in making informed decision, by streamlining internal departments workflow and providing real time information at fingertips.
    `;

    return (
        <>
            <div className="relative pt-20 mt-10 flex h-full  flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
                <div className="flex justify-center items-center ">
                    <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Solutions
                    </span>

                </div>
                <p className="text-lg flex justify-center text-md items-center mb-10 text-black dark:text-white">Industry {'>'} Pump Manufacturing</p>


                <div className="relative h-screen pr-5  flex-grow flex items-center">
                    <div className="z-10 p-4 text-lg pl-10 text-white w-1/2">
                        <TextGenerateEffect words={words} />

                        <p className="text-lg text-gray-500 dark:text-gray-400">Join with us to get service from us.</p>
                    </div>

                    <div className="w-1/2 pr-20 pb-20 flex justify-end">
                        <Image
                            src={service}
                            alt="Service logo"
                            height={380}
                            width={400}
                            className="z-10"
                        />
                    </div>
                </div>

            </div>
            <div className="relative pt-20 mt-10 flex h-full  flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
                <div className="flex justify-center items-center ">
                    <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                        iERP for Pumps Manufacturing
                    </span>
                </div>

              <div className='h-full'>
              <GridStrucutre />
              </div>
            </div>

        </>
    )
}

export default page