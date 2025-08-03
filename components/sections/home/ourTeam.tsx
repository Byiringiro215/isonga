import { images } from '@/assets/images';
import HomepageSection from '@/components/layout/HomepageSection';
import Button from '@/components/ui/Button';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react'

interface ourTeamProps {
    name: string;
    image: string;
    role: string;
}

const ourTeamData: ourTeamProps[] = [
    {
        name: 'John Doe',
        image: images.staf1,
        role: 'The founder and initiator of Isonga program',
    },
    {
        name: 'John Doe',
        image: images.staf2,
        role: 'The founder and initiator of Isonga program',
    },
    {
        name: 'John Doe',
        image: images.staf3,
        role: 'The founder and initiator of Isonga program',
    },
    {
        name: 'John Doe',
        image: images.staf1,
        role: 'The founder and initiator of Isonga program',
    },
    {
        name: 'John Doe',
        image: images.staf2,
        role: 'The founder and initiator of Isonga program',
    },
    {
        name: 'John Doe',
        image: images.staf3,
        role: 'The founder and initiator of Isonga program',
    },
]

const OurTeam = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(ourTeamData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = ourTeamData.slice(startIndex, endIndex);

    return (
        <HomepageSection title='Our Team'>
            <div className='px-3'>
                
                <div className='flex flex-row  mb-6 overflow-x-auto'>
                    {currentItems.map((item, index) => (
                        <div key={index} className='bg-white  flex-shrink-0 w-64'>
                            <div className={clsx('flex flex-col', {
                                'flex-col': index % 2 === 0,
                                'flex-col-reverse': index % 2 !== 0
                            })}>
                                <div className='w-full h-48 mb-3'>
                                    <Image 
                                        src={item.image} 
                                        alt={item.name} 
                                        width={200} 
                                        height={200} 
                                        className='w-full h-full object-cover ' 
                                    />
                                </div>
                                <div className='text-center space-y-2 p-4'>
                                    <h3 className='text-lg font-semibold text-black mb-1'>
                                        {item.name}
                                        <div className='w-22 h-0.5 bg-blue-500 mx-auto mt-1'></div>
                                    </h3>
                                    <p className='text-sm text-gray-600'>
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className='flex justify-center gap-2 mb-6'>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={clsx('h-2 rounded-full transition-all duration-300 cursor-pointer', {
                                'bg-blue-500 w-8': currentPage === index,
                                'bg-gray-300 w-4': currentPage !== index
                            })}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>

                
                <div className='flex justify-center'>
                    <Button title='Meet The Whole Isonga Team' variant='primary' onClick={()=>{}} />
                </div>
            </div>
        </HomepageSection>
    )
}

export default OurTeam
