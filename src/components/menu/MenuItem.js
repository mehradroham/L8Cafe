"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import MenuItemBox from "./MenuItemBox";
import Styles from "./../layout/layout.module.css";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice } = menuItem;

  const { addToCart } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);

  function handleAddtoCart() {
    addToCart(menuItem);
    toast.success("به سبد خرید شما اضافه شد");
    setShowPopUp(false);
  }

  function active() {
    setShowPopUp(true);
  }

  // function handleAddtoCart() {
  //   if (!showPopUp) {
  //     setShowPopUp(true);
  //     return;
  //   }
  //   addToCart(menuItem);
  //   setShowPopUp(false);
  // }
  return (
    <>
      {showPopUp && (
        <>
          <div
            onClick={() => setShowPopUp(false)}
            className="fixed top-[40px] z-[1000] overscroll-none inset-0 bg-black/80 flex items-center justify-center"
          >
            <div
              onClick={(ev) => ev.stopPropagation()}
              className="my-8 bg-white p-2 rounded-lg max-w-md"
            >
              <div
                className="overflow-y-scroll p-2"
                style={{ maxHeight: "calc(100vh - 100px)" }}
              >
                <Image
                  loading="lazy"
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
                <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                <p className="text-center text-gray-500 text-sm mb-2">
                  {description}
                </p>

                <div className="w-[100%]">
                  <button
                    id={Styles.btnbuying}
                    className="primary block w-[60%] mx-auto rounded-md text-white bg-primary mt-2 sticky  "
                    onClick={handleAddtoCart}
                  >
                    {basePrice}اضافه کردن به سبد
                  </button>

                  <button
                    className="mt-4 w-[60%] block rounded-md mx-auto  text-white cursor-pointer primary bg-primary"
                    onClick={() => setShowPopUp(false)}
                  >
                    کنسل
                  </button>
                </div>
                <h1 dir="rtl" className="text-primary">
                  در حال حاضر امکان خرید اینترنتی وجود ندارد
                </h1>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="">
        <MenuItemBox
          onFocous={active}
          onAddToCart={handleAddtoCart}
          {...menuItem}
        />
      </div>
    </>
  );
}
