"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./LayoutGrid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"> موسیقی زنده</p>
      <p className="font-normal text-base text-white"> </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">فضای دنج</p>
      <p className="font-normal text-base text-white"> </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">دورهمی و بورد گیم </p>
      <p className="font-normal text-base text-white"> </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">جشن تولد</p>
      <p className="font-normal text-base text-white"> </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/bottomimage.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
   thumbnail:
      "/images/bottomimage2.jpg",  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
 thumbnail:
 "/cafepics/view3.jpg",
},
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
  thumbnail:
  "/cafepics/view1.jpg",
},
];
