"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented to cookies
    const consentGiven = getCookie("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "accepted", { maxAge: 60 * 60 * 24 * 365 });
    setIsVisible(false);
  };

  const declineCookies = () => {
    setCookie("cookieConsent", "declined", { maxAge: 60 * 60 * 24 * 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg md:p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="p-4 bg-white rounded-lg">
          <h3 className="mb-2 text-lg font-bold text-darkgray">THIS WEBSITE USES COOKIES</h3>
          <p className="mb-4 text-sm text-darkgray">
            We use cookies to personalise content and ads, to provide social media features and to
            analyse our traffic. We also share information about your use of our site with our
            social media, advertising and analytics partners who may combine it with other
            information that you've provided to them or that they've collected from your use of
            their services.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-start">
            <button
              onClick={declineCookies}
              className="w-full px-6 py-2 text-darkgray bg-gray-200 rounded sm:w-auto hover:bg-gray-300"
            >
              DECLINE
            </button>
            <button
              onClick={acceptCookies}
              className="w-full px-6 py-2 text-white bg-darkgray rounded sm:w-auto hover:bg-darkgray/80"
            >
              ACCEPT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
