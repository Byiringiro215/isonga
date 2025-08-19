'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { images } from '@/assets/images'
import { useNewsStore, NewsCard, EventCard, CompetitionCard, UpcomingCompetition } from '@/store/newsStore'


const newsCards: NewsCard[] = [
  {
    id: 1,
    image:images.athelets,
    date: "May 29, 2025",
    title: "Empowering athletes through ISONGA program",
    description: "The ISONGA program continues to make significant strides in developing young athletic talent across Rwanda. Our comprehensive approach to sports development includes not just physical training, but also mental preparation and character building.",
    author: {
      name: "Kanesa Lane",
      role: "Sports Journalist",
      avatar:images.pp2
    }
  },
  {
    id: 2,
    image:images.referee,
    date: "May 25, 2025",
    title: "Young referee breaks barriers in women's football",
    description: "Sandra Musoni, a 12-year-old referee for the women's football finals during National Sports Week, expressed her gratitude for the ISONGA program. Her journey from player to referee showcases the program's commitment to fostering leadership.",
    author: {
      name: "Marie Uwimana",
      role: "Sports Reporter",
      avatar: images.pp3
    }
  },
  {
    id: 3,
    image:images.basketball,
    date: "May 20, 2025",
    title: "Sonia Abizera qualifies for elite running status",
    description: "Sonia Abizera, the women's 100-meter winner, credits her achievements to the ISONGA program, which helped her qualify as an elite runner. Peter Ndacyayisenga, Rwanda Athletics Federation Technical Director, praised her performance.",
    author: {
      name: "Jean Pierre",
      role: "Athletics Correspondent",
      avatar: images.pp4
    }
  }
]

const eventCards: EventCard[] = [
  {
    id: 1,
    
    date: "May, 29, 2025",
    title: "Annual Sports Excellence Awards Ceremony",
    description: "The annual sports excellence awards ceremony brought together the brightest young talents from across the region. The event celebrated not only athletic achievements but also academic excellence and community service.",
    image: images.awarding
  },
  {
    id: 2,
    date: "May, 28, 2025",
    title: "Youth Leadership Training Workshop",
    description: "A comprehensive workshop focused on developing leadership skills among young athletes. Participants learned about teamwork, communication, and the importance of sportsmanship in competitive environments.",
    image: images.training
  },
  {
    id: 3,
    date: "May, 27, 2025",
    title: "Community Sports Outreach Program",
    description: "ISONGA program launched its community outreach initiative, bringing sports activities to underserved areas. The program aims to make sports accessible to every child regardless of their background.",
    image: images.outreach
  }
]

const competitionCards: CompetitionCard[] = [
  {
    id: 1,
    title: "Inter-School Football Championship",
    description: "The annual inter-school football championship saw record participation with 32 schools competing. The tournament highlighted the growing interest in football among young students and the development of grassroots talent.",
    program: "Isonga Program",
    date: "May, 29, 2025",
    image: images.interscl
  },
  {
    id: 2,
    title: "Athletics Track and Field Meet",
    description: "Young athletes showcased their speed and endurance in various track events. The meet served as a platform for identifying promising talent for national competitions and international representation.",
    program: "Isonga Program",
    date: "May, 28, 2025",
    image: images.running
  },
  {
    id: 3,
    title: "Basketball Skills Development Tournament",
    description: "A specialized tournament focused on developing basketball fundamentals and teamwork. Coaches emphasized the importance of both individual skills and collective play in achieving success.",
    program: "Isonga Program",
    date: "May, 27, 2025",
    image: images.baco
  }
]

const upcomingCompetitions: UpcomingCompetition[] = [
  {
    id: 1,
    title: "Regional Swimming Championship",
    date: "June, 15, 2025",
    location: "Kigali Aquatic Center"
  },
  {
    id: 2,
    title: "National Volleyball Tournament",
    date: "June, 22, 2025",
    location: "Amahoro Stadium"
  },
  {
    id: 3,
    title: "Youth Tennis Open Championship",
    date: "July, 5, 2025",
    location: "Kigali Tennis Club"
  },
  {
    id: 4,
    title: "Cross Country Running Event",
    date: "July, 12, 2025",
    location: "Nyungwe Forest Park"
  }
]

