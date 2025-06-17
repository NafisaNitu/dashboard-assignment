import React from 'react'
import { IoIosMore } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoMdBus } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";

function DailyExpenses() {
    const expenses = [
        {
            id: 1,
            cost: "Grocery",
            date: "5:12 pm  •  Belanja di pasar",
            total: -326.800,
            icon: <IoMdCart />
        },
        {
            id: 2,
            cost: "Transportation",
            date: "5:12 pm  •  Belanja di pasar",
            total: -326.800,
            icon: <IoMdCart />
        },

    ]
  return (
    <div className='sm:mt-12 mt-6'>
                <div className='flex justify-between border-b'>
                  <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Today</h3>
                  <IoIosMore size={40} color='#D2DCE8' className='ml-2 cursor-pointer' />
                </div>
    
                {
                expenses.map((expense)=>(
                    <div className='flex justify-between items-center sm:mt-6 mt-3'>
                        <div className='flex justify-between items-center sm:gap-4 gap-2'>
                            <div  color='#ffffff' className='bg-[#32A7E2] sm:p-3 p-2 sm:rounded-full'>
                                {expense.icon }
                                </div>
                            <span>
                            <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>{expense.cost}</h3>
                            <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>{expense.date}</p>
                            </span>
                        </div>
                        <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>{expense.total}</h3>
                </div>

                ))
                }

    
                {/* <div className='flex justify-between items-center mt-6'>
                   <div className='flex justify-between items-center gap-4'>
                    <IoMdBus size={44} color='#ffffff' className='bg-[#B548C6] sm:p-3 p-2 sm:rounded-full' />
                    <span>
                      <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Transportation</h3>
                      <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>5:12 pm  •  Naik bus umum</p>
                    </span>
                   </div>
                   <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>-15.000</h3>
                </div>
    
                <div className='flex justify-between items-center mt-6'>
                   <div className='flex justify-between items-center gap-4'>
                    <FaHouse size={44} color='#ffffff' className='bg-[#FF8700] sm:p-3 p-2 sm:rounded-full' />
                    <span>
                      <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Housing</h3>
                      <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>5:12 pm  •  Bayar Listrik</p>
                    </span>
                   </div>
                   <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>-185.750</h3>
                </div> */}
    
              </div>
  )
}

export default DailyExpenses