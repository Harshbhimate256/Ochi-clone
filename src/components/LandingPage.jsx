import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import {motion} from "framer-motion";
function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-20">
      <div className="textstructure mt-28 px-10">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:'8.5vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="w-[8.5vw] mr-[.5vw] h-[5.5vw] rounded-md relative bg-red-500 "></motion.div>
                )}
                <h1 className="heading text-[7.5vw] leading-[6.3vw]  font-medium uppercase ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 g-[20vw] flex justify-between items-center py-5 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1.1vw]">{item}</p>
        ))}
        <div className="start-btn flex justify-between items-center">
          <div className="border-[1px] cursor-pointer border-zinc-500 px-5 py-1 text-[1.1vw] uppercase rounded-full">
            Start the Project
          </div>
          <div className="border-[1px] cursor-pointer border-zinc-500 rounded-full ml-1 mt-[1px] w-10 h-10 flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
