// components/Header.js
import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

  interface HeaderProps {
  setMenu: (value: boolean) => void;
  isMenu: boolean;
}
export default function Header({setMenu,isMenu}: HeaderProps) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
const [scrollY, setScrollY] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY > 10); 
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleClick = () => {
     console.log("Menu button clicked");
    setMenu(!isMenu);
  };


  return (
   
    <header className={`text-[#f2f1e5] py-4 px-6 fixed z-[20] w-full transition-all duration-300 ${scrollY ? "bg-white/20 backdrop-blur-md backdrop-saturate-150" : "bg-transparent"} ${isMenu ? "bg-[#F8F7E5]":"bg-[#617c70]"}`}>
    <div className="flex flex-col md:flex-row items-center mx-auto justify-between relative">
      {/* Mobile Layout */}
      <div className="flex md:hidden w-full justify-between items-center mb-4">
        <button className={`bg-[#d998b5] font-Freudian text-black px-4 py-2 rounded-full font-bold text-sm hover:text-[#F8F7E5] hover:bg-black ${isMenu ? "bg-[#FE5D26]" : "bg-[#d998b5]"}`}>
          ORDER NOW
        </button>
    <div className={`h-24 md:h-24 h-16 flex items-center justify-center ${scrollY ? "bg-black" : "bg-transparent px-8"}`}>
  <img
    src={!isMenu ? "/images/download.svg" : "/images/logo-1.svg"}
    alt="Divider Icon"
    className="h-full w-auto whitespace-nowrap"
  />
</div>
        <div className="flex items-center gap-4">
          <FiShoppingCart className={`text-4xl cursor-pointer border rounded-full px-2 py-1  ${isMenu?"text-[#1D1D1D] border-[#1D1D1D]":"text-[#F8F7E5]  border-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} />
         {!isMenu?<HiOutlineMenu
            className={`text-2xl cursor-pointer ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} 
            onClick={handleClick}
          />:  <IoCloseOutline
            className={`text-2xl cursor-pointer ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} 
            onClick={handleClick}/>} 
        
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {/* {sidebarOpen && (
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
      )} */}

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center w-full">
        <div className="flex-grow flex flex-col-reverse h-px w-[50%] bg-white">
          <div className="flex items-center gap-4 text-sm font-bold mb-4">
            <span className={`cursor-pointer font-Freudian hover:opacity-60 transition-opacity duration-300 ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"}`}>HOME</span>
            <FaInstagram className={`cursor-pointer hover:opacity-60 transition-opacity duration-300 ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"}`} />
            <FaLinkedinIn className={`cursor-pointer hover:opacity-60 transition-opacity duration-300 ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"}`} />
            <FaFacebookF className={`cursor-pointer hover:opacity-60 transition-opacity duration-300 ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"}`}/>
            <FiMapPin className={`cursor-pointer hover:opacity-60 transition-opacity duration-300 ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"}`} />
          </div>
        </div>
 <img
          src={!isMenu ? "/images/download.svg" : "/images/logo-1.svg"}
          alt="Divider Icon"
          className={`h-24 md:h-24 h-16 whitespace-nowrap text-white ${scrollY ? "bg-black" : "bg-transparent px-8"}`}
        />
      

        <div className="flex-grow flex flex-col-reverse items-end w-[50%] h-px bg-white">
          <div className="flex items-center gap-4 text-sm font-bold mb-4">
            <div className="relative">
         
              <button className={`bg-[#d998b5] font-Freudian  px-4 py-2 rounded-full  text-sm hover:bg-black ${isMenu ? "bg-[#FE5D26]" : "bg-[#d998b5]"}`}>
                ORDER NOW
              </button>
            </div>
            <FiShoppingCart className={`text-4xl cursor-pointer border rounded-full px-2 py-1 ${isMenu?"text-[#1D1D1D] border-[#1D1D1D]":"text-[#F8F7E5]  border-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`}/>
            <span  className={`cursor-pointer font-Freudian ${isMenu?"text-[#1D1D1D]":"text-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} >{!isMenu? "MENU":"CLOSE"}</span>
            <button onClick={handleClick}>
  {!isMenu ? (
    <HiOutlineMenu className={`text-2xl cursor-pointer ${isMenu ? "text-[#1D1D1D]" : "text-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} />
  ) : (
    <IoCloseOutline className={`text-2xl cursor-pointer ${isMenu ? "text-[#1D1D1D]" : "text-[#F8F7E5]"} hover:opacity-60 transition-opacity duration-300`} />
  )}
</button>
           
            <div className={`border font-Freudian px-2 py-1 rounded-full cursor-pointer ${isMenu?"text-[#1D1D1D] border-[#1D1D1D]":"text-[#F8F7E5]  border-[#F8F7E5]"}`}>EN</div>
          </div>
        </div>
      </div>
    </div>
  
  
  </header>


  );
}
