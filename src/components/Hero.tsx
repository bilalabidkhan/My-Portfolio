"use client";
import React from 'react'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div id='home' className='flex flex-col md:flex-row justify-evenly items-center py-20'>
      {/* text-content */}
        <div data-aos="zoom-in-up">
           <p className='font-semibold text-[20px] sm:text-[40px]'>Hello</p>
           <p className='font-semibold text-[25px] sm:text-[48px] text-blue-800'>It's Bilal Khan</p>
           <p className='font-semibold text-[25px] sm:text-[48px]'>I`m {' '} 
            <span className='text-blue-800'>
            <Typewriter
            words={["WEB DEVELOPER" , "UI/UX DESIGN"]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
            />
            </span>
           </p>
           <div className='flex gap-5 pt-4'>
              <a href="https://github.com/bilalabidkhan"> 
                <FaGithub className='text-black size-8'/>
              </a>
              <a href="https://www.instagram.com/bilalkhan12407">
                <FaInstagram className='text-pink-600 size-8'/>
              </a>
              <a href="">
                <CiLinkedin className='text-blue-500 size-8'/>
              </a>
           </div>
        </div>
      {/* image-content */}
        <div className='py-10'>
           <Image src={"/images/image.png"} alt='hero' width={250} height={250} className='rounded-full'/>
        </div>
    </div>
  
  )
};

export default Hero;