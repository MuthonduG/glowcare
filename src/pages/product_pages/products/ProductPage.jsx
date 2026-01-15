import React, { useState } from 'react'
import FooterComponent from '../../../components/ui/footer/FooterComponent'
import { BsStarFill, BsStar, BsArrowLeft, BsArrowRight, BsChevronDown, BsChevronUp, BsHeart, BsShare, BsCartPlus } from "react-icons/bs"
import { FiCheck, FiTruck, FiRefreshCw, FiShield } from "react-icons/fi"
import { IoIosArrowForward } from "react-icons/io"

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState('50ml')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [expandedDetails, setExpandedDetails] = useState({
    ingredients: false,
    howToUse: false,
    shipping: false
  })

  // Sample product data
  const product = {
    id: 1,
    name: "Hydrating Vitamin C Serum",
    brand: "GlowCare",
    category: "Face Serum",
    price: 56.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviewCount: 124,
    description: "A potent Vitamin C serum that brightens skin tone, reduces dark spots, and provides deep hydration. Formulated with 20% Vitamin C, Hyaluronic Acid, and Ferulic Acid for maximum antioxidant protection and skin rejuvenation.",
    size: "30ML",
    inStock: true,
    isNew: true,
    isBestSeller: true,
    sku: "GC-VC30-001",
    tags: ["Vitamin C", "Brightening", "Anti-Aging", "Hydrating"]
  }

  // Sample product images
  const productImages = [
    "https://i.pinimg.com/736x/86/6c/03/866c039b9f5473b9df541b7e7b25871a.jpg",
    "https://i.pinimg.com/736x/8f/51/5e/8f515e76f754c41d5d3ea67cf37f7953.jpg",
    "https://i.pinimg.com/736x/22/15/e6/2215e6979b1797803d86c5ec1bfef991.jpg",
    "https://i.pinimg.com/736x/aa/3b/ff/aa3bffbbcdb1c0e3f70cf418d874de17.jpg"
  ]

  // Product sizes
  const sizes = [
    { id: '30ml', label: '30ml', price: '$56.00' },
    { id: '50ml', label: '50ml', price: '$85.00' },
    { id: '100ml', label: '100ml', price: '$150.00' }
  ]

  // Product benefits
  const benefits = [
    "Brightens skin tone and evens complexion",
    "Reduces appearance of dark spots and hyperpigmentation",
    "Provides 24-hour hydration with Hyaluronic Acid",
    "Protects against environmental damage with antioxidants",
    "Suitable for all skin types including sensitive skin"
  ]

  // Ingredients
  const ingredients = [
    "20% L-Ascorbic Acid (Vitamin C)",
    "Hyaluronic Acid",
    "Ferulic Acid",
    "Vitamin E",
    "Green Tea Extract",
    "Aloe Vera"
  ]

  // How to use steps
  const howToUse = [
    "Cleanse face thoroughly",
    "Apply 4-5 drops to face and neck",
    "Gently massage until fully absorbed",
    "Follow with moisturizer and sunscreen",
    "Use morning and evening for best results"
  ]

  // Toggle expanded sections
  const toggleDetail = (detail) => {
    setExpandedDetails(prev => ({
      ...prev,
      [detail]: !prev[detail]
    }))
  }

  // Navigate images
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  // Add to cart handler
  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`)
    // Add your cart logic here
  }

  return (
    <section className="flex flex-col justify-center items-center">
      {/* Main component */}
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mt-28 mb-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
          <IoIosArrowForward className="text-xs" />
          <a href="/product-page" className="hover:text-teal-600 transition-colors">Products</a>
          <IoIosArrowForward className="text-xs" />
          <a href="#" className="hover:text-teal-600 transition-colors">{product.category}</a>
          <IoIosArrowForward className="text-xs" />
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        {/* Product Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Images */}
          <div className="flex flex-col items-center">
            
            {/* Main Image */}
            <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-lg mb-4">
              <img 
                src={productImages[currentImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <BsArrowLeft className="text-xl text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <BsArrowRight className="text-xl text-gray-800" />
              </button>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST SELLER
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>
            </div>
            
            {/* Thumbnail Slider */}
            <div className="flex gap-3 mt-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'border-teal-500 ring-2 ring-teal-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="mt-4 text-sm text-gray-500">
              {currentImageIndex + 1} / {productImages.length}
            </div>
          </div>
          
          {/* Right Column - Product Info */}
          <div className="flex flex-col">
            
            {/* Brand and Category */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-sm text-gray-500 ml-2">• {product.category}</span>
            </div>
            
            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill 
                    key={i} 
                    className={`text-lg ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviewCount} reviews)</span>
              <span className="text-teal-600 font-medium ml-4">In Stock</span>
            </div>
            
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2 text-lg">
                or 4 interest-free payments of ${(product.price / 4).toFixed(2)} with 
                <span className="text-teal-600 font-medium ml-1">Afterpay</span>
              </p>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size:</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSize === size.id
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`font-medium ${
                        selectedSize === size.id ? 'text-teal-600' : 'text-gray-700'
                      }`}>
                        {size.label}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{size.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-medium text-gray-900 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <BsCartPlus className="text-lg" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                
                <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <BsHeart className="text-xl text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FiTruck className="text-teal-600 text-xl" />
                <div>
                  <div className="font-medium text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FiRefreshCw className="text-teal-600 text-xl" />
                <div>
                  <div className="font-medium text-gray-900">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Easy returns</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FiShield className="text-teal-600 text-xl" />
                <div>
                  <div className="font-medium text-gray-900">1-Year Warranty</div>
                  <div className="text-sm text-gray-600">Quality guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <BsShare className="text-teal-600 text-xl" />
                <div>
                  <div className="font-medium text-gray-900">Share</div>
                  <div className="text-sm text-gray-600">With friends</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for Additional Information */}
        <div className="mt-16">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {['description', 'ingredients', 'howToUse', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-lg font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'description' && 'Product Description'}
                  {tab === 'ingredients' && 'Ingredients'}
                  {tab === 'howToUse' && 'How To Use'}
                  {tab === 'reviews' && `Reviews (${product.reviewCount})`}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-8">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Details</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Hydrating Vitamin C Serum combines cutting-edge skincare technology with natural ingredients. 
                    This lightweight formula absorbs quickly without leaving a sticky residue, making it perfect for 
                    daily use under makeup or sunscreen.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Skin Type</h3>
                  <p className="text-gray-700 mb-4">
                    Suitable for all skin types including sensitive, oily, dry, combination, and mature skin.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Ingredients Tab */}
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Ingredients List</h3>
                <ul className="space-y-2">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  *Formulated without parabens, sulfates, phthalates, synthetic fragrances, or artificial colors.
                </p>
              </div>
            )}
            
            {/* How To Use Tab */}
            {activeTab === 'howToUse' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Guide</h3>
                  <ol className="space-y-4">
                    {howToUse.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for Best Results</h3>
                  <ul className="space-y-3">
                    <li className="text-gray-700">• Store in a cool, dark place away from direct sunlight</li>
                    <li className="text-gray-700">• Use within 3 months of opening for maximum potency</li>
                    <li className="text-gray-700">• Apply sunscreen daily when using Vitamin C products</li>
                    <li className="text-gray-700">• Perform a patch test before first use if you have sensitive skin</li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                    <p className="text-gray-600">What our customers are saying</p>
                  </div>
                  <button className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                
                {/* Review Stats */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill key={i} className="text-amber-500" />
                        ))}
                      </div>
                      <div className="text-gray-600 mt-1">{product.reviewCount} reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3 mb-2">
                          <div className="text-sm text-gray-600 w-8">{stars} star</div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-amber-500 h-2 rounded-full"
                              style={{ width: `${(stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2)}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-600 w-8">
                            {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-600">
                            U{review}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Sarah M.</div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <BsStarFill key={i} className="text-amber-500 text-sm" />
                                ))}
                              </div>
                              <div className="text-sm text-gray-500">2 weeks ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This serum has completely transformed my skin! I've been using it for 3 weeks and 
                        already notice brighter, more even-toned skin. It absorbs quickly and doesn't pill 
                        under my moisturizer.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Brightening
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Hydrating
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/aa/3b/ff/aa3bffbbcdb1c0e3f70cf418d874de17.jpg" 
                    alt="Related product"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Related Product {item}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-600">$48.00</span>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      <FooterComponent/>
    </section>
  )
}

export default ProductPage