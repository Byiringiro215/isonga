import React from 'react'
import { images } from '@/assets/images'
import Image from 'next/image'
import { Moon, Play, Apple } from 'lucide-react'

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Blue Background */}
      <div className="w-1/2 bg-blue-600 rounded-l-lg relative overflow-hidden flex flex-col">
        {/* Header with Logo */}
        <div className="flex items-center gap-2 p-4">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <Image src={images.logo} alt="logo" width={24} height={24} className='w-full h-full object-cover' />
          </div>
                     <span className="text-white font-bold text-sm">ISONGA</span>
        </div>

        {/* Welcome Message */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
                     <h1 className="text-white text-2xl font-bold mb-3">Welcome Admin!</h1>
           <p className="text-white text-sm leading-relaxed max-w-sm">
            Sign up to continue your journey with ISONGA PROGRAM PLATFORM. A website which gives you daily to daily achievements of youth in sports!
          </p>
        </div>

        {/* Sports Illustration */}
        <div className="h-1/2 relative">
          <Image
            src={images.sports}
            alt="Sports equipment"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-1/2 bg-white rounded-r-lg flex flex-col">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-start px-4 relative">
          <div className="flex-1"></div>
          <div className="h-16 w-16">
            <Image src={images.biglogo} alt="logo" width={80} height={80} className='w-full h-full object-cover' />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 flex-1 flex justify-end">
            <Moon className="w-5 h-5" />
          </button>
        </div>

        {/* Signup Form Container */}
        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <div className="w-full max-w-md flex flex-col">
                         <h2 className="text-lg font-bold text-gray-800 text-center mb-1">Create account</h2>
             <p className="text-gray-600 text-center mb-4 text-xs">For latest news, updates or special events</p>

                         <form className="space-y-4">
               {/* First row: First name and Last name */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     First name
                   </label>
                   <input
                     type="text"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                     placeholder="Enter your first name"
                   />
                 </div>

                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     Last name
                   </label>
                   <input
                     type="text"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                     placeholder="Enter your last name"
                   />
                 </div>
               </div>

               {/* Second row: Email/phone and Gender */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     Email or phone number
                   </label>
                   <input
                     type="email"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                     placeholder="Enter your email or phone"
                   />
                 </div>

                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     Your gender
                   </label>
                   <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                     <option value="">Select gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                   </select>
                 </div>
               </div>

               {/* Third row: Password and Confirm password */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     Password
                   </label>
                   <input
                     type="password"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                     placeholder="Enter your password"
                   />
                 </div>

                 <div>
                   <label className="block text-xs font-medium text-gray-700 mb-1">
                     Confirm password
                   </label>
                   <input
                     type="password"
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                     placeholder="Confirm your password"
                   />
                 </div>
               </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                                 <div className="flex items-center">
                   <input
                     type="checkbox"
                     id="remember"
                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                   />
                   <label htmlFor="remember" className="ml-2 text-xs text-gray-700">
                     Remember me
                   </label>
                 </div>

                 <div className="flex items-start">
                   <input
                     type="checkbox"
                     id="terms"
                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                   />
                   <label htmlFor="terms" className="ml-2 text-xs text-gray-700">
                     I agree to all the{' '}
                     <a href="#" className="text-blue-600 hover:text-blue-800">
                       Terms <span className='text-gray-700'>and</span> Privacy policy
                     </a>
                   </label>
                 </div>
              </div>

                             {/* Buttons on same line */}
               <div className="grid grid-cols-2 gap-4">
                 <button
                   type="submit"
                   className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                 >
                   Create account
                 </button>

                 <button
                   type="button"
                   className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm"
                 >
                   <svg className="w-4 h-4" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                     <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                     <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                     <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                   </svg>
                   Sign-in with Google
                 </button>
               </div>

               <div className="text-center">
                 <span className="text-gray-600 text-xs">Don't have an account? </span>
                 <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                   Login
                 </a>
               </div>
            </form>

            {/* App Download Buttons */}
            <div className="mt-4 flex gap-3 justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <Play className="w-5 h-5" />
                <span className="text-xs">GET IT ON<br />Google Play</span>
              </button>

              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <Apple className="w-5 h-5" />
                <span className="text-xs">Download on the<br />App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
