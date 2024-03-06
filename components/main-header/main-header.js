import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

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

        <nav className={classes.nav}>
          <ul className="list-none m-0 p-0 flex gap-6 text-xl">
            <li>
              <Link
                className="no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg"
                href="/meals"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg"
                href="/community"
              >
                Your Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
