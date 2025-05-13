"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type LocationItemProps = {
  title: string;
  icon: string;
  location: string;
};

export default function Home() {
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* <section className="relative py-24 text-center bg-[#596f61]">
        <div className="container max-w-6xl px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-freudian uppercase text-[#F8F7E5] max-w-5xl mx-auto leading-tight">
            Classic craft beers,
            <br />
            brewed without
            <br />
           <div className="relative z-10">fuss</div> 
          </h1>
          <hr className="px-6 border-dashed" />
          <h3 className="relative z-10 mt-6 text-xl md:text-4xl font-freudian uppercase max-w-3xl text-[#F8F7E5] mx-auto">
            Pure, honest and damn delicious
          </h3>
        </div>
        <div className="absolute top-16 left-[42%] z-0">
          <img src="/images/ipa-can.png" alt="can" className="h-96" />
        </div>
      </section> */}
      <section className="relative py-24 text-center  bg-[#596f61] overflow-hidden">
  <div className="container max-w-6xl px-4 mx-auto">
    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-freudian uppercase text-[#F8F7E5] max-w-5xl mx-auto leading-tight">
      Classic craft beers,
      <br />
      brewed without
      <br />
      <span className="relative z-10 block">fuss</span>
    </h1>

    <hr className="my-6 border-dashed border-[#F8F7E5]" />

    <h3 className="relative z-10 mt-6 text-lg sm:text-xl md:text-3xl lg:text-4xl font-freudian uppercase max-w-3xl text-[#F8F7E5] mx-auto">
      Pure, honest and damn delicious
    </h3>
  </div>

  <div className="absolute z-0 top-10 left-1/2 -translate-x-1/2 md:top-16 md:left-[42%] md:translate-x-0">
    <img
      src="/images/ipa-can.png"
      alt="can"
      className="h-60 sm:h-72 md:h-80 lg:h-96 w-auto mx-auto"
    />
  </div>
</section>

{/* 2--------------------- */}
{/* <section className="bg-[#596f61] text-[#F8F7E5] ">
<div className="grid grid-cols-1 md:grid-cols-3 px-16 gap-6 text-center md:text-left">
       
        <div className="flex flex-col justify-between items-end space-y-4">
          <div className="flex flex-col items-end justify-end">
          <p className="text-xs md:text-sm uppercase font-Freudian ">
            Discover our beers
          </p>
          <h1 className="text-5xl md:text-6xl font-Roseford text-[#1D1D1D] font-bold leading-none">
            NEIPA
          </h1>
          <p className="text-xs md:text-sm uppercase font-Freudian">
            Alc. 6% vol - 330 ml
          </p>
          </div>
          
          <div className="mt-12">
            <p className="text-xs text-end uppercase font-Freudian mb-1">
              Ingredients
            </p>
            <p className="text-base md:text-lg text-end font-Freudian text-[#1D1D1D] leading-tight">
              Water, Malt (Pale Malt,<br/>Cara 120 Wheat, Mroats<br/>(650-1300),Biscuits),Hop<br/> (Paciffic Gem) Yeast,<br/> Alcohol 6%
            </p>
          </div>
         
        </div>

       
        <div className="flex justify-center items-center">
          <div className="relative rounded-3xl h-[25rem] border border-[#d9d9d9] border-dashed p-2 max-w-[220px] md:max-w-[280px]">
            <img
              alt="Front view of NEIPA beer can with dark green background and pink label on top"
              className="mx-auto border border-[#d9d9d9] rounded-3xl p-4 h-100"
              height="100%"
              width="220"
              src="/images/ipa-can.png"
            />
          </div>
        </div>

      
        <div className="flex flex-col justify-center space-y-4 text-left">
          <p className="text-xs md:text-sm uppercase font-Freudian font-bold">
            Experience the smooth fruit sensation of New England IPA
          </p>
          <p className="text-sm md:text-base font-Eczar text-[#1a1a1a]">
            Connect to a world that is packed with taste. From England to India, all the way up to the American tropics, where its bold flavours originate. Who needs coco rum when you can grab a beer like this?
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-xs md:text-sm font-Freudian uppercase font-bold text-[#1a1a1a]">
            <div>
              <div className="border-b border-dashed border-[#d9d9d9] text-[#F8F7E5] pb-1">Storage advice</div>
              <div className="pt-1">4°C - 6°C</div>
            </div>
            <div>
              <div className="border-b border-dashed border-[#d9d9d9] text-[#F8F7E5] pb-1">Color</div>
              <div className="pt-1">7 EBC</div>
            </div>
            <div>
              <div className="border-b border-dashed border-[#d9d9d9] text-[#F8F7E5] pb-1">Calories</div>
              <div className="pt-1">180</div>
            </div>
            <div>
              <div className="border-b border-dashed border-[#d9d9d9] text-[#F8F7E5] pb-1">Bitterness</div>
              <div className="pt-1">23 IBU</div>
            </div>
          </div>
          <p className="text-[8px] md:text-xs font-Freudian uppercase text-[#1a1a1a] mt-2">
            Contains gluten
          </p>
          <button className="mt-2 bg-[#d397b1] text-black font-Freudian uppercase text-xs rounded-full py-2 px-6 w-full max-w-xs mx-auto md:mx-0">
            Order Now
          </button>
          <div className="mt-8 flex items-center justify-between text-xs md:text-sm uppercase font-sharetech text-[#1a1a1a]">
            <div>Not 18</div>
            <div>No alcohol</div>
            <div className="text-pink-300 font-bold">⚡</div>
          </div>
        </div>
      </div>

   
      <div className="fixed top-1/2 right-0 -translate-y-1/2 w-20 h-40 bg-[#7ECF86] rounded-l-full flex items-center justify-center">
        
        <img
          alt="Icon of a beer can in black on pink background"
          className="w-6 h-auto"
          height="48"
          width="24"
          src="https://storage.googleapis.com/a1aa/image/30d9d3e7-800b-47a1-5ab5-d0f66ba5de79.jpg"
        />
      </div>
</section> */}
      <section className="bg-[#596f61] text-[#F8F7E5] py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 text-center md:text-left">
    
    {/* Left block */}
    <div className="flex flex-col justify-between items-center md:items-end hidden md:block space-y-4">
      <div className="flex flex-col items-center md:items-end">
        <p className="text-xs md:text-sm uppercase font-Freudian">
          Discover our beers
        </p>
        <h1 className="text-5xl md:text-6xl font-Roseford text-[#1D1D1D] font-bold leading-none">
          NEIPA
        </h1>
        <p className="text-xs md:text-sm uppercase font-Freudian">
          Alc. 6% vol - 330 ml
        </p>
      </div>

      <div className="mt-8 text-center md:text-right">
        <p className="text-xs uppercase font-Freudian mb-1">
          Ingredients
        </p>
        <p className="text-base md:text-lg font-Freudian text-[#1D1D1D] leading-tight">
          Water, Malt (Pale Malt,<br />
          Cara 120 Wheat, Mroats<br />
          (650-1300), Biscuits), Hop<br />
          (Pacific Gem) Yeast,<br />
          Alcohol 6%
        </p>
      </div>
    </div>
    <h1 className="text-5xl md:text-[8vw] font-Roseford text-[#1D1D1D] block md:hidden font-bold leading-none">
          NEIPA
        </h1>
    {/* Center block with can */}
    <div className="flex justify-center items-center">
      <div className="relative rounded-3xl h-[25rem] border border-[#d9d9d9] border-dashed p-2 w-full max-w-[220px] md:max-w-[280px]">
        <img
          alt="Front view of NEIPA beer can with dark green background and pink label on top"
          className="mx-auto border border-[#d9d9d9] rounded-3xl p-4 h-full w-full object-contain"
          src="/images/ipa-can.png"
        />
      </div>
    </div>

    {/* Right block */}
    <div className="flex flex-col justify-center hidden md:block space-y-4 text-left">
      <p className="text-xs md:text-sm uppercase font-Freudian font-bold">
        Experience the smooth fruit sensation of New England IPA
      </p>
      <p className="text-sm md:text-base font-Eczar text-[#1a1a1a]">
        Connect to a world that is packed with taste. From England to India, all the way up to the American tropics, where its bold flavours originate. Who needs coco rum when you can grab a beer like this?
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-xs md:text-sm font-Freudian uppercase font-bold text-[#1a1a1a]">
        <div>
          <div className="text-[#F8F7E5] pb-1">Storage advice</div>
          <div className="border-b border-dashed border-[#d9d9d9] pt-1">4°C - 6°C</div>
        </div>
        <div>
          <div className="text-[#F8F7E5] pb-1">Color</div>
          <div className="border-b border-dashed border-[#d9d9d9] pt-1">7 EBC</div>
        </div>
        <div>
          <div className="text-[#F8F7E5] pb-1">Calories</div>
          <div className="border-b border-dashed border-[#d9d9d9] pt-1">180</div>
        </div>
        <div>
          <div className="text-[#F8F7E5] pb-1">Bitterness</div>
          <div className="border-b border-dashed border-[#d9d9d9] pt-1">23 IBU</div>
        </div>
      </div>

      <p className="text-[8px] md:text-xs font-Freudian uppercase text-[#1a1a1a] mt-2">
        Contains gluten
      </p>

      <button className="mt-2 bg-[#d397b1] text-black font-Freudian uppercase text-xs rounded-full py-2 px-6 w-full max-w-xs mx-auto md:mx-0">
        Order Now
      </button>

     
    </div>
  </div>

  {/* Pink side tab (hidden on small screens) */}
  <div className="hidden lg:flex fixed top-1/2 right-0 -translate-y-1/2 w-20 h-40 bg-[#7ECF86] rounded-l-full items-center justify-center z-10">
    <img
      alt="Icon of a beer can in black on pink background"
      className="w-6 h-auto"
      src="https://storage.googleapis.com/a1aa/image/30d9d3e7-800b-47a1-5ab5-d0f66ba5de79.jpg"
    />
  </div>
</section>


      {/* Beer Showcase Section */}
      {/* <section id="beers" className="py-16 bg-olive">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="mb-16 text-3xl md:text-4xl font-freudian uppercase text-cream text-center">
            Discover our beers
          </h2>

          {/* IPA Beer */}
          {/* <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-freudian uppercase text-cream mb-2">IPA</h3>
              <p className="text-cream mb-2">Alc. 5.5% vol - 330 ml</p>

              <div className="mt-8 mb-6">
                <h4 className="text-xl text-cream mb-2">Ingredients</h4>
                <p className="text-cream">
                  Water, Malt (Pale malt, oats), Hop (Columbus, Chinook, Citra), Yeast, Alcohol 5,5%
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl text-cream mb-4">Savour the pleasant bitterness of India Pale Ale</h4>
                <p className="text-cream mb-6">
                  This craft beer classic is brewed without fuss. With excellent quality water, grain, yeast and (a lot of) hops, we return to the essence of this icon. Our subtle flavours are meant to last, so have a seat, settle down and enjoy the moment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h5 className="text-cream text-sm mb-1">Storage advice</h5>
                  <p className="text-cream font-bold">4C - 6C</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Color</h5>
                  <p className="text-cream font-bold">6 EBC</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Calories</h5>
                  <p className="text-cream font-bold">160</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Bitterness</h5>
                  <p className="text-cream font-bold">38 IBU</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block px-6 py-3 bg-pink text-cream rounded-md hover:bg-pink/90 transition-colors"
                >
                  Order now
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/images/ipa-can.png"
                alt="IPA Beer"
                width={300}
                height={500}
                className="object-contain"
              />
            </div>
          </div> */}

          {/* American Blonde Beer */}
          {/* <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/american-blonde-can.png"
                alt="American Blonde Beer"
                width={300}
                height={500}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-freudian uppercase text-cream mb-2">American blonde</h3>
              <p className="text-cream mb-2">Alc. 5.5% vol - 330 ml</p>

              <div className="mt-8 mb-6">
                <h4 className="text-xl text-cream mb-2">Ingredients</h4>
                <p className="text-cream">
                  Water, Malt (Pale Malt), Hop (Saaz, Chinook, Idaho7), Yeast, Alcohol 5,5%
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl text-cream mb-4">Get carried away by our American Blonde</h4>
                <p className="text-cream mb-6">
                  Immerse in gezelligheid and allow yourself to be surprised. Open up all of your senses and sit back. It's time to fully enjoy this moment. Breathe in, breathe out… No form of meditation can compete with this soothing natural blonde.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h5 className="text-cream text-sm mb-1">Storage advice</h5>
                  <p className="text-cream font-bold">4C - 6C</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Color</h5>
                  <p className="text-cream font-bold">6 EBC</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Calories</h5>
                  <p className="text-cream font-bold">160</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Bitterness</h5>
                  <p className="text-cream font-bold">21 IBU</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block px-6 py-3 bg-pink text-cream rounded-md hover:bg-pink/90 transition-colors"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div> */}

          {/* Imperial Stout Beer */}
          {/* <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> */}
            {/* <div className="order-2 md:order-1">
              <h3 className="text-2xl font-freudian uppercase text-cream mb-2">Imperial stout</h3>
              <p className="text-cream mb-2">Alc. 10% vol - 330 ml</p>

              <div className="mt-8 mb-6">
                <h4 className="text-xl text-cream mb-2">Ingredients</h4>
                <p className="text-cream">
                  Water, Malt (Pale malt. Cara120, wheat, mroast (650-1300), biscuit), Hop (pacific gem), Yeast, Alcohol 10%
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl text-cream mb-4">Explore the dark depths of Imperial Stout</h4>
                <p className="text-cream mb-6">
                  Is it still raining? No worries. Just take another deep dive into this full bodied-beer which delicately hits every side of your palette. Pure and honest. Damn delicious. Something about the little things in life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h5 className="text-cream text-sm mb-1">Storage advice</h5>
                  <p className="text-cream font-bold">8C - 10C</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Color</h5>
                  <p className="text-cream font-bold">130 EBC</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Calories</h5>
                  <p className="text-cream font-bold">160</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Bitterness</h5>
                  <p className="text-cream font-bold">21 IBU</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block px-6 py-3 bg-pink text-cream rounded-md hover:bg-pink/90 transition-colors"
                >
                  Order now
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/images/imperial-stout-can.png"
                alt="Imperial Stout Beer"
                width={300}
                height={500}
                className="object-contain"
              />
            </div> */}
          {/* </div> */}

          {/* NEIPA Beer */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/neipa-can.png"
                alt="NEIPA Beer"
                width={300}
                height={500}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-freudian uppercase text-cream mb-2">NEIPA</h3>
              <p className="text-cream mb-2">Alc. 6% vol - 330 ml</p>

              <div className="mt-8 mb-6">
                <h4 className="text-xl text-cream mb-2">Ingredients</h4>
                <p className="text-cream">
                  Water, Malt (Pale Malt, Wheat, Oats), Hop (Sabro, Mosaic), Yeast, Alcohol 6%
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl text-cream mb-4">Experience the smooth fruit sensation of New England Ipa</h4>
                <p className="text-cream mb-6">
                  Connect to a world that is packed with taste. From England to India, all the way up to the American tropics, where its bold flavours originate. Who needs coco rum when you can grab a beer like this?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h5 className="text-cream text-sm mb-1">Storage advice</h5>
                  <p className="text-cream font-bold">4C - 6C</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Color</h5>
                  <p className="text-cream font-bold">7 EBC</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Calories</h5>
                  <p className="text-cream font-bold">180</p>
                </div>
                <div>
                  <h5 className="text-cream text-sm mb-1">Bitterness</h5>
                  <p className="text-cream font-bold">23 IBU</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block px-6 py-3 bg-pink text-cream rounded-md hover:bg-pink/90 transition-colors"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section>  */}

      {/* About Section */}
      {/* <section id="about" className="py-24 bg-cream">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="text-sm font-freudian font-bold uppercase text-darkgray text-center mb-16">
            About BrewDistrict24
          </h2>

          <div className="mx-auto text-center">
            <h3 className="text-[4vw] font-Roseford uppercase text-darkgray mb-8 leading-tight">
              Welcome to the neighborhood.
              <br />
              This <span className="text-center freudian mb-2 w-[12.5vw] inline-block text-[8px] align-middle">A haven for like-hearted people, where we drink, laugh and have good conversations</span> is where we come together <span className="text-center font-freudian mb-2 w-[6.5vw] inline-block text-[8px] align-middle">Enjoy every given moment</span> as one.
            </h3>
<div className="px-8">
   <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <p className="text-[1vw] text-[#1D1D1D]">
                  In good company, we immerse ourselves in gezelligheid. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.
                </p>
              </div>
              <div>
                <p className="text-[1vw] text-[#1D1D1D]">
                  Our classic craft beers are brewed without fuss. With water, grain, yeast and hops, we return to the essence where the most diverse and authentic flavors are created. Pure and honest. Damn delicious.
                </p>
              </div>
            
             
            </div>
            <div className="border-t border-1 border-solid mt-10 border-[#1D1D1D]"></div>
            <div className="border-solid border-t border-dashed border-[#1D1D1D] mt-2"></div>
</div>
           
       
           
        
          </div>
        </div>
      </section> */}
      <section id="about" className="py-24 bg-cream">
  <div className="container max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
    <h2 className="text-sm font-freudian font-bold uppercase text-darkgray text-center mb-16">
      About BrewDistrict24
    </h2>

    <div className="mx-auto text-center">
      <h3 className="text-[8vw]  md:text-[4vw] font-Roseford uppercase text-darkgray mb-8 leading-tight">
        Welcome to the neighborhood.
        <br />
        This{" "}
        <span className="text-center  hidden md:inline-block freudian mb-2 w-[12.5vw] text-[8px] align-middle">
          A haven for like-hearted people, where we drink, laugh and have good
          conversations
        </span>{" "}
        is where we come together{" "}
        <span className="text-center  hidden md:inline-block font-freudian mb-2 w-[6.5vw] text-[8px] align-middle">
          Enjoy every given moment
        </span>{" "}
        as one.
      </h3>

      <div className="px-2 sm:px-4 md:px-8">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          <div>
            <p className="text-[3.5vw] md:text-[1vw] text-[#1D1D1D]">
              In good company, we immerse ourselves in gezelligheid. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.
            </p>
          </div>
          <div>
            <p className="text-[3.5vw] md:text-[1vw] text-[#1D1D1D]">
              Our classic craft beers are brewed without fuss. With water, grain, yeast and hops, we return to the essence where the most diverse and authentic flavors are created. Pure and honest. Damn delicious.
            </p>
          </div>
        </div>

        <div className="border-t border-1 border-solid mt-10 border-[#1D1D1D]"></div>
        <div className="border-solid border-t border-dashed border-[#1D1D1D] mt-2"></div>
      </div>
    </div>
  </div>
</section>
{/* newsletter section */}
      <section className="bg-[#1D1D1D] transition-opacity duration-300 text-[#F8F7E5] h-[100vh] flex items-center justify-center">
      <div className="max-w-7xl w-full flex  flex-col px-3  lg:flex-row  justify-center gap-12 lg:gap-24">
     
      <div className="flex flex-col  items-start max-w-xs sm:max-w-sm lg:max-w-md">
        <h1 className="font-Roseford   md:text-[4vw]  md:px-10 xs:text-[7vw] font-400 leading-[4.4vw] text-[8vw] leading-tight text-[#f3f4e8]">
          BECOME
          
          PART
          <span className="text-[8px] hidden md:inline-block font-Freudian  align-middle w-[3.75vw] text-center px-2 inline-block ml-1 mr-1">
            BE THE FIRST
          </span>
          OF
          
          OUR HOOD
        </h1>
      </div>

      <div className="col">
      <div className="max-w-md  md:text-[1vw] font-Eczar text-[3.5vw]  w-100 md:w-[25vw] text-[#F8F7E5]">
        <p className="mb-8 font-Eczar leading-6">
          Only the absolute pioneers who sign up for our newsletter
           get a front row seat,because at BrewDistrict24 we cherish 
           those who embrace this adventure with us from
          the very beginning.
        </p>
        <form className="mb-2 relative"
       
        >
          <input
            aria-label="Your email address"
            className="w-full bg-transparent border-b border-gray-600 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors duration-300 py-1"
            placeholder="Your email address"
            required
            type="email"
          
          />
             <button
        aria-label="Submit newsletter signup"
        className="flex absolute right-0 md:right-[-55px] bottom-[15px] items-center justify-center w-10 h-10 rounded-full bg-[#6bbf73] text-black hover:bg-[#5bb263] transition-colors duration-300"
     
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
<section className="w-100">
  <img src="/images/Brewdistrict_24_SocialShare.png" alt="img-last" className="w-[100vw]"/>
</section>
      {/* Locations Section */}
      {/* <section className="py-16 bg-[#1D1D1D] text-[#F8F7E5] ">
      
      <div className="grid  grid-cols-1 md:grid-cols-2  max-w-5xl mx-auto px-6 ">
        <h2 className="font-Roseford  text-[#F8F7E5] text-[4vw] leading-[1.1] text-center md:text-left">
          BD24 IN<br />YOUR<br />HOOD?
        </h2>
          <div className="w-[58%]">
            <div className="text-xs font-Freudian md:text-sm font-semibold uppercase mb-1">
          THE SMELL OF FRESHLY BREWED EXCITEMENT IS IN THE AIR
         
        </div >
        <p className="text-[0.75rem] md:text-[12px] font-Eczar max-w-md leading-relaxed">
          Are you interested in selling our classic craft beers at your location?{' '}
          <a className="underline text-[#e9e9d3]" href="#">Contact</a> us for more
          information about our beers, prices and possible collaborations. Together
          we will let your customers experience what truly ‘enjoying the moment’ is all about.
        </p>
          </div>
        

        
      </div>

      
      <div
        className="mt-2 overflow-hidden border-b border-dashed border-[#e9e9d3]"
        aria-label="Continuous sliding list of locations"
      >
        <div className="slider-track inline-flex animate-scroll whitespace-nowrap mb-8">
        
          <div className="inline-flex space-x-12 pr-12">
            {locationItems.map((item, index) => (
              <LocationItem key={index} {...item} />
            ))}
          </div>

         
          <div className="inline-flex space-x-12 pr-12" aria-hidden="true">
            {locationItems.map((item, index) => (
              <LocationItem key={`duplicate-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
      </section> */}<section className="py-16 bg-[#1D1D1D] text-[#F8F7E5]">
  <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-6 gap-8">
    
    {/* Heading */}
    <h2 className="font-Roseford text-[#F8F7E5]  text-[8vw] md:text-[5vw]  leading-[1.1] text-left md:text-center md:px-11 md:text-left">
      BD24 IN YOUR HOOD?
    </h2>

    {/* Paragraph Block with Responsive Wrapper */}
    <div className="w-full md:w-[58%]">
      <div className="text-xs font-Freudian md:text-sm font-semibold uppercase mb-2">
        THE SMELL OF FRESHLY BREWED EXCITEMENT IS IN THE AIR
      </div>
      <p className="text-[0.75rem] md:text-[12px] font-Eczar max-w-md leading-relaxed">
        Are you interested in selling our classic craft beers at your location?{' '}
        <a className="underline text-[#e9e9d3]" href="#">Contact</a> us for more
        information about our beers, prices and possible collaborations. Together
        we will let your customers experience what truly ‘enjoying the moment’ is all about.
      </p>
    </div>
  </div>

  {/* Sliding Section */}
  <div
    className="mt-2 overflow-hidden"
    aria-label="Continuous sliding list of locations"
  >
    <div className="slider-track mt-6 inline-flex animate-scroll whitespace-nowrap mb-8">
      {/* First set of items */}
      <div className="inline-flex space-x-12 pr-12">
        {locationItems.map((item, index) => (
          <LocationItem key={index} {...item} />
        ))}
      </div>

      {/* Duplicate set for continuous effect */}
      <div className="inline-flex space-x-12 pr-12" aria-hidden="true">
        {locationItems.map((item, index) => (
          <LocationItem key={`duplicate-${index}`} {...item} />
        ))}
      </div>
      
    </div>
  </div>
  <div className="px-6">
  <div className="border border-[1.5px] border-[#F8F7E5] mb-1"></div>
  <div className="border border-dashed border-[#F8F7E5]"></div>
  </div>
 
</section>

    </div>
  );
}
const locationItems = [
  {
    title: 'LOKAAL',
    icon: 'fas fa-mobile-alt',
    location: 'NIJMEGEN'
  },
  {
    title: 'CAFE DE KROON',
    icon: 'fas fa-mobile-alt',
    location: 'NIJMEGEN'
  },
  {
    title: 'OLDSKOOL BREWERY',
    icon: 'fas fa-mobile-alt',
    location: 'EINDHOVEN'
  },
  {
    title: 'DE BIERBURGER',
    icon: 'fas fa-arrow-up-right',
    location: 'BOXMEER'
  }
];

// Helper: Item component
function LocationItem({ title, icon, location }: LocationItemProps) {
  return (
    <div className="font-nosifer text-[1.5rem] leading-none flex flex-col items-start min-w-[180px]">
      {title}
      <div className="flex items-center mt-1 space-x-1 text-[0.5rem] font-semibold uppercase">
        <i className={icon}></i>
        <span>{location}</span>
      </div>
    </div>
  );
}