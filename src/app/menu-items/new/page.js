"use client";
import Left from "./../../../components/Icons/Left";
import Right from "./../../../components/Icons/Right";
import MenuItemForm from "../../../components/layout/MenuItemForm";
import UserTab from "./../../../components/layout/UserTab";
import { useProfile } from "./../../../components/UseProfile";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Styles from "./../../profile/profile.module.css";

export default function NewMenuItemPage() {
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving this tasty item",
      success: "Saved",
      error: "Error",
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

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

      <section
        id={Styles.form}
        className="mx-auto max-w-2xl mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4"
      >
        <div className="">
          <Link href={"/menu-items"} className="button">
            <Left />
            <span dir="rtl">نمایش همه آیتم ها</span>
          </Link>
        </div>
        <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
      </section>
    </div>
  );
}
