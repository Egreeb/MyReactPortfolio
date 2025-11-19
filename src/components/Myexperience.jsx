import React from 'react'
import quicknel from '../assets/complogos/q3.png'
import egreeb from '../assets/complogos/egreeb.png'
import gxcpl from '../assets/complogos/gxcpl.jpg'
import jads from '../assets/complogos/jads.png'

import profile from '../assets/profile.jpg'
const Myexperience = () => {
  return (
    <>
    <div className=' pb-20 bg-linear-to-r from-black/10 to-purple-500/20'>
        <div className='max-w-7xl mx-auto'><br /><br /><br /><br />
            <div className='mb-5 sm:mb-20'>
                <h1 className='font-bold text-4xl sm:text-5xl mb-5 text-center'>My Work Experience</h1>
                <p className='text-xl text-center p-2'>My experience reflects continuous learning, real-world problem-solving, <br /> and delivering impactful digital solutions.</p>
            </div>
            <div className='bg-[#282828] p-5 rounded-xl hover:border border-amber-50/20 mb-8 m-3 '>
                <ul className='sm:flex place-items-center justify-between items-center px-0 sm:px-10'>
                    <li className="date text-xl sm:text-2xl font-bold basis-[20%] py-2 sm:py-0">2022 - Present</li>
                    <li className="logo basis-[15%] py-2 sm:py-0"><img src={jads} alt="" className='rounded-full w-20' /></li>
                    <li className="position text-xl sm:text-2xl font-bold basis-[30%] sm:text-left text-center py-2 sm:py-0">Front End Developer <br /><span className='text-yellow-200 font-normal text-xl sm:text-left text-center'>JADS
                        <span> (Dubai UAE)</span></span></li>
                    <li className="link text-md sm:text-xl font-bold py-2 sm:py-0"><a href="#" className='flex justify-center items-center gap-5 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Go to website</a></li>
                </ul>
            </div>
            <div className='bg-[#282828] p-5 rounded-xl hover:border border-amber-50/20 mb-8 m-3'>
                <ul className='sm:flex place-items-center justify-between items-center px-0 sm:px-10'>
                    <li className="date text-xl sm:text-2xl font-bold basis-[20%] py-2 sm:py-0">2021 - 2022</li>
                    <li className="logo basis-[15%] py-2 sm:py-0"><img src={quicknel} alt="" className='rounded-full w-20' /></li>
                    <li className="position text-xl sm:text-2xl font-bold basis-[30%] sm:text-left text-center py-2 sm:py-0"> Front End Developer <br /><span className='text-yellow-200 font-normal text-xl sm:text-left text-center'>Quickensol IT Solutions LLP
                        <span> (Nagpur India)</span></span></li>
                    <li className="link text-md sm:text-xl font-bold py-2 sm:py-0"><a href="#" className='flex justify-center items-center gap-5 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Go to website</a></li>
                </ul>
            </div>
            <div className='bg-[#282828] p-5 rounded-xl hover:border border-amber-50/20 mb-8 m-3'>
                <ul className='sm:flex place-items-center justify-between items-center px-0 sm:px-10'>
                    <li className="date text-xl sm:text-2xl font-bold basis-[20%] py-2 sm:py-0">2021 - 2021</li>
                    <li className="logo basis-[15%] py-2 sm:py-0"><img src={egreeb} alt="" className='rounded-full w-20' /></li>
                    <li className="position text-xl sm:text-2xl font-bold basis-[30%] sm:text-left text-center py-2 sm:py-0"> Partner & Web/Business Developer<br /><span className='text-yellow-200 font-normal text-xl sm:text-left text-center'>Egreeb PSP Provider
                        <span> (Nagpur India)</span></span></li>
                    <li className="link text-md sm:text-xl font-bold py-2 sm:py-0"><a href="#" className='flex justify-center items-center gap-5 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Go to website</a></li>
                </ul>
            </div>
            <div className='bg-[#282828] p-5 rounded-xl hover:border border-amber-50/20 mb-8 m-3'>
                <ul className='sm:flex place-items-center justify-between items-center px-0 sm:px-10'>
                    <li className="date text-xl sm:text-2xl font-bold basis-[20%] py-2 sm:py-0">2020 - 2021</li>
                    <li className="logo basis-[15%] py-2 sm:py-0"><img src={gxcpl} alt="" className='rounded-full w-20' /></li>
                    <li className="position text-xl sm:text-2xl font-bold basis-[30%] sm:text-left text-center py-2 sm:py-0"> MIS Executive Team Leader <br /><span className='text-yellow-200 font-normal text-xl sm:text-left text-center'>GenXCoders Pvt Ltd
                        <span> (Nagpur India)</span></span></li>
                    <li className="link text-md sm:text-xl font-bold py-2 sm:py-0"><a href="#" className='flex justify-center items-center gap-5 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Go to website</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Myexperience