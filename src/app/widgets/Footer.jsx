import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import logo from "../../../public/deltainfosoftonly.png"
import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import { IconBrandFacebook } from "@tabler/icons-react";

const footerNavs = [
    {
        label: "Navigation",
        items: [
            {
                href: "/",
                name: "Home",
            },
            {
                href: "/",
                name: "About Us",
            },
            {
                href: "mailto:hello@chatcollect.com",
                name: "What we Do",
            },
            {
                href: "mailto:hello@chatcollect.com",
                name: "Product",
            },
            {
                href: "/services",
                name: "Services",
            },
        ],
    },
    {
        label: "What We Doroduct",
        items: [
            {
                href: "/",
                name: "Web Development",
            },
            {
                href: "/pricing",
                name: "UI UX Designing",
            },
            {
                href: "/faq",
                name: "App Development",
            },
            {
                href: "/faq",
                name: "Social Media Mangement",
            },
            {
                href: "/faq",
                name: "ZOHO",
            },
        ],
    },

    {
        label: "LEGAL",
        items: [
            {
                href: "/",
                name: "General Info",
            },
            {
                href: "/",
                name: "Privacy Policy",
            },
            {
                href: "mailto:hello@chatcollect.com",
                name: "Terms of Service",
            },
        ],
    },
    {
        label: "TALK TO US",
        items: [
            {
                href: "mailto:support@deltainfosoft.com",
                name: "support@deltainfosoft.com",
            },

            {
                href: "/privacy",
                name: "+66 2399 1145",
            },
            {
                href: "/privacy",
                name: "Contact Us",
            },
            {
                href: "/privacy",
                name: "FaceBook",
            },
            {
                href: "/privacy",
                name: "Linkdin",
            },
        ],
    },
];

const footerSocials = [
    {
        href: "",
        name: "FaceBook",
        icon: <IconBrandFacebook className="h-4 w-4" />,
    },
    {
        href: "",
        name: "LinkdIN",
        icon: <LinkedinIcon className="h-4 w-4" />,
    },
    {
        href: "",
        name: "Twitter",
        icon: <TwitterLogoIcon className="h-4 w-4" />,
    },
];

export function SiteFooter() {
    return (
        <footer>
             <div className="w-full p-4 flex flex-col pt-10 items-center">
          <h1 className="text-lg md:text-7xl bg-clip-text my-5 text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Share your workflow, <br/>
Smooth your workflow.
          </h1>
        </div>
            <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
                <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
                    <div className="mb-12 flex-col flex gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="Logo"
                                height={200}
                                width={200}
                                className="text-primary"
                            />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Delta
              </span> */}
                        </Link>
                        {/* <p className="max-w-xs">The next generation UI library</p> */}
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-4">
                        {footerNavs.map((nav) => (
                            <div key={nav.label}>
                                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                                    {nav.label}
                                </h2>
                                <ul className="gap-2 grid">
                                    {nav.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between border-t xl:border rounded-md border-dashed border-neutral-700/20 py-4 px-8 gap-2">
                    <div className="flex space-x-5 sm:justify-center sm:mt-0">
                        {footerSocials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                            >
                                {social.icon}
                                <span className="sr-only">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        Copyright © {new Date().getFullYear()}{" "}all rights reserved by Delta Infosoft Pvt Ltd. 
                        {/* <Link href="/" className="cursor-pointer">
                            
                        </Link> */}
                       
                    </span>
                </div>
            </div>
            {/*   <SiteBanner /> */}
        </footer>
    );
}