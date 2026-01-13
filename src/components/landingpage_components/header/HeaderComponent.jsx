import React, { useState, useEffect, useRef } from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiSolidBadge } from "react-icons/bi";

const HeaderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Trusted beauty companies data
  const trustedCompanies = [
    { id: 1, name: "L'Oréal", logo: "https://i.pinimg.com/1200x/c8/9b/28/c89b283f9f6f516ec6af70277279e930.jpg", description: "World Leader in Beauty" },
    { id: 2, name: "Estée Lauder", logo: "https://i.pinimg.com/736x/e9/19/81/e9198118e1cd63e3a940b793dcb1262f.jpg", description: "Prestige Beauty" },
    { id: 3, name: "Shiseido", logo: "https://i.pinimg.com/1200x/e2/cd/63/e2cd63f691d9ae54abc177f272f4dc9f.jpg", description: "Japanese Excellence" },
    { id: 4, name: "CeraVe", logo: "https://i.pinimg.com/736x/b7/3b/22/b73b220ee5cfcdeb98415b2d2d07192a.jpg", description: "Dermatologist Recommended" },
    { id: 5, name: "The Ordinary", logo: "https://i.pinimg.com/1200x/f0/fd/d0/f0fdd0b74daa2b854d7244bd5a41d859.jpg", description: "Clinical Formulations" },
    { id: 6, name: "La Roche-Posay", logo: "https://i.pinimg.com/736x/72/9c/6d/729c6d964531336051ad9a17bb9da207.jpg", description: "Sensitive Skin Experts" },
    { id: 7, name: "Neutrogena", logo: "https://i.pinimg.com/736x/90/3d/f3/903df3f1be22074896bb955fa9114485.jpg", description: "Dermatologist Recommended" },
    { id: 8, name: "Clinique", logo: "https://i.pinimg.com/736x/b2/44/c1/b244c1929358226a65012323f04c0083.jpg", description: "Allergy Tested" },
    { id: 9, name: "Kiehl's", logo: "https://i.pinimg.com/1200x/87/9a/51/879a513b8b6e2f98a48f4cdaf2b70cd5.jpg", description: "Since 1851" },
    { id: 10, name: "Avene", logo: "https://i.pinimg.com/736x/4a/cc/41/4acc414067bfc097d938323478a37892.jpg", description: "Thermal Spring Water" }
  ];

  const itemsToShow = 5; 
  const duplicatedCompanies = [
    ...trustedCompanies.slice(-itemsToShow), 
    ...trustedCompanies, 
    ...trustedCompanies.slice(0, itemsToShow), 
    ...trustedCompanies.slice(0, itemsToShow) 
  ];

  const totalSlides = trustedCompanies.length + itemsToShow * 2;
  const visibleItems = 5;

  // Auto-slide effect
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const nextSlide = prev + 1;
          
          if (nextSlide >= totalSlides - visibleItems) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentSlide(itemsToShow);
              setTimeout(() => setIsTransitioning(true), 10);
            }, 100); 
          }
          
          return nextSlide;
        });
      }, 3000); 
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalSlides, itemsToShow, visibleItems]);



  return (
    <section className="w-full flex flex-col justify-center items-center p-4 relative">

      <div className="w-full flex flex-col justify-center items-center relative">
        
        <div className="w-[80%] flex justify-center items-center md:mt-24 relative gap-4">

            <div className="w-full flex flex-1 flex-col justify-center relative">

                <div className="w-full flex flex-col justify-start items-start gap-4">

                    <div className="flex justify-center items-center rounded-full border-2 border-gray-400/50 gap-3 px-2 p-1">
                      <IoIosArrowRoundForward/>
                      <img src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" alt="" className='size-5 rounded-full' />
                      <span className='text-sm text-gray-700/50'>Brightness-dreams</span>
                      <IoIosArrowRoundForward/>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-4 mt-6">
                        <span className="text-5xl leading-[5rem]">
                            SkinCare That Let's Your Inner Glow Shine Through
                        </span>
                        <p className="text-sm leading-8 mt-5 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero a facere deleniti mollitia nam vel repudiandae asperiores eligendi rerum ipsum odio, pariatur fugit laudantium numquam unde quia aliquid explicabo? Impedit?
                        </p>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-4 mt-10">
                        <button className='bg-lime-500 px-6 py-2 rounded-full hover:bg-lime-600 transition-colors duration-300 text-white font-medium'>
                            Shop Now
                        </button>
                        <span className="flex justify-center items-center gap-2">
                            <BiSolidBadge className='text-gray-500'/>
                            <p className='text-gray-600'>Let Your Skin Glow</p>
                        </span>
                    </div>

                </div>
            </div>

            {/* right */}
            <div className="w-full flex flex-1 flex-col justify-end items-end relative py-10">
                <div className="h-96 w-full overflow-hidden mt-16 rounded-br-full rounded-tl-full rounded-tr-sm relative shadow-2xl">
                  <img src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" alt="" className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 via-transparent to-purple-400/10"></div>
                  
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                <div className="absolute top-48 -right-4 w-2/3 h-2/3 overflow-hidden rounded-lg shadow-2xl border-4 border-white z-10 rounded-br-full rounded-tl-full">
                  <img 
                    src="https://i.pinimg.com/1200x/ec/dc/4c/ecdc4c8f156dfe59e1b081396d12f201.jpg" 
                    alt="Second product" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-300/15 via-transparent to-purple-300/15"></div>
                  
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>

            </div>

        </div>

        <div className="w-64 flex flex-col justify-center absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg z-10 overflow-hidden">
            <article className="flex flex-col justify-center items-center">
                <div className="w-full h-24 mb-3 overflow-hidden relative">
                    <img 
                        src="https://i.pinimg.com/736x/28/24/17/282417615903ae41e69b6dafc38e9fa4.jpg" 
                        alt="Galactomyces Pure" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="flex justify-center items-center gap-6 p-4">
                    <div className="flex flex-col justify-center items-center text-sm text-slate-600 px-4">
                        <span className="font-medium">Galactomyces Pure</span>
                        <span className="text-xs text-gray-500">Vitamin C Glow</span>
                    </div>
                    <div className="flex justify-center items-center size-10 rounded-full bg-black/80 text-white cursor-pointer hover:bg-black transition-colors duration-300 px-4">
                        <FaPlus className="text-lg" />
                    </div>
                </div>
            </article>
        </div>

      </div>

      <div className="w-full mt-32 mb-10">
        <div className="flex flex-col justify-center items-center gap-6">          
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className="w-1/5 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-full transition-all duration-300 border-2 border-gray-200 p-2 px-4 flex items-center justify-between gap-4 hover:scale-[1.02] hover:border-lime-200">
                    <div className="flex-shrink-0">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-gray-100 ">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="size-14"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-right truncate">
                        {company.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeaderComponent