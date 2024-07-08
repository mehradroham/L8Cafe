"use client";
import { useRef, useEffect, useState } from "react";

import { LayoutGrid } from "../ui/LayoutGrid";
import { ThreeDCardDemo } from "../ui/3d";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./About";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { LayoutGridDemo } from "../ui/LayoutGridDemo";
import { TextRevealCardPreview } from "../ui/revealtext";
import { SparklesPreview } from "../ui/SparklesPreview";




export default function AboutCard() {
 
  return (
    <>
    
      <div className="w-[100%]">
        <div className="w-[90%] mx-auto bg-[#F2F2F2] my-[20px] ">
         
         <About/>
        </div>
      </div>
      <section className=" w-[100%] ">
       <div className="border-b-4 mb-[20px] bg-[#F2F2F2]"> <LayoutGridDemo /></div>
      
      
      </section>
    
      
    </>
  );
}
