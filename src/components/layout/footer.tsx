import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-sm text-center text-cream bg-darkgray">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>© {currentYear} BrewDistrict24 - All rights reserved</span>
          <span className="hidden mx-1 sm:inline">|</span>
          <Link href="/cookies" className="text-cream hover:text-olive transition-colors">
            Cookies
          </Link>
          <span className="hidden mx-1 sm:inline">|</span>
          <Link href="/privacy-policy" className="text-cream hover:text-olive transition-colors">
            Privacy policy
          </Link>
          <span className="hidden mx-1 sm:inline">|</span>
          <Link href="/return-policy" className="text-cream hover:text-olive transition-colors">
            Return policy
          </Link>
          <span className="hidden mx-1 sm:inline">|</span>
          <Link href="/general-conditions" className="text-cream hover:text-olive transition-colors">
            General conditions
          </Link>
        </div>

        <div className="mt-4 text-cream/60">
          Website by{" "}
          <Link
            href="https://dejongensvanboven.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-olive transition-colors"
          >
            De Jongens van Boven
          </Link>
        </div>
      </div>
    </footer>
  );
}
