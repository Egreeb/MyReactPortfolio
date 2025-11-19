import React from 'react'
import mob from '../assets/mob.svg'
import dev from '../assets/dev.svg'
import dep from '../assets/dep.svg'
const Services = () => {
  return (
    <>
    <div className='bg-linear-to-l from-black/10 to-yellow-500/15 pb-15 sm:pb-35'>
        <div className='max-w-7xl mx-auto'><br /><br /><br /><br />
            <div className=''>
                <h1 className='font-bold text-4xl sm:text-5xl mb-5 text-center'>Popular Services</h1>
                <p className='text-xl text-center p-2'>Delivering essential web solutions designed to enhance performance, <br />usability, and reliability for your projects.</p>
            </div>
            <div className='buttons flex justify-center gap-10 mt-5 sm:mt-15 mb-5 sm:mb-15'>
                <button type='button' className=' hidden md:block bg-slate-600/40 text-xl px-10 py-4 cursor-pointer hover:bg-green-600 font-semibold rounded-full'>Development</button>
                <button type='button' className=' hidden md:block border border-white/50 text-yellow-200 text-xl px-15 py-4 cursor-pointer hover:bg-green-600 font-semibold rounded-full'>Design</button>
                <button type='button' className=' hidden md:block bg-slate-600/40 text-xl px-10 py-4 cursor-pointer hover:bg-green-600 font-semibold rounded-full'>Depolyment</button>
            </div>
            <div className='grid md:grid-cols-3 gap-8 sm:p-0 p-3'>
                <div className='group bg-[#232221] h-110 rounded-2xl border border-white/20 p-5 sm:p-10 flex flex-col justify-center items-center text-center'>
                    <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                        <img src={dev} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl mb-5'>Development</h2>
                    <p className='text-lg text-white/80 mb-5'>Crafting fast, modern, and scalable web applications using the latest technologies to turn your ideas into powerful digital products.</p>
                    <a href="#" className='font-bold flex justify-center gap-4 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Read More</a>
                </div>
                <div className='group bg-[#232221] h-110 rounded-2xl border border-white/20 p-5 sm:p-10 flex flex-col justify-center items-center text-center'>
                    <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                        <img src={mob} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl mb-5'>Responsive Design</h2>
                    <p className='text-lg text-white/80 mb-5'>Creating layouts that adapt perfectly to all devices—mobile, tablet, and desktop—ensuring a seamless user experience everywhere.</p>
                    <a href="#" className='font-bold flex justify-center gap-4 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Read More</a>
                </div>
                <div className='group bg-[#232221] h-110 rounded-2xl border border-white/20 p-5 sm:p-10 flex flex-col justify-center items-center text-center'>
                    <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                        <img src={dep} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl mb-5'>Deployment</h2>
                    <p className='text-lg text-white/80 mb-5'>End-to-end deployment support, from optimizing builds to launching your website or app on secure and reliable hosting platforms.</p>
                    <a href="#" className='font-bold flex justify-center gap-4 hover:text-yellow-200 hover:gap-2 transition-all duration-500'> <span className="material-symbols-outlined">arrow_right_alt</span> Read More</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Services