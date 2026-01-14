import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import image_one from "../../../assets/landing_page_two.png"

const filter_buttons = [
    { title: "All Product", href: "#" },
    { title: "Fruity Collection", href: "#" },
    { title: "Begans Collection", href: "#" },
    { title: "Floral Collection", href: "#" }
]

const sample_product = [
    { 
        id: 1,
        product_title: "Skin Clean Cream", 
        product_desc: "Limited fruity collections for summer glow", 
        price: "$48.00",
        size: "50ML",
        category: "Face care",
        image: "https://i.pinimg.com/1200x/8c/1d/c6/8c1dc6b9b5edd770e7e912853c0a632a.jpg",
        rating: 4.8
    },
    { 
        id: 2,
        product_title: "Hydrating Serum", 
        product_desc: "Deep hydration for all skin types", 
        price: "$56.00",
        size: "30ML",
        category: "Serum",
        image: "https://i.pinimg.com/736x/8f/51/5e/8f515e76f754c41d5d3ea67cf37f7953.jpg",
        rating: 4.9
    },
    { 
        id: 3,
        product_title: "Vitamin C Glow", 
        product_desc: "Brightening formula with natural extracts", 
        price: "$42.00",
        size: "60ML",
        category: "Face care",
        image: "https://i.pinimg.com/736x/aa/3b/ff/aa3bffbbcdb1c0e3f70cf418d874de17.jpg",
        rating: 4.7
    },
    { 
        id: 4,
        product_title: "Night Repair Cream", 
        product_desc: "Overnight rejuvenation therapy", 
        price: "$65.00",
        size: "50ML",
        category: "Night care",
        image: "https://i.pinimg.com/736x/89/92/8d/89928dc1b02c5066cca5a5e421114f40.jpg",
        rating: 4.8
    },
    { 
        id: 5,
        product_title: "Sun Protection SPF 50", 
        product_desc: "Broad spectrum UV protection", 
        price: "$38.00",
        size: "100ML",
        category: "Sun care",
        image: "https://i.pinimg.com/736x/b0/71/de/b071de36baef5c44fbb4fdc26c8873b5.jpg",
        rating: 4.6
    },
    { 
        id: 6,
        product_title: "Detox Clay Mask", 
        product_desc: "Deep pore cleansing formula", 
        price: "$32.00",
        size: "75ML",
        category: "Mask",
        image: "https://i.pinimg.com/736x/bb/fa/c8/bbfac814b5808c8f1f08510ef1bfa784.jpg",
        rating: 4.5
    },
    { 
        id: 7,
        product_title: "Eye Revive Gel", 
        product_desc: "Reduce puffiness and dark circles", 
        price: "$45.00",
        size: "15ML",
        category: "Eye care",
        image: "https://i.pinimg.com/736x/b0/09/e3/b009e398a94e25c62b038b030d451b43.jpg",
        rating: 4.7
    },
    { 
        id: 8,
        product_title: "Moisture Lock Lotion", 
        product_desc: "24-hour hydration technology", 
        price: "$52.00",
        size: "200ML",
        category: "Body care",
        image: "https://i.pinimg.com/736x/42/92/a1/4292a14831b48df71fd703ad37251e8a.jpg",
        rating: 4.9
    },
    { 
        id: 9,
        product_title: "Acne Control Solution", 
        product_desc: "Targeted blemish treatment", 
        price: "$40.00",
        size: "40ML",
        category: "Treatment",
        image: "https://i.pinimg.com/736x/28/e6/78/28e678483f824a68fcb89c91d2efc00d.jpg",
        rating: 4.6
    },
    { 
        id: 10,
        product_title: "Glow Booster Drops", 
        product_desc: "Luminizing facial oil blend", 
        price: "$58.00",
        size: "20ML",
        category: "Oil",
        image: "https://i.pinimg.com/736x/44/5a/ee/445aee414f890eb4d66cdadd70a7a12f.jpg",
        rating: 4.8
    }
]

