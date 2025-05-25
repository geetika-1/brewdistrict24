import RootLayout from "@/components/layout/root-layout";
import type { Metadata } from "next";
import ClientBody from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
  title: "RXSOLS Chemicals",
  description:
    "Welcome to the neighbourhood. Our classic craft beers are brewed without fuss. Pure and honest. Damn delicious.",
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
      <ClientBody>
        <RootLayout>{children}</RootLayout>
      </ClientBody>
    </html>
  );
}
