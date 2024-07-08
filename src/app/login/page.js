"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import styles from "./page.module.css";
import Link from "next/link";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInprogress] = useState(false);
  async function handleFormSubmit(event) {
    await event.preventDefault();
    setLoginInprogress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInprogress(false);
  }
  return (
    <>
      <div id={styles.layerheader}></div>
      <section class="  bg-lightdark">
        <div class="container overflow-y-hidden h-full p-10">
          <div class="flex h-full flex-wrap items-center  overflow-y-hidden justify-center text-white ">
            <div class=" w-1/3 overflow-y-hidden">
              <div class="block rounded-lg  overflow-y-hidden shadow-lg dark:bg-neutral-800">
                <div class="g-0 lg:flex overflow-y-hidden flex-sm-wrap flex-lg-nowrap lg:flex-grow-0">
                  <div
                    className="h-[550px] overflow-y-hidden"
                    id={styles.bg}
                  ></div>
                  <div id={styles.container}></div>
                  <div id={styles.container2}></div>
                  <div className="h-[550px] overflow-y-hidden" id={styles.form}>
                    <div class="md:mx-6 ">
                      <div class="text-center">
                        <Image
                          id={styles.loginimg}
                          class="ml-auto mr-auto w-48"
                          src="/images/login-logo.png"
                          alt="logo"
                          width={200}
                          height={200}
                        />
                        <h4 class="mb-2 mt-1 pb-1 text-2xl  text-primary font-semibold">
                          ورود
                        </h4>
                      </div>

                      <form
                        id={styles.test}
                        className=" bg-transparent "
                        onSubmit={handleFormSubmit}
                      >
                        <p
                          dir="rtl"
                          id={styles.registertext2}
                          class="block w-60  ml-auto mr-auto "
                        >
                          با استفاده از نام کاربری و رمز عبور خود وارد شوید
                        </p>

                        <div
                          class="relative block w-60  ml-auto mr-auto mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            disabled={loginInProgress}
                            name="email"
                            class="peer block min-h-[auto] w-60 h-10  focus:outline-none focus:ring focus:border-white bg-black bg-opacity-70 px-3 py-[0.50rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                          />
                          <label
                            for="exampleFormControlInput1"
                            class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >
                            نام کاربری
                          </label>
                        </div>

                        <div
                          class="relative block w-60  ml-auto mr-auto mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            type="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            disabled={loginInProgress}
                            name="password"
                            class="peer block min-h-[auto] w-60 h-10 focus:outline-none focus:ring focus:border-white bg-black bg-opacity-70 px-3 py-[0.5rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="رمز عبور"
                          />
                          <label
                            for="exampleFormControlInput11"
                            class="pointer-events-none absolute dir:rtl  right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >
                            رمز عبور
                          </label>
                        </div>

                        <div class="mb-2 pb-1 pt-1 block w-60  ml-auto mr-auto ">
                          <button
                            class="bg-primary h-10 flex justify-center hover:bg-secondary  w-60  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white   fw-semibold shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="submit"
                            disabled={loginInProgress}
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            ورود
                          </button>
                        </div>

                        <div class="flex-column  text-center font-semibold ">
                          <p>کاربر جدید هستید؟</p>
                          <Link href={"/register"}>
                            {/* <p class="mt-2 ml-40"> اکانتی ندارید؟</p> */}
                            <button
                              id={styles.loginbtn}
                              type="button"
                              class="inline-block w-40  border-2 border-white hover:text-primary px-2 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                              data-twe-ripple-init
                              data-twe-ripple-color="light"
                            >
                              ثبت نام
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
