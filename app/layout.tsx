import type { Metadata } from "next";
import "@/styles/globals.scss";
import Navbar from "./_components/navbar";
import CPL from "@/public/CodingPowerLogo.webp";

export const metadata: Metadata = {
  title: "Coding Power Homepage",
  description: "The homepage of the Coding Power website.",
  keywords: ["Coding Power", "Coding", "Power", "Homepage"],
  icons: {
    icon: CPL.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
