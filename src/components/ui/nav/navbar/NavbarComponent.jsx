import React, { useState, useEffect } from 'react'
import { landingPageNavConstants } from '../../../../utils/constants/nav_list'
import { FaArrowRight, FaCartPlus } from "react-icons/fa6";

// Mock cart data - in a real app, this would come from context/state management
const mockCartItems = [
  { id: 1, name: 'Product 1', quantity: 2 },
  { id: 2, name: 'Product 2', quantity: 1 },
  { id: 3, name: 'Product 3', quantity: 3 }
];

const NavbarComponent = () => {
  const [cartItemCount, setCartItemCount] = useState(mockCartItems.length);
  const [activeNav, setActiveNav] = useState("");
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  
  // Calculate total quantity of all items
  const totalItemsInCart = mockCartItems.reduce((total, item) => total + item.quantity, 0);

  const handleActiveNavlink = (navTitle) => {
    setActiveNav(navTitle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`
      w-full flex justify-center items-center p-2 fixed 
      shadow-md shadow-gray-400/20 z-50
      transition-all duration-300
      ${navbarScrolled 
        ? 'bg-white/90 backdrop-blur-md' 
        : 'bg-white/70 backdrop-blur-sm'
      }
    `}>
      <nav className="w-[90%] flex justify-center items-center p-2">
        <div className="w-full flex flex-1 justify-start items-start p-4">
          <a 
            href='/' 
            className="font-semibold text-xl text-gray-600"
            onClick={() => handleActiveNavlink("Home")}
          >
            Glowcare
          </a>
        </div>

        <div className="w-full flex flex-1 justify-center items-center gap-4 p-4">
          {landingPageNavConstants.map((nav_item, index) => (
            <a 
              key={index} 
              href={nav_item.href}
              onClick={() => handleActiveNavlink(nav_item.title)} 
              className={`
                text-gray-600 px-4 p-1 text-sm rounded-full border-2 border-gray-400/40 
                transform ease-out transition-all duration-300
                ${activeNav === nav_item.title 
                  ? 'bg-gray-200/80 shadow-slate-500/50 drop-shadow-md text-gray-800 font-medium' 
                  : 'hover:bg-gray-200/60 hover:shadow-slate-500/30 hover:drop-shadow-md'
                }
              `}
            >
              {nav_item.title}
            </a>
          ))}
        </div>

        <div className="w-full flex flex-1 justify-end items-end p-4">
          <div className="flex justify-center items-center gap-4">
            <a 
              href='/oauth/login' 
              className="flex justify-center items-center px-4 gap-4 p-1 border-2 border-gray-400/50 rounded-full hover:bg-gray-100/80 transition-colors duration-300"
              onClick={() => handleActiveNavlink("Log In")}
            >
              <span className="font-semibold text-sm">Log In</span>
              <FaArrowRight/>
            </a>
            
            {/* Cart Icon with Badge */}
            <div className="relative">
              <a 
                href='/dashboard/cart/items' 
                className="flex justify-center items-center relative"
                onClick={() => handleActiveNavlink("Cart")}
              >
                <FaCartPlus className='text-lime-600 text-2xl hover:text-lime-700 transition-colors duration-300'/>
                
                {/* Cart Badge */}
                {totalItemsInCart > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500/90 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {totalItemsInCart > 9 ? '9+' : totalItemsInCart}
                  </span>
                )}
              </a>
            </div> 
          </div>     
        </div>
      </nav> 
    </section>
  )
}

export default NavbarComponent