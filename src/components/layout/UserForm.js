"use client";
import AddressInputs from "./AddressInputs";
// import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "./../UseProfile";
import { useState } from "react";
import Styles from "./../../app/profile/profile.module.css";
import EditableImage from "./EditableImage";

export default function UserForm({ user, onSave }) {
  const [username, setuserName] = useState(user?.username || "");
  //   const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [postalcode, setPostalcode] = useState(user?.postalCode || "");
  const [vahed, setVahed] = useState(user?.vahed || "");
  const [pelak, setPelak] = useState(user?.pelak || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const [image, setImage] = useState(user?.image || "");
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "address") setAddress(value);
    if (propName === "postalcode") setPostalcode(value);
    if (propName === "vahed") setVahed(value);
    if (propName === "pelak") setPelak(value);
  }

  return (
    <form
      id={Styles.form}
      class=" mx-auto max-w-2xl mt-10 md:mt-6 border-2 border-slate-500 rounded-md p-4"
      onSubmit={(ev) =>
        onSave(ev, {
          username,
          image,
          phone,
          address,
          postalcode,
          vahed,
          pelak,
        })
      }
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        {/* <EditableImage link={image} setLink={setImage} /> */}

        <div class="w-full  px-3 mb-6  relative">
          <label
            class="block  absolute  -top-3 focus:-top-5 right-0 uppercase tracking-wide text-primary text-xs font-bold mb-2"
            for="grid-first-name"
          >
            نام کاربری
          </label>
          <input
            class="appearance-none rounded-full block w-full bg-gray-200 text-primary border   py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(ev) => setuserName(ev.target.value)}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 relative">
          <label
            class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
            for="grid-password"
          >
            ایمیل
          </label>
          <input
            class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="ایمیل"
            disabled={true}
            value={user?.email}
          />
        </div>

        <AddressInputs
          addressProps={{ phone, address, postalcode, vahed, pelak }}
          setAddressProp={handleAddressChange}
        />

        <div class="w-full flex mt-6  justify-center">
          {loggedInUserData.admin && (
            <div>
              <label
                className="p-2 inline-flex items-center gap-2 mb-2"
                htmlFor="adminCb"
              >
                <input
                  id="adminCb"
                  type="checkbox"
                  className=""
                  value={"1"}
                  checked={admin}
                  onChange={(ev) => setAdmin(ev.target.checked)}
                />
                <span>Admin</span>
              </label>
            </div>
          )}
          <button
            type="submit"
            class="bg-violet-500 shadow-xl hover:shadow-none duration-300 w-1/2 py-2 rounded-md text-white  text-xl cursor-pointer  active:bg-violet-600"
          >
            ذخیره اطلاعات{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
