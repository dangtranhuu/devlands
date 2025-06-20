import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Live2DWidget } from "next-live2d";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaviOS",
  description: "DaviOS playground MacOS by Davis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Live2DWidget modelName="rem_2" />
      </body>
    </html>
  );
}
