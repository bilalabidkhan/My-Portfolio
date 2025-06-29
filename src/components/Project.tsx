import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>My Project</h1>
        <div data-aos="zoom-in-up" className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-6 gap-4'>
         {/* 1 Project  */}
          <ul>
           <li>
            <Link href={"https://my-hackaton.vercel.app/"}>
             <Image src={"/images/hackaton.png"} alt='image' width={300} height={300} className='border border-black'></Image>
            </Link>
           </li>
           <p className='font-bold text-blue-800'>E-Commerce Webite</p>
          </ul>
         {/* 2 Project */} 
          <ul>
           <li>
            <Link href={"https://8th-class-assignment.vercel.app/"}>
             <Image src={"/images/figma1.png"} alt='image' width={300} height={300} className='border border-black'></Image>
            </Link>
           </li>
           <p className='font-bold text-blue-800'>Figma Clone</p> 
          </ul>
         {/* 3 Project */}
          <ul>
           <li>
            <Link href={"https://9th-class-assignment.vercel.app/"}>
             <Image src={"/images/figma2.png"} alt='image' width={300} height={300} className='border border-black'></Image>
            </Link>
           </li> 
           <p className='font-bold text-blue-800'>Courses Website</p>
          </ul>
         {/* 4 Project */}
          <ul>
           <li>
            <Link href={"https://10-class-assignment.vercel.app/"}>
             <Image src={"/images/fetch-data.png"} alt='image' width={300} height={300} className='border border-black'></Image>
            </Link>
           </li> 
           <p className='font-bold text-blue-800'>Data Fetching</p>     
          </ul>
         {/* 5 Project */}
          <ul>
           <li>
            <Link href={""}>
             <Image src={"/images/countdown.png"} alt='image' width={300} height={300} className='border border-black'></Image>
            </Link>
           </li> 
           <p className='font-bold text-blue-800'>CountDown Timer</p>     
          </ul>
      </div>
    </div>
  )
}

export default Project
