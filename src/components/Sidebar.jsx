import React from 'react'
import Navbar from './Navbar'

function Sidebar() {
  return (
    <div className='flex flex-col justify-between xl:p-4 min-h-screen'>
        <div>
            <img src="/images/profile.png" className='rounded-2xl relative' alt="" />
                <span
                    className="absolute xl:left-32 lg:left-28 sm:left-20 left-16 xl:top-14 sm:top-10 top-8 w-6 h-6 rounded-full flex items-center justify-center bg-red-500 text-white text-xs font-medium">4</span>

                        <h1 className='xl:text-3xl sm:text-md text-sm text-white font-semibold mt-3'>Samantha</h1>
                        <h2 className='xl:text-lg lg:text-sm text-xs nav-text mb-5 sm:block hidden'>samantha@email.com</h2>

                         <Navbar/>

                    </div>
                </div>
  )
}

export default Sidebar