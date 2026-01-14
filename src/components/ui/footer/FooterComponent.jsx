import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from "react-icons/fa"
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5"
import { BsArrowRight } from "react-icons/bs"

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { title: "All Products", href: "#" },
      { title: "Best Sellers", href: "#" },
      { title: "New Arrivals", href: "#" },
      { title: "Skincare Sets", href: "#" },
      { title: "Travel Size", href: "#" },
      { title: "Gift Cards", href: "#" }
    ],
    skincare: [
      { title: "Cleansers", href: "#" },
      { title: "Moisturizers", href: "#" },
      { title: "Serums", href: "#" },
      { title: "Masks", href: "#" },
      { title: "Sunscreen", href: "#" },
      { title: "Eye Care", href: "#" }
    ],
    help: [
      { title: "Contact Us", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Shipping", href: "#" },
      { title: "Returns", href: "#" },
      { title: "Track Order", href: "#" },
      { title: "Size Guide", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
    { icon: <FaTiktok />, href: "#", label: "TikTok" }
  ]

  const paymentMethods = [
    "Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-teal-50/50 to-teal-100/50 border-t border-teal-200">
      {/* Newsletter Section */}
      <div className="w-full bg-white border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Beauty Community</h3>
              <p className="text-gray-600">Get exclusive offers, skincare tips, and early access to new products</p>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-3 border-2 border-teal-300 rounded-full focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                />
                <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Subscribe</span>
                  <BsArrowRight />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">By subscribing, you agree to our Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold text-teal-800 flex items-center gap-2">
                <span className="text-lime-500">Glow</span>Care
              </a>
              <p className="text-gray-600 mt-3">
                Discover your natural glow with our ethically sourced, scientifically backed skincare solutions for every skin type.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <IoLocationOutline className="text-teal-600 mt-1" />
                <span className="text-gray-700">123 Beauty Street, Skincare City, SC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <IoPhonePortraitOutline className="text-teal-600" />
                <a href="tel:+11234567890" className="text-gray-700 hover:text-teal-600">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <IoMailOutline className="text-teal-600" />
                <a href="mailto:hello@glowcare.com" className="text-gray-700 hover:text-teal-600">hello@glowcare.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Our Glow Journey</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white border border-teal-200 flex items-center justify-center text-teal-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-gray-800 text-lg mb-6 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-teal-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {currentYear} GlowCare Beauty. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-lime-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-lime-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-lime-300 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-lime-300 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-lime-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent