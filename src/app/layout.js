import { Inter } from "next/font/google";
import "./globals.css";
import { dbConnect } from "@/lib/mongo";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Auth V5 stefan",
  description: "Learn Next-Auth Practically",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar/>
      <main className="p-2">{children}</main>
    </body>
  </html>
  );
}
