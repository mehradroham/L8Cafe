'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Lefthero from "./Lefthero"


const menu = [
   {
      img: '/cafepics/fries.jpg',
      title: 'چیپس و پنیر',
      price: '۱۹۰,۰۰۰',
   },
   {
      img: '/cafepics/pasta.jpg',
      title: 'پاستا بیف آلفردو',
      price: '۳۹۵,۰۰۰',
   },
   {
      img: '/cafepics/salad.jpg',
      title: 'سالاد سزار',
      price: '۳۲۰,۰۰۰',
   },
   {
      img: '/cafepics/drink1.jpg',
      title: 'کارامل ماکیاتو',
      price: '۱۱۵,۰۰۰',
   },
   {
      img: '/cafepics/pizza.jpg',
      title: 'L8 پیتزا مخصوص ',
      price: '۴۶۰,۰۰۰',
   },
   {
      img: '/cafepics/burger.jpg',
      title: ' کلاسیک برگر',
      price: '۳۵۰,۰۰۰',
   },
   {
      img: '/cafepics/burger2.jpg',
      title: 'چوریتسو برگر',
      price: '۴۳۰,۰۰۰',
   },
   {
      img: '/cafepics/cafe.jpg',
      title: 'کاپوچینو',
      price: '۱۰۵,۰۰۰',
   },
];

const Menu = () => {
   return (
      <section className='relative py-12 xl:py-24 bg-menu bg-[#F2F2F2]' id='menu'>

<Lefthero/>

         <div className='container '>
            <div className='ml-[30px]'>

            <motion.div
               variants={fadeIn('up', 0.3)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='max-w-[570px] mx-auto text-center xl:text-right '
            >
               <h2  className='mb-3 ml-[35px] text-xl text-primary'> L8 پرفروش های کافه </h2>
               <Link
               
                  href='/menus'
                  className=' text-green ml-[35px] flex justify-center xl:justify-end items-center mb-16'
               >
               مشاهده لیست کامل
                  <IoIosArrowRoundForward className='text-3xl' />
               </Link>
            </motion.div>
            </div>
            
            {/* menu grid */}
            <div className='hidden lg:block'>    <motion.div
               variants={fadeIn('up', 0.4)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4'
            >
               {menu.map((item, index) => {
                  return (
                     <div
                        key={index}
                        className='md:max-w-[270px]   bg-white shadow-priamry mx-auto xl:mx-0 group'
                     >
                        {/* imgs */}
                        <div className='overflow-hidden'>
                           <Image
                              src={item.img}
                              width={270}
                              height={270}
                              alt={item.title}
                              className='group-hover:scale-110 transition-all duration-300  min-h-[270px] max-h-[270px]'
                           />
                        </div>
                        {/* title & prize */}
                        <div dir='rtl' className='pt-[20px] pb-[28px] px-[30px]'>
                           
                              <h3 className='font-poppins text-black mb-[14px]'>
                                 {item.title}
                              </h3>
                           
                           <div className='text-xl font-spoppins font-semibold text-orange'>
                              {item.price}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </motion.div></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] md:grid-cols-3 md:gap-[15px] lg:hidden'>
            {menu.map((item, index) => {
                  return (
                     <div
                        key={index}
                        className='md:max-w-[270px]   bg-white shadow-priamry mx-auto xl:mx-0 group'
                     >
                        {/* imgs */}
                        <div className='overflow-hidden'>
                           <Image
                              src={item.img}
                              width={270}
                              height={270}
                              alt={item.title}
                              className='group-hover:scale-110 transition-all duration-300  min-h-[270px] max-h-[270px]'
                           />
                        </div>
                        {/* title & prize */}
                        <div dir='rtl' className='pt-[20px] pb-[28px] px-[30px] text-center mr-[20px]'>
                           
                              <h3 className='font-poppins text-black mb-[14px]'>
                                 {item.title}
                              </h3>
                           
                           <div className='text-xl font-spoppins font-semibold text-orange'>
                              {item.price}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
        
         </div>
      </section>
   );
};

export default Menu;
