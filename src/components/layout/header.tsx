// components/Header.js
import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    // <header className="bg-[#617c70] text-[#f2f1e5] py-4 px-6">
    //   <div className="flex items-center mx-auto">
     
    
    //     <div className="flex items-center justify-center w-full">
      
    //   <div className="flex-grow flex flex-col-reverse h-px w-[50%] bg-white"> 
    //         <div className="flex items-center gap-4 text-sm font-bold mb-4">
    //           <span className="cursor-pointer">HOME</span>
    //           <FaInstagram className="cursor-pointer" />
    //           <FaLinkedinIn className="cursor-pointer" />
    //           <FaFacebookF className="cursor-pointer" />
    //           <FiMapPin className="cursor-pointer" />
    //         </div></div>
    
    //   <img src="/images/download.svg" alt="Divider Icon" className="h-24 px-8 whitespace-nowrap text-white " />

    //   <div className="flex-grow flex flex-col-reverse items-end w-[50%] h-px bg-white">  
    //         <div className="flex items-center gap-4 text-sm font-bold mb-4">
    //           <div className="relative">
    //             <span className="text-[10px] absolute -top-4 left-1 text-white font-extrabold rotate-[-15deg]">
    //               CLICK<br />THE CAN
    //             </span>
    //             <button className="bg-[#d998b5] text-black px-4 py-2 rounded-full font-bold text-sm">
    //               ORDER NOW
    //             </button>
    //           </div>
    //           <FiShoppingCart className="text-2xl cursor-pointer" />
    //           <span className="cursor-pointer">MENU</span>
    //           <HiOutlineMenu className="text-2xl cursor-pointer" />
    //           <div className="border border-white px-2 py-1 rounded-full cursor-pointer">EN</div>
    //         </div></div>
    // </div>
        
    
    //   </div>

 


    // </header>
    <header className="text-[#f2f1e5] py-4 px-6 bg-[#617c70] md:bg-[#617c70] bg-[rgba(0,0,0,0.05)] md:relative fixed md:static z-[20] md:z-auto w-full">
    <div className="flex flex-col md:flex-row items-center mx-auto justify-between relative">
      {/* Mobile Layout */}
      <div className="flex md:hidden w-full justify-between items-center mb-4">
        <button className="bg-[#d998b5] text-black px-4 py-2 rounded-full font-bold text-sm">
          ORDER NOW
        </button>
        <div className="flex items-center gap-4">
          <FiShoppingCart className="text-2xl cursor-pointer" />
          <HiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#617c70] text-white shadow-lg z-50 p-6 transition-all duration-300">
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
          <ul className="mt-12 space-y-4 font-bold text-sm uppercase">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">LinkedIn</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Find Us</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">EN</li>
          </ul>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center w-full">
        <div className="flex-grow flex flex-col-reverse h-px w-[50%] bg-white">
          <div className="flex items-center gap-4 text-sm font-bold mb-4">
            <span className="cursor-pointer">HOME</span>
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FiMapPin className="cursor-pointer" />
          </div>
        </div>

        <img
          src="/images/download.svg"
          alt="Divider Icon"
          className="h-24 md:h-24 h-16 px-8 whitespace-nowrap text-white"
        />

        <div className="flex-grow flex flex-col-reverse items-end w-[50%] h-px bg-white">
          <div className="flex items-center gap-4 text-sm font-bold mb-4">
            <div className="relative">
         
              <button className="bg-[#d998b5] text-black px-4 py-2 rounded-full font-bold text-sm">
                ORDER NOW
              </button>
            </div>
            <FiShoppingCart className="text-2xl cursor-pointer" />
            <span className="cursor-pointer">MENU</span>
            <HiOutlineMenu className="text-2xl cursor-pointer" />
            <div className="border border-white px-2 py-1 rounded-full cursor-pointer">EN</div>
          </div>
        </div>
      </div>
    </div>
  </header>
  

  );
}
