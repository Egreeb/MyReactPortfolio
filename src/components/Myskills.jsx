import React from 'react'
import CountUp from 'react-countup'
const Myskills = () => {
  return (
    <>
    <div className='bg-linear-to-r from-black/10 to-purple-500/20 pb-10 sm:pb-35'>
        <div className='max-w-7xl mx-auto'> <br /><br /><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                <div className='flex sm:block justify-center'>
                    <div className='relative w-90 h-110 rounded-xl bg-slate-800 text-center place-items-center bg-linear-to-t from-black/10 to-yellow-500/10'>
                        <div className='mt-20'>
                            <h1 className='sm:pt-17 font-bold text-9xl text-yellow-300'>05</h1>
                            <p className='font-semibold text-xl mt-5 mb-10'>Years of Experience</p>
                        </div>
                        <div className='sm:absolute bottom-5 -right-25 grid skill-box-2 w-70 h-22 rounded-xl bg-linear-to-l from-black/10 from-20% to-purple-500/80'>
                            <div className='grid-inner-2 flex items-center justify-center p-2'>
                                <h1 className='font-bold text-5xl text-green-400'>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        enableScrollSpy={true}
                                        duration={3.75}
                                    ></CountUp>%
                                </h1>
                                <p className='text-xl pl-3'>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='font-bold text-5xl mb-5 ml-2 sm:text-left text-center'>My Skills</h1>
                    <p className='text-xl ml-2 sm:text-left text-center'>I build fast and responsive web applications using React, JavaScript, and Tailwind CSS. I focus on clean code, reusable components, API integration, and delivering smooth, user-friendly interfaces optimized for all devices.</p>
                    <br />
                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 place-items-center'>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-yellow-200/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={97}
                                        enableScrollSpy={true}
                                        duration={3.15}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-yellow-200'>React JS</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-green-500/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={95}
                                        enableScrollSpy={true}
                                        duration={2.75}
                                    ></CountUp>%</h3>
                                <p className='font-semi-bold text-xl text-green-500'>Node JS</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-purple-500/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={95}
                                        enableScrollSpy={true}
                                        duration={1.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-purple-500'>Express JS</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-green-500/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={95}
                                        enableScrollSpy={true}
                                        duration={4.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-green-500'>MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 place-items-center'>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-blue-700/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={90}
                                        enableScrollSpy={true}
                                        duration={4.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-blue-700'>Ionic</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-sky-400/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={98}
                                        enableScrollSpy={true}
                                        duration={5.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-sky-400'>Tailwind CSS</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-pink-500/80">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={98}
                                        enableScrollSpy={true}
                                        duration={2.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-pink-500'>Bootstrap</p>
                            </div>
                        </div>
                        <div className="grid skill-box h-35 w-35 bg-linear-to-t from-black/10 from-20% to-white">
                            <div className="grid-inner flex flex-col justify-center">
                                <h3 className='font-bold text-4xl mb-2'>
                                    <CountUp
                                        start={0}
                                        end={85}
                                        enableScrollSpy={true}
                                        duration={5.75}
                                    ></CountUp>%
                                    </h3>
                                <p className='font-semi-bold text-xl text-white'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Myskills