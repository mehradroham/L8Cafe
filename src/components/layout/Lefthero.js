'use client';


import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';


export default function Lefthero(){
    return(
<motion.div
variants={fadeIn('up', 1.2)}
initial='hidden'
whileInView={'show'}
viewport={{ once: false, amount: 0.1 }}
className='absolute z-[5000] -top-[80px]  xl:-top-36'
>
<Image
className='w-[170px] h-[260px]  md:w-[300px] md:h-[330px] lg:w-[386px] lg:h-[404px]'
   src='/hero/coffee.png'
   alt='coffee'
   width={386}
   height={404}
/>
</motion.div>
    )
}