const NewsPage = () => {
  const router = useRouter()
  
  // Get selected card actions from Zustand store
  const { 
    setSelectedNewsCard,
    setSelectedEventCard
  } = useNewsStore()
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All')

  // Refs for scrolling to sections
  const latestNewsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)
  const competitionsRef = useRef<HTMLDivElement>(null)

  // Handler functions
  const handleReadMore = (card: NewsCard) => {
    console.log('Read More clicked for:', card.title)
    // Set the selected news card in the store
    setSelectedNewsCard(card)
    // Navigate to dynamic route with card ID using Next.js router
    router.push(`/news/${card.id}`)
  }

  const handleEventReadMore = (card: EventCard) => {
    console.log('Read More clicked for event:', card.title)
    // Set the selected event card in the store
    setSelectedEventCard(card)
    // Navigate to dynamic route with card ID using Next.js router
    router.push(`/news/event/${card.id}`)
  }

  const handleViewAll = () => {
    console.log('View All clicked')
  }

  // const handleShare = () => {
  //   console.log('Share clicked')
  // }

  const handleFilterClick = (filter: string) => {
    console.log('Filter clicked:', filter)
    setActiveFilter(filter)
    
    // Scroll to appropriate section based on filter
    switch (filter) {
      case 'All':
        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case 'Events':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Competitions':
        competitionsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Bootcamps':
        // For now, scroll to latest news since we don't have bootcamp content
        latestNewsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <div className="min-h-screen bg-white relative">
    

      {/* Trending News Section */}
      <div className="px-4 md:px-7 pb-6 pt-6 md:pt-10">
        {/* Trending News Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 w-full gap-4 md:gap-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Trending news</h1>
          <div className="flex-1 relative">
                      {/* Blue line */}
                      <div className="h-2 bg-[#007bff] "></div>
                      
                      {/* Blue circle at the end */}
                      <div className="absolute -right-0 top-1/2 transform -translate-y-1/2 w-6 h-4 md:w-8 md:h-6 bg-[#007bff] rounded-full ">
                        <Image src={images.dot} alt="" fill className='object-cover' />
                      </div>
                  </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 mb-8">
          <button 
            onClick={() => handleFilterClick('All')}
            className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
              activeFilter === 'All' 
                ? 'bg-blue-500 text-white' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => handleFilterClick('Events')}
            className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
              activeFilter === 'Events' 
                ? 'bg-blue-500 text-white' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            Events
          </button>
          <button 
            onClick={() => handleFilterClick('Bootcamps')}
            className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
              activeFilter === 'Bootcamps' 
                ? 'bg-blue-500 text-white' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            Bootcamps
          </button>
          <button 
            onClick={() => handleFilterClick('Competitions')}
            className={`px-3 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
              activeFilter === 'Competitions' 
                ? 'bg-blue-500 text-white' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            Competitions
          </button>
        </div>


        {/* Latest News Section */}
        <div ref={latestNewsRef} className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-1 inline-block">
            Latest news
          </h2>
        </div>

        {/* News Cards */}
        <div className="space-y-4 md:space-y-6">
          {newsCards.map((card: NewsCard) => (
            <div key={card.id} className="border border-gray-200 rounded-lg p-3 md:p-4 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-80 h-48 md:h-54 bg-gray-300 rounded-lg flex-shrink-0 relative">
                <Image src={card.image ?? images.football} alt="" fill className='object-cover rounded-lg' />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs md:text-sm text-gray-500 text-right mb-2">{card.date}</div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 md:w-8 md:h-8  bg-gray-400 rounded-full overflow-hidden flex items-center justify-center">
                      <Image src={card.author.avatar} alt="" width={32} height={32} className='rounded-full' />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-medium text-gray-900">{card.author.name}</div>
                      <div className="text-xs text-gray-500">{card.author.role}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button 
                    onClick={() => handleReadMore(card)}
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200 cursor-pointer text-sm md:text-base"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Events & Activities Section */}
      <div ref={eventsRef} className="px-4 md:px-7 pb-6">
        {/* Section Title */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-1 inline-block">
            Recent events & activities
          </h2>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {eventCards.map((card: EventCard) => (
            <div key={card.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="relative">
                <div className="w-full h-48 md:h-60 bg-gray-300 relative">
                  <Image src={card.image} alt="" fill className='object-cover' />
                </div>
                <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs text-gray-600">
                  {card.date}
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>
                <button 
                  onClick={() => handleEventReadMore(card)}
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200 cursor-pointer text-sm md:text-base"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button 
            title="View All" 
            variant="primary" 
            onClick={handleViewAll}
          />
        </div>
      </div>

      {/* Recent Competitions and Upcoming Competitions Section */}
      <div ref={competitionsRef} className="px-4 md:px-7 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column: Recent Competitions */}
          <div className="lg:col-span-2">
            {/* Section Title */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-1 inline-block">
                Recent Competitions
              </h2>
            </div>

            {/* Competition Cards */}
            <div className="space-y-3 md:space-y-4 mb-6">
              {competitionCards.map((card: CompetitionCard) => (
                <div key={card.id} className="border border-blue-200 rounded-lg p-3 md:p-4">
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-60 h-48 md:h-54 bg-gray-300 rounded-lg flex-shrink-0 relative">
                         <Image src={card.image} alt="" fill className='object-cover rounded-lg ' />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                        {card.description}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs md:text-sm text-gray-600 space-y-1 sm:space-y-0">
                        <span>{card.program}</span>
                        <span>{card.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <Button 
                title="View All" 
                variant="primary" 
                onClick={handleViewAll}
              />
            </div>
          </div>

          {/* Right Column: Upcoming Competitions */}
          <div className="border border-blue-200 rounded-lg p-4 md:p-6">
            {/* Section Title */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-1 inline-block">
                Upcoming competitions
              </h2>
            </div>

            {/* Competition Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {/* Competition Entries */}
              <div className="space-y-4 md:space-y-6">
                {upcomingCompetitions.map((competition: UpcomingCompetition) => (
                  <div key={competition.id} className="relative flex items-start space-x-3 md:space-x-4">
                    <div className="relative z-10 w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-medium flex-shrink-0">
                      {competition.id}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1">{competition.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 space-y-1 sm:space-y-0">
                        <span>{competition.date}</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span className="text-xs">{competition.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
