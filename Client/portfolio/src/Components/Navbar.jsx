import { React, useEffect, useState } from "react";

function Navbar() {
  const [navbarBG, setNavbarBG] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbarBG(true);
    } else {
      setNavbarBG(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [changeBackground]);

  return (
    <>
      <nav
        className={`bg-${
          navbarBG ? "zinc-800" : (navbar) ? 'zinc-700' : 'zinc-400'
        } flex justify-end items-center px-10 fixed h-16 transition-all ease-in-out top-0 left-0 right-0 bottom-0 z-50`}
      >
        <ul className={`${(navbar) ? 'absolute flex flex-col items-end w-full h-fit px-4 py-4 top-16 left-0 right-0 bg-zinc-800 transition-all ease-in-out' : 'flex py-5 justify-end '}`}>
          <li>
            <a
              href="/"
              className={`mx-3 text-${navbarBG ? 'white hover:border-b hover:border-white' : 'black rounded-full hover:shadow-lg hover:shadow-zinc-700'} text-xl  px-5 py-3 `}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`mx-3 text-${navbarBG ? 'white hover:border-b hover:border-white' : 'black rounded-full hover:shadow-lg hover:shadow-zinc-700'} text-xl   px-5 py-3`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`mx-3 text-${navbarBG ? 'white hover:border-b hover:border-white' : 'black rounded-full hover:shadow-lg hover:shadow-zinc-700'} text-xl   px-5 py-3 `}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`mx-3 text-${navbarBG ? 'white white hover:border-b hover:border-white' : 'black rounded-full  hover:shadow-lg hover:shadow-zinc-700'} text-xl  
              px-5 py-3`}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`mx-3 text-${navbarBG ? 'white white hover:border-b hover:border-white' : 'black rounded-full  hover:shadow-lg hover:shadow-zinc-700'} text-xl  
              px-5 py-3`}
            >
              About
            </a>
          </li>
        </ul>
        <button
          className="bg-gray-400 lg:hidden xl:hidden px-3 py-2 rounded-full md:hidden"
          onClick={() => setNavbar(!navbar)}
        >
          <i className="fa-solid fa-bars text-white text-3xl cursor-pointer"></i>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
