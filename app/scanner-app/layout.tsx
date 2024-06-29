import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scanner App",
  description: "Scan the QR code for the clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
