'use client'
import React, { useState } from 'react'
// import HomepageSection from '@/components/layout/HomepageSection'
import Image from 'next/image'
import { images } from '@/assets/images'

// TypeScript interfaces
interface BaseGalleryItem {
  id: number
  src: string
  alt: string
  category: string
  type: 'image' | 'video'
}

interface ImageItem extends BaseGalleryItem {
  type: 'image'
}

interface VideoItem extends BaseGalleryItem {
  type: 'video'
  duration: string
  title: string
}

type GalleryItem = ImageItem | VideoItem

// Sample gallery data with sports-related content
const galleryImages: ImageItem[] = [
  {
    id: 1,
    src: images.football,
    alt: "Football match action",
    category: "bootcamps",
    type: "image"
  },
  {
    id: 2,
    src:images.basketball,
    alt: "Basketball training session",
    category: "events",
    type: "image"
  },
  {
    id: 3,
    src: images.volley,
    alt: "Volleyball competition",
    category: "competitions",
    type: "image"
  },
  {
    id: 4,
    src: images.swimming,
    alt: "Swimming training",
    category: "bootcamps",
    type: "image"
  },
  {
    id: 5,
    src: images.interscl,
    alt: "inter school football",
    category: "events",
    type: "image"
  },
  {
    id: 6,
    src: images.running,
    alt: "Athletics competition",
    category: "competitions",
    type: "image"
  },


  {
    id: 9,
    src: images.awarding,
    alt: "Youth football development",
    category: "competitions",
    type: "image"
  },
  {
    id: 10,
    src: images.baco,
    alt: "Basketball skills workshop",
    category: "bootcamps",
    type: "image"
  },
  {
    id: 11,
    src:images.girls,
    alt: "Volleyball tournament",
    category: "events",
    type: "image"
  },
  {
    id: 12,
    src: images.outreach,
    alt: "Swimming competition",
    category: "competitions",
    type: "image"
  },
  {
    id: 13,
    src: images.referee,
    alt: "Rugby training camp",
    category: "bootcamps",
    type: "image"
  },
  {
    id: 14,
    src: images.spectators,
    alt: "Athletics training",
    category: "events",
    type: "image"
  },
  {
    id: 15,
    src: images.rewarding,
    alt: "Handball competition",
    category: "competitions",
    type: "image"
  },
  {
    id: 16,
    src: images.trophy,
    alt: "Cycling training",
    category: "bootcamps",
    type: "image"
  }
]

// Sample video data with sports-related content
const galleryVideos: VideoItem[] = [
  {
    id: 101,
    src: "/football.png",
    alt: "Football training video",
    category: "bootcamps",
    type: "video",
    duration: "3:45",
    title: "Advanced Football Techniques"
  },
  {
    id: 102,
    src: "/basket ball.png",
    alt: "Basketball championship highlights",
    category: "events",
    type: "video",
    duration: "5:20",
    title: "Basketball Championship Finals"
  },
  {
    id: 103,
    src: "/volley.jpeg",
    alt: "Volleyball skills tutorial",
    category: "competitions",
    type: "video",
    duration: "4:15",
    title: "Volleyball Skills Masterclass"
  },
  {
    id: 104,
    src: "/swimming.jpeg",
    alt: "Swimming competition highlights",
    category: "bootcamps",
    type: "video",
    duration: "6:30",
    title: "Swimming Training Session"
  },

  {
    id: 106,
    src: "/athletics.jpeg",
    alt: "Athletics training video",
    category: "competitions",
    type: "video",
    duration: "4:50",
    title: "Athletics Training Program"
  },
  {
    id: 107,
    src: "/handball.jpeg",
    alt: "Handball tournament highlights",
    category: "bootcamps",
    type: "video",
    duration: "5:15",
    title: "Handball Tournament Highlights"
  },
  {
    id: 108,
    src: "/riding.jpeg",
    alt: "Cycling race highlights",
    category: "events",
    type: "video",
    duration: "7:20",
    title: "Cycling Race Highlights"
  },
  {
    id: 109,
    src: "/football.png",
    alt: "Youth football development video",
    category: "competitions",
    type: "video",
    duration: "3:30",
    title: "Youth Football Development"
  },
  {
    id: 110,
    src: "/basket ball.png",
    alt: "Basketball workshop video",
    category: "bootcamps",
    type: "video",
    duration: "4:45",
    title: "Basketball Skills Workshop"
  },
  {
    id: 111,
    src: "/volley.jpeg",
    alt: "Volleyball championship video",
    category: "events",
    type: "video",
    duration: "6:10",
    title: "Volleyball Championship"
  },
  {
    id: 112,
    src: "/swimming.jpeg",
    alt: "Swimming workshop video",
    category: "competitions",
    type: "video",
    duration: "5:25",
    title: "Swimming Workshop"
  }
]

const GalleryPage = () => {
  const [activeContentType, setActiveContentType] = useState<'all' | 'images' | 'videos'>('images')
  const [activeCategory, setActiveCategory] = useState('bootcamps')

  // Combine images and videos
  const allGalleryItems: GalleryItem[] = [...galleryImages, ...galleryVideos]

  // Filter based on content type and category
  const filteredItems = allGalleryItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory
    const typeMatch = activeContentType === 'all' || 
      (activeContentType === 'images' && item.type === 'image') ||
      (activeContentType === 'videos' && item.type === 'video')
    return categoryMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-white">
            {/* Header Section */}
      <div className="px-4 md:px-7 py-6 md:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Title and Progress Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Gallery</h1>
            <div className="flex-1 gap-4 md:gap-10 w-full relative">
                       {/* Blue line */}
                       <div className="h-2 bg-[#007bff] "></div>
                       
                       {/* Blue circle at the end */}
                       <div className="absolute -right-0 top-1/2 transform -translate-y-1/2 w-6 h-4 md:w-8 md:h-6 bg-[#007bff] rounded-full relative">
                         <Image src={images.dot} alt="" fill className='object-cover' />
                       </div>
                   </div>
          </div>

          {/* Content Type Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8">
            <button
              onClick={() => setActiveContentType('all')}
              className={`text-base md:text-lg font-medium transition-colors duration-200 cursor-pointer ${
                activeContentType === 'all' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveContentType('images')}
              className={`text-base md:text-lg font-medium transition-colors duration-200 cursor-pointer ${
                activeContentType === 'images' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveContentType('videos')}
              className={`text-base md:text-lg font-medium transition-colors duration-200 cursor-pointer ${
                activeContentType === 'videos' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Videos
            </button>
          </div>

          {/* Category Browsing Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Browse by Categories</h2>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                onClick={() => setActiveCategory('events')}
                className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'events'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveCategory('bootcamps')}
                className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'bootcamps'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
                }`}
              >
                Bootcamps
              </button>
              <button
                onClick={() => setActiveCategory('competitions')}
                className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'competitions'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
                }`}
              >
                Competitions
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Video overlay for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-2 md:p-3">
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Video duration badge */}
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </div>
                
                {/* Video title for videos */}
                {item.type === 'video' && (
                  <div className="mt-2">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View All Photos Button
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 bg-white rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              View All Photos
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
