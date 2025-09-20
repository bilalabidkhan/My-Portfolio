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
    <div id='projects' className='scroll-mt-20'> 
     <h1 data-aos="fade-up" className='text-center text-4xl font-bold text-myCyan'>My Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 gap-8 py-10">
        {projects.map((project, index) => (
         <div key={index} data-aos="fade-up" className="border-2 border-cyan-400 shadow-[0_0_18px_#00F0FF] relative group rounded-2xl overflow-hidden cursor-pointer h-64">
           {/* Image */}
            <Image
              src={project.image}
              alt="projects"
              width={250}
              height={250}
              className="rounded w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
           {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
              <p className="font-bold text-lg mb-2">{project.title}</p>
              <p className="font-medium text-sm text-gray-200 mb-3">{project.description}</p>
             {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {project.tectStack.map((teck, i) => (
                <span
                  key={i}
                  className="border rounded-md text-sm px-2 py-1 bg-blue-300 hover:bg-blue-400 text-black"
                >
                {teck}
                </span>
              ))}
              </div>
            {/* Live Demo Button */}
             <Link
               href={project.live}
               target="_blank"
               className="px-3 py-2 text-white text-sm font-semibold rounded-md bg-blue-500 hover:bg-blue-600">
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
