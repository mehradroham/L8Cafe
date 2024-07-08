"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useState } from "react";
import ReservationForm from "./ReservationForm";

export default function Picture() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-[100%] ">
        <div className="relative w-[80%] mx-auto h-80 sm:h-96 xl:h-[400px] 2xl:h-[440px]">
          <Carousel slideInterval={12000}>
            <Image
              src="/images/bottomimage3.jpg"
              alt="..."
              width={900}
              height={400}
              loading="lazy"
            />
            <Image
              src="/images/bottomimage4.jpg"
              alt="..."
              width={900}
              height={400}
              loading="lazy"
            />
            <Image
              src="/images/bottomimage5.jpg"
              alt="..."
              width={900}
              height={400}
              loading="lazy"
            />
            <Image
              src="/images/bottomimage6.jpg"
              alt="..."
              width={900}
              height={400}
              loading="lazy"
            />
          </Carousel>
         
        <button title="رزو"
            id="reserve" className="inline-flex h-[60px] ml-[70px] animate-shimmer   mt-[20px] items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        رزو میز
        </button>
  
        
      
        </div>
        <div className="bg-[#F2F2F2]  top-[450px] md:top-[480px] w-[100%] absolute h-[800px] border-b-4">
          <div className=" w-[90%] md:w-[60%] mx-auto p-4 transition-transform dark:bg-gray-800">
          <ReservationForm />
          </div>
        </div>
      </div>
    </>
  );
}
