import React, { useState } from "react";
import {motion} from "framer-motion";
function Featured() {
  const [ishovering, sethovering] = useState(false);
  const [ishovering2, sethovering2] = useState(false);
  return (
    <div className="w-full py-20 rounded-3xl">
      <div className="px-16 w-full border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl  tracking-tight">Featured projects</h1>
      </div>
      <div className="flex">
        <div className="w-1/2 text-left px-24 pt-20">
          <h1 className="text-2xl">FYDE</h1>
        </div>
        <div className="w-1/2 text-left px-8 pt-20">
          <h1 className="text-2xl">VISE</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="cards flex mt-5 gap-6 w-full">
          <div onMouseEnter={()=> sethovering(true)} onMouseLeave={()=> sethovering(false)}  className=" cardContainer relative w-1/2 h-[75vh]">
            <h1 className="absolute right-0 text-[#CDEA68] z-[10] leading-none text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden">
              {"FYDE".split("").map((item,index)=>(
                <motion.span  animate={ishovering ? ({y:"0"}) : {y:"100%"}} transition={{ease :[0.22,1,0.36,1] , delay: index*.06}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="../card1 FYDE.png"/>
            </div>
          </div>
          <div onMouseEnter={()=> sethovering2(true)} onMouseLeave={()=> sethovering2(false)} className=" cardContainer relative w-1/2 h-[75vh]">
            <h1 className="absolute right-full text-[#CDEA68] z-[10] leading-none text-8xl translate-x-1/2 top-1/2 -translate-y-1/2  overflow-hidden flex">
              {"VISE".split("").map((item,index)=>(
                <motion.span animate={ishovering2 ? ({y:"0"}) : {y:"100%"}} transition={{ease : [0.22,1,0.36,1] , delay: index*.06}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="../card2 VISE.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
