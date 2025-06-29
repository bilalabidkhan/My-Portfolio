"use client"
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { 
    setIsOpen(!isOpen); 
 }
  return (
   <div className='w-full container pt-6 shadow p-5'>
     <div className='flex justify-between items-center'>
       <div className='font-bold text-2xl text-blue-800'>CodebyBilal</div>
         <ul className='gap-8 lg:gap-16 hidden md:flex'>
           <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#hero" className=''>Home</a></li>
           <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#skills">Skill</a></li>
           <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#project">Project</a></li>
           <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#about">About</a></li>
           <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#contact">Conatct</a></li>
         </ul>
         <div className='md:hidden' onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
         </div>
       </div>
        {isOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden pl-[70%] pb-8'>
            <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#project" onClick={toggleMenu}>Project</a></li>
            <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className='menuLink font-bold text-[15px] hover:text-blue-800'><a href="#conatct" onClick={toggleMenu}>Conatct</a></li>
          </ul>
        )}    
   </div>
  )
};

export default Header;
