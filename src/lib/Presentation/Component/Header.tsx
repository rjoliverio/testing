"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full ${
        navBg
          ? "bg-white/70 drop-shadow-md backdrop-blur-md transition duration-300 ease-in-out dark:bg-black/70"
          : " bg-gray-100 drop-shadow-none dark:bg-black"
      }`}
    >
      <ul className="flex w-full items-center justify-center space-x-10 text-sm text-gray-500 dark:text-gray-400">
        <li>Sample</li>
      </ul>
    </header>
  );
}
