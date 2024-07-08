"use client";
import { CartContext, cartProductPrice } from "./../../components/AppContext";
import Trash from "./../../components/Icons/trash";
import AddressInputs from "./../../components/layout/AddressInputs";
import SectionHeaders from "./../../components/layout/SectionHeaders";
import CartProduct from "./../../components/menu/CartProduct";
import { useProfile } from "./../../components/UseProfile";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [direction, setDirection] = useState({});
  const { data: profileData } = useProfile();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.href.includes("canceled=1")) {
        toast.error("Payment failed 😔");
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.address) {
      const { phone, address, postalcode, vahed, pelak } = profileData;
      const addressFromProfile = {
        phone,
        address,
        postalcode,
        vahed,
        pelak,
      };
      setDirection(addressFromProfile);
    }
  }, [profileData]);

  let خریدشما = 0;
  for (const p of cartProducts) {
    خریدشما += cartProductPrice(p);
  }
  function handleAddressChange(propName, value) {
    setDirection((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  async function proceedToCheckout(ev) {
    ev.preventDefault();
    // address and shopping cart products

    const promise = new Promise((resolve, reject) => {
      fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          direction,
          cartProducts,
        }),
      }).then(async (response) => {
        if (response.ok) {
          resolve();
          window.location = await response.json();
        } else {
          reject();
        }
      });
    });

    await toast.promise(promise, {
      loading: "در حال ثبت سفارش شما",
      success: "در حال انتقال به درگاه پرداخت",
      error: "خطایی رخ داده است لطفا مجددا تلاش کنید",
    });
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">سبد خرید شما خالی میباشد 😔</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 grid gap-8 grid-cols-2">
        <div>
          {cartProducts?.length === 0 && <div>سفارشی در سبد خرید شما نیست</div>}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
          <div className="py-2 pr-16 flex justify-end items-center">
            <div className="text-gray-500">
              خریدشما:
              <br />
              هزینه ارسال:
              <br />
              مجموع:
            </div>
            <div className="font-semibold pl-2 text-right">
              TOM {خریدشما}
              <br />
              TOM 15000
              <br />
              TOM {خریدشما + 15000}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2>فاکتور سفارش </h2>
          <form onSubmit={proceedToCheckout}>
            <AddressInputs
              addressProps={direction}
              setAddressProp={handleAddressChange}
            />
            <button type="submit">پرداخت {خریدشما + 15000}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
