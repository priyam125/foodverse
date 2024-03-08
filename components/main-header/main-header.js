import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../navLink/navLink";

export default function mainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:py-8 md:px-[10%]">
        <Link
          className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold tracking-[0.15rem] text-2xl uppercase"
          href="/"
        >
          <Image
            className="object-contain drop-shadow-3xl"
            src={logoImg}
            alt="Foodverse"
            width={100}
            height={100}
            priority
          />
          Foodverse
        </Link>

        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-xl">
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Your Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
