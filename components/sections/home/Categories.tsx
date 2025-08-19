'use client'
import { images } from '@/assets/images';
import Image from 'next/image'
import HomepageSection from '@/components/layout/HomepageSection'
import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '@/components/ui/Button';

interface CategoriesProps {
    title: string;
    image: string;
}

const categories = [
    {
        title: 'football',
        image: images.football,
    },
    {
        title: 'basketball',
        image: images.basketball,
    },
    {
        title: 'cycling',
        image: images.riding,
    },
    {
        title: 'volleyball',
        image: images.volley,
    },
    {
        title: 'handball',
        image: images.handball,
    },
    {
        title: 'rugby',
        image: images.rugby,
    },
    {
        title: 'swimming',
        image: images.swimming,
    },
    {
        title: 'athletics',
        image: images.athletics,
    },
  
  
]

const Categories = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = categories.slice(startIndex, endIndex);

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
  return (
    <HomepageSection title='Categories'>
        <div className='px-3 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4'>
                {currentItems.map((item,index)=>(
                    <div key={index} className={clsx('flex flex-col w-full gap-2', {
                        'flex-col-reverse': index % 2 !== 0
                    })}>
                        <span className='text-sm font-semibold text-center rounded-md bg-[#EBEEF3] text-blue-950 uppercase p-2'>{item.title}</span>
                        <Image src={item.image} alt={item.title} className='w-full h-[80%] object-cover rounded-md' height={300} width={300}/>
                    </div>
                ))}
            </div>
            <div className='flex justify-between items-center mt-6'>
                <Button title='Previous' variant='primary' onClick={handlePrevious}/>
                <Button title='Next' variant='primary' onClick={handleNext}/>
            </div>
        </div>
    </HomepageSection>
  )
}

export default Categories
