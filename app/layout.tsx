import type { Metadata } from "next";
import "./globals.css";
import SideNav from "@/components/sideNav";

export const metadata: Metadata = {
  title: "Invoice App",
  description: "This app was creted as part of YouVerify's assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden`}
      >
        <div className="flex">
          <SideNav/>
          <div className='bg-[#F5F6FA] w-full p-5 md:p-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
