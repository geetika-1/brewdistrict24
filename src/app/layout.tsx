import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/layout/root-layout";

export const metadata: Metadata = {
  title: "BrewDistrict24 | Classic craft beers, brewed without fuss",
  description: "Welcome to the neighbourhood. Our classic craft beers are brewed without fuss. Pure and honest. Damn delicious.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
