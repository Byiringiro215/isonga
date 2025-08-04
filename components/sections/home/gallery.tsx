import { images } from '@/assets/images'
import HomepageSection from '@/components/layout/HomepageSection'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const galleryData = [images.twoplayers,images.spectators,images.cycling,images.rewarding,images.basketball,images.twoplayers]

const Gallery = () => {
  return (
    <HomepageSection title='Gallery'>
        <div className='flex flex-wrap justify-center  items-center gap-4  w-full'>
                         {
                 galleryData.map((image,index)=>(
                     <div key={index} className='flex-shrink-0 w-[340px] h-[200px]'>
                         <Image src={image} alt='gallery' width={200} height={200} className=' w-full h-full object-cover' />
                     </div>
                 ))
             }
        </div>
        <div className='flex justify-center mt-4 '>
            <Button title='Open Gallery' variant='primary' onClick={()=>{}} />
        </div>
    </HomepageSection>
  )
}

export default Gallery
