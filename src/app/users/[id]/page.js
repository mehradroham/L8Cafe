"use client";
import Styles from "./id.module.css";
import UserTab from "../../../components/layout/UserTab";
import { useProfile } from "../../../components/UseProfile";
import Link from "next/link";
import { useEffect, useState } from "react";



import UserForm from "../../../components/layout/UserForm";

import { useParams } from "next/navigation";

import toast from "react-hot-toast";

export default function EditUserPage() {
  const { loading, data } = useProfile();
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/profile?_id=" + id).then((res) => {
      res.json().then((user) => {
        setUser(user);
      });
    });
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _id: id }),
      });
      if (res.ok) resolve();
      else reject();
    });

    await toast.promise(promise, {
      loading: "در حال ذخیره کاربر",
      success: "کاربر ذخیره شد",
      error: "خطایی رخ داده است مجددا تلاش کنید",
    });
  }

  if (loading) {
    return "در حال بارگزاری پروفایل";
  }

  if (!data.admin) {
    return "شما ادمین نیستید";
  }

  return (
    <div>
      <div id={Styles.layer}></div>
      <div id={Styles.overlayer}></div>
      <div id={Styles.profilebg}></div>
      <div id={Styles.profileform}></div>

      <section id={Styles.form} className="mt-8 mx-auto max-w-2xl z-[3500]">
        <UserTab isAdmin={true} />
        <div className="mt-8 ">
          <UserForm user={user} onSave={handleSaveButtonClick} />
        </div>
      </section>
    </div>
  );
}
