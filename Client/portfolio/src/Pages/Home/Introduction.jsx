import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <>
      <div className="introduction-section flex">
        <div className="introduction-left-container flex-1 flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-6">
            <h1 className="text-6xl">Hey</h1>
            <h1 className="text-4xl">I'm</h1>
          </div>
          <h1 className="text-7xl cursor-pointer transition-all ease-in-out hover:scale-105">
            Jaspreet Singh
          </h1>
          <div className="w-1/2 my-3">
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              necessitatibus explicabo, labore voluptatibus repellat ipsa iure
              possimus cupiditate incidunt sunt!
            </p>
          </div>
          <button className="bg-zinc-800 py-4 px-8 rounded-full text-lg text-white leave-message-button">
            Leave a message
          </button>
        </div>

        <div className="introduction-right-container flex-1 flex flex-col justify-center items-center">
          <div className="portrait-image-container w-3/4 h-3/4  border-2 border-zinc-800 flex flex-col justify-center items-center ">
            <div className="image-container w-3/4 h-3/4">
              <img src="/menPortrait.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className=" my-40">
        <div className="mern-stack-display-container  h-2/4 flex gap-6 justify-center items-center">
          <div className="mongodb-circle w-48 h-48 relative rounded-full overflow-hidden">
            <img src="/MongoDB.png" alt="" className="w-full h-full " />
            <span className=" text-8xl bg-zinc-800 cursor-pointer absolute top-0 w-full h-full flex justify-center items-center hover:bg-transparent hover:text-transparent transition-all ease-in-out ">
              M
            </span>
          </div>
          <div className="express-circle w-48 h-48 rounded-full overflow-hidden relative">
            <img src="/expressjs.png" alt="" className="w-full h-full " />
            <span className="text-8xl bg-zinc-800 cursor-pointer absolute top-0 w-full h-full flex justify-center items-center hover:bg-transparent hover:text-transparent transition-all ease-in-out ">
              E
            </span>
          </div>
          <div className="reactjs-circle w-48 h-48 rounded-full overflow-hidden relative">
            <img src="/reactjs.png" alt="" className="w-full h-full " />
            <span className="text-8xl bg-zinc-800 cursor-pointer absolute top-0 w-full h-full flex justify-center items-center hover:bg-transparent hover:text-transparent transition-all ease-in-out ">
              R
            </span>
          </div>
          <div className="nodejs-circle w-48 h-48 rounded-full overflow-hidden relative">
            <img src="/nodejs.png" alt="" className="w-full h-full " />
            <span className="text-8xl bg-zinc-800 cursor-pointer absolute top-0 w-full h-full flex justify-center items-center hover:bg-transparent hover:text-transparent transition-all ease-in-out ">
              N
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-10 relative">
          <div className="w-full h-1 bg-zinc-500 absolute top-5 "></div>
          <span className="text-4xl z-10 bg-white">Stack Developer</span>
        </div>
      </div>
    </>
  );
}

export default Introduction;
