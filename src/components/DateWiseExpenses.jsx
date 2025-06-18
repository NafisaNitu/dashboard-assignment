import React from 'react'
import { BiSolidDish } from "react-icons/bi";
import { IoMdPlayCircle } from "react-icons/io";
import { IoIosMore } from "react-icons/io";


function DateWiseExpenses() {
    const dateWiseExpenses = [
          {
            id: 1,
            cost: "Food and Drink",
            date: "5:12 pm  •  Makan Steak",
            total: "-156.000",
            icon: <BiSolidDish color='#ffffff' size={20} />,
            bgColor: 'bg-red-600'
          },
          {
            id: 2,
            cost: "Entertainment",
            date: "5:12 pm  •  Nonton Bioskop",
            total: "-35.200",
            icon: <IoMdPlayCircle color='#ffffff' size={20} />,
            bgColor: 'bg-green-600'
          }
        ]
  return (
    <div className='mt-12'>
          <div className='flex justify-between border-b'>
              <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Monday, 23 March 2020</h3>
              <IoIosMore size={40} color='#D2DCE8' className='ml-2 cursor-pointer' />
          </div>

            {
              dateWiseExpenses.map((dateWiseExpense)=>(
                <div className='flex justify-between items-center mt-6'>
                  <div className='flex justify-between items-center gap-4'>
                    <div size={44} color='#ffffff' className={`${dateWiseExpense.bgColor} sm:p-3 p-2 sm:rounded-full`}>
                        {dateWiseExpense.icon}
                    </div>
                    <span>
                      <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>{dateWiseExpense.cost}</h3>
                      <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>{dateWiseExpense.date}</p>
                    </span>
                  </div>
                  <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>{dateWiseExpense.total}</h3>
                </div>
              ))
            }
    </div>
  )
}

export default DateWiseExpenses