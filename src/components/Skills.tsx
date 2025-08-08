import React from 'react';
import { FaHtml5, FaCss3, FaFigma, } from "react-icons/fa";
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
      percentage: 90,
    },
    {
      icon: <RiTailwindCssFill className='size-20 text-blue-400'/>,
      title: "TAILWIND CSS",
      percentage: 90,
    },
    {
      icon: <RiFileExcel2Line className='size-20 text-green-600'/>,
      title: "MS Excel",
      percentage: 90,
    },
     {
      icon: <FaFigma className='size-20 text-orange-600'/>,
      title: "MS Excel",
      percentage: 90,
    },
  ]
  return (
    <div className='py-6' id='skills'>
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>Technicals Skills</h1>
      <div data-aos="zoom-in-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8'>
        {skill.map((items, index) => (
          <div key={index} className='border rounded-lg p-6 space-y-2 shadow-lg hover:scale-105 transition-transform'> 
            <p className='flex justify-center'>{items.icon}</p>
            <p className='sm:text-[25px] text-[13px] font-medium text-center'>{items.title}</p>       
            <p className='sm:text-[25px] text-[13px] font-medium text-center'>{items.percentage} %</p>  
          </div>   
       ))}
       </div>
    </div>
  )
}
export default Skills
