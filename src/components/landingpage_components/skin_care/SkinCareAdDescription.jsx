import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const SkinCareAdDescription = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-4">
        
        <div className="flex justify-start items-start w-[80%]">
          <h2 className='text-gray-600/80 justify-end text-sm'>02 - Glowcare</h2>
        </div>

        {/* header */}
        <div className="flex justify-center items-center w-full">
            <div className="w-[90%] flex justify-end items-end p-4">
              <span className="text-3xl font-semibold w-[42rem] leading-10 px-10">
                Choose A Product And Have An Evening of Reflection and Future Vision
              </span>
            </div>
        </div>

        {/* upper container - now separate */}
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-[70%] relative min-h-[500px]">
            
            {/* First section - positioned at top left with spacing */}
            <div className="absolute top-0 left-0 w-1/3 h-42 justify-center items-center border-2 bg-lime-200/50 border-lime-500/40 rounded-md p-4 z-10 shadow-lg -mt-2 -ml-2">
              <div className="w-full flex flex-col h-30 justify-center items-center gap-4">
                {/* header */}
                <div className="flex flex-col gap-2 w-full">
                    <span className="text-2xl font-semibold">Total</span>
                    <span className="text-2xl font-semibold">Counties</span>
                    <p className="text-sm text-gray-600 leading-6 mt-8 w-full">
                        Delivering innovative skincare solution that cater to diverse beauty needs countrywide
                    </p>
                </div>
                <div className="w-full flex justify-start items-center mt-10 p-4">
                    <span className="text-3xl font-semibold">47+</span>
                </div>
              </div>
            </div>

            {/* Middle section - centered with spacing */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col w-1/3 h-42 justify-center items-center border-2 bg-lime-500/60 border-lime-500/40 rounded-md p-4 shadow-xl">
               {/* header */}
               <div className="w-full flex justify-start items-start p-2">
                 <span className="text-3xl font-semibold">180 +</span>
               </div>
               <div className="w-full flex justify-center p-2 rounded-md overflow-hidden">
                 <img 
                   src="https://i.pinimg.com/1200x/d7/da/37/d7da375b064ebef0181be0c9399dbc9a.jpg" 
                   alt="Global Brands" 
                   className="w-full h-40 object-cover rounded-md"
                 />
               </div>
               <div className="w-full flex flex-col justify-start items-start p-4 gap-2">
                 <span className="text-2xl text-gray-900 font-semibold">Global Brands</span>
                 <p className="text-sm text-gray-800 leading-8">
                   Curating innovative skincare reasures from all corners of the globe
                 </p>
               </div>
            </div>

            {/* Third section - positioned at bottom right with spacing */}
            <div className="absolute bottom-0 right-0 w-1/3 h-42 justify-center items-center border-2 bg-lime-300/50 border-lime-500/40 rounded-md p-4 z-10 shadow-lg -mb-2 -mr-2">
              <div className="w-full flex flex-col h-30 justify-center items-center gap-4">
                {/* header */}
                <div className="flex flex-col gap-2 w-full">
                    <span className="text-2xl font-semibold">Happy</span>
                    <span className="text-2xl font-semibold">Customers</span>
                    <p className="text-sm text-gray-600 leading-6 mt-8 w-full">
                        Satisfied customers who trust our products for their skincare journey
                    </p>
                </div>
                <div className="w-full flex justify-start items-center mt-10 p-4">
                    <span className="text-3xl font-semibold">10K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* lower container - separate from upper */}
        <div className="w-full mt-20 flex flex-col justify-center items-center">
            <div className="w-[80%] flex justify-start items-start">
                <div className="flex justify-center items-center rounded-full border-2 border-gray-400/50 gap-3 px-2 p-1">
                   <IoIosArrowRoundForward/>
                   <img src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" alt="" className='size-5 rounded-full' />
                   <span className='text-sm text-gray-700/50'>Quality Products</span>
                   <IoIosArrowRoundForward/>
                </div>  
            </div>
            <div className="w-[70%] flex flex-col justify-center items-center py-6">

                <div className="flex w-full justify-center items-center gap-[5%]">
                    <div className="w-[65%] flex justify-start items-start">
                        <span className="text-5xl font-semibold">
                            Find Your Perfect Match from Our Selections
                        </span>
                    </div>
                    <div className="w-[30%] flex justify-end items-end">
                        <p className="text-sm text-gray-500 leading-6">
                            Find your ideal skincare match from our curated categories, tailored to meet diverse skin needs and guide you to radiant beauty with ease.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-14 gap-4">

                    <div className="flex flex-col justify-center items-center w-96 overflow-hidden p-2">
                        <div className="w-full rounded-md overflow-hidden">
                          <img 
                            src="https://i.pinimg.com/1200x/e0/ab/22/e0ab229d9a80a28d6e01a800406f885f.jpg" 
                            alt="Hazel Toner" 
                            className="w-full h-96 object-cover" 
                          />
                        </div>
                        <div className="w-full flex justify-center items-center mt-6">
                            <div className="flex justify-between items-center w-full p-2">
                                <span className="text-md font-semibold">Hazel Toner</span>
                                <BsArrowRight className="text-gray-600"/>
                            </div>
                        </div>
                        <div className="flex justify-start items-start p-2 mt-4">
                            <p className="text-gray-500 text-sm leading-6">
                                Witch Hazel, a natural plant extract, is known for its ability to cleanse the skin, reduce excess oil, and tighten pores without over-drying.
                            </p>
                        </div>
                    </div>

                    {/* Middle image with overlay */}
                    <div className="relative w-96 h-[34rem] rounded-lg overflow-hidden">
                        <img 
                            src="https://i.pinimg.com/736x/65/01/45/650145b9c2d0f11dd9001135eede0f72.jpg" 
                            alt="Featured Skincare" 
                            className="w-full h-full object-cover" 
                        />
                        
                        {/* Overlay div - positioned absolutely over the image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Optional: Add content on top of overlay */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">Premium Collection</h3>
                            <p className="text-sm opacity-90">Discover our exclusive skincare line for radiant, glowing skin</p>
                            <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-96 overflow-hidden p-2">
                        <div className="w-full rounded-md overflow-hidden">
                          <img 
                            src="https://i.pinimg.com/1200x/9c/a0/77/9ca0778d09ffd78ce028aaebeb41299e.jpg" 
                            alt="Hazel Toner" 
                            className="w-full h-96 object-cover" 
                          />
                        </div>
                        <div className="w-full flex justify-center items-center mt-10">
                            <div className="flex justify-between items-center w-full p-2">
                                <span className="text-md font-semibold">Face Cream</span>
                                <BsArrowRight className="text-gray-600"/>
                            </div>
                        </div>
                        <div className="flex justify-start items-start p-2 mt-4">
                            <p className="text-gray-500 text-sm leading-6">
                                Face creams play a crucial role in maintaining skin hydartionand protecting the skin barrier.
                            </p>
                        </div>
                    </div>

                </div>

            </div>          
        </div>

    </section> 
  )
}

export default SkinCareAdDescription