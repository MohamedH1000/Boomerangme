import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import { getCurrentUser } from "@/lib/action/user.action";
import { redirect } from "next/navigation";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Boomerangme",
  description: "A system for gaining points",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <>
      <main className={`relative ${tajawal.className}`}>
        <NavBar currentUser={currentUser} />
        <div className="flex">
          <SideBar currentUser={currentUser} />
          <section className="w-full min-h-screen bg-[#F7F7F8]">
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
