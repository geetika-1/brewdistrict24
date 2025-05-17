"use client";

import Header from "./header";
import Footer from "./footer";
import AgeVerificationModal from "../age-verification-modal";
import CookieConsent from "../cookie-consent";
import { useState, useEffect } from "react";
import Menu from "../Menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [mounted, setMounted] = useState(false);
    const [isMenu, setMenu] = useState(false);

  // Ensure the age verification modal only renders on the client side
  useEffect(() => {
    setMounted(true);
    console.log("isMenu:", isMenu);
  }, [isMenu]);
 
  useEffect(() => {
 
    console.log("isMenu:", isMenu);
  }, [isMenu]);
 

  return (
    <div className="flex flex-col min-h-screen">
      <Header setMenu={setMenu} isMenu={isMenu}/>
{isMenu ? <Menu isMenu={isMenu} /> : (
  <>
    <main className="flex-grow">{children}</main>
    <Footer />
  </>
)}
     
      {mounted && (
        <>
          <AgeVerificationModal />
          <CookieConsent />
        </>
      )}
    </div>
  );
}
