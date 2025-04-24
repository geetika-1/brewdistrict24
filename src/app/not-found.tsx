import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-darkgray font-freudian mb-4">404</h1>
        <h2 className="text-3xl text-darkgray font-freudian uppercase mb-8">Page Not Found</h2>
        <p className="text-lg text-darkgray mb-8 max-w-md mx-auto">
          The page you're looking for can't be found. Perhaps you took a wrong turn, or maybe the page moved. Don't worry, let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-olive text-white rounded-md hover:bg-olive/90 transition-colors"
        >
          Back to Homepage
        </Link>
        <div className="mt-8">
          <p className="text-darkgray/60">
            Or check out our <Link href="/shop" className="text-olive hover:underline">beer shop</Link> while you're here?
          </p>
        </div>
      </div>
    </div>
  );
}
