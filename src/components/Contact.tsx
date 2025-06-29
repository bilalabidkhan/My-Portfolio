import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div id='contact'>
      <h1 data-aos="zoom-in-up" className='text-center text-4xl font-bold text-blue-800'>Get in touch</h1>
        <div data-aos="zoom-in-up" className='flex flex-col justify-between items-center pt-12'>
          <div>
            <label htmlFor="name" className='text-2xl font-semibold text-blue-800'>Name</label>
              <br />
                <input type="text" className='border border-blue-800  rounded-lg w-60' id='name' />
              <br />
            <label htmlFor="email" className='text-2xl font-semibold text-blue-800'>Email</label>
              <br />
                <input type="text" id="email" className='border border-blue-800  rounded-lg w-60'/>
              <br />
            <label htmlFor="message" className='text-2xl font-semibold text-blue-800'>Message</label>
              <br />
            <textarea name="text" id="message" rows={8} className='border border-blue-800 rounded-lg w-60'></textarea>
          </div>     
          <div className='pt-6'>  
            <button className='text-xl font-medium border border-blue-800 rounded-xl hover:bg-blue-500 p-2'>
              Submit
            </button>
          </div>
          <div className='flex flex-row gap-5 pt-4 py-6'>
            <a href="https://github.com/bilalabidkhan"> 
              <FaGithub className='text-black size-12'/>
            </a>
            <a href="https://www.instagram.com/bilalkhan12407">
              <FaInstagram className='text-pink-600 size-12'/>
            </a>
            <a href="">
              <CiLinkedin className='text-blue-500 size-12'/>
            </a>
          </div>
        </div> 
    </div>  
  )
};
// flex md:flex-col flex-row gap-y-16 gap-5 pt-4
export default Contact