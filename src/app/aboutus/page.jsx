"use client"
import React from 'react'
import about from "../../../public/exponential.jpg"
import Image from 'next/image'
import { History } from '@/components/component/history'
import { Teamleads } from '@/components/component/teamleads'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const page = () => {

    const words = `Software that leads your way`
    return (
        <div className='pt-20 mt-10'>
            <div className="flex justify-center items-center mb-10">
                <span className="pointer-events-none  z-10 whitespace-pre-wrap bg-gradient-to-b from-[#36817F] via-[#68ACB6] to-[#36817F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                    About us
                </span>
            </div>


            <div className="relative h-screen pr-5  flex-grow flex items-center">
                <div className="z-10 p-4 text-lg pl-10 text-white w-1/2">
                    <h1 className="text-md md:text-5xl bg-clip-text bg-gradient-to-b text-black dark:text-neutral-300 text-start  font-bold">
                        <TextGenerateEffect words={words} />

                    </h1>

                    <p className="text-2xl my-3 text-gray-500 dark:text-gray-400">At Delta, we are dedicated to transforming businesses through innovative enterprise resource planning (ERP) solutions. Our mission is to drive efficiency, productivity, and growth for organizations of all sizes and industries by providing comprehensive and customizable ERP systems that streamline operations and deliver tangible value.</p>
                </div>

                <div className="w-1/2 pr-10  pb-20 flex justify-end">
                    <Image
                        src={about}
                        alt="Service logo"
                        height={500}
                        width={600}
                        className="z-10 rounded-lg"
                    />
                </div>
            </div>
            <div >

                <History />
            </div>
            <div>
                <Teamleads />
            </div>

            {/* <GlobeDemo /> */}







        </div>
    )
}

export default page