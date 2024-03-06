import React from 'react'
import { motion } from "framer-motion"
function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-24 rounded-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden pr-10'>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear" , duration: 10}} className='text-[24vw] tracking-tighter font-bold mb-8 uppercase leading-none'>We are Ochi </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear" , duration: 10}} className='text-[24vw] tracking-tighter font-bold mb-8 uppercase leading-none'> We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marque
