import Link from "next/link";

import "../../globals.css";
import { Roboto } from "next/font/google";
import Navigation from "@/src/components/Navigation";
import TeamSwap from "@/src/components/TeamSwap";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "FYDU - Blockchain",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex min-w-screen`}>
        <aside className="w-60 bg-white drop-shadow-md">
          <div className="flex flex-col gap-8 px-4">
            <h4 className="p-6">FYDU</h4>

            <Navigation />

            <TeamSwap />
          </div>
        </aside>
        <main className="bg-blue-100 min-h-screen w-full flex justify-center align-middle">
          {children}
        </main>
      </body>
    </html>
  );
}
