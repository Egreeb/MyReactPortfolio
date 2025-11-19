import React, { useEffect, useState } from 'react'
import reactLogo from '../assets/logo.png'
import CV from '../assets/CV.pdf'
import { HiMenu, HiX } from 'react-icons/hi'; // or any hamburger / close icon


const Header = () => {
    const [isOpen, setisOpen] = useState(false)
      const [scrolled, setScrolled] = useState(false);

    
    const toggler = ()=>{
        setisOpen(!isOpen)
    }

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
    <div  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 no-aos ${
        scrolled ? "bg-slate-900 shadow-md" : "bg-transparent"
      }`}>
    <div className='header max-w-7xl mx-auto'>
        <nav className='w-full h-20 p-5 flex justify-between items-center'>
            <div>
                <img className='w-12' src={reactLogo} alt="" />
            </div>
            <div className='md:hidden absolute right-5'>
                <button onClick={toggler} 
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-transform duration-200 shadow-lg text-white"
                >
                    {isOpen ? <HiX className='w-6 h-6'/> : <HiMenu className='w-6 h-6'/>}
                </button>
            </div>
            <ul className='md:flex font-semibold hidden'>
                <li className="mx-8 py-5 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-all duration-300"><a href="#profile">Home</a></li>
                <li className='mx-8 py-5 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-all duration-300'><a href="#skills">My Skills</a></li>
                <li className='mx-8 py-5 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-all duration-300'><a href="#exp">My Experience</a></li>
                <li className='mx-8 py-5 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-all duration-300'><a href="#projects">My Projects</a></li>
                <li className='mx-8 py-5 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-all duration-300'><a href="#contact">Contact</a></li>
            </ul>
                {isOpen && (
                    <div className="fixed inset-0 z-40 flex">

                        {/* Background overlay */}
                        <div
                            className="flex-1 bg-black/50"
                            onClick={toggler}
                        ></div>

                        {/* Sidebar Panel (Right Side) */}
                        <div className="absolute left-0 top-0 h-full w-72 bg-slate-800 text-white font-semibold p-5 animate-slideLeft shadow-xl">

                            {/* Close Icon */}
                            <div className="flex justify-end mb-6">
                                <HiX
                                    className="w-7 h-7 cursor-pointer"
                                    onClick={toggler}
                                />
                            </div>

                            {/* Menu Items */}
                            <ul className="flex flex-col gap-5 text-lg">
                                <li><a href="#" onClick={toggler}>Home</a></li>
                                <li><a href="#skills" onClick={toggler}>My Skills</a></li>
                                <li><a href="#exp" onClick={toggler}>My Experience</a></li>
                                <li><a href="#projects" onClick={toggler}>My Projects</a></li>
                                <li><a href="#contact" onClick={toggler}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            <div>
                <a href={CV} download><button type='button' className='hidden md:block bg-green-500 px-8 py-3 cursor-pointer hover:bg-green-600 font-semibold rounded-3xl'>Resume</button></a>
            </div>
        </nav>
    </div>
    </div>
    </>
  )
}

export default Header
