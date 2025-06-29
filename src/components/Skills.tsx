import React from 'react';
import { FaHtml5, FaCss3, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill, RiFileExcel2Line  } from "react-icons/ri";

const Skills = () => {
  const skill = [
    {
      icon: <FaHtml5 className='size-20 text-yellow-900'/>,
      title: "HTML",
      percentage: 90,
    },
    {
      icon:  <FaCss3 className='size-20 text-green-500'/>,
      title: "CSS",
      percentage: 80,
    },
    { 
      icon: <SiTypescript className='size-20 text-blue-500'/>,
      title: "TYPESCRIPT",
      percentage: 75,
    },
    { 
      icon:  <IoLogoJavascript  className='size-20 text-yellow-400'/>,
      title: "JAVASCRIPT",
      percentage: 75,
    },
    { 
      icon: <RiNextjsFill className='size-20 text-black'/>,
      title: "NEXT JS",
      percentage: 85,
    },
    {
      icon: <RiTailwindCssFill className='size-20 text-blue-400'/>,
      title: "TAILWIND CSS",
      percentage: 90,
    },
  ]
  return (
    <div className='py-6' id='skills'>
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>Technicals Skills</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 py-10'>
        {skill.map((items, index) => (
          <div data-aos="zoom-in-up" key={index} className='mx-8 md:mx-10 space-y-2'>
            <p className=''>{items.icon}</p>
            <p className='sm:text-[25px] text-[13px] font-medium py-2'>{items.title}</p>       
            <p className='sm:text-[25px] text-[13px] font-medium py-2'>{items.percentage} %</p>     
          </div>   
       ))}
       </div>
    </div>
  )
}
export default Skills
