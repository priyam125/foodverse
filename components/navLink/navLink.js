"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link
      className={`${
        isActive
          ? `${classes.navlink} bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent`
          : ""
      } no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent ${
        classes.navlink
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
