"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import homeImage from "../../../public/Dashboard Waterman.png"
import delvelopment from "../../../public/Development.png"
import ksbDashboard from "../../../public/KSB.png"
import cando from "../../../public/Cando Message.png"
export function HeroParalla() {

    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "WaterMan ",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "Development",
        link: "#",
        thumbnail:
        delvelopment.src,
    },
    {
        title: "KSB Mobile App",
        link: "#",
        thumbnail:ksbDashboard.src,
    },

    {
        title: "Banas CanDo",
        link: "#",
        thumbnail:
        cando.src,
    },
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "Development",
        link: "#",
        thumbnail:
        delvelopment.src,
    },

    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "Development",
        link: "#",
        thumbnail:
        delvelopment.src,
    },
   
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },

    {
        title: "Development",
        link: "#",
        thumbnail:
        delvelopment.src,
    },
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "Development",
        link: "#",
        thumbnail:
        delvelopment.src,
    },
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
    {
        title: "ICRM",
        link: "#",
        thumbnail:homeImage.src,
    },
];
