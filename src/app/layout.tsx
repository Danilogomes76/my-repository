import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danilo Gomes",
  description: "Portfólio",
  icons: {
    icon: "/daniloGomes.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${fira_code.className} bg-[url('/assets/bg.png')] bg-cover `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
