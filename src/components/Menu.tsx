"use client";
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Menu = ({isMenu}:any) => {
  return (
    <>
      <section className="bg-[#F8F7E5] w-full transition-opacity duration-300 text-[#F8F7E5] h-[100vh] flex items-center justify-center">
        <div className={`max-w-7xl w-full flex flex-col px-3 lg:flex-row justify-center gap-12 lg:gap-24 ${isMenu ? 'animate-fadeInUp' : ''}`}>
          <div className="flex flex-col items-start max-w-xs sm:max-w-sm lg:max-w-md">
            <ul className="font-Roseford md:text-[4vw] md:px-10 xs:text-[7vw] font-400 leading-[4.4vw] text-[8vw] leading-tight text-[#1D1D1D]">
              <li>
                <a href="/" className="transition-opacity duration-300 ease-out">
                  HOME
                </a>
              </li>
              <li>
                <a href="/" className="transition-opacity duration-300 ease-out">
                  BEERS
                </a>
              </li>
              <li>
                <a href="/" className="transition-opacity duration-300 ease-out">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/" className="text-[#FE5D26] transition-opacity duration-300 ease-out">
                  ORDER NOW
                </a>
              </li>
              <li>
                <a href="/" className="transition-opacity duration-300 ease-out">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <div className="max-w-md md:text-[1vw] font-Eczar text-[3.5vw] w-100 md:w-[25vw] text-[#1D1D1D]">
              <p className='mb-6 font-Freudian text-[4.2vw] md:text-[1.9vw] leading-6'>BE THE FIRST TO KNOW</p>
              <p className="mb-8 font-Eczar text-[3vw] md:text-[1.9vw] leading-6">
             We know, e-mails suck, but our news is something in your life you don't want to miss.
              </p>
              <form className="mb-2 relative">
                <input
                  aria-label="Your email address"
                  className="w-full bg-transparent border-b border-gray-600 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors duration-300 py-1"
                  placeholder="Your email address"
                  required
                  type="email"
                />
                <button
                  aria-label="Submit newsletter signup"
                  className="flex absolute right-0 md:right-[-55px] bottom-[15px] items-center justify-center w-10 h-10 rounded-full bg-[#FE5D26] text-black hover:bg-[#5bb263] transition-colors duration-300"
                >
                  <FiArrowUpRight className="text-2xl" />
                </button>
              </form>
              <p className="text-[10px]">
                This site is protected by reCAPTCHA and the Google{' '}
                <a className="underline" href="#">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a className="underline" href="#">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
