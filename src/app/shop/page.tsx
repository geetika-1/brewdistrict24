"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  details: string;
};

const products: Product[] = [
  {
    id: "imp001",
    name: "Imperial Stout",
    image: "/images/imperial-stout-can.png",
    price: "3.45",
    category: "beers",
    details: "ALC. 10% VOL - 330ML"
  },
  {
    id: "nei001",
    name: "NEIPA",
    image: "/images/neipa-can.png",
    price: "3.05",
    category: "beers",
    details: "ALC. 6% VOL - 330ML"
  },
  {
    id: "ame001",
    name: "American Blonde",
    image: "/images/american-blonde-can.png",
    price: "2.85",
    category: "beers",
    details: "5.5% VOL - 330ML"
  },
  {
    id: "ipa001",
    name: "IPA",
    image: "/images/ipa-can.png",
    price: "2.95",
    category: "beers",
    details: "ALC. 6% VOL - 330ML"
  },
  {
    id: "gl001",
    name: "Glass",
    image: "/images/logo.svg",
    price: "6.50",
    category: "glasses",
    details: "One size"
  },
  {
    id: "tas001",
    name: "Bag",
    image: "/images/logo.svg",
    price: "3.50",
    category: "merchandise",
    details: "One size"
  },
  {
    id: "tsh001m",
    name: "T-Shirt",
    image: "/images/logo.svg",
    price: "24.95",
    category: "merchandise",
    details: "S, M, L, XL, XXL"
  },
  {
    id: "hoo001m",
    name: "Hoodie",
    image: "/images/logo.svg",
    price: "45.00",
    category: "merchandise",
    details: "S, M, L, XL, XXL"
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-16 bg-cream">
      <div className="container max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center uppercase text-darkgray font-freudian">
          Welcome!
        </h1>

        <p className="max-w-3xl mx-auto mb-16 text-center text-darkgray">
          At Brewdistrict24, we bring craft beers straight to your door. Discover our carefully brewed selection, from characterful classics to surprising new flavors. Each beer tells our story of dedication to craftsmanship and quality. We hope you enjoy exploring our selection and toast to new discoveries. Thank you for choosing Brewdistrict24. Cheers!
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 mb-2 text-sm font-medium rounded-md ${
              activeCategory === "all"
                ? "bg-darkgray text-cream"
                : "bg-gray-200 text-darkgray hover:bg-gray-300"
            }`}
          >
            All products
          </button>
          <button
            onClick={() => setActiveCategory("beers")}
            className={`px-4 py-2 mb-2 text-sm font-medium rounded-md ${
              activeCategory === "beers"
                ? "bg-darkgray text-cream"
                : "bg-gray-200 text-darkgray hover:bg-gray-300"
            }`}
          >
            Beers
          </button>
          <button
            onClick={() => setActiveCategory("glasses")}
            className={`px-4 py-2 mb-2 text-sm font-medium rounded-md ${
              activeCategory === "glasses"
                ? "bg-darkgray text-cream"
                : "bg-gray-200 text-darkgray hover:bg-gray-300"
            }`}
          >
            Glasses
          </button>
          <button
            onClick={() => setActiveCategory("merchandise")}
            className={`px-4 py-2 mb-2 text-sm font-medium rounded-md ${
              activeCategory === "merchandise"
                ? "bg-darkgray text-cream"
                : "bg-gray-200 text-darkgray hover:bg-gray-300"
            }`}
          >
            Merchandise
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative flex items-center justify-center p-4 bg-cream/50 aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="mb-1 text-lg font-bold text-darkgray">{product.name}</h3>
                <p className="mb-4 text-sm text-darkgray/70">{product.details}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-darkgray">€{product.price}</span>
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-md bg-pink hover:bg-pink/90 transition-colors">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
