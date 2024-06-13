"use client"
import React from 'react'
import Testimonial from "../../../public/Component 37gkwejfoeijafz.png"
import Approach from "../../../public/Group 22319career.png"
import Image from 'next/image'
import { Button } from "@/components/ui/moving-border";
import { CardStack } from '@/components/ui/card-stack';
import { cn } from "@/app/utils/cn"
const page = () => {



  const CARDS = [
    {
      id: 0,
      name: "Q.1 ) What is the interview process at Delta Infosoft ?",
      designation: "",
      content: (
        <p>Our interview process typically consists of several stages,<Highlight> Including initial phone screenings, technical assessments, and in-person or virtual interviews with members of the hiring team.</Highlight><br /> The specific interview format<Highlight> may vary depending on the role </Highlight> you're applying for.

        </p>
      ),
    },
    {
      id: 1,
      name: "Q.2 ) Do you offer opportunities for career growth and  advancement?",
      designation: "",
      content: (
        <p>
          <Highlight> Yes,</Highlight> at Delta Infosoft, we're <Highlight> committed to supporting </Highlight> the professional growth and development of our employees.
        </p>
      ),
    },
    {
      id: 2,
      name: "Q.3 ) How is the company culture at Delta Infosoft?",
      designation: "",
      content: (
        <p>
          Our company culture is built on principles of <Highlight>collaboration, innovation, and diversity.</Highlight><br />  We foster an inclusive work environment where <Highlight> employees feel  valued, empowered, and inspired </Highlight> to make a difference.
        </p>
      ),
    },
    {
      id: 3,
      name: "Q.4 ) Does Delta Infosoft offer internships or entry-level opportunities?",
      designation: "",
      content: (
        <p>
          <Highlight> Yes, we offer internship programs </Highlight> and entry-level positions for talented individuals who are <Highlight> early in their careers or looking to gain practical experience </Highlight> in the tech industry.<br /> Our internship programs provide <Highlight> hands-on training, mentorship, and exposure </Highlight> to real-world projects, helping interns develop valuable skills and kick-start their careers.
        </p>
      ),
    },
  ];


  return (
    <>

      <div className="relative pt-20 mt-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-background pt-10 md:shadow-xl">
        <div className="flex justify-center items-center mb-10">
          <span className="pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#0E7981] via-[#3AAFF8] to-[#171D1C] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
            Careers
          </span>
        </div>


        <div className="relative h-screen pr-5 flex-grow flex items-center">
          <div className="z-10 p-4 text-lg pl-10 text-white w-1/2">
            <span className="pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#99FFA7] via-[#EEF36A] to-[#E8EE2F] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
              Join US
            </span>
            <h1 className="text-md md:text-5xl my-8 bg-clip-text  bg-gradient-to-b text-black dark:text-neutral-300 text-start font-sans font-bold">
              At Delta Infosoft Pvt Ltd, we're committed to revolutionizing the tech industry through innovation and collaboration.
            </h1>
            <p className="text-lg md:text-2xl  text-gray-500 dark:text-gray-400">Our team consists of passionate individuals dedicated to creating cutting-edge solutions that drive positive change..</p>
          </div>

          <div className="pr-20  w-1/2 flex justify-end  pb-10">
            <Image
              src={Approach}
              alt="Service logo"
              height={500}
              width={500}
              className="z-10"
            />
          </div>
        </div>

        <div className="h-full w-full my-4 mb-20 dark:bg-black bg-white relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-start justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <span className="pointer-events-none mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#5D87D5] via-[#AFCBFF] to-[#5D87D5] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
            Benefits and Perks
          </span>

          <div className="w-full item-center px-4 mt-16">
            <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <Button
                borderRadius="5.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white  border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Competitive Salary</p>

              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Professional
                  Development </p>

              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Flexible Work Hours</p>

              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Wellness Programs</p>

              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Events</p>

              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <p className="text-lg md:text-2xl  text-white">Events</p>

              </Button>
            </div>
            <div className="h-screen w-full my-4 dark:bg-black bg-white relative flex flex-col items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-start justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <span className="pointer-events-none mb-10 mt-10 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#889EAA] via-[#ABBBC4] to-[#C3CED5] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
                Employee Testimonials
              </span>
              <div >
                <Image
                  src={Testimonial}
                  alt='testimonal'
                  height={900}
                  width={900}
                />
              </div>

              <div>

              </div>
              {/* <div className="w-full h-full item-center px-4 mt-16">
                <div className="h-full flex items-center p-10 justify-center w-full">
                  <CardStack items={CARDS} />
                </div>
              </div> */}
            </div>
            <div className="h-full w-full  my-4 dark:bg-black bg-white relative flex flex-col items-center justify-center">
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
          </div>
        </div>
      </div>






    </>
  )
}

export default page


export const Highlight = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-teal-100 text-teal-700 dark:bg-teal-700/[0.2] dark:text-teal-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};