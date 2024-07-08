"use client";
import Image from "next/image";
import { Input } from "postcss";
import MenuItem from "../menu/MenuItem";
import Picture from "./Picture";
import { motion } from "framer-motion";


import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenu(menuItems);
      });
    });
  }, []);
  return (
    <section className="border-b-4 bg-[#F2F2F2] ">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 top-[1px] text-left z-100">
          <Image
            src={"/images/sallad1.png"}
            width={129}
            height={189}
            alt={"sallad"}
          />
        </div>

        <div className="absolute top-[10px] right-0 z-100">
          <Image
            src={"/images/sallad2.png"}
            width={127}
            height={195}
            alt={"sallad"}
          />
        </div>
        
      </div>
      <div className=" mt-[150px]">
        <motion.div
          initial={{ opacity: 0, translateY: -400 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 2 }}
          className="text-center mb-4"
        >
          <h2 className="text-primary  font-bold italic text-2xl">
            <span className="text-primary">L8</span> منو روف کافه
          </h2>
        </motion.div>
      </div>

      <div
        id="menu"
        className="grid grid-cols-1 sm:grid-cols-2    lg:grid-cols-3  "
      >
        {menu?.length > 0 &&
          menu.map((item, i) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? 50 : -50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateY: 0, translateX: 0 }}
              transition={{ duration: 1, delay: i * 1 }}
              key={item._id}
            >
              <MenuItem key={item._id} {...item} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
