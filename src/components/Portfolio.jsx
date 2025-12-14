import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Project } from '../array/myproject.js'
import project from '../assets/project.svg'
const Portfolio = () => {
  return (
    <>
    <div className='pb-20 bg-linear-to-l from-black/10 to-yellow-500/15'>
        <div className='max-w-7xl mx-auto px-2 sm:px-0'><br /><br /><br /><br />
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className='text-center sm:text-left'>
                    <h1 className='font-bold text-4xl sm:text-5xl mb-5'>Recent Work</h1>
                    <p className='text-xl'>A collection of recently completed projects that highlight <br /> my skills, creativity, and problem-solving approach.</p>
                </div>
                <div className='flex flex-cols justify-center sm:justify-end items-center mt-5 sm:mt-0'>
                    <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center hover:bg-green-400 justify-center transition-all duration-500'>
                        <img src={project} alt="" />
                    </div>
                </div>
            </div>
            {/* SWIPER */}
            <div className='myswiper mt-8 sm:mt-20'>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                      breakpoints={{
                          // Mobile
                          0: {
                              navigation: false,
                              pagination: { clickable: true }, // ✅ show bullets
                              slidesPerView: 1,
                              spaceBetween: 10,
                          },
                          // Tablets
                          640: {
                              pagination: false,   // ❌ hide bullets
                              slidesPerView: 2,
                              spaceBetween: 20,
                          },
                          // Desktop
                          1024: {
                              pagination: false,   // ❌ hide bullets
                              slidesPerView: 3,
                              spaceBetween: 30,
                          },
                      }}
                    className='mySwiper_Slides'
                >
                    {Project.map((data) =>
                        <>
                            <SwiperSlide key={data.id} className='shadow-sm shadow-white/10 mb-20'>
                            <a href={`${data.link}`}>
                                <div className='contain cursor-pointer'>
                                    <div className='img relative overflow-hidden'>
                                        <img src={data.project_img} alt="" className='transform scale-100 hover:scale-110 transition-transform duration-200 w-[100%]' />
                                    </div>
                                    <div className='matter mt-8'>
                                        <h1 className='text-2xl font-bold leading-[1.5] cursor-pointer hover:text-green-600 transition-all duration-500'>{data.project_title}</h1>
                                        <p className='mt-2 text-slate-300 pb-4'>{data.sub_title}</p>
                                    </div>
                                </div>
                            </a>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
            </div>
            {/* SWIPER */}
        </div>
    </div>
    </>
  )
}

export default Portfolio
