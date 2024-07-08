"use client";
import { useEffect, useState } from "react";
import UserTab from "../../components/layout/UserTab";
import { useProfile } from "../../components/UseProfile";
import DeleteButton from "../../components/DeleteButton";
import Styles from "./../profile/profile.module.css";

import toast from "react-hot-toast";
export default function CategoriesPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();
  const [editedCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }

  async function handleCategorySubmit(ev) {
    ev.preventDefault();
    const creationPromise = new Promise(async (resolve, reject) => {
      const data = { name: categoryName };
      if (editedCategory) {
        data._id = editedCategory._id;
      }
      const response = await fetch("/api/categories", {
        method: editedCategory ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setCategoryName("");
      fetchCategories();
      setEditedCategory(null);
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(creationPromise, {
      loading: editedCategory
        ? "...در حال بروز رسانی دسته بندی"
        : "...ساخت دسته بندی جدید",
      success: editedCategory
        ? "دسته بندی به روز رسانی شد"
        : "دسته بندی ساخته شد",
      error: "...خطایی رخ داده است مجددا تلاش کنید",
    });
  }

  async function handleDeleteClick(_id) {
    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/categories?_id=" + _id, {
        method: "DELETE",
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: "در حال حذف دسته بندی",
      success: "...حذف شد",
      error: "...خطایی رخ داده است مجددا تلاش کنید",
    });

    fetchCategories();
  }

  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <div>
      <div id={Styles.layer}></div>
      <div id={Styles.overlayer}></div>
      <div id={Styles.profilebg}></div>
      <div id={Styles.profileform}>
        <UserTab isAdmin={true} />
      </div>

      <section className=" absolute top-[190px] left-0 z-[500] mx-auto h-[750px]  bg-black opacity-70 w-[100%]  mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4">
        <div className="flex-column   w-full">
          <form onSubmit={handleCategorySubmit}>
            <div className="  w-full">
              <div className=" w-[400px] text-primary block mx-auto ">
                <label dir="rtl">
                  {editedCategory
                    ? "به روز رسانی دسته بندی"
                    : "ساخت دسته بندی جدید"}
                  {editedCategory && (
                    <>
                      : <b>{editedCategory.name}</b>
                    </>
                  )}
                </label>
                <input
                  value={categoryName}
                  onChange={(ev) => setCategoryName(ev.target.value)}
                  type="text"
                  className="w-[400px] block mx-auto text-black"
                ></input>
              </div>
              <div className="pb-2 w-[400px]  block mx-auto">
                <button
                  className=" border border-primary w-[400px]  block mx-auto"
                  type="submit"
                >
                  {editedCategory ? "به روز رسانی" : "ساخت"}
                </button>
                <button
                  className="w-[400px]  block mx-auto bg-gray-600"
                  type="button"
                  onClick={() => {
                    setEditedCategory(null);
                    setCategoryName("");
                  }}
                >
                  لغو
                </button>
              </div>
            </div>
          </form>
          <h2 dir="rtl" className="mt-8  text-xl text-light">
            دسته بندی های موجود
          </h2>
          <div className=" columns-3 mt-4">
            {categories?.length > 0 &&
              categories.map((c) => (
                <div
                  key={c._id}
                  className="bg-gray-100 text-dark fw-semibold rounded-xl p-2 px-4 columns-3 w-[300px] gap-1 mb-1 items-center"
                >
                  <div className="grow">{c.name}</div>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setEditedCategory(c);
                        setCategoryName(c.name);
                      }}
                    >
                      ویرایش
                    </button>
                    <DeleteButton
                      label="حذف"
                      onDelete={() => handleDeleteClick(c._id)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
