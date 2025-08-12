import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
  
  return (
    <div className='text-blue-800 bg-slate-200 p-5 flex flex-col justify-center items-center'>
      <div className='flex items-center gap-5 py-2'>
        <a href="https://github.com/bilalabidkhan" target="_blank"> 
          <FaGithub className='text-black sm:size-10 size-8'/>
        </a>
        <a href="https://www.instagram.com/bilalkhan12407" target="_blank">
          <FaInstagram className='text-pink-600 sm:size-10 size-8' />
        </a>
        <a href="https://pk.linkedin.com/in/bilal-abid-khan-2857392ba" target="_blank">
          <CiLinkedin className='text-blue-500 sm:size-10 size-8'/>
        </a>
      </div>
      <div className="flex items-center justify-center gap-3 mt-2">
        <CiMail className="text-2xl text-black"/><span className="text-[14px] sm:text-[22px] font-medium">bilalabid6578@gmail.com</span>
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
