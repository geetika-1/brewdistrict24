
"use client";
import React, { useState } from "react";

const images = [
  {
    src: "https://chemicals.dubichem.com/cdn/shop/files/dubichemrxsol.jpg?v=1742915178&width=550",
    title: "Deck Engine",
    description: "High-quality cleaning agents for industrial and marine use.",
  },
  {
    src: "	https://chemicals.dubichem.com/cdn/shop/files/fuel_treatment.jpg?v=1742916967&width=750",
    title: "Water Treatment",
    description: "Specially formulated chemicals for reverse osmosis systems.",
  },
  {
    src: "https://chemicals.dubichem.com/cdn/shop/files/ro_chemicals.jpg?v=1742917555&width=1100",
    title: "Rigs & Oil Fields",
    description: "Purify and maintain your water treatment plants efficiently.",
  },
    {
    src: "https://chemicals.dubichem.com/cdn/shop/files/metaltreatment.jpg?v=1742917215&width=1100",
    title: "Metal Protections",
    description: "Marine-grade solutions for maintenance and cleaning.",
  },

  {
    src: "https://chemicals.dubichem.com/cdn/shop/files/ro_chemicals.jpg?v=1742917555&width=375",
    title: "RO Solutions",
    description: "Powerful and reliable solutions for clean water systems.",
  },
];

const ExpandingGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden relative container mx-auto px-2 md:px-4 gap-4 md:gap-x-4">
      {images.map(({ src, title, description }, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative overflow-hidden aspect-[9.6/12] group bg-black text-white transition-all duration-500 grow rounded-2xl`}
            style={{
        // flex: hoveredIndex !== null
        //         ? isHovered
        //           ? "0 0 60%"
        //           : "0 0 10%"
        //         : "0 0 20%",
    
              flexGrow: isHovered ? 2 : 1,
              flexShrink: 0,
              flexBasis: 0,
              maxHeight: "100vh",
            }}
          >
     
            <img
              src={src}
              alt={title}
              className="h-full w-full object-left"
            />

         {!isHovered &&<div className="absolute bottom-4 left-8 -translate-y-1/2 transform -rotate-90 origin-left z-10 hidden md:block">
  <span className="text-white text-4xl font-bold whitespace-nowrap w-max block">
   {title}
  </span>
</div>}

            {isHovered || (
              <div className="absolute bottom-6 left-4 z-20 md:hidden">
                <span className="text-white text-2xl font-bold">
                  {title}
                </span>
              </div>
            )}
             

     
            {isHovered && (
             <div className="absolute inset-0 bg-black/60 text-white z-10 flex flex-col justify-between p-6">
                <div className="text-left text-2xl font-semibold">{title}</div>
                <p className="text-sm mt-2 flex-1">{description}</p>
                <button className="mt-4 self-start bg-white text-black px-4 py-2 rounded transition hover:text-[#F8F7E5] hover:bg-[#1D1D1D]">
                  Learn More
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpandingGallery;
