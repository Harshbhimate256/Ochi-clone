import React, { useEffect } from "react";
import { useRef } from "react";

function About() {
  const btn = useRef(null);

  const zoomImg = useRef(null);
  const zoomContainer = useRef(null);
  useEffect(()=>{
    btn.current.addEventListener('mouseenter', ()=>{
      zoomImg.current.classList.add("scale-110")
      zoomContainer.current.classList.add("h-[64vh]")
      zoomContainer.current.classList.add("w-[49%]")
    });

    btn.current.addEventListener('mouseleave', ()=>{
      zoomContainer.current.classList.remove("h-[64vh]")
      zoomContainer.current.classList.remove("w-[49%]")
      zoomImg.current.classList.remove("scale-110")
    });
  })


  return (
    <div data-scroll data-scroll-speed='-.3' className='w-full py-20 rounded-3xl bg-[#CDEA68] text-black font-["Neue_Montreal"]'>
      <div className="text-[3.5vw] w-[90%] px-20  leading-[3.8vw]">
        <h1 >
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="hover-items border-t-[1px] flex w-full gap-5 border-zinc-500 mt-[3vw] px-16 py-7">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button ref={btn} className=" bg-zinc-900 flex gap-10 items-center text-white uppercase mt-8 text-xl rounded-full px-14 text-left py-5">Read More
          <div className="w-3 h-3 bg-white rounded-full "></div>
          </button>
        </div>
        <div ref={zoomContainer} className="w-[50%] h-[65vh]  rounded-2xl bg-[#bfda5d] overflow-hidden duration-[1.5s] ease-in-out transition-1000">
          <img ref={zoomImg} className=" w-full h-full rounded-2xl duration-[1.5s] ease-in-out transition-1000" src="../about-img.jpg"/>  
        </div>
      </div>
    </div>
  );
}

export default About;
