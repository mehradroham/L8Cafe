'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';


const About = () => {
   return (
      <section
         className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center'
         id='about'
      >
         {/* text */}
         <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='xl:pl-[135px]'
         >
            <h1 className='mb-9 text-primary'>  L8 روف کافه </h1>
            <p className='mb-8'>
            ...پنجاه متر بالاتر از شلوغی های شهر 
            </p>
            <p className='mb-10'>
               زیر آسمان روف کافه میتونید عاشقانه هایی با نوای خوش موسیقی یا خلوتی با عطر خوش قهوه داشته باشید . اینجا هیاهویی از جنس آواز در انتظار شماست 
            </p>
            
         </motion.div>
         {/* image */}
         <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
         >
            <Image
               src='/images/4.jpg'
               alt='about'
               width={705}
               height={771}
               className='hidden xl:flex'
            />
         </motion.div>
      </section>
   );
};

export default About;
