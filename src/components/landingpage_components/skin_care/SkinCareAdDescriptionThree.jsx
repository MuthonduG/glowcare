import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const SkinCareAdDescriptionThree = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-6">

        <div className="w-[80%] flex justify-center items-center py-10">
            <div className="flex justify-center items-center rounded-full border-2 border-gray-400/50 gap-3 px-2 p-1">
                <IoIosArrowRoundForward/>
                <img src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" alt="" className='size-5 rounded-full' />
                <span className='text-sm text-gray-700/50'>Shop Our Best Sellers</span>
                <IoIosArrowRoundForward/>
            </div>  
        </div>

        <div className="w-[50%] flex justify-center items-center mb-8">
            <p className="text-5xl font-semibold text-center leading-[4rem]">
                Best-selling essentials for a vibrant, healthy glow of your skin.
            </p>
        </div>

        <hr className='w-[90%] bg-gray-300/60 h-1 rounded-full'/>
 
        <div className="mt-8 w-[80%] flex justify-center items-center gap-4">
            
            <div className="flex flex-col justify-center items-center w-96 overflow-hidden">
                {/* Image container with relative positioning */}
                <div className="w-full rounded-md overflow-hidden">
                    <img 
                        src="https://i.pinimg.com/736x/89/16/5c/89165c426630e61ac1febbb66d3365f6.jpg" 
                        alt="Hazel Toner" 
                        className="w-full h-96 object-cover" 
                    />
                </div>
                
                <div className="border-2 rounded-3xl mt-10 p-2 w-full">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex justify-between items-center w-full p-2">
                           <span className="text-md font-semibold">Face Mask</span>
                           <span className="text-md font-semibold">60ML</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-start p-2">
                        <p className="text-gray-500 text-sm leading-6">
                            Face care
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-96 overflow-hidden">
                {/* Image container with relative positioning */}
                <div className="w-full rounded-md overflow-hidden relative">
                    <img 
                        src="https://i.pinimg.com/736x/22/15/e6/2215e6979b1797803d86c5ec1bfef991.jpg" 
                        alt="Hazel Toner" 
                        className="w-full h-96 object-cover" 
                    />
                    
                    {/* Absolute div at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <div className="w-full flex justify-between items-center gap-3">
                            <button className='flex justify-between items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white p-2 px-6 hover:bg-white/20 hover:border-white transition-all duration-300'>
                                <span className="text-sm font-medium">Buy Now</span>
                                <BsArrowRight className="text-white"/>
                            </button>

                            <span className="p-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 rounded-full text-sm shadow-lg">
                                $36.00
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-2 rounded-3xl mt-10 p-2 w-full">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex justify-between items-center w-full p-2">
                           <span className="text-md font-semibold">Everdrop natural care</span>
                           <span className="text-md font-semibold">60ML</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-start p-2">
                        <p className="text-gray-500 text-sm leading-6">
                            Face care
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-96 overflow-hidden">
                <div className="w-full rounded-md overflow-hidden">
                    <img 
                        src="https://i.pinimg.com/736x/ac/25/90/ac2590938607eb6cd2767f3247af9ea3.jpg" 
                        alt="Hazel Toner" 
                        className="w-full h-96 object-cover" 
                    />
                </div>
                
                <div className="border-2 rounded-3xl mt-10 p-2 w-full">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex justify-between items-center w-full p-2">
                           <span className="text-md font-semibold">One Claifying</span>
                           <span className="text-md font-semibold">60ML</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-start p-2">
                        <p className="text-gray-500 text-sm leading-6">
                            Skin care
                        </p>
                    </div>
                </div>
            </div>

        </div>

        {/* last container with lime overlay */}
        <div className="w-[80%] flex justify-center items-center h-[700px] relative rounded-2xl overflow-hidden mt-10">
            <div className="w-full h-full relative">
               <img 
                 src="https://i.pinimg.com/1200x/00/53/47/005347fc5c421e27584a9a7b7d331ea2.jpg" 
                 alt="Skincare collection" 
                 className="w-full h-full object-cover" 
               />
               
               <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/40 via-lime-300/20 to-transparent"></div>
               
               <div className="absolute top-10 left-10 right-10 text-white z-10">
                 <h2 className="text-4xl font-bold mb-4">Discover Your Perfect Skincare Match</h2>
                 <p className="text-lg max-w-2xl mb-6">
                   Explore our curated collection of premium skincare products designed to bring out your natural glow.
                 </p>
                 <button className="bg-white text-lime-700 font-semibold px-6 py-3 rounded-full hover:bg-lime-50 transition-colors duration-300">
                   Shop Collection
                 </button>
               </div>
            </div>

            {/* absolute div card showing price and image - using consistent card format */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 z-20">
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    {/* Image container with relative positioning - same as above cards */}
                    <div className="w-full rounded-2xl overflow-hidden relative border-4 border-white shadow-2xl">
                        <img 
                            src="https://i.pinimg.com/736x/86/6c/03/866c039b9f5473b9df541b7e7b25871a.jpg" 
                            alt="Premium Serum" 
                            className="w-full h-64 object-cover" 
                        />
                        
                        {/* Absolute div at bottom of image - consistent with above */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                            <div className="w-full flex justify-between items-center gap-3">
                                <button className='flex justify-between items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white p-2 px-6 hover:bg-white/20 hover:border-white transition-all duration-300'>
                                    <span className="text-sm font-medium">Buy Now</span>
                                    <BsArrowRight className="text-white"/>
                                </button>

                                <span className="p-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 rounded-full text-sm shadow-lg">
                                    $42.99
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card content below image - consistent with above */}
                    <div className="border-2 border-lime-200 bg-white rounded-3xl mt-6 p-4 w-full shadow-lg opacity-60">
                        <div className="w-full flex justify-center items-center">
                            <div className="flex justify-between items-center w-full p-2">
                               <span className="text-lg font-bold text-gray-800">Glow Serum</span>
                               <span className="text-md font-semibold text-lime-600">60ML</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section> 
  )
}

export default SkinCareAdDescriptionThree