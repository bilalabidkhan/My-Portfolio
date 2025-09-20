"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div id='home' className='flex flex-col md:flex-row justify-evenly items-center py-24'> 
      {/* text-content */}
        <div data-aos="fade-up">
           {/* text area */}
            <p className='font-bold text-[25px] md:text-[50px] text-mylightgray'>Hi, It's me</p>
            <p className='font-extrabold text-[25px] sm:text-[50px] text-mylightgray'>Bilal Khan</p>
            <p className='font-bold text-[25px] md:text-[50px] text-mylightgray'>I`m {' '} 
             <span className='text-blue-80 text-myCyan'>
              <Typewriter
                words={["Frontend Developer" , "Figma Design Clone"]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
             </span>
            </p>
           {/* icon */}
           <div className='flex gap-5 py-2'>
             <a href=""> 
              <FaGithub className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-12 border-2 rounded-full p-2'/>
             </a>
             <a href="https://www.instagram.com/bilalkhan12407" target='_blank'>
              <FaInstagram className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-12 border-2 rounded-full p-2'/>
             </a>
             <a href="">
              <CiLinkedin className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-12 border-2 rounded-full p-2'/>
             </a>
           </div>
           {/* button */}
           <div className='flex gap-4 py-4'>
             <Link href="#contact">
              <button className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack py-2 px-4 font-semibold whitespace-nowrap border rounded-xl '>Contact Me</button>
             </Link>
             <Link href="#projects">
              <button className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack py-2 px-4 font-semibold whitespace-nowrap border rounded-xl '>Veiw Projects</button>
             </Link>
           </div>
        </div>
        {/* image-content */}
        <div className='py- p-5'>
           <Image src={"/images/bilalkhan.jpg"} alt='Bilal' width={250} height={250} className='border-cyan-400 shadow-[0_0_20px_#00F0FF] rounded-xl w-full h-96'/>
        </div>
    </div>
  
  )
};

export default Hero;