"use client";
import Link from "next/link";
import Styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function UserTab({ isAdmin }) {
  const path = usePathname();

  return (
    <div id={Styles.admin} className="flex-nowrap  mx-auto">
      <Link
        className={path === "/profile" ? "active" : ""}
        id={Styles.Link1}
        href={"/profile"}
      >
        پروفایل
      </Link>

      {isAdmin && (
        <>
          <Link
            className={path === "/categories" ? "active" : ""}
            id={Styles.Link2}
            href={"/categories"}
          >
            دسته بندی
          </Link>
          <Link
            className={path === "/menu-items" ? "active" : ""}
            id={Styles.Link3}
            href={"/menu-items"}
          >
            منو آیتم ها
          </Link>
          <Link
            id={Styles.Link4}
            href={"/users"}
            className={path === "/users" ? "active" : ""}
          >
            کاربر ها
          </Link>
          <Link
            id={Styles.Link5}
            href={"/orders"}
            className={path === "/orders" ? "active" : ""}
          >
            سفارش ها
          </Link>
        </>
      )}
    </div>
  );
}
