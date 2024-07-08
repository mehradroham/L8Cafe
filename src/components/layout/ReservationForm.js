import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Background } from "@tsparticles/engine";

const ResevationForm = () => {
  

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_mehrad-rhm";
    const templateId = "template_mehrad-rhm";
    const publicKey = "o24T0gzLB3op3yjyb";

    const templateParams = {
      name: name,
      email: email,
      date: date,
      number: number,
      time: time,
      to_name: "Web Wizard",
      phone: phone,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
    
        toast.success("درخواست شما با موفقیت ارسال شد");
        setName("");
        setEmail("");
        setPhone("");
        setTime("");
        setDate("");
        setNumber("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.success("درخواست شما با خطا مواجه شد مجددا تلاش کنید");
      });
  };

  return (
    <>
    
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 2 }}
          className="mt-2"
        >
          <div
            
            class="flex  bg-dark  items-center justify-center p-12"
          >
            <div class="mx-auto w-full max-w-[550px]">
              <form onSubmit={handleSubmit} className="emailForm">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="fName"
                        class=" mb-3 block text-base font-medium text-primary"
                        dir="rtl"
                      >
                        نام
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="نام  "
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="lName"
                        class="mb-3 block text-base font-medium text-primary"
                        dir="rtl"
                      >
                        ایمیل
                      </label>
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ایمیل"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <label
                    for="guest"
                    class="mb-3 block text-base font-medium text-primary"
                    dir="rtl"
                  >
                    تعداد نفرات
                  </label>
                  <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    required={true}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    min="0"
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="phone"
                    class="mb-3 block text-base font-medium text-primary"
                    dir="rtl"
                  >
                    شماره تماس
                  </label>
                  <input
                    type="number"
                    name="phone"
                    required={true}
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="شماره تماس"
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="date"
                        class="mb-3 block text-base font-medium text-primary"
                        dir="rtl"
                      >
                        تاریخ
                      </label>
                      <input
                      
                        type="date"
                        name="date"
                        id="date"
                        required={true}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="time"
                        class="mb-3 block text-base font-medium text-primary"
                        dir="rtl"
                      >
                        زمان
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        required={true}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div>
               
                <button   type="submit" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  ذخیره  </span>
</button>
      

      
                  
                </div>
              </form>
            </div>
          </div>
        </motion.div>
    
    </>
  );
};

export default ResevationForm;
