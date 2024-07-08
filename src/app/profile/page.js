"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import InfoBox from "../../components/layout/infobox";
import SucessBox from "../../components/layout/sucessbox";
import toast from "react-hot-toast";
import { resolve } from "path";
import Header from "./../../components/layout/Header";
import Styles from "./profile.module.css";

import Link from "next/link";
import UserForm from "../../components/layout/UserForm";

import UserTab from "../../components/layout/UserTab";

export default function ProfiePage() {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [profilefetched, setprofilefetched] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);

  const { status } = session;
  
  useEffect(() => {
    if (status === "authenticated") {
      // setuserName(session.data.user.name);
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setUser(data);

          setisAdmin(data.admin);
          setprofilefetched(true);
        });
      });
    }
  }, [session, status]);
  async function handleProfileUpdate(ev, data) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        resolve();
      } else reject();
    });
    await toast.promise(savingPromise, {
      loading: "...در حال ذخیره اطلاعات ",
      success: "پروفایل ذخیره شد",
      error: "خطایی رخ داده است لطفا مجددا تلاش کنید",
    });
  }
  // for uploading photo
  // async function handleFileChange(ev) {
  //   const files = ev.target.files;
  //   if (files?.length === 1) {
  //     const data = new FormData();
  //     data.set("file", files[0]);
  //     await fetch("/api/upload", {
  //       method: "POST",
  //       body: data,
  //     });
  //   }
  // }
  if (status === "loading" || !profilefetched) {
    return "...در حال بارگذاری اطلاعات";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <>
      <div id={Styles.userform}>
        <div id={Styles.layer}></div>
        <div id={Styles.overlayer}></div>
        <div id={Styles.profilebg}></div>
        <div id={Styles.profileform}>
          <UserTab isAdmin={isAdmin} />
        </div>

        <div  class="p-4 max-w-[80%] block mx-auto ">
          <UserForm user={user} onSave={handleProfileUpdate} />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
