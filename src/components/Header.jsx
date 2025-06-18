import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const headerTexts = {
  title: "Expenses",
  img: "/src/images/graph.png",
  img1: "/src/images/1.png",
  img2: "/src/images/2.png",
  img3: "/src/images/3.png",
  date: "01 - 25 March, 2020"
}
function Header() {
  return (
    <div>
          <div className='flex justify-between'>
              <h1 className="xl:text-[40px] sm:text-3xl text-md font-semibold text-[#262A41]">{headerTexts.title}</h1>
              <div className='flex'>
                <img src={headerTexts.img1} className='rounded-full -mr-2 z-20 border-2 sm:w-10 sm:h-10 w-8 h-8' alt="" />
                <img src={headerTexts.img2} className='rounded-full border-2 -mr-2 z-10 sm:w-10 sm:h-10 w-8 h-8' alt="" />
                <img src={headerTexts.img3} className='rounded-full border-2 sm:w-10 sm:h-10 w-8 h-8' alt="" />
                  <CiCirclePlus size={40} color='#D2DCE8' className='sm:ml-2 cursor-pointer' />
              </div>
          </div>
            <p className='text-[#7e7e7e] xl:mt-3'>01 - 25 March, 2020</p>
            <img src={headerTexts.img} className='w-full sm:mt-10 mt-6' alt="" />
    </div>
  )
}

export default Header