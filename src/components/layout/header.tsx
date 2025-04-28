// components/Header.js
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  return (
    <header className="bg-[#617c70] text-[#f2f1e5] py-4 px-6">
      <div className="flex items-center mx-auto">
        {/* Left - Social + Home */}
        {/* <div className="flex items-center gap-4 text-sm font-bold">
          <span className="cursor-pointer">HOME</span>
          <FaInstagram className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FiMapPin className="cursor-pointer" />
        </div> */}

        {/* Center - Logo */}
    
        <div className="flex items-center justify-center w-full">
      
      <div className="flex-grow flex flex-col-reverse h-px w-[50%] bg-white">  {/* Left - Social + Home */}
            <div className="flex items-center gap-4 text-sm font-bold mb-4">
              <span className="cursor-pointer">HOME</span>
              <FaInstagram className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FiMapPin className="cursor-pointer" />
            </div></div>
    
      <img src="/images/download.svg" alt="Divider Icon" className="h-24 px-8 whitespace-nowrap text-white " />
      {/* Right - Order, Cart, Menu, Lang */}
      <div className="flex-grow flex flex-col-reverse items-end w-[50%] h-px bg-white">  
            <div className="flex items-center gap-4 text-sm font-bold mb-4">
              <div className="relative">
                <span className="text-[10px] absolute -top-4 left-1 text-white font-extrabold rotate-[-15deg]">
                  CLICK<br />THE CAN
                </span>
                <button className="bg-[#d998b5] text-black px-4 py-2 rounded-full font-bold text-sm">
                  ORDER NOW
                </button>
              </div>
              <FiShoppingCart className="text-2xl cursor-pointer" />
              <span className="cursor-pointer">MENU</span>
              <HiOutlineMenu className="text-2xl cursor-pointer" />
              <div className="border border-white px-2 py-1 rounded-full cursor-pointer">EN</div>
            </div></div>
    </div>
        
    
      </div>

 


    </header>
  );
}
