import { React, useState, useEffect } from "react";
import Introduction from "./Introduction";
import Contact from "./Contact";
import ImportantLinks from "./ImportantLinks";
import Navbar from "../../Components/Navbar";

function Home() {
  const [scrollToTopArrow, setScrollToTopArraow] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollButton = () => {
    if (window.scrollY >= 400) {
      return setScrollToTopArraow(true);
    } else {
      return setScrollToTopArraow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollButton);
  }, [scrollButton]);

  return (
    <>
      <button
        className={`${
          scrollToTopArrow ? "fixed bottom-12 right-4 z-20" : "hidden"
        } bg-zinc-600 py-3 px-4 rounded-full`}
        onClick={handleClick}
      >
        <i className="fa-solid fa-arrow-up text-3xl"></i>
      </button>
      
      <Navbar />
      <Introduction />
      <ImportantLinks />
      <Contact />
    </>
  );
}

export default Home;
