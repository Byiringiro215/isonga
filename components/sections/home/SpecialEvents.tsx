
import HomepageSection from '@/components/layout/HomepageSection'
import Button from '@/components/ui/Button'
import React from 'react'

const SpecialEvents = () => {
  return (
   <HomepageSection title='Special Events'>
    <div className='w-[90%] h-[400px] mx-auto'>
         <iframe
              src="https://www.youtube.com/embed/bE26RnGdqlE"
              title="ISONGA CAMP"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
    </div>
         <div className='flex justify-center mt-4'>
       <Button title='See More' variant='primary' onClick={()=>{}}/>
     </div>
   </HomepageSection>
  )
}

export default SpecialEvents
