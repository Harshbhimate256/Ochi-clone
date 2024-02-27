import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //converted it to degree because math.atan2 give value in radians
      setrotate(angle-180); //angle- 180 so that it could invert the location.
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url(../eyes-bg.jpg)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-[#212121]  rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`,}}className="w-full h-8  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-7 h-7 bg-zinc-100 ml-1 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-[#212121]  rounded-full">
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`,}}className="w-full h-8  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-7 h-7 bg-zinc-100 ml-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
