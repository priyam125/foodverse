import Link from "next/link";
import { Montserrat } from "next/font/google";
import ImageSlideshow from "@/components/images/image-slideshow";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  return (
    <>
      <header
        id="header"
        className="flex justify-between gap-12 my-12 mx-auto w-[90%] max-w-[75rem]"
      >
        <div id="slideshow" className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div id="hero" className="space-y-4">
          <div className={`text-2xl text-[#ddd6cb] space-y-8`}>
            <h2
              className={`${montserrat.className} tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent`}
            >
              Step into Foodverse
            </h2>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex text-2xl gap-4 items-center cta">
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col items-center text-center max-w-[50 rem] w-[80%] my-8 mx-auto text-2xl text-[#ddd6cb] space-y-8">
          <h2>How it works</h2>
          <p>
            Foodverse is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodverse is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className="flex flex-col items-center text-center max-w-[50 rem] w-[80%] my-8 mx-auto text-2xl text-[#ddd6cb] space-y-8">
          <h2>Why Foodverse?</h2>
          <p>
            Foodverse is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodverse is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
