import React from 'react'
import { IoIosMore } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoMdBus } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import DateWiseExpenses from './DateWiseExpenses';

function DailyExpenses() {
    const expenses = [
        {
            id: 1,
            cost: "Grocery",
            date: "5:12 pm  •  Belanja di pasar",
            total: "-326.800",
            icon: <IoMdCart color='#ffffff' size={20} />,
            bgColor: 'bg-sky-500'
        },
        {
            id: 2,
            cost: "Transportation",
            date: "5:12 pm  •  Naik bus umum",
            total: "-15.000",
            icon: <IoMdBus color='#ffffff' size={20} />,
            bgColor: 'bg-fuchsia-600'	
        },
        {
            id: 3,
            cost: "Housing",
            date: "5:12 pm  •  Bayar Listrik",
            total: "-185.750",
            icon: <FaHouse color='#ffffff' size={20} />,
            bgColor: 'bg-orange-400' 	
        },
    ]
  return (
      <div className='sm:mt-12 mt-6'>
        <div>
            <div className='flex justify-between border-b'>
                <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Today</h3>
                  <IoIosMore size={40} color='#D2DCE8' className='ml-2 cursor-pointer' />
              </div>
      
                  {
                  expenses.map((expense)=>(
                    <div className='flex justify-between items-center sm:mt-6 mt-3'>
                      <div className='flex justify-between items-center sm:gap-4 gap-2'>
                        <div key={expense.id} className={`sm:p-3 p-2 sm:rounded-full ${expense.bgColor}`}>
                            {expense.icon }
                        </div>
                            <span>
                              <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>{expense.cost}</h3>
                              <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>{expense.date}</p>
                            </span>
                      </div>
                          <h3 className='lg:text-lg sm:text-sm text-xs font-semibold text-[##273240]'>{expense.total}</h3>
                    </div>
                  ))
                  }
          </div>
          <DateWiseExpenses />
          
      </div>
  )
}

export default DailyExpenses