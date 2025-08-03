import React from 'react'
import HomepageSection from './HomepageSection'
import { images } from '@/assets/images'

 interface TrendingnewsProps {
    title: string;
    image: string;
    description: string;
    date: string;
 }

const trendingnews = [
    {
        title: "Transforming lives and Building Confidence",
        image: images.referee,
        description: "With the participation of 17 schools, ISONGA has rehabilitated 27 playgrounds, identified 599 student athletes and trained 37 coaches.",
        date: "03 june 2025"
    },
    {
        title: "Nurturing Future Stars Through School Football Leagues",
        image: images.football,
        description: "ISONGA initiated a football league across 18 schools to identify and develop young talent. With over 600 students participating, the program emphasized discipline, teamwork, and skill-building — laying the groundwork for future national-level athletes.",
        date: "10 June 2025"
    },
    {
        title: "Building Confidence Through Basketball Training Camps",
        image: images.basketball,
        description: "To boost student engagement in sports, ISONGA hosted basketball training camps in 10 secondary schools. More than 250 students received professional coaching, improving their technique and fostering self-confidence on and off the court.",
        date: "22 June 2025"
    }
    
    
]

 const TrendingnewsCard = ({title,image,description,date}:TrendingnewsProps) => {
    return (
                 <div className='flex gap-4 items-center'>
             <div className='w-20 h-20 flex-shrink-0'>
                 <img src={image} alt="" className='w-full h-full object-cover rounded-lg'/>
             </div>
            <div className='flex-col gap-2'>
                <h3 className='text-lg font-bold'>{title}</h3>
                <p className='text-sm text-gray-500'>{description}</p>
                <p className='text-sm text-gray-500'>{date}</p>
            </div>
        </div>
    )
 }


const Trendingnews = () => {
  return (
    <HomepageSection title="Trending news">
       <div className='flex gap-6 '>
<div style={{backgroundImage: `url(${images.home})`}} className='w-full  bg-cover bg-center p-3 rounded-md flex flex-col justify-between'>
<div className='border-2 border-white  p-1 text-center w-1/3'>
    <span className='text-white font-semibold'>Basketball</span>
</div>
<div className='flex flex-col gap-2'>
  <span className='text-white'>LDK -03 jun 2025</span>
  <p className='text-white text-lg font-bold'>Empowering Girl's Power in Basketball</p>
</div>
</div>
<div className='flex flex-col gap-4 px-3' >
{trendingnews.map((item,index)=>(
    <TrendingnewsCard key={index} {...item}/>
))}
</div>
       </div>
    </HomepageSection>
  )
}

export default Trendingnews
