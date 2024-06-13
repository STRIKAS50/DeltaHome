"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import DeltaIerp from "../../../public/DashboardProduct/Group 22597.png"
import GateMOdule from "../../../public/DashboardProduct/Group 22598.png"
import Barcode from "../../../public/DashboardProduct/Group 22602.png"
import Labhchart from "../../../public/DashboardProduct/Group 22604.png"
import kanban from "../../../public/DashboardProduct/Kanban.png"

export function HeroParalla() {

    return <HeroParallax products={products} />;
}
export const products = [
 
    {
        title: "DeltaIerp ",
        link: "#",
        thumbnail:DeltaIerp.src,
    },
    {
        title: "GateModule",
        link: "#",
        thumbnail:
        GateMOdule.src,
    },
    {
        title: "Barcode",
        link: "#",
        thumbnail:Barcode.src,
    },

    {
        title: "Labhchart",
        link: "#",
        thumbnail:
        Labhchart.src,
    },
    {
        title: "Kanban",
        link: "#",
        thumbnail:kanban.src,
    },
   
];
