import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CardItem } from "./3d-card";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        image: string;
        feature:string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                      {item.image !=="" ? <div className="relative flex items-center justify-center h-40 w-full overflow-hidden">
                            <Image
                                src={item.image}
                                height={200}
                                width={200}
                                quality={100}
                                alt={item.title}
                                className="absolute z-0"
                            />
                        </div>:<></>}
                        <div>
                            <CardTitle className="lg:text-4xl sm:text-2xl md:text-3xl">{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            {item.feature && (
                                <>
                                    <CardTitle className="my-3 font-bold flex justify-start lg:text-2xl sm:text-md md:text-2xl "><u>Key Features</u></CardTitle>
                                    <ul className="list-disc pl-5 mt-2 text-white lg:text-2xl sm:text-md md:text-2xl ">
                                        {item.feature.split('\n').map((feat, index) => (
                                            <li key={index}>{feat}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};


export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-300 leading-loose tracking-wide text-lg text-teal-300 mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 leading-loose tracking-wide  text-md",
                className
            )}
        >
            {children}
        </p>
    );
};
