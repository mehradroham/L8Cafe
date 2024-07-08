"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Styles from "./layout.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import React, { useContext, useState, Suspense } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "./../Icons/ShoppingCart";
import Loading from "./Loading";

const LazyAuthen = React.lazy(() => import("./Authenticated"));
const LazyUnauthen = React.lazy(() => import("./Unauthenticated"));

export default function Header() {
  function logout() {
    setMenuOpen(false);
    signOut();
  }
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={Styles.layerheader}></div>
      <header id={Styles.headers} className=" bg-dark ">
        <div className="flex  item-center justify-between h-full w-full  2xl:px-16 ">
          <nav className="hidden md:flex gap-4 font-semibold items-center  ">
            {status === "authenticated" && (
              <>
                <Suspense fallback={<Loading />}>
                  <LazyAuthen userName={userName} />
                </Suspense>
              </>
            )}

            {status === "unauthenticated" && (
              <>
                <Suspense fallback={<Loading />}>
                  <LazyUnauthen userName={userName} />
                </Suspense>
              </>
            )}
          </nav>

          <nav className="hidden md:flex gap-2 font-semibold items-center">
            <Link
              href={"/#about"}
              className="  rounded-full px-4 py-2  hover:text-primary  text-light "
            >
              درباره
            </Link>
            <Link className="flex gap-2  font-bold  mt-0" href="/">
              <Image
                src={"/images/5.png"}
                id={Styles.imgheader}
                className="mt-0   transition-all"
                width={150}
                height={100}
                alt="logo"
              />
            </Link>
            <Link
              href={"./contact"}
              className="  rounded-full px-4 py-4 hover:text-primary  text-nowrap text-light  "
            >
              ارتباط با ما
            </Link>
          </nav>

          <nav className="hidden md:flex gap-2 font-semibold items-center">
            <Link
              href={"/#menu"}
              className="  rounded-full px-4 py-2 hover:text-primary  text-light  "
            >
              منو
            </Link>
            <Link
              href={"/"}
              className="   rounded-full px-4 hover:text-primary  text-nowrap text-light py-2  "
            >
              صفحه اصلی
            </Link>
          </nav>

          <div className="flex  item-center justify-between h-full w-full md:hidden">
            {status === "authenticated" && (
              <Link className="mt-10" href={"/profile"}>
                <CgProfile size={32} />
              </Link>
            )}
            {status === "unauthenticated" && (
              <div className="h-[40%]  block my-auto">
                <LazyUnauthen />{" "}
              </div>
            )}

            <Link className=" font-bold  mt-0" href="/">
              <Image
                src={"/images/5.png"}
                id={Styles.imglogo}
                className="mt-0   transition-all"
                width={150}
                height={100}
                alt="logo"
              />
            </Link>

            <div onClick={handleNav} className="mt-10  cursor-pointer ">
              <AiOutlineMenu size={32} />
            </div>
          </div>
        </div>
        <div className="h-[10px] w-[100%] bg-white"></div>
      </header>
      <div
        id={Styles.menu}
        className={
          menuOpen
            ? "fixed  mt-10 top-[80px]  text-light right-0 w-full h-[75%] bg-dark  md:hidden  p-10 ease-in duration-500"
            : "fixed top-0 left-[-100%]  p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full max-w-full items-center justify-end ">
          <div onClick={handleNav} className="cursor-pointer ">
            <AiOutlineClose size={32} />
          </div>
        </div>
        <div className=" flex  flex-col py-4 justify-center items-center w-full ">
          <ul className="w-full flex  flex-col  justify-center items-center ">
            <Link
              className="w-full flex  border-b-2 border-b-light  hover:bg-lightdark hover:text-primary duration-500  justify-center items-center"
              href={"/"}
            >
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4   cursor-pointer"
              >
                {" "}
                خانه
              </li>
            </Link>
            {status === "unauthenticated" && (
              <>
                <a className="w-full flex  border-b-2 border-b-light text-nowrap   hover:bg-lightdark hover:text-primary duration-500 justify-center items-center">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 text-nowrap cursor-pointer"
                  >
                    {" "}
                    ثبت نام
                  </li>
                </a>
                <Link
                  className="w-full flex  border-b-2 border-b-light   hover:bg-lightdark hover:text-primary duration-500 justify-center items-center"
                  href={"/login"}
                >
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4  cursor-pointer"
                  >
                    ورود
                  </li>
                </Link>
              </>
            )}
            {status === "authenticated" && (
              <a className="w-full flex  border-b-2 border-b-light   hover:bg-lightdark hover:text-primary duration-500 justify-center items-center">
                <li onClick={logout} className="py-4  cursor-pointer">
                  خروج
                </li>
              </a>
            )}
            <Link
              className="w-full flex  border-b-2 border-b-light   hover:bg-lightdark hover:text-primary duration-500 justify-center items-center"
              href={"/#menu"}
            >
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4  cursor-pointer"
              >
                منو
              </li>
            </Link>
            <Link
              className="w-full flex  border-b-2 border-b-light   hover:bg-lightdark hover:text-primary duration-500 justify-center items-center"
              href={"/#reserve"}
            >
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4  cursor-pointer"
              >
                رزو
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
