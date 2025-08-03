import React from 'react'

interface HomepageSectionProps {
  children: React.ReactNode;
  title: string;
  
}

const HomepageSection = ({children, title, }: HomepageSectionProps) => {
  return (
    <div className='w-full p-4 border-b border-blue-500 border-2  '>
        <div className='flex items-center py-2 px-4 gap-4 w-full '>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className="flex-1 relative">
                      {/* Blue line */}
                      <div className="h-1 bg-[#007bff] rounded-full"></div>
                      
                      {/* Blue circle at the end */}
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#007bff] rounded-full"></div>
                  </div>
        </div>
        <div className='mt-4'>
            {children}
        </div>
      
    </div>
  )
}

export default HomepageSection
