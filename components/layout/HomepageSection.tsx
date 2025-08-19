import { images } from '@/assets/images';
import Image from 'next/image'
import React from 'react'

interface HomepageSectionProps {
  children: React.ReactNode;
  title: string;
  
}

const HomepageSection = ({children, title, }: HomepageSectionProps) => {
  return (
    <div className='w-full px-4 py-4 min-h-screen'>
        
        <div className='flex items-center py-2 px-4 gap-4 w-full '>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className="flex-1 relative">
                      {/* Blue line */}
                      <div className="h-2 bg-[#007bff] "></div>
                      
                      {/* Blue circle at the end */}
                      <div className="absolute -right-0 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-[#007bff] rounded-full relative">
                        <Image src={images.dot} alt="" fill className='object-cover' />
                      </div>
                  </div>
        </div>
        <div className='mt-4'>
            {children}
        </div>
        <div className='flex justify-center items-center gap-32 mt-18'>
            <div className='w-1/3 border-b-2  border-sky-500 shadow-lg'></div>
            <div className='w-1/3 border-b-2  border-sky-500 shadow-lg'></div>
        </div>
    </div>
  )
}

export default HomepageSection
