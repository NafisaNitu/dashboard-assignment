import './App.css'
import { CiCirclePlus } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { IoMdPlayCircle } from "react-icons/io";
import DailyExpenses from './components/DailyExpenses';

function Home() {

  return (
    <>
    <div className="flex flex-wrap justify-center h-full">

      <div className='lg:w-2/3 w-full bg-white lg:rounded-tl-3xl lg:rounded-bl-3xl 2xl:px-20 xl:px-20 sm:px-10 px-6 xl:py-16 sm:py-10 py-6'>
        <div className='flex justify-between'>
            <h1 className="xl:text-[40px] sm:text-3xl text-md font-semibold text-[#262A41]">Expenses</h1>
            <div className='flex'>
              <img src="/src/images/1.png" className='rounded-full -mr-2 z-20 border-2 sm:w-10 sm:h-10 w-8 h-8' alt="" />
              <img src="/src/images/2.png" className='rounded-full border-2 -mr-2 z-10 sm:w-10 sm:h-10 w-8 h-8' alt="" />
              <img src="/src/images/3.png" className='rounded-full border-2 sm:w-10 sm:h-10 w-8 h-8' alt="" />
                <CiCirclePlus size={40} color='#D2DCE8' className='sm:ml-2 cursor-pointer' />
            </div>
        </div>
          <p className='text-[#7e7e7e] xl:mt-3'>01 - 25 March, 2020</p>
          <img src="/src/images/graph.png" className='w-full sm:mt-10 mt-6' alt="" />

        <DailyExpenses size={20} />  

          <div className='mt-12'>
            <div className='flex justify-between border-b'>
              <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Monday, 23 March 2020</h3>
              <IoIosMore size={40} color='#D2DCE8' className='ml-2 cursor-pointer' />
            </div>

            <div className='flex justify-between items-center mt-6'>
               <div className='flex justify-between items-center gap-4'>
                <BiSolidDish size={44} color='#ffffff' className='bg-[#DC3434] sm:p-3 p-2 sm:rounded-full' />
                <span>
                  <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Food and Drink</h3>
                  <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>5:12 pm  •  Makan Steak</p>
                </span>
               </div>
               <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>-156.000</h3>
            </div>

            <div className='flex justify-between items-center mt-6'>
               <div className='flex justify-between items-center gap-4'>
                <IoMdPlayCircle size={44} color='#ffffff' className='bg-[#4BA83D] sm:p-3 p-2 sm:rounded-full' />
                <span>
                  <h3 className='sm:text-lg text-sm font-medium text-[#262A41]'>Entertainment</h3>
                  <p className='text-[#BDC0C4] mt-1 sm:text-md text-xs'>5:12 pm  •  Nonton Bioskop</p>
                </span>
               </div>
               <h3 className='sm:text-lg text-sm font-semibold text-[##273240]'>-35.200</h3>
            </div>

          </div>
      </div>

      <div className='lg:w-1/3 w-full bg-[#F9FAFC] lg:rounded-tr-3xl lg:rounded-br-3xl 2xl:px-16 xl:px-12 sm:px-8 px-6 xl:py-16 sm:py-8 py-6'>
          <h1 className="xl:text-2xl sm:text-lg text-sm font-semibold text-[#262A41] sm:mb-8 mb-6">Where your money go?</h1>
          <div className='flex flex-col sm:gap-8 gap-4'>
            <div>
              <div className='flex justify-between mb-2'>
                <p className='sm:text-md text-sm'>Food and Drinks</p>
                <p className='sm:text-md text-sm'>872.400</p>
              </div>
              <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                  <div class="w-24 h-full bg-[#31BA96] rounded-2xl"></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <p className='sm:text-md text-sm'>Shopping</p>
                <p className='sm:text-md text-sm'>1.378.200</p>
              </div>
              <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                  <div class="w-40 h-full bg-[#31BA96] rounded-2xl"></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <p className='sm:text-md text-sm'>Housing</p>
                <p className='sm:text-md text-sm'>928.500</p>
              </div>
              <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                  <div class="w-32 h-full bg-[#31BA96] rounded-2xl"></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <p className='sm:text-md text-sm'>Transportation</p>
                <p className='sm:text-md text-sm'>420.700</p>
              </div>
              <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                  <div class="w-16 h-full bg-[#31BA96] rounded-2xl"></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <p className='sm:text-md text-sm'>Vehicle</p>
                <p className='sm:text-md text-sm'>520.000</p>
              </div>
              <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                  <div class="w-20 h-full bg-[#31BA96] rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className='xl:mt-28 sm:mt-24 mt-16 bg-[#EDF0F6] 2xl:p-9 xl:p-7 p-4 rounded-2xl'>
              <div className='flex justify-between mb-2 relative'>
                 <img src="/src/images/b-1.png" className='absolute -top-12' alt="" />
                 <img src="/src/images/b-2.png" className='absolute -top-16 right-0' alt="" />
              </div>

            <h3 className="font-semibold sm:text-md text-sm text-[##273240] xl:pt-16 pt-8 mb-2">Save more money</h3>
            <p className='text-sm text-[#404852]'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <button className='xl:text-md sm:text-sm text-xs bg-[#101010] text-white px-8 py-2 rounded-lg w-full font-semibold xl:mt-6 mt-4'>VIEW TIPS</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home
