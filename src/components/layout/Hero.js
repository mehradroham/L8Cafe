'use client';

import Right from "../Icons/Right";
import TurningPic from "./TurningPic";
import Styles from "./layout.module.css";


import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div id={Styles.layer}></div>
      <div id={Styles.overlayer}></div>
      <section className={Styles.hero}>
        <div
          id={Styles.lefttoptext}
          className="  rounded-md position-absolute   transition-all   py-16"
        >
          <div dir="rtl">
            <h1 className="text-6xl mt-[200px] text-light text- px-4 font-semibold leading-relaxed">
              روف کافه <span className="text-primary"> </span> <br />
            </h1>
            <h1 className="text-6xl mr-[100px] md:mr-[220px]  text-light text- px-4 font-semibold leading-relaxed">
              <span className="text-primary">L8 </span> <br />
            </h1>
          </div>

          <div
            dir="rtl"
            className="txttopright md:text-2xl px-4 md:w-[400px] text-xl w-[200px]  my-12 text-light"
          >
            هشت طبقه بالاتر از دغدغه های روزمره ...
            <br />
          </div>

          <div className="flex  gap-4">
            <Link href={"/#menu"}>
              <button className="bg-primary  flex justify-center w-[125px] h-[90px] max-h-[90px] md:w-[135px]  hover:bg-secondary uppercase  gap-2 text-white px-4 py-4  ">
                <p dir="rtl" className=" block mx-auto my-auto w-[90%]">
                  اکنون سفارش دهید{" "}
                </p>
                <Right />
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className=" gap-2  flex justify-center   w-[125px] h-[90px] max-h-[90px] md:w-[135px]   px-4 py-4 bg-gray-100 hover:bg-gray-400 text-gray-600 font-semibold">
                <p dir="rtl" className="block mx-auto my-auto w-[90%] ">
                  اطلاعات بیشتر
                </p>
                <Right />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[50%] sm:w-[50%] md:w-[45%] lg:w-[40%] absolute z-[200] right-0">
          <TurningPic></TurningPic>
        </div>
      </section>
    </>
  );
}
