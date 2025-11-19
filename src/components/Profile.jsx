import React from 'react'
import {ReactTyped } from 'react-typed'
import profile from '../assets/profile.jpg'


const Profile = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto flex justify-start items-center h-180 mt-10 sm:mt-20 mb-20 sm:mb-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            <div className='text-center sm:text-left'>
                <br />
                <h1 className='text-4xl sm:text-5xl p-3 font-bold text-yellow-300'>Hello,</h1>
                <h1 className='text-2xl p-3 font-bold sm:text-6xl'>I Am <ReactTyped  strings={["Gajendra Dube."]} typeSpeed={60} backSpeed={40} /> </h1>
                <p className='text-3xl p-3 font-semibold text-green-500'><ReactTyped  strings={["MERN Stack Developer"]} typeSpeed={80} backSpeed={40}  /></p>
                <p className='text-xl p-3 mb-2'>My goal is to continue improving as a full-stack developer creating responsive, efficient, and visually appealing web applications that solve real-world problems.</p>
                <button type='button' className='hidden md:block ml-2 bg-green-500 px-10 py-3 cursor-pointer hover:bg-green-600 font-semibold rounded-3xl'>Hire Me</button>
            </div>
            <div className='flex justify-center'>
                <div className='w-90 h-90 rounded-full sm:w-130 sm:h-130 p-2 sm:p-0'>
                    <img src={profile} alt="" className='rounded-full border-2 border-white' />
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Profile