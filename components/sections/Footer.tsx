import React from 'react';
import { Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { images } from '@/assets/images';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#288FFF] text-white">
      {/* Top Bar with Teardrop Elements */}
      <div className="relative py-2">
        <div className="flex items-center justify-between px-4">
          <div className="w-4 h-4 md:w-6 md:h-6 bg-white transform rotate-45"></div>
          <div className="flex-1 h-1 bg-white mx-2 md:mx-4"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Support & Help Section */}
      <div className="px-4 md:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-4">
          {[1, 2, 3].map((section) => (
            <div key={section} className="text-start border-l-2 border-white pl-3 md:pl-4">
              <h3 className="font-bold text-base md:text-lg mb-2">SUPPORT & HELP</h3>
              <div className="space-y-1 text-gray-200">
                <p className="cursor-pointer hover:text-white text-sm md:text-base">Customer Support</p>
                <p className="cursor-pointer hover:text-white text-sm md:text-base">Terms & Conditions</p>
                <p className="cursor-pointer hover:text-white text-sm md:text-base">Privacy Policy</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="text-center mb-4">
          <h3 className="text-base md:text-lg mb-2 font-bold">Subscribe to our isonga platform</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full mx-auto my-4 md:my-8">
            <input
              type="text"
              placeholder="First name"
              className="w-full sm:flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg text-[#286091] bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg text-[#286091] bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
            />
            
            <button 
              type="submit" 
              className='w-full sm:w-auto text-[#1A74ED] bg-white px-4 md:px-6 py-2 md:py-3 whitespace-nowrap rounded-full cursor-pointer hover:bg-[#1A74ED] hover:text-white transition-all duration-300 text-sm md:text-base font-medium'
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="text-center mb-4">
          <div className="w-full h-px bg-white mb-3"></div>
          <h3 className="text-base md:text-lg mb-2">SPONSORED AND SUPPORTED BY</h3>
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <Image 
                src={images.sponsor1} 
                alt="sponsor1" 
                width={80} 
                height={80} 
                className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' 
              />
              <Image 
                src={images.sponsor2} 
                alt="sponsor2" 
                width={80} 
                height={80} 
                className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' 
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-blue-500 space-y-4 md:space-y-0">
          {/* Contact Information */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#1E1E1E]" />
            <div>
              <p className="text-xs md:text-sm font-semibold">FOR MORE INFO</p>
              <p className="text-xs md:text-sm text-gray-200">(250) 7910302010/ 078342414</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 md:gap-4">
            <Facebook className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-blue-200" />
            <Twitter className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-blue-200" />
            <Instagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-blue-200" />
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-blue-200" />
            <Youtube className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-blue-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 