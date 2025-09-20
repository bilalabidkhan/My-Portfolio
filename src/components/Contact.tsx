import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
      <div id="contact" className="scroll-mt-20 py-12 px-4 sm:px-6 lg:px-12">
        <h1 data-aos="fade-up" className='text-3xl md:text-4xl text-center font-bold text-myCyan'>Contact Me</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left side */}
           <div className="space-y-6 py-8">
             <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-myCyan">
               Get in touch
             </h2>
             <p data-aos="fade-up" className="text-base md:text-lg font-medium leading-relaxed text-mylightgray">
               Feel free to reach out if you have any questions, need help with a
               project, or just want to say hi.
             </p>

             <div data-aos="fade-up" className="flex items-center gap-3">
              <CiMail size={28} className="text-myCyan" />
              <a
               href="mailto:bilalabid6578@gmail.com"
               className="text-lg md:text-xl text-mylightgray"
              >
               bilalabid6578@gmail.com
              </a>
             </div>

             <div data-aos="fade-up"  className="flex items-center gap-3">
              <BsTelephone size={24} className="text-myCyan" />
              <a
               href="tel:6433654425637"
               className="text-lg md:text-xl text-mylightgray"
              >
               2430654369
              </a>
             </div>
            </div>
          {/* Right side */}
           <div className="w-full max-w-lg mx-auto rounded-lg p-4 md:p-8">
            <form className="space-y-4 ">
              {/* Name Section */}
              <div data-aos="fade-up"> 
                <label className="block text-myCyan text-lg font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border bg-slate-700 border-myCyan focus:border-myCyan focus:ring focus:ring-myCyan outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              {/* Email Section */}
              <div data-aos="fade-up">
                <label className="block text-myCyan text-lg font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border bg-slate-700 border-myCyan focus:border-myCyan focus:ring focus:ring-myCyan outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              {/* Message Section */}
              <div data-aos="fade-up">
                <label className="block text-myCyan text-lg font-semibold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border bg-slate-700 border-myCyan focus:border-myCyan focus:ring focus:ring-myCyan outline-none"
                  id="message"
                  placeholder="Your Message"
                  required
                  rows={7}
                />
              </div>
              {/* Button */}
                <button
                  data-aos="fade-up"
                  type="submit"
                  className="w-full bg-myCyan hover:bg-cyan-500 text-myBlack font-bold py-3 rounded-md transition">
                    Send Message
                </button>
            </form>
           </div>
      </div>
    </div>
  )
};

export default Contact