import React from 'react'
import { Link, Outlet } from 'react-router'

function Layout() {
  return (
    <section className='bg-[#101010] sm:p-7 p-4 min-h-screen min-w-screen'>
         <div className="flex w-full gap-5">
            <div className='w-1/6 min-h-screen bg-[#101010] xl:px-8 lg:px-6 py-6'>
                <div className='flex flex-col justify-between xl:p-4 min-h-screen'>
                    <div>
                        <img src="/src/images/profile.png" className='rounded-2xl relative' alt="" />
                        <span
                        className="absolute xl:left-32 lg:left-28 sm:left-20 left-16 xl:top-14 sm:top-10 top-8 w-6 h-6 rounded-full flex items-center justify-center bg-red-500 text-white text-xs font-medium">4</span>

                         <h1 className='xl:text-3xl sm:text-md text-sm text-white font-semibold mt-3'>Samantha</h1>
                         <h2 className='xl:text-lg lg:text-sm text-xs nav-text mb-5'>samantha@email.com</h2>
                         <nav className='flex flex-col sm:gap-6 gap-3 list-none xl:mt-36 mt-20'>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm nav-text font-semibold'>Dashboard</Link>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm text-white font-semibold'>Expenses</Link>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm nav-text font-semibold'>Wallets</Link>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm nav-text font-semibold'>Summary</Link>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm nav-text font-semibold'>Accounts</Link>
                            <Link to="/" className='xl:text-xl sm:text-md text-sm nav-text font-semibold'>Settings</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='w-5/6 rounded-3xl sm:pl-4 pl-12'>
                <Outlet />
            </div>
        </div>
    </section>
  )
}

export default Layout