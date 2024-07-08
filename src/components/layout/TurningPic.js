"use client";

import { motion } from "framer-motion";
// import pic from "./images/maintop.png";

export default function TurningPic() {
  return (
    <motion.img
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 100 }}
      src={"/images/maintop.png"}
    />
  );
}
