import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SkinCareAdDescriptionThree = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Products on offer with their image URLs - Updated to match card theme
  const offerProducts = [
    {
      id: 1,
      product_title: "Vitamin C Glow Serum",
      product_desc: "Brightening formula with natural extracts for radiant skin",
      price: "$56.00",
      originalPrice: "$70.00",
      size: "30ML",
      category: "Serum",
      image: "https://i.pinimg.com/736x/86/6c/03/866c039b9f5473b9df541b7e7b25871a.jpg",
      rating: 4.8,
      discount: "20% OFF",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      product_title: "Detox Clay Mask",
      product_desc: "Deep pore cleansing formula with natural clay",
      price: "$32.00",
      originalPrice: "$40.00",
      size: "75ML",
      category: "Mask",
      image: "https://i.pinimg.com/736x/bb/fa/c8/bbfac814b5808c8f1f08510ef1bfa784.jpg",
      rating: 4.5,
      discount: "15% OFF",
      badge: "NEW"
    },
    {
      id: 3,
      product_title: "SPF 50 Sun Protection",
      product_desc: "Broad spectrum UV protection with moisturizing formula",
      price: "$38.00",
      originalPrice: "$50.00",
      size: "100ML",
      category: "Sun Care",
      image: "https://i.pinimg.com/736x/b0/71/de/b071de36baef5c44fbb4fdc26c8873b5.jpg",
      rating: 4.6,
      discount: "25% OFF",
      badge: "LIMITED"
    },
    {
      id: 4,
      product_title: "Hydrating Glow Cream",
      product_desc: "24-hour moisture lock technology for dewy skin",
      price: "$42.00",
      originalPrice: "$60.00",
      size: "50ML",
      category: "Face Cream",
      image: "https://i.pinimg.com/736x/aa/3b/ff/aa3bffbbcdb1c0e3f70cf418d874de17.jpg",
      rating: 4.7,
      discount: "30% OFF",
      badge: "HOT"
    },
    {
      id: 5,
      product_title: "Eye Revive Gel",
      product_desc: "Reduce puffiness and dark circles with cooling effect",
      price: "$45.00",
      originalPrice: "$50.00",
      size: "15ML",
      category: "Eye Care",
      image: "https://i.pinimg.com/736x/b0/09/e3/b009e398a94e25c62b038b030d451b43.jpg",
      rating: 4.7,
      discount: "10% OFF",
      badge: "POPULAR"
    }
  ];

  // Products for the grid below
  const gridProducts = [
    {
      id: 6,
      product_title: "Hydrating Face Mask",
      product_desc: "Deep cleansing and hydrating mask for all skin types",
      price: "$28.00",
      size: "60ML",
      category: "Face Mask",
      image: "https://i.pinimg.com/736x/89/16/5c/89165c426630e61ac1febbb66d3365f6.jpg",
      rating: 4.4,
      badge: "NEW"
    },
    {
      id: 7,
      product_title: "Everdrop Natural Care",
      product_desc: "Organic ingredients for sensitive skin. Dermatologist tested.",
      price: "$36.00",
      originalPrice: "$45.00",
      size: "60ML",
      category: "Natural Care",
      image: "https://i.pinimg.com/736x/22/15/e6/2215e6979b1797803d86c5ec1bfef991.jpg",
      rating: 4.6,
      badge: "SALE"
    },
    {
      id: 8,
      product_title: "One Clarifying Serum",
      product_desc: "Reduces acne and blemishes while brightening skin tone",
      price: "$42.00",
      size: "60ML",
      category: "Serum",
      image: "https://i.pinimg.com/736x/ac/25/90/ac2590938607eb6cd2767f3247af9ea3.jpg",
      rating: 4.8,
      badge: "BEST SELLER"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offerProducts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, offerProducts.length]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offerProducts.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offerProducts.length) % offerProducts.length);
  };

  // Handle slide click - redirect to products page
  const handleSlideClick = () => {
    navigate('/product-page'); // Redirect to products page
  };

  // Handle indicator click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle product card click
  const handleProductClick = (productId) => {
    navigate(`/product-page/${productId}`);
  };

  // Get badge color based on type
  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'SALE': return 'bg-red-500';
      case 'NEW': return 'bg-teal-500';
      case 'BEST SELLER': return 'bg-amber-500';
      case 'LIMITED': return 'bg-purple-500';
      case 'HOT': return 'bg-orange-500';
      case 'POPULAR': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center py-6">

      {/* Header container with background slider */}
      <div className="w-[80%] relative h-[800px] overflow-hidden mt-28 rounded-3xl">
        
        {/* Background slider */}
        <div 
          className="absolute inset-0 z-0 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={handleSlideClick} // Click anywhere on slider to redirect
        >
          {/* Slides */}
          <div className="relative w-full h-full">
            {offerProducts.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-110'
                }`}
              >
                {/* Background image */}
                <img 
                  src={product.image} 
                  alt={product.product_title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50"></div>
                
                {/* Offer badge on image */}
                <div className="absolute top-8 left-8 z-20">
                  <div className={`${getBadgeColor(product.badge)} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                    {product.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="nav-button absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <IoIosArrowRoundForward className="text-2xl text-white rotate-180" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="nav-button absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <IoIosArrowRoundForward className="text-2xl text-white" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {offerProducts.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-teal-600 w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Click instruction */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-white/80 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              Click anywhere to view all offers →
            </div>
          </div>
        </div>

        {/* Overlay content - positioned on top of slider */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center overlay-content">
          
          {/* Shop Our Best Sellers tag */}
          <div className="w-full flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm gap-3 px-6 p-2">
              <IoIosArrowRoundForward className="text-white"/>
              <img 
                src="https://i.pinimg.com/1200x/a4/7b/54/a47b5473c4a18701cfad4e8dc58bed84.jpg" 
                alt="Best Sellers" 
                className='size-5 rounded-full' 
              />
              <span className='text-sm text-white font-medium'>Shop Our Best Sellers</span>
              <IoIosArrowRoundForward className="text-white"/>
            </div>  
          </div>

          {/* Main heading */}
          <div className="w-full max-w-3xl flex justify-center items-center mb-12">
            <p className="text-6xl font-bold text-center leading-[5rem] text-white drop-shadow-lg">
              Best-selling essentials for a vibrant, healthy glow of your skin.
            </p>
          </div>

          {/* Call to action button */}
          <button 
            onClick={handleSlideClick}
            className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 duration-300"
          >
            <span>Explore All Products</span>
            <BsArrowRight className="text-lg" />
          </button>

          {/* Current offer info */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white/90 text-lg mb-2">
              Current Offer: <span className="font-bold text-white">{offerProducts[currentSlide].discount}</span> on {offerProducts[currentSlide].product_title}
            </div>
            <button 
              onClick={() => handleProductClick(offerProducts[currentSlide].id)}
              className="text-white underline hover:no-underline font-medium"
            >
              View Product Details
            </button>
          </div>
        </div>
      </div>

      {/* Product grid that overlaps the slider - Using consistent card theme */}
      <div className="w-[80%] -mt-40 relative z-20">
        <div className="grid grid-cols-3 gap-8">
          
          {gridProducts.map((product) => (
            <div key={product.id} className="flex flex-col justify-center items-center overflow-hidden">
              {/* Product image with overlay */}
              <div className="w-full rounded-2xl overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.product_title} 
                  className="w-full h-80 object-cover" 
                />
                
                {/* Product badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </div>
                )}
                
                {/* Buy Now Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <div className="w-full flex justify-between items-center gap-3">
                    <button 
                      onClick={() => handleProductClick(product.id)}
                      className='flex justify-between items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white p-2 px-6 hover:bg-white/20 hover:border-white transition-all duration-300'
                    >
                      <span className="text-sm font-medium">Buy Now</span>
                      <BsArrowRight className="text-white"/>
                    </button>

                    <span className="p-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 rounded-full text-sm shadow-lg">
                      {product.originalPrice ? (
                        <>
                          <span className="line-through text-gray-500 text-xs mr-2">{product.originalPrice}</span>
                          {product.price}
                        </>
                      ) : product.price}
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
          ))}

        </div>
      </div>

    </section> 
  )
}

export default SkinCareAdDescriptionThree