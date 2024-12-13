import React from 'react'

export const Subscribe = () => {
  return <div data-aos="zoom-in"
   className='mb-20 bg-slate-700 dark:bg-gray-800'>
    <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xll font-semibold'>Get Notify About New Products</h1>
            <input 
            type="text" 
            data-aos="fade-up" 
            placeholder="Enter Your email"
            className='w-full p-3 text-black '
            />
        </div>
    </div>

  </div>
}
