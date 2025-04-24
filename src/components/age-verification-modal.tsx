"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const ageVerified = getCookie("ageVerified");
    if (!ageVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    // Set cookie for 30 days
    setCookie("ageVerified", "true", { maxAge: 60 * 60 * 24 * 30 });
    setIsOpen(false);
  };

  const handleReject = () => {
    // Redirect to Stiva for those under 18
    window.location.href = "https://stiva.nl/";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="w-full max-w-md p-8 text-center bg-cream rounded-lg shadow-xl">
        <h3 className="text-lg font-medium text-darkgray">ARE YOU 18 AND OVER?</h3>
        <h2 className="mt-2 mb-6 text-4xl font-bold uppercase text-darkgray font-freudian">
          WELCOME TO THE NEIGHBORHOOD
        </h2>

        <div className="flex flex-col gap-4 mt-6 sm:flex-row">
          <button
            onClick={handleVerify}
            className="w-full px-6 py-3 text-cream rounded-md bg-pink hover:bg-pink/90 transition-colors"
          >
            YES, I AM
          </button>
          <button
            onClick={handleReject}
            className="w-full px-6 py-3 text-cream rounded-md bg-darkgray hover:bg-darkgray/90 transition-colors"
          >
            NO, I'M NOT
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-darkgray">
          18+? Fantastic! You've come to the right place to discover and buy the most delicious beer in town.
        </p>
      </div>
    </div>
  );
}
