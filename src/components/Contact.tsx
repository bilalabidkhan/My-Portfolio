import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="scroll-mt-20 py-8 bg-slate-50">
      <h2 data-aos="zoom-in-up" className="text-center text-4xl font-bold text-blue-800">Contact Me</h2>
       <div data-aos="zoom-in-up" className='max-w-lg mx-auto shadow-md bg-white mt-10 mb-10 rounded-lg p-5'>
        <form>
          <h1 className='text-3xl font-bold text-center mb-4'>Get In Touch</h1>
            <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
               Name
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="name"
               type="text"
               placeholder="Enter Your Name"/>
            </div>
            <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
               Email
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email"
               type="email"
               placeholder="Enter Your Email"/>
            </div>
            <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
               Your Message
             </label>
             <textarea
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
               id="message"
               placeholder="Your Message"/>
            </div>
            <div className="flex items-center justify-center">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
               type="submit">
                 Send Message
             </button>
            </div>
        </form>
      </div>
  </div>
  )
};

export default Contact