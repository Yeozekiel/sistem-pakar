"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as React from "react";

interface IStudioNavProps {}

const studioLinks = [
  { href: "/", label: "Home" },
  { href: "/gejala", label: "Gejala" },
  { href: "/tingkat_depresi", label: "Tingkat Depresi" },
  { href: "/cf", label: "Certainty Factors" },
  { href: "/keputusan", label: "Keputusan" },
];

const MainNav: React.FunctionComponent<IStudioNavProps> = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 p-4 gap-2 flex bg-gray-600 justify-end'>
      {studioLinks.map(({ href, label }, idx) => (
        <Link
          key={idx}
          href={href}
          className={`block rounded-full text-base px-4 py-2 text-center ${
            pathname == href
              ? "text-white font-semibold bg-gray-500"
              : "font-normal bg-gray-600 text-white hover:bg-gray-200 hover:text-black hover:font-medium"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;