import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer w-full bg-slate-950 p-5'>
        <div className='max-w-7xl mx-auto'>
            <div className='contain text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold pb-5'>React Developer</h1>
                <p className='text-lg'>
                Crafted with React and passion by <span className='text-red-500'> Gajendra Dube. </span>  
                Built with modern technologies including React, JavaScript, <br />
                and responsive design principles. 
                Let's connect and create something amazing together!
                </p><br />
            </div>
            <div className='fonts text-center'>
                <ul className='flex justify-center items-center mb-2'>
                    <a href='https://www.facebook.com/share/1AwejfUoBQ/?mibextid=wwXIfr' target="_blank"   className="text-black group hover:text-white"><li className='bg-white hover:bg-green-600 w-10 h-10 place-items-center flex justify-center  rounded-full m-2 transition-all duration-200'><i className="fa fa-facebook"></i></li></a>
                    <a href='https://github.com/Egreeb/Opinion_Matters_Ecommers' className=" text-black hover:text-white"><li className='bg-white group hover:bg-green-600 w-10 h-10 place-items-center flex justify-center  rounded-full m-2 transition-all duration-200'><i className="fa fa-github"></i></li></a>
                    <a href='https://www.linkedin.com/in/gajendra-dube-6b5143198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className=" text-black hover:text-white"><li className='bg-white group hover:bg-green-600 w-10 h-10 place-items-center flex justify-center  rounded-full m-2 transition-all duration-200'><i className="fa fa-linkedin"></i></li></a>
                    <a href='https://egreeb.github.io/portfolio/' className=" text-black hover:text-white"><li className='bg-white group hover:bg-green-600 w-10 h-10 place-items-center flex justify-center  rounded-full m-2 transition-all duration-200'><i className="fa fa-suitcase"></i></li></a>
                </ul>
                <p className='text-sm'>  &copy; {new Date().getFullYear()} All rights reserved by Gajendra Dube</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer