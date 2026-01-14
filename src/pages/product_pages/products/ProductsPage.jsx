import React, { useState } from 'react'
import { BsFilter, BsCheck2, BsChevronDown, BsChevronUp, BsStarFill, BsArrowRight } from "react-icons/bs"
import { FiCheck } from "react-icons/fi"
import FooterComponent from '../../../components/ui/footer/FooterComponent'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
  const navigate = useNavigate()
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedAvailability, setSelectedAvailability] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [expandedSections, setExpandedSections] = useState({
    availability: true,
    category: true,
    brand: true,
    price: true,
    rating: true
  })

  // Sample filter data
  const availabilityOptions = [
    { id: 'in-stock', label: 'In Stock', count: 45 },
    { id: 'out-of-stock', label: 'Out of Stock', count: 12 },
    { id: 'on-sale', label: 'On Sale', count: 18 },
    { id: 'new-arrival', label: 'New Arrival', count: 23 }
  ]

  const categoryOptions = [
    { id: 'face-care', label: 'Face Care', count: 32 },
    { id: 'body-care', label: 'Body Care', count: 28 },
    { id: 'eye-care', label: 'Eye Care', count: 15 },
    { id: 'sun-care', label: 'Sun Care', count: 10 },
    { id: 'mask', label: 'Masks', count: 22 },
    { id: 'serum', label: 'Serums', count: 19 },
    { id: 'cleanser', label: 'Cleansers', count: 25 },
    { id: 'moisturizer', label: 'Moisturizers', count: 30 }
  ]

  const brandOptions = [
    { id: 'glowcare', label: 'GlowCare', count: 35 },
    { id: 'cerave', label: 'CeraVe', count: 28 },
    { id: 'the-ordinary', label: 'The Ordinary', count: 22 },
    { id: 'la-roche-posay', label: 'La Roche-Posay', count: 18 },
    { id: 'neutrogena', label: 'Neutrogena', count: 25 },
    { id: 'clinique', label: 'Clinique', count: 20 },
    { id: 'kiehls', label: "Kiehl's", count: 15 },
    { id: 'shiseido', label: 'Shiseido', count: 12 }
  ]

  const ratingOptions = [
    { id: '5-star', label: '5 Stars', count: 42, stars: 5 },
    { id: '4-star', label: '4 Stars & Up', count: 38, stars: 4 },
    { id: '3-star', label: '3 Stars & Up', count: 25, stars: 3 },
    { id: '2-star', label: '2 Stars & Up', count: 8, stars: 2 }
  ]

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Handle checkbox changes
  const handleCheckboxChange = (setter, value) => {
    setter(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // Handle price range change
  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange]
    newRange[index] = parseInt(value)
    setPriceRange(newRange)
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedAvailability([])
    setSelectedRatings([])
    setPriceRange([0, 500])
  }

  // Navigate to product detail page
  const handleProductClick = (productId) => {
    navigate(`/product-page/${productId}`)
  }

  // Sample product data - Updated with more fields to match SkinCareProducts
  const sampleProducts = [
    { 
      id: 1,
      product_title: "Hydrating Serum", 
      product_desc: "Deep hydration for all skin types", 
      price: "$56.00",
      size: "30ML",
      category: "Serum",
      image: "https://i.pinimg.com/736x/86/6c/03/866c039b9f5473b9df541b7e7b25871a.jpg",
      rating: 4.8,
      brand: "GlowCare",
      reviewCount: 124,
      inStock: true,
      onSale: true,
      isNew: true
    },
    { 
      id: 2,
      product_title: "Vitamin C Glow Cream", 
      product_desc: "Brightening formula with natural extracts", 
      price: "$42.00",
      size: "60ML",
      category: "Face Care",
      image: "https://i.pinimg.com/736x/22/15/e6/2215e6979b1797803d86c5ec1bfef991.jpg",
      rating: 4.7,
      brand: "The Ordinary",
      reviewCount: 89,
      inStock: true,
      onSale: false,
      isNew: false
    },
    { 
      id: 3,
      product_title: "Detox Clay Mask", 
      product_desc: "Deep pore cleansing formula", 
      price: "$32.00",
      size: "75ML",
      category: "Mask",
      image: "https://i.pinimg.com/736x/bb/fa/c8/bbfac814b5808c8f1f08510ef1bfa784.jpg",
      rating: 4.5,
      brand: "CeraVe",
      reviewCount: 67,
      inStock: true,
      onSale: true,
      isNew: false
    },
    { 
      id: 4,
      product_title: "SPF 50 Sunscreen", 
      product_desc: "Broad spectrum UV protection", 
      price: "$38.00",
      size: "100ML",
      category: "Sun Care",
      image: "https://i.pinimg.com/736x/b0/71/de/b071de36baef5c44fbb4fdc26c8873b5.jpg",
      rating: 4.6,
      brand: "La Roche-Posay",
      reviewCount: 156,
      inStock: false,
      onSale: false,
      isNew: true
    },
    { 
      id: 5,
      product_title: "Skin Clean Cream", 
      product_desc: "Limited fruity collections for summer glow", 
      price: "$48.00",
      size: "50ML",
      category: "Face Care",
      image: "https://i.pinimg.com/1200x/8c/1d/c6/8c1dc6b9b5edd770e7e912853c0a632a.jpg",
      rating: 4.8,
      brand: "GlowCare",
      reviewCount: 98,
      inStock: true,
      onSale: true,
      isNew: true
    },
    { 
      id: 6,
      product_title: "Eye Revive Gel", 
      product_desc: "Reduce puffiness and dark circles", 
      price: "$45.00",
      size: "15ML",
      category: "Eye Care",
      image: "https://i.pinimg.com/736x/b0/09/e3/b009e398a94e25c62b038b030d451b43.jpg",
      rating: 4.7,
      brand: "Clinique",
      reviewCount: 76,
      inStock: true,
      onSale: false,
      isNew: false
    }
  ]

  return (
    <section className="flex flex-col justify-center items-center">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-teal-50 to-lime-50 py-8 md:mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">All Skincare Products</h1>
          <p className="text-gray-600">Discover {sampleProducts.length}+ premium skincare products for your perfect routine</p>
        </div>
      </div>

      {/* main component */}
      <div className="w-[90%] flex justify-start items-start p-6 gap-8">

        {/* filter container */}
        <div className="w-[30%] md:mt-8 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-6 h-fit">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BsFilter className="text-teal-600 text-lg" />
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            </div>
            {(selectedCategories.length > 0 || selectedBrands.length > 0 || 
              selectedAvailability.length > 0 || selectedRatings.length > 0 || 
              priceRange[0] > 0 || priceRange[1] < 500) && (
              <button 
                onClick={clearAllFilters}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Filter sections */}
          <div className="space-y-6">

            {/* Availability */}
            <div className="border-b border-gray-100 pb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection('availability')}
              >
                <h3 className="font-semibold text-gray-800">Availability</h3>
                {expandedSections.availability ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              
              {expandedSections.availability && (
                <div className="space-y-2">
                  {availabilityOptions.map((option) => (
                    <label key={option.id} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedAvailability.includes(option.id)}
                            onChange={() => handleCheckboxChange(setSelectedAvailability, option.id)}
                            className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-teal-500 checked:border-teal-500 appearance-none cursor-pointer peer"
                          />
                          <FiCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <div className="border-b border-gray-100 pb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection('price')}
              >
                <h3 className="font-semibold text-gray-800">Price Range</h3>
                {expandedSections.price ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              
              {expandedSections.price && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(0, e.target.value)}
                      className="absolute w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-600"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(1, e.target.value)}
                      className="absolute w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-600"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Category */}
            <div className="border-b border-gray-100 pb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection('category')}
              >
                <h3 className="font-semibold text-gray-800">Category</h3>
                {expandedSections.category ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              
              {expandedSections.category && (
                <div className="space-y-2">
                  {categoryOptions.map((option) => (
                    <label key={option.id} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(option.id)}
                            onChange={() => handleCheckboxChange(setSelectedCategories, option.id)}
                            className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-teal-500 checked:border-teal-500 appearance-none cursor-pointer peer"
                          />
                          <FiCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Brand */}
            <div className="border-b border-gray-100 pb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection('brand')}
              >
                <h3 className="font-semibold text-gray-800">Brand</h3>
                {expandedSections.brand ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              
              {expandedSections.brand && (
                <div className="space-y-2">
                  {brandOptions.map((option) => (
                    <label key={option.id} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(option.id)}
                            onChange={() => handleCheckboxChange(setSelectedBrands, option.id)}
                            className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-teal-500 checked:border-teal-500 appearance-none cursor-pointer peer"
                          />
                          <FiCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection('rating')}
              >
                <h3 className="font-semibold text-gray-800">Customer Rating</h3>
                {expandedSections.rating ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              
              {expandedSections.rating && (
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <label key={option.id} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedRatings.includes(option.id)}
                            onChange={() => handleCheckboxChange(setSelectedRatings, option.id)}
                            className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-teal-500 checked:border-teal-500 appearance-none cursor-pointer peer"
                          />
                          <FiCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <BsStarFill 
                              key={i} 
                              className={`text-sm ${i < option.stars ? 'text-amber-500' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="ml-2 text-gray-700 group-hover:text-teal-600 transition-colors">
                            {option.label}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Apply filters button */}
          <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-300">
            Apply Filters
          </button>
        </div>

        {/* products display container */}
        <div className="w-[70%]">
          {/* Results header */}
          <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-200">
            <div>
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-800">1-{sampleProducts.length}</span> of{' '}
                <span className="font-semibold text-gray-800">57</span> products
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:border-teal-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* Products grid - Updated to match SkinCareProducts format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="flex flex-col justify-center items-center overflow-hidden">
                {/* Product image with overlay - Updated to match SkinCareProducts */}
                <div className="w-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.product_title} 
                    className="w-full h-80 object-cover" 
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.onSale && (
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        SALE
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        OUT OF STOCK
                      </span>
                    )}
                  </div>
                  
                  {/* Buy Now Button - Updated to match SkinCareProducts */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <div className="w-full flex justify-between items-center gap-3">
                      <button 
                        onClick={() => handleProductClick(product.id)}
                        className='flex justify-between items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white p-2 px-6 hover:bg-white/20 hover:border-white transition-all duration-300'
                      >
                        <span className="text-sm font-medium">View Details</span>
                        <BsArrowRight className="text-white"/>
                      </button>

                      <span className="p-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 rounded-full text-sm shadow-lg">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Card content - Updated to match SkinCareProducts */}
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">← Previous</button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">10</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next →</button>
          </div>
        </div>
        
      </div>
      <FooterComponent/>
    </section>
  )
}

export default ProductsPage