"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex w-full items-center justify-center px-5 py-3 md:px-14 lg:px-24">
      <div className="hidden w-full items-center justify-between md:flex">
        <Link
          href="/"
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          <span className="text-amber-400">m</span>iñoza
        </Link>
        <ul className="flex w-full items-center justify-center space-x-10 text-sm text-gray-500 dark:text-gray-400">
          <li>Sample</li>
        </ul>
      </div>
    </nav>
  );
}
