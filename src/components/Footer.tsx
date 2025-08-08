import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  
  return (
    <div className='text-blue-800 bg-slate-200 p-5 flex flex-col justify-center items-center'>
      <div className='flex items-center gap-5 py-2'>
        <a href="https://github.com/bilalabidkhan"> 
          <FaGithub className='text-black sm:size-12 size-8'/>
        </a>
        <a href="https://www.instagram.com/bilalkhan12407">
          <FaInstagram className='text-pink-600 sm:size-12 size-8'/>
        </a>
        <a href="">
          <CiLinkedin className='text-blue-500 sm:size-12 size-8'/>
        </a>
      </div>
      <div>
        <p className='text-[14px] sm:text-[22px] font-bold '>
          @ Bilal | Portfolio 2024 All Right Reserved
        </p>
      </div>  
    </div>
  )
}

export default Footer
