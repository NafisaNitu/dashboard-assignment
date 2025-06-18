import React from 'react'
import ViewTips from './ViewTips'

function HomeContentRight() {
    const costs = [
        {
            id: 1,
            name: "Food and Drinks",
            total: "872.400",
            width: 'w-24'
        },
        {
            id: 2,
            name: "Shopping",
            total: "1.378.200",
            width: 'w-40'
        },
        {
            id: 3,
            name: "Housing",
            total: "928.500",
            width: 'w-32'
        },
        {
            id: 4,
            name: "Transportation",
            total: "420.700",
            width: 'w-16'
        },
        {
            id: 5,
            name: "Vehicle",
            total: "520.000",
            width: 'w-20'
        }
    ]
  return (
    <div className='lg:w-1/3 w-full bg-[#F9FAFC] lg:rounded-tr-3xl lg:rounded-br-3xl 2xl:px-16 xl:px-12 sm:px-8 px-6 xl:py-16 sm:py-8 py-6'>
          <h1 className="xl:text-2xl sm:text-lg text-sm font-semibold text-[#262A41] sm:mb-8 mb-6">Where your money go?</h1>
            <div className='flex flex-col sm:gap-8 gap-4'>
                {
                    costs.map((cost)=>(
                        <div>
                            <div className='flex justify-between mb-2'>
                                <p className='right-content-text'>{cost.name}</p>
                                <p className='right-content-total'>{cost.total}</p>
                            </div>
                            <div class="sm:h-2 h-1 bg-gray-200 rounded-2xl overflow-hidden">
                                <div class={`${cost.width} h-full bg-[#31BA96] rounded-2xl`}></div>
                            </div>
                        </div>
                    ))
                }
            </div>

           <ViewTips />   
             
      </div>
  )
}

export default HomeContentRight