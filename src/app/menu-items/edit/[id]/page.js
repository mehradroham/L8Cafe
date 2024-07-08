"use client";
import DeleteButton from "./../../../../components/DeleteButton";
import Left from "./../../../../components/Icons/Left";
import MenuItemForm from "./../../../../components/layout/MenuItemForm";
import UserTab from "./../../../../components/layout/UserTab";
import { useProfile } from "./../../../../components/UseProfile";
import EditableImage from "./../../../../components/layout/EditableImage";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Styles from "./../../../profile/profile.module.css";

export default function EditMenuItemPage() {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = { ...data, _id: id };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "در حال ذخیره آیتم",
      success: "ذخیره شد",
      error: "ارور",
    });

    setRedirectToItems(true);
  }

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });
      if (res.ok) resolve();
      else reject();
    });

    await toast.promise(promise, {
      loading: "در حال حذف",
      success: "حذف شده",
      error: "ارور",
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
    <>
      <div id={Styles.layer}></div>
      <div id={Styles.overlayer}></div>
      <div id={Styles.profilebg}></div>
      <div id={Styles.profileform}>
        <UserTab isAdmin={true} />
      </div>
      <section className=" absolute top-[230px] left-[0px] z-[3000] w-[100%] mx-auto max-w-2xl mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4">
        <div className="max-w-2xl mx-auto mt-8">
          <Link href={"/menu-items"} className="button">
            <Left />
            <span className="text-light">نمایش همه آیتم ها</span>
          </Link>
        </div>

        <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
        <div className="max-w-md mx-auto mt-2">
          <div className="max-w-xs ml-auto pl-4 text-purple-950">
            <DeleteButton
              label="Delete this menu item"
              onDelete={handleDeleteClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
