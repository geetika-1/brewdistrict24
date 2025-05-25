"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { Parallax } from "react-scroll-parallax";
import ExpandingGallery from "./ExpandingGallery";

type LocationItemProps = {
  title: string;
  icon: string;
  location: string;
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 text-center  bg-[#596f61] overflow-hidden">
        <div className="container max-w-6xl px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-freudian animate-fadeInUp uppercase text-[#F8F7E5] max-w-5xl mx-auto leading-tight">
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

      <section className="bg-[#596f61] text-[#F8F7E5] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 text-center md:text-left">
          {/* Left block */}
          <Parallax speed={-10}>
            <div className="flex flex-col justify-between items-center md:items-end space-y-4">
              <div className="text-center md:text-left">
                <div className="flex gap-2 justify-start items-center">
                  {" "}
                  <span className="text-xs md:text-[1.3rem] uppercase font-Freudian border rounded-full px-2 py-1 text-[#F8F7E5] bg-[#1D1D1D]">
                    1
                  </span>
                  <h3 className="text-1xl md:text-[1.3rem] font-Roseford text-[#F8F7E5] font-bold leading-none">
                    Cargo Hold Cleaning
                  </h3>
                </div>

                <p className="text-base md:text-lg leading-tight font-Freudian text-[#1D1D1D] mt-2">
                  Our cargo cleaning chemicals are specially formulated to
                  remove tough residues from cargos like<span className="font-bold">pet coke,palm oil,
                  vegetable oils, animal fats, petroleum products, and dry bulk
                  materials.</span> Trusted by ship chandlers, they ensure effective
                  tank and hold cleaning for fast, compliant vessel turnaround.
                </p>
              </div>
              <div className="mt-10 text-center md:text-left">
                <div className="flex gap-2 justify-start items-center">
                  {" "}
                  <span className="text-xs md:text-[1.3rem] uppercase font-Freudian border rounded-full px-2 py-1 text-[#F8F7E5] bg-[#1D1D1D]">
                    2
                  </span>
                  <h3 className="text-1xl md:text-[1.3rem] font-Roseford text-[#F8F7E5] font-bold leading-none">
                    Test Kits & more
                  </h3>
                </div>

                <p className="text-base md:text-lg font-Freudian text-[#1D1D1D] leading-tight mt-2">
                  We offer a comprehensive range of marine test kits,
                  including<span className="font-bold">nitrite, chloride, potable water, pH meters, and
                  hydrometers,</span> tailored for shipboard use. These kits help
                  ensure accurate monitoring of water quality, system
                  efficiency, and compliance with marine safety standards.
                </p>
              </div>
            </div>
          </Parallax>
          <h1 className="text-6xl font-Roseford text-[#1D1D1D] hidden font-bold leading-none">
            NEIPA
          </h1>
          {/* Center block with can */}
          <Parallax speed={10}>
            <div className="flex justify-center items-center">
              <div className="relative rounded-3xl h-[25rem] border border-[#d9d9d9] border-dashed p-2 w-full max-w-[220px] md:max-w-[280px]">
                <img
                  alt="Front view of NEIPA beer can with dark green background and pink label on top"
                  className="mx-auto border border-[#d9d9d9] rounded-3xl p-4 h-full w-full object-contain"
                  src="/images/ipa-can.png"
                />
              </div>
            </div>
          </Parallax>
          {/* Right block */}
          <Parallax speed={-5}>
            {/* <div className="flex flex-col justify-center hidden md:block space-y-4 text-left">
              <p className="text-xs md:text-sm uppercase font-Freudian font-bold">
                Experience the smooth fruit sensation of New England IPA
              </p>
              <p className="text-sm md:text-base font-Eczar text-[#1a1a1a]">
                Connect to a world that is packed with taste. From England to
                India, all the way up to the American tropics, where its bold
                flavours originate. Who needs coco rum when you can grab a beer
                like this?
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-xs md:text-sm font-Freudian uppercase font-bold text-[#1a1a1a]">
                <div>
                  <div className="text-[#F8F7E5] pb-1">Storage advice</div>
                  <div className="border-b border-dashed border-[#d9d9d9] pt-1">
                    4°C - 6°C
                  </div>
                </div>
                <div>
                  <div className="text-[#F8F7E5] pb-1">Color</div>
                  <div className="border-b border-dashed border-[#d9d9d9] pt-1">
                    7 EBC
                  </div>
                </div>
                <div>
                  <div className="text-[#F8F7E5] pb-1">Calories</div>
                  <div className="border-b border-dashed border-[#d9d9d9] pt-1">
                    180
                  </div>
                </div>
                <div>
                  <div className="text-[#F8F7E5] pb-1">Bitterness</div>
                  <div className="border-b border-dashed border-[#d9d9d9] pt-1">
                    23 IBU
                  </div>
                </div>
              </div>
              <p className="text-[8px] md:text-xs font-Freudian uppercase text-[#1a1a1a] mt-2">
                Contains gluten
              </p>
              <button className="mt-2 bg-[#d397b1] text-black font-Freudian uppercase text-xs rounded-full py-2 px-6 w-full max-w-xs mx-auto md:mx-0">
                Order Now
              </button>
            </div> */}
            <div className="flex flex-col justify-between items-center md:items-end  space-y-4">
              <div className="text-center md:text-left">
                <div className="flex gap-2 justify-start items-center">
                  {" "}
                  <span className="text-xs md:text-[1.3rem] uppercase font-Freudian border rounded-full px-2 py-1 text-[#F8F7E5] bg-[#1D1D1D]">
                    3
                  </span>
                  <h3 className="text-1xl md:text-[1.3rem] font-freudian text-[#F8F7E5] font-bold leading-none">
                    Water Treatment
                  </h3>
                </div>

                <p className="text-base md:text-lg leading-tight font-Freudian text-[#1D1D1D] mt-2">
                  Our water treatment chemical range includes<span className="font-bold">corrosion & scale
                  inhibitors, antifoams, and anti-fungal biocides,</span> designed for
                  marine boilers, cooling systems, and RO plants. These
                  solutions maintain system performance, prevent downtime, and
                  extend equipment life at sea.
                </p>
              </div>
              <div className="mt-10 text-center md:text-left">
                <div className="flex gap-2 justify-start items-center">
                  {" "}
                  <span className="text-xs md:text-[1.3rem] uppercase font-Freudian border rounded-full px-2 py-1 text-[#F8F7E5] bg-[#1D1D1D]">
                    4
                  </span>
                  <h3 className="text-1xl md:text-[1.3rem] font-Roseford text-[#F8F7E5] font-bold leading-none">
                    Deck Engine Chem.
                  </h3>
                </div>

                <p className="text-base md:text-lg font-Freudian text-[#1D1D1D] leading-tight mt-2">
                  We supply high-performance deck and engine maintenance
                  chemicals such as <span className="font-bold">air cooler cleaners, rust removers, carbon
                  removers,</span>and more. Trusted by ship chandlers, these products
                  ensure efficient engine operation, corrosion control, and
                  effective cleaning in harsh marine environments.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      <section id="about" className="py-24 bg-cream">
        <Parallax speed={-10}>
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
                  A haven for like-hearted people, where we drink, laugh and
                  have good conversations
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
                      In good company, we immerse ourselves in gezelligheid.
                      Together we laugh, drink beer and open ourselves up to new
                      surprising experiences. We give way to all our senses so
                      we can connect to a world that is packed with taste.
                    </p>
                  </div>
                  <div>
                    <p className="text-[3.5vw] md:text-[1vw] text-[#1D1D1D]">
                      Our classic craft beers are brewed without fuss. With
                      water, grain, yeast and hops, we return to the essence
                      where the most diverse and authentic flavors are created.
                      Pure and honest. Damn delicious.
                    </p>
                  </div>
                </div>

                <div className="border-t border-1 border-solid mt-10 border-[#1D1D1D]"></div>
                <div className="border-solid border-t border-dashed border-[#1D1D1D] mt-2"></div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
      {/* newsletter section */}
      <section className="bg-[#1D1D1D] h-[55rem] mt-6 p-6 transition-opacity duration-300 overflow-hidden">
        <Parallax speed={-10}>
          {/* <div className="max-w-7xl w-full flex  flex-col px-3  lg:flex-row  justify-center gap-12 lg:gap-24">
            <div className="flex flex-col  items-start max-w-xs sm:max-w-sm lg:max-w-md">
              <h1 className="font-Roseford   md:text-[4vw]  md:px-10 xs:text-[7vw] font-400 leading-[4.4vw] text-[8vw] leading-tight text-[#f3f4e8]">
                BECOME PART
                <span className="text-[8px] hidden md:inline-block font-Freudian  align-middle w-[3.75vw] text-center px-2 inline-block ml-1 mr-1">
                  BE THE FIRST
                </span>
                OF OUR HOOD
              </h1>
            </div>

            <div className="col">
              <div className="max-w-md  md:text-[1vw] font-Eczar text-[3.5vw]  w-100 md:w-[25vw] text-[#F8F7E5]">
                <p className="mb-8 font-Eczar leading-6">
                  Only the absolute pioneers who sign up for our newsletter get
                  a front row seat,because at BrewDistrict24 we cherish those
                  who embrace this adventure with us from the very beginning.
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
                    className="flex absolute right-0 md:right-[-55px] bottom-[15px] items-center justify-center w-10 h-10 rounded-full bg-[#6bbf73] text-black hover:bg-[#5bb263] transition-colors duration-300"
                  >
                    <FiArrowUpRight className="text-2xl" />
                  </button>
                </form>
                <p className="text-[10px]">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a className="underline" href="#">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a className="underline" href="#">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div> */}
          
          <div className="relative p-8  w-full">
            <h1 className="text-5xl mb-4 text-center font-Freudian text-[#F8F7E5]">Our Speciality</h1>
                      <ExpandingGallery/>
          </div>

        </Parallax>
      </section>
      <section className="w-100 mt-6">
        <Parallax speed={-10}>
          <img
            src="/images/Brewdistrict_24_SocialShare.png"
            alt="img-last"
            className="w-[100vw]"
          />
        </Parallax>
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
      </section> */}
      <section className="py-16 bg-[#1D1D1D] text-[#F8F7E5]">
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
              Are you interested in selling our classic craft beers at your
              location?{" "}
              <a className="underline text-[#e9e9d3]" href="#">
                Contact
              </a>{" "}
              us for more information about our beers, prices and possible
              collaborations. Together we will let your customers experience
              what truly ‘enjoying the moment’ is all about.
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
    title: "LOKAAL",
    icon: "fas fa-mobile-alt",
    location: "NIJMEGEN",
  },
  {
    title: "CAFE DE KROON",
    icon: "fas fa-mobile-alt",
    location: "NIJMEGEN",
  },
  {
    title: "OLDSKOOL BREWERY",
    icon: "fas fa-mobile-alt",
    location: "EINDHOVEN",
  },
  {
    title: "DE BIERBURGER",
    icon: "fas fa-arrow-up-right",
    location: "BOXMEER",
  },
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
