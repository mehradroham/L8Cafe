"use client";
import UserTab from "../../components/layout/UserTab";
import Styles from "./../profile/profile.module.css";

import Right from "../../components/Icons/Right";

import { useProfile } from "../../components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }
  return (
    <div>
      <div id={Styles.layer}></div>
      <div id={Styles.overlayer}></div>
      <div id={Styles.profilebg}></div>
      <div id={Styles.profileform}>
        <UserTab isAdmin={true} />
      </div>

      <section className="absolute top-[190px] left-0 z-[500] mx-auto h-[750px]  bg-black opacity-70 w-[100%]  mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4">
        <div className=" absolute right-20">
          <Link dir="rtl" className="button flex" href={"/menu-items/new"}>
            <span className="text-primary" dir="rtl">
              ساخت آیتم جدید
            </span>
            <Right />
          </Link>
        </div>
        <div>
          <h2 dir="rtl" className="text-sm text-light mt-8">
            ویرایش آیتم
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {menuItems?.length > 0 &&
              menuItems.map((item) => (
                <Link
                  key={item._id}
                  href={"/menu-items/edit/" + item._id}
                  className="bg-gray-200 rounded-lg p-4"
                >
                  <div className="relative w-[50px] h-[50px]">
                    {/* <Image
                      className="rounded-md"
                      src={`/ ${item.image}`}
                      alt={`${item.name} `}
                      width={100}
                      height={100}
                    /> */}
                    <div className="text-center text-nowrap">{item.name}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
