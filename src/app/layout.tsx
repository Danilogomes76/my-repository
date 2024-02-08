import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

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
      <Head>
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/102035834?v=4"
        />
      </Head>
      ;
      <body
        className={`${fira_code.className} bg-[url('/assets/bg.png')] bg-cover `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