const SkinCareProducts = () => {
  return (
     <section className="w-full flex flex-col justify-center items-center py-6">

        <div className="w-[80%] flex justify-center items-center py-10">
            <div className="flex justify-center items-center rounded-full border-2 border-gray-400/50 gap-3 px-2 p-1">
                <IoIosArrowRoundForward/>
                <img src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" alt="" className='size-5 rounded-full' />
                <span className='text-sm text-gray-700/50'>Summer Beauty Products</span>
                <IoIosArrowRoundForward/>
            </div>  
        </div>  

        <div className="w-[50%] flex justify-center items-center mb-8">
            <p className="text-5xl font-semibold text-center leading-[4rem]">
                unlock the secret to your inner beauty and energy
            </p>
        </div>

        {/* filter buttons */}
        <div className="w-[80%] flex justify-start items-start p-4 gap-4">
            {
                filter_buttons.map((item, key)=>(
                    <a href={item.href} key={key} className="rounded-full border-2 border-gray-300 px-6 p-2 text-sm hover:border-lime-600 hover:bg-lime-300/50 transform ease-in-out transition-all duration-300">
                        {item.title}
                    </a>
                ))
            }
        </div>

        {/* product cards grid */}
        <div className="w-[80%] grid grid-cols-3 gap-8 p-6 mt-4">
            {
                sample_product.map((product) => (
                    <div key={product.id} className="flex flex-col justify-center items-center overflow-hidden">
                        <div className="w-full rounded-2xl overflow-hidden relative">
                            <img 
                                src={product.image} 
                                alt={product.product_title} 
                                className="w-full h-80 object-cover" 
                            />
                            
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                                <div className="w-full flex justify-between items-center gap-3">
                                    <button className='flex justify-between items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white p-2 px-6 hover:bg-white/20 hover:border-white transition-all duration-300'>
                                        <span className="text-sm font-medium">Buy Now</span>
                                        <BsArrowRight className="text-white"/>
                                    </button>

                                    <span className="p-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 rounded-full text-sm shadow-lg">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card content */}
                        <div className="border-2 border-gray-200 bg-white rounded-3xl mt-6 p-4 w-full">
                            <div className="w-full flex justify-center items-center">
                                <div className="flex justify-between items-center w-full p-2">
                                   <span className="text-lg font-bold text-gray-800">{product.product_title}</span>
                                   <span className="text-md font-semibold text-lime-600">{product.size}</span>
                                </div>
                            </div>
                            <div className="flex justify-start items-start p-2 mt-2">
                                <p className="text-gray-600 text-sm leading-6">
                                    {product.product_desc}
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between mt-4 p-2">
                                <div className="flex items-center">
                                    <div className="text-amber-500">
                                        {'★'.repeat(Math.floor(product.rating))}
                                        {'☆'.repeat(5 - Math.floor(product.rating))}
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">{product.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {product.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* last container */}
        <div className="w-full bg-teal-800/90 h-[800px] flex justify-center items-center relative mt-10">
            <div className="w-[80%] h-full flex justify-center items-center relative rounded-2xl overflow-hidden">
              <img 
                src={image_one} 
                alt="Water sustainability and beauty" 
                className="h-full" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/60 via-teal-700/40 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex flex-col justify-center items-start text-white z-10">
                <span className="text-4xl font-bold mb-6 max-w-2xl leading-[3.5rem]">
                    Fostering Water Sustainability While Celebrating Global Beauty
                </span>
                
                <p className="text-lg mb-8 max-w-2xl opacity-90">
                    Join us in our commitment to eco-friendly beauty practices that preserve water resources while enhancing natural beauty worldwide. Every purchase contributes to clean water initiatives.
                </p>
                
                <div className="flex justify-start items-center gap-4">
                    <button className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                        <span>Learn More</span>
                        <BsArrowRight className="text-lg" />
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
                        Donate Now
                    </button>
                </div>
                
\                <div className="flex justify-start items-center gap-8 mt-10 pt-8 border-t border-white/30">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">10K+</span>
                        <span className="text-sm opacity-80">Liters Conserved</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">50+</span>
                        <span className="text-sm opacity-80">Communities Supported</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">100%</span>
                        <span className="text-sm opacity-80">Eco-Friendly Packaging</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

     </section>
  )
}

export default SkinCareProducts