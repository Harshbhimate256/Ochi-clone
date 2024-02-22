import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-28'>
        {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
            return <div className='masker px-10 '>
                        <h1 className='text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium uppercase font-["Test Founders Grotesk X-Cond SmBd"]'>{item}</h1>
                    </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-3 px-10'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-[1.1vw]'>{item}</p>
        ))}
        <div className='start-btn flex'>
            <div className='border-[1px] border-zinc-500 px-2 py-1 text-[1.1vw] uppercase rounded-full'>Start the Project</div>
            <div className='border-[1px] border-zinc-500 rounded-full ml-1 mt-[1px] w-6 h-6 flex items-center justify-center'><GoArrowUpRight /></div>
            </div>
      </div>
    </div>
  )
}

export default LandingPage
