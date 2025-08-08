import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  const projects = [
    {
      title: "E-Commerce Webite",
      // description: "A fully responsive E-Commerce Website showcasing products using a clean UI.",
      image: "/images/hackaton.png",
      tectStack: ["Next.js", "tailwind CSS", "Typescript"],
      live: "https://my-hackaton.vercel.app/"
    },
    {
      title: "Figma Clone",
      description: "",
      image: "/images/figma1.png",
      tectStack: ["Next.js", "tailwind CSS", "Typescript"],
      live: "https://8th-class-assignment.vercel.app/"
    },
    {
      title: "Courses Website",
      description: "",
      image: "/images/figma2.png",
      tectStack: ["Next.js", "tailwind CSS", "Typescript"],
      live: "https://9th-class-assignment.vercel.app/"
    },
    {
      title: "Data Fetching",
      description: "",
      image: "/images/fetch-data.png",
      tectStack: ["Next.js", "tailwind CSS", "Typescript"],
      live: "https://10-class-assignment.vercel.app//"
    },
    {
      title: "CountDown Timer",
      description: "",
      image: "/images/countdown.png",
      tectStack: ["Next.js", "Typescript"],
      live: ""
    },
  ]
  return (
    <div id='project'>
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>My Project</h1>
      <div data-aos="zoom-in-up" className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-8 gap-7 py-10'>
        {projects.map((project, index) => (
          <div key={index} className='border rounded-md shadow-lg hover:scale-105 transition-transform p-2'>
            <Image src={project.image} alt='projects' width={500} height={500} className='object-cover w-full h-48 cursor-pointer'/>
            <div> 
              <p className='font-bold text-blue-800'>{project.title}</p>
              <p className='font-bold text-blue-800'>{project.description}</p>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {project.tectStack.map((teck, i) => (
                <span key={i} className='border rounded-md text-white text-base font-semibold bg-blue-500 hover:bg-blue-600 px-2 py-1'>
                  {teck}
                </span>
              ))}
            </div>
            <div className='w-24 px-2 py-1 text-white text-base font-semibold border rounded-md bg-blue-500 hover:bg-blue-600 mt-2'>
              <Link href={project.live} target='_blank' className='underline underline-offset-2'>
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
