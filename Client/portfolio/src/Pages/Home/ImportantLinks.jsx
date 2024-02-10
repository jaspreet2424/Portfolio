import React from "react";
import {config} from  'dotenv';

function ImportantLinks() {
  const links = [
    {
      id: 1,
      title: "LeetCode",
      link: "https://leetcode.com/jaspreetsingh8574/",
    },
    {
      id: 2,
      title: "Coding Ninja",
      link: "https://www.codingninjas.com/studio/profile/jaspreetsingh24",
    },
    {
      id: 3,
      title: "HackerRank",
      link: "https://www.hackerrank.com/profile/js9316713287",
    },
    {
      id: 4,
      title: "Github",
      link: "https://github.com/jaspreet2424?tab=repositories",
    },
    {
      id: 5,
      title: "GFG",
      link: "https://auth.geeksforgeeks.org/user/js93167jum5",
    },
    {
      id: 6,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jaspreet-singh-96b713224/",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col justify-center items-center my-32 ">
      <h1 className="text-6xl text-zinc-900 mb-24">Important Links</h1>
      <div className="important-links-cards grid grid-cols-3 grid-rows-2 gap-10 ">
        {links.map((item) => {
          return (
            <div
              className="each-card bg-gray-100 flex flex-col justify-between px-6 py-6 w-56 h-56 relative"
              key={item.id}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <div
                className="bg-color absolute w-full h-full bg-zinc-900 top-0 right-0"
                style={{
                  clipPath: "polygon(80% 0, 100% 0%, 100% 20%, 90% 10%)",
                }}
              ></div>
              <div
                className="bg-color absolute w-full h-full bg-gray-300 top-0 right-0"
                style={{
                  clipPath: "ellipse(43% 13% at 50% 50%)",
                }}
              ></div>
              <span className="text-end text-4xl text-gray-500 z-10">
                0{item.id}
              </span>
              <h1 className="text-center text-3xl text-zinc-900 z-10">
                {item.title}
              </h1>
              <a href={item.link} className="text-center z-10" target="_blank">
                <button className="rounded-full bg-zinc-900 text-white px-6 py-2 hover:bg-zinc-600">
                  View Now
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImportantLinks;
