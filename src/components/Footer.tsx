import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin} from "react-icons/ci";

const Footer = () => {
  
  return (
    <div className='bg-slate-700 p-5 flex flex-col justify-center items-center'>
      <div className='flex items-center gap-5 py-2'>
        <a href=""> 
          <FaGithub className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-10 md:size-12 border-2 rounded-full p-2'/>
        </a>
        <a href="https://www.instagram.com/bilalkhan12407" target="_blank">
          <FaInstagram className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-10 md:size-12 border-2 rounded-full p-2' />
        </a>
        <a href="">
          <CiLinkedin className='border-myCyan text-myCyan hover:bg-myCyan hover:text-myBlack size-10 md:size-12 border-2 rounded-full p-2'/>
        </a>
      </div>
      <div>
        <p className='text-[14px] sm:text-[22px] text-center text-mylightgray font-bold '>
          Copyright © 2025 by Bilal | All Rights Reserved.
        </p>
      </div>  
    </div>
  )
}

export default Footer
