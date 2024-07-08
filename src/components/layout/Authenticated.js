import Link from "next/link";
import ShoppingCart from "./../Icons/ShoppingCart";
import { CartContext } from "../AppContext";
import React, { useContext } from "react";
import { signOut } from "next-auth/react";
import Styles from "./layout.module.css";

export default function Authenticated({ userName }) {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <button
        onClick={() => signOut()}
        className=" text-center hover:text-primary  text-light  border-0 px-4 py-2   "
      >
        <p className="text-center  ml-2 font-semibold"> خروج</p>
      </button>

      <div className="hover:text-primary mt-8">
        <Link href={"/profile"}>
          {" "}
          <span className="hover:text-primary  text-center text-light">
            {userName}
          </span>{" "}
        </Link>
        <p dir="rtl" className=" text-center text-light ">
          خوش آمدید
        </p>{" "}
      </div>
      <div class="group flex relative">
        <span>
          {" "}
          <Link id={Styles.shopping} href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </span>

        <span
          class="group-hover:opacity-100 w-[160px] transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          در حال حاضر امکان خرید اینترنتی وجود ندارد
        </span>
      </div>
    </>
  );
}
