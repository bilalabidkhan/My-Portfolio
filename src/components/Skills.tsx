import React from 'react';
import { RiNextjsFill, RiTailwindCssFill, RiFileExcel2Line  } from "react-icons/ri";
import { BiLogoCss3, BiLogoFigma, BiLogoHtml5, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';

const Skills = () => {
  const skill = [
    {
      icon: <BiLogoHtml5 className='size-20 text-yellow-600'/>,
      title: "HTML",
      level: "Intermediate",
    },
    {
      icon:  <BiLogoCss3 className='size-20 text-green-500'/>,
      title: "CSS",
      level: "Intermediate",
    },
    { 
      icon: <BiLogoTypescript className='size-20 text-blue-500'/>,
      title: "TYPESCRIPT",
      level: "Advanced",
    },
    { 
      icon: <BiLogoJavascript  className='size-20 text-yellow-400'/>,
      title: "JAVASCRIPT",
      level: "Intermediate",
    },
    { 
      icon: <RiNextjsFill className='size-20 text-black'/>,
      title: "NEXT JS",
      level: "Advanced",
    },
    {
      icon: <RiTailwindCssFill className='size-20 text-blue-400'/>,
      title: "TAILWIND CSS",
      level: "Advanced",
    },
    {
      icon: <RiFileExcel2Line className='size-20 text-green-600'/>,
      title: "MS Excel",
      level: "Intermediate",
    },
     {
      icon: <BiLogoFigma className='size-20 text-orange-600'/>,
      title: "Figma",
      level: "Intermediate",
    },
  ]
  return (
    <div className='scroll-mt-20 py-5' id='skills'>
      <h1 data-aos="fade-up" className='text-center text-4xl font-bold text-myCyan mb-10'>Technicals Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8'>
        {skill.map((items, index) => (
          <div key={index} data-aos="fade-up" className='border rounded-lg bg-slate-700 border-cyan-400 shadow-[0_0_18px_#00F0FF] py-5 mb-5'> 
            <p className='flex justify-center'>{items.icon}</p>
            <p className='sm:text-[25px] text-[20px] font-medium text-center text-myCyan'>{items.title}</p>       
            <p className='sm:text-[25px] text-[20px] font-medium text-center text-myCyan'>{items.level}</p>  
          </div>
       ))}
       </div>
    </div>
  )
}
export default Skills
