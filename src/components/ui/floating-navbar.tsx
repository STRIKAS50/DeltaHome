"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { Console } from "console";
import logo from "../../../public/Logo.png"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [active, setActive] = useState<string | null>(null);

  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() == 0) {
        setVisible(true);
        console.log("Still", scrollYProgress.get())
        // console.log(navItems)

      } else {
        if (direction < 0) {
          console.log("UPPPPPPP", direction)
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden sm:flex max-w-[100rem] fixed text-xl inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-60",
          className
        )}>
        <div className="flex justify-start item-start">
          <Link href={"/"}><Image src={logo} alt="Logo" width={150} height={100} /></Link>
        </div>

        <Menu setActive={setActive}>
          <Link href={"/"}>Home</Link>
          
          {navItems?.map((navItem: any, idx: number) => (
            <MenuItem key={idx} setActive={setActive} href={`${navItem.link}`} active={active} item={`${navItem.name}`}>

              {navItem.productCategory ?
                <>
                  <div className="flex flex-col space-y-5 text-lg">
                    {clickedCategory !== null && (<>

                      <button onClick={() => setClickedCategory(null)} className="border text-lg font-medium relative my-3 border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
                        <span>Back</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                      </button>
                    </>
                    )}
                    {clickedCategory === null ? (
                      Object.keys(navItem.productCategory).map((nestedItem, nestedIdx) => (
                        <div
                          key={nestedIdx}
                          className="text-neutral-700 dark:text-neutral-200 cursor-pointer"
                          onClick={() => setClickedCategory(nestedItem)}
                        >
                          {nestedItem}
                        </div>
                      ))
                    ) : (
                      <div className="grid grid-cols-2 gap-10">
                        {navItem.productCategory[clickedCategory][0].products?.map((product: any, productIdx: any) => (
                          <ProductItem
                            key={productIdx}
                            href={product.href}
                            title={product.title}
                            src={logo.src}
                            description={product.description}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                </> :
                <>
                  <div className="flex flex-col space-y-4 text-sm">
                    {navItem.nestedSelection?.map((nestedItem: any, nestedIdx: number) => (
                      <HoveredLink key={nestedIdx} href={`${nestedItem.link}`}>
                        {nestedItem.name}
                      </HoveredLink>
                    ))}
                  </div>
                </>}
            </MenuItem>
          ))}
        </Menu>

        {/* <div className="flex justify-start item-start">HIH</div> */}
        <button className="border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Contact Us</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence >
  );
};
