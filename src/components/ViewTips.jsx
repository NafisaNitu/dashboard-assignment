import React from 'react'

const tips = {
    img1: "/src/images/b-1.png",
    img2: "/src/images/b-2.png",
    title: "Save more money",
    text: "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
}
function ViewTips() {
  return (
    <div className='xl:mt-28 sm:mt-24 mt-16 bg-[#EDF0F6] 2xl:p-9 xl:p-7 p-4 rounded-2xl'>
        <div className='flex justify-between mb-2 relative'>
            <img src={tips.img1} className='absolute -top-12' alt="" />
            <img src={tips.img2} className='absolute -top-16 right-0' alt="" />
        </div>

        <h3 className="font-semibold sm:text-md text-sm text-[##273240] xl:pt-16 pt-8 mb-2">{tips.title}</h3>
        <p className='text-sm text-[#404852]'>{tips.text}</p>
        <button className='xl:text-md sm:text-sm text-xs bg-[#101010] text-white px-8 py-2 rounded-lg w-full font-semibold xl:mt-6 mt-4'>VIEW TIPS</button>
    </div>
  )
}

export default ViewTips