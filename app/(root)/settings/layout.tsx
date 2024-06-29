import SettingsNav from "@/components/Settings/SettingsNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Boomerangme",
  description: "settings for your personal account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SettingsNav />
      {children}
    </>
  );
}
