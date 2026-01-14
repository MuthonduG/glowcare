import React from 'react'

const SkinCareAdDescriptionTwo = () => {
  return (
    <section className="w-full bg-teal-100/40 flex justify-center items-center py-16">

        {/* main component */}
        <div className="w-[80%] flex justify-center items-center gap-6">
            <div className="flex flex-1 flex-col justify-start items-start p-6 gap-4 relative min-h-[500px] rounded-lg">
                
                <div className="flex flex-col gap-4 w-[80%] py-6 p-4 border-r-2 border-teal-500 relative">
                  <span className="text-4xl font-semibold"> Essential For Radiant Skin </span>
                  <p className="text-gray-600 text-sm leading-10 mt-10">
                    CreaVe Hydrating Facial Cleanser is a top choice for skincare, offering gentle yet effective hydration, ideal for all skin types, epecially dry and sensitive skin, it cleanses while maintaining your skins's natuaral barrier for a refreshed and nourished complexion.
                   </p>
                </div>

                <div className="flex justify-start items-start gap-8 p-4 relative mt-8">
                    <button className="bg-slate-950 flex justify-center items-center rounded-full px-6 p-2 hover:bg-slate-800 transition-colors duration-300">
                        <span className="font-semibold text-white text-sm">
                            Learn More
                        </span>
                    </button>
                    <button className="bg-lime-300 flex justify-center items-center rounded-full px-6 p-2 hover:bg-lime-400 transition-colors duration-300">
                        <span className="font-semibold text-sm">
                            Shop Now
                        </span>
                    </button>
                </div>


                <div className="absolute bottom-4 right-4 w-48 h-48 bg-white rounded-lg overflow-hidden shadow-xl border-4 border-white z-10">
                    <img 
                      src="https://i.pinimg.com/736x/5f/e3/52/5fe3522fe48ed25387c562231641cdb2.jpg" 
                      alt="Skincare product" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-300/10 to-transparent"></div>
                    <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                </div>

            </div>

            {/* right */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg p-1 bg-slate-50">
                <img 
                  src="https://i.pinimg.com/1200x/18/9e/dd/189eddad3fc7ae091f8139c71016b711.jpg" 
                  alt="Skincare routine" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-teal-400/10 to-transparent"></div>
              </div>
            </div>
        </div>

    </section> 
  )
}

export default SkinCareAdDescriptionTwo
