import { images } from '@/assets/images';
import HomepageSection from '@/components/layout/HomepageSection'
import Button from '@/components/ui/Button';
import clsx from 'clsx';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react'

interface inspirationProps{
    title?: string;
    description: string;
    image: string;
}

const inspirationData: inspirationProps[] = [
    {
      
        description: `Sandra Musoni, a 12-year-old referee for the women's football finals during National Sports Week said: "One of the greatest gifts the ISONGA program has given me is the confidence to pursue my passion. I love football, not as a player, but as a referee. This program has helped me grow, and now I look forward to representing my country as an international referee"`,
        image: images.insipirations,
    },
    {
        description: `Jean Bosco, a 15-year-old striker, shared: "Before ISONGA, football was just a hobby. But after the mentorship sessions and structured training, I discovered my potential. Now I train harder every day with the dream of playing in Rwanda's national team."`,
        image: images.foot,
    },
    {
        description: `Aline Uwase, one of the youngest basketball captains in her district, said: "I was always shy and afraid to speak up. Through ISONGA’s leadership workshops and team activities, I’ve become confident not only on the court but in life."`,
        image: images.ins,
    },
  
    {
        description: `Immaculée Murekatete, a volleyball enthusiast, stated: "I was introduced to volleyball during an ISONGA sports day. The energy, the teamwork — I fell in love instantly. Today, I’m part of my school’s first-ever girls' volleyball team."`,
        image: images.volley,
    },

]

const Inspiration = () => {
         const [currentIndex, setCurrentIndex] = useState(0);
     const itemsPerPage = 1;
     const totalPages = Math.ceil(inspirationData.length / itemsPerPage);
     const startIndex = currentIndex * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const currentItems = inspirationData.slice(startIndex, endIndex);
    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1);
    }
    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    }
  return (
   <HomepageSection title='Inspiration'>
    <div className='px-3'>
        {currentItems.map((item,index)=>(
                         <div key={index} style={{backgroundImage: `url(${item.image})`}} className='w-full h-[400px] bg-cover bg-center bg-no-repeat relative'>
                 <div className='absolute bottom-0 left-0 right-0 b p-4 bg-black/50'>
                     <p className='text-white text-sm'>{item.description}</p>
                 </div>
             </div> 
        ))}
                 <div className='flex gap-4 items-center justify-center py-4 bg-[#EBEEF3]'>
             <Button 
               icon={<ArrowLeftIcon/>} 
               variant='primary' 
               onClick={handlePrevious}
               disabled={currentIndex === 0}
             />
             <div className='flex gap-2'>
                 {
                     Array.from({length: totalPages}).map((_,index)=>(
                         <button 
                         key={index}
                          className={clsx('w-6 h-6 rounded-full text-center text-gray-500 font-bold flex items-center justify-center cursor-pointer',
                            currentIndex === index ? 'bg-blue-500 text-white' : ''
                          )} onClick={()=>setCurrentIndex(index)}>
                             {index + 1}
                         </button>
                     ))
                 }
             </div>
             <Button 
               icon={<ArrowRightIcon/>} 
               variant='primary' 
               onClick={handleNext}
               disabled={currentIndex === totalPages - 1}
             />
         </div>
         <div className='flex justify-center mt-4 '>
            <Button title='See More' variant='primary' onClick={()=>{}} />
         </div>
    </div>
   </HomepageSection>
  )
}

export default Inspiration
