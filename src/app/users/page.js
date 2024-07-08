"use client";
import UserTab from "../../components/layout/UserTab";
import { useProfile } from "../../components/UseProfile";
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "./../profile/profile.module.css";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/users").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
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
      <section
        id={Styles.form}
        className="mx-auto max-w-2xl mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4"
      >
        <div className="mt-8">
          {users?.length > 0 &&
            users.map((user) => (
              <div
                key={user._id}
                className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                  <div className="text-gray-900">
                    {!!user.username && <span>{user.username}</span>}
                    {!user.username && (
                      <span className="italic">نامی ثبت نشده است</span>
                    )}
                  </div>
                  <span className="text-gray-500">{user.email}</span>
                </div>
                <div>
                  <Link
                    className="button text-dark"
                    href={"/users/" + user._id}
                  >
                    ویرایش
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
