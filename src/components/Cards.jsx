import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 px-20 py-10 items-center rounded-8xl">
      <div className="cardContainer w-1/2 h-[55vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <div className="absolute left-10 bottom-10 border-2 px-4 py-1 rounded-full border-[#CDEA68]"><h1 className="text-xl text-[#CDEA68] tracking-tighter">&copy;2019-2022</h1></div>
        </div>
      </div>
      <div className="cardContainer w-1/2 h-[55vh] flex gap-5">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            <button className="absolute left-10 bottom-10 border-2 px-4 py-1 rounded-full  text-xl tracking-tighter">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center">
        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
            <button className="absolute left-10 bottom-10 border-2 px-4 py-1 rounded-full  text-xl tracking-tighter">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
