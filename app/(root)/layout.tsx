import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Boomerangme",
  description: "A system for gaining points",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`relative ${tajawal.className}`}>
      <NavBar />
      <div className="flex">
        <SideBar />
        <section>{children}</section>
      </div>
    </main>
  );
}
