'use client'
import React from 'react'
import Image from 'next/image'
import { images } from '@/assets/images'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ourTeamData } from '@/data';
import { useRouter } from 'next/navigation';


const AboutUsPage = () => {
  const router=useRouter()
  return (
    <div className="min-h-screen bg-white relative mx-5">
      {/* Black vertical bar on the right */}
      <div className="absolute right-0 top-0 w-1 h-full bg-black"></div>
      {/* Header with title and blue line */}
      <div className="flex items-center py-2 px-4 gap-4 w-full mt-10">
        <h1 className="text-2xl font-bold text-black">About us</h1>
        <div className="flex-1 relative">
          {/* Blue line */}
          <div className="h-2 bg-[#007bff]"></div>
          {/* Blue teardrop at the end */}
          <div className="absolute -right-0 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-[#007bff] rounded-full">
            <div className="w-full h-full bg-[#007bff] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main content with light blue border and accents */}
      <div className="mx-4 mt-8 border-2 border-blue-200 bg-white rounded-lg py-6 px-10 relative overflow-visible">
        {/* Blue accent lines (top and right) */}
        <div className="absolute left-0 top-0 w-full h-1 bg-blue-500 rounded-t-lg" style={{zIndex:1}}></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-blue-500 rounded-r-lg" style={{zIndex:1}}></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 relative z-10">
          {/* Left Section - Image */}
          <div className="flex justify-center items-start pt-4">
            <div className="relative w-96 h-96 rounded-lg overflow-hidden">
              <Image 
                src={images.awarding}
                alt="Two players"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section - Text and Button */}
          <div className="relative flex flex-col justify-start items-center pt-8 pb-8 pr-12 pl-4 text-center w-full">
            {/* Blue dots pattern in top right, inside the box */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div className="grid grid-cols-5 grid-rows-6 gap-1">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>
            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-600 mb-6 w-full text-center">ABOUT US</h2>
            {/* Text Content */}
         <div className="space-y-4 text-gray-800 leading-relaxed w-full max-w-md mx-auto text-justify">
  <p>
    Welcome to the Isonga Program, a national initiative dedicated to identifying and nurturing young athletic talent across Rwanda. Through partnerships with schools and local communities, the program aims to provide training, mentorship, and competitive opportunities in various sports disciplines, including football, basketball, handball, cycling, athletics, and volleyball.
  </p>
  <p>
    With the support of the Ministry of Sports and international partners, the Isonga Program has rehabilitated playgrounds, trained coaches, and established centers of excellence to ensure that young athletes receive the best possible development pathways. Our mission is to empower the next generation of Rwandan athletes, fostering discipline, teamwork, and resilience both on and off the field.
  </p>
</div>

            {/* Go Back Button */}
            <div className="flex justify-center w-full">
              <button
              onClick={()=>router.push('/')} 
              className="mt-8 pl-8 pr-12 py-2 bg-blue-600 text-white transition-colors w-48 skew-x-[-18deg] border-0 shadow-none hover:bg-blue-700 flex items-center justify-center">
                <span className="inline-block skew-x-[18deg] font-medium w-full text-center">Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Team Section */}
      <div className="w-full mt-16 mb-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-wide uppercase">MEET OUR TEAM</h2>
            <span className="flex gap-1 mt-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {ourTeamData.map((person, i) => (
              <div className="flex flex-col items-center bg-transparent" key={i}>
                <div className="p-2 border-2 border-blue-300 rounded-xl bg-white" style={{ display: 'inline-block' }}>
                  <div className="w-40 h-44 relative bg-white rounded-lg overflow-hidden">
                    <Image
                      src={person.image}
                      alt="profile picture"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="font-bold text-lg md:text-xl">{person.name}</div>
                  <div className="text-gray-500 text-base mt-1">{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row bg-[#0a4c97] rounded-lg  md:rounded-xl mt-8 mb-16 px-0 md:px-8 py-10 md:py-14 items-stretch gap-0 md:gap- ">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col justify-between px-6 py-6 md:py-0 text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Feel Free to Send<br />us a <span className="text-blue-300">Message!</span></h2>
            <div className="mt-8 flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span className="text-base">isonga@gmail.com</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center bg-transparent border border-white rounded-lg px-4 py-2 w-fit">
                <FaPhone className="text-xl mr-2 text-red-500" />
                <span className="text-base">+123 456 789</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-pink-400" />
              <span className="text-base">123 Street 456 House</span>
            </div>
          </div>
 
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-6">
          <form className="w-full max-w-md bg-gray-100 rounded-xl p-8 flex flex-col gap-6 shadow-none">
            <input type="text" placeholder="Your name" className="bg-transparent border-b border-blue-400 focus:outline-none focus:border-blue-600 py-2 px-1 text-gray-700 placeholder:text-gray-400" />
            <input type="email" placeholder="Your email" className="bg-transparent border-b border-blue-400 focus:outline-none focus:border-blue-600 py-2 px-1 text-gray-700 placeholder:text-gray-400" />
            <textarea placeholder="Your message" rows={3} className="bg-transparent border-b border-blue-400 focus:outline-none focus:border-blue-600 py-2 px-1 text-gray-700 placeholder:text-gray-400 resize-none" />
            <button type="button" className="mt-4 bg-[#0a4c97] text-white rounded-md px-6 py-2 flex items-center gap-2 self-end hover:bg-blue-800 transition-colors">
              <span className="text-base">✈️</span>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
