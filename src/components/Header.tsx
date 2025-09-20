"use client"
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { 
    setIsOpen(!isOpen); 
 }
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-700 shadow-md">
      <div className="flex justify-between items-center px-6 py-6">
        {/* Logo */}
          <h1 className="text-2xl font-bold text-mylightgray">Portfolio</h1>
            {/* Desktop Menu */}
              <ul className="hidden md:flex gap-8 font-semibold">
                <li><Link href="#" className='text-gray-300'>Home</Link></li>
                <li><Link href="#skills" className='text-gray-300'>Skills</Link></li>
                <li><Link href="#projects" className='text-gray-300'>Projects</Link></li>
                <li><Link href="#about" className='text-gray-300'>About</Link></li>
                <li><Link href="#contact" className='text-gray-300'>Contact</Link></li>
              </ul>
            {/* Mobile Menu Icon */}
             <div className="md:hidden z-50 text-mylightgray cursor-pointer" onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
             </div>
      </div>
            {/* Mobile Sliding Menu */}
            <div
              className={`fixed top-0 right-0 h-full w-[70%] bg-slate-700 transform transition-transform duration-300 ${
               isOpen ?"translate-x-0" : "translate-x-full"
            }`}
            >
           <ul className="flex flex-col gap-6 mt-20 px-6 font-semibold">
            <li><Link href="#" className='text-mylightgray' onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#skills" className='text-mylightgray' onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#projects" className='text-mylightgray' onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#about" className='text-mylightgray' onClick={toggleMenu}>About</Link></li>
            <li><Link href="#contact" className='text-mylightgray' onClick={toggleMenu}>Contact</Link></li>
           </ul>
          </div>
    </header>
  )
};

export default Header;