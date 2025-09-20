import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='scroll-mt-20 py-8'>
      <h1 className='text-center text-4xl font-bold text-myCyan'>About Me</h1>
        <div className='grid sm:grid-cols-2 items-center gap-8 py-8'>
          {/* right side */}
         <div className='flex justify-center' data-aos="fade-right">
           <Image src={"/images/bilalkhan.jpg"} alt='hero' width={250} height={250} className='border-cyan-400 shadow-[0_0_20px_#00F0FF] rounded-xl h-72'/>
         </div>
         <div className='flex justify-center items-center p-8'>
           <p className='text-xl font-medium text-mylightgray'>
            I’m a passionate Front-End Developer, crafting modern, fully 
            responsive, and user-friendly websites. Skilled in React, Next.js, 
            Tailwind CSS, and JavaScript and I'm currently learning Agentic AI 
            in Governor House IT Initative. I blend clean code with creative 
            design to deliver impactful digital experiences.You can contact me 
            any time I'll be very happy to assist you <strong className='text-myCyan'>Thank You!</strong> 
           </p>       
         </div>
      </div> 
    </div>
  )
}

export default About
