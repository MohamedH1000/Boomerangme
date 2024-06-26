import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between">
      {children}
      <div className="auth-asset">
        <Image
          src="/assets/login.jpg"
          alt="Auth image"
          width={500}
          height={500}
          className=" object-cover w-full h-[100%]"
        />
      </div>
    </main>
  );
}
