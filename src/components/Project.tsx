import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from "react-icons/si";

const Project = () => {
  const projects = [
    {
      title: "E-Commerce Webite",
      description: "A fully responsive E-Commerce Website showcasing products using a clean UI.",
      image: "/images/hackaton.png",
      tectStack: 
      [
        <RiNextjsFill className='size-4'/>, 
        <RiTailwindCssFill className='size-4'/>, 
        <SiTypescript className='size-4'/>
      ],
      live: "https://my-hackaton.vercel.app/"
    },
    {
      title: "Figma Clone",
      description: "A simplified UI/UX design tool built with custom compontents and layout features.",
      image: "/images/figma1.png",
      tectStack: 
      [
        <RiNextjsFill className='size-4'/>, 
        <RiTailwindCssFill className='size-4'/>, 
        <SiTypescript className='size-4'/>
      ],
      live: "https://8th-class-assignment.vercel.app/"
    },
    {
      title: "Courses Website",
      description: "An educational website where users can explore and learn new skills with ease.",
      image: "/images/figma2.png",
      tectStack: 
      [ 
        <RiNextjsFill className='size-4'/>, 
        <RiTailwindCssFill className='size-4'/>, 
        <SiTypescript className='size-4'/>
      ],
      live: "https://9th-class-assignment.vercel.app/"
    },
    {
      title: "Data Fetching",
      description: "CSR updates in-browser and SSR pre-renders on server for speed and SEO",
      image: "/images/fetch-data.png",
      tectStack: 
       [
         <RiNextjsFill className='size-4'/>, 
         <RiTailwindCssFill className='size-4'/>, 
         <SiTypescript className='size-4'/>
       ],
      live: "https://10-class-assignment.vercel.app//"
    },
    {
      title: "CountDown Timer",
      description: "A countdown timer in Next.js, updating in real-time for events and launches.",
      image: "/images/countdown.png",
      tectStack: 
       [
         <RiNextjsFill className='size-4'/>, 
         <SiTypescript className='size-4'/>
       ],
      live: ""
    },
    {
      title: "Fake store api",
      description: "Responsive e-commerce app with add-to-cart & checkout using Fake Store API. ",
      image: "/images/store.png",
      tectStack: 
       [
         <RiNextjsFill className='size-4'/>, 
         <SiTypescript className='size-4'/>,
         <RiTailwindCssFill className='size-4'/>, 
       ],
      live: "https://fake-store-sooty.vercel.app/"
    },
  ]
  return (
    <div id='projects' className='scroll-mt-20 py-8'> 
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>My Project</h1>
      <div data-aos="zoom-in-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 gap-7 py-10'>
        {projects.map((project, index) => (
          <div key={index} className='border rounded-md shadow-lg hover:scale-105 transition-transform p-1'>
              <Image src={project.image} alt='projects' width={250} height={250} className='object-contain rounded w-full h-68 cursor-pointe '/>
            <div > 
              <p className='font-bold text-black'>{project.title}</p>
              <p className='font-medium text-gray-500'>{project.description}</p>
            </div>
            <div className='flex flex-wrap gap-2 mt-1'>
              {project.tectStack.map((teck, i) => (
                <span key={i} className='border rounded-md text-base px-2 py-1 sm:px-3 sm:py-2 bg-blue-300 hover:bg-blue-400 text-black'>
                  {teck}
                </span>
              ))}
            </div>
            <div className='w-24 px-2 py-1 text-white text-base font-semibold border rounded-md bg-blue-500 hover:bg-blue-600 mt-2'>
              <Link href={project.live} target='_blank' className='underline underline-offset-2 whitespace-nowrap'>
                Live Demo
              </Link>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
