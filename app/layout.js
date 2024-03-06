import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

const quicksand = Quicksand({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Foodeverse",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
