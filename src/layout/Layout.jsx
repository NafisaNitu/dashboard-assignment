import React from 'react'
import { Link, Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <section className='bg-[#101010] sm:p-7 p-3 min-h-screen min-w-screen'>
         <div className="flex w-full gap-5">
            <div className='w-1/6 min-h-screen bg-[#101010] xl:px-8 lg:px-6 py-6'>
                <Sidebar />
            </div>
            <div className='w-5/6 rounded-3xl pl-4'>
                <Outlet />
            </div>
        </div>
    </section>
  )
}

export default Layout