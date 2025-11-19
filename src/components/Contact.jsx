import React from 'react'
import profile from '../assets/profile.jpg'
import pin from '../assets/pin.svg'
import call from '../assets/call.svg'
import mail from '../assets/mail.svg'
import axios from 'axios'
import { useState } from 'react'

const Contact = () => {

    const [success, setSuccess] = useState(false)
    const [loader, setloader] = useState(false)

    console.log(success)
    const [formData, setFormData] = useState({
        fullname:"",
        email:"",
        message:"",
        number:"",
        subject:"",
    })
    // console.log(formData)

    const handlechange =(e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setloader(true)
        try {
            const res = await axios.post('https://react-portfolio-jbod.onrender.com/',formData)
            if(res.data.success){
                setFormData({
                    fullname: "",
                    email: "",
                    message: "",
                    number:"",
                    subject:"",                    
                });
                setSuccess(!success)
            }

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <div className='bg-linear-to-l from-black/10 to-green-800/20'>
        <div className='max-w-7xl mx-auto pb-20 px-2 sm:px-0'><br /><br /><br /><br />
            <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-6">Contact Me</h2>
            <p className='text-xl text-center mb-10'>Let’s connect! Whether you need development support <br /> or have questions, I’m just a message away.</p>
            <div className="max-w-6xl mx-auto p-3 sm:p-6 shadow-lg border border-amber-50/10 rounded-xl ">
                <div className='grid md:grid-cols-3 gap-8 mb-20'>
                    <div className='group bg-[#222121] p-10 flex flex-col justify-center items-center text-center box_shadhow'>
                        <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                            <img src={pin} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl mb-5 hover:text-green-600 transition-all duration-500'>Address</h2>
                        <p className='text-lg text-white/80 mb-5 hover:text-green-600 transition-all duration-500'>Al Jafiliya 29 Street <br /> Dubai United Arab Emirates</p>
                    </div>
                    <div className='group bg-[#222121]  p-10 flex flex-col justify-center items-center text-center box_shadhow'>
                        <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                            <img src={mail} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl mb-5 hover:text-green-600 transition-all duration-500'>Email Us</h2>
                        <p className='text-lg text-white/80 mb-5 hover:text-green-600 transition-all duration-500'>gajjudube4@gmail.com <br />gajendradube123@gmail.com</p>
                    </div>
                    <div className='group bg-[#222121]  p-10 flex flex-col justify-center items-center text-center box_shadhow'>
                        <div className='w-30 h-30 rounded-full bg-slate-100/10 mb-5 flex items-center group-hover:bg-green-400 justify-center transition-all duration-500'>
                            <img src={call} alt="" />
                        </div>
                        <h2 className='font-bold text-2xl mb-5 hover:text-green-600 transition-all duration-500'>Call Now</h2>
                        <p className='text-lg text-white/80 mb-5 hover:text-green-600 transition-all duration-500'>+971 54 7241907 <br /> +91 7218932134</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">Full Name</label>
                        <input
                            type="text"
                            name='fullname'
                            value={formData.fullname}
                            onChange={handlechange}
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white 
            focus:border-green-500 focus:ring-1 focus:ring-green-700 outline-none h-12"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">Email Address</label>
                        <input
                            name='email'
                            onChange={handlechange}     
                            value={formData.email}                  
                            type="email"
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white
            focus:border-green-500 focus:ring-1 focus:ring-green-700 outline-none h-12"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">Phone Number</label>
                        <input
                            type="number"
                            name='number'
                            onChange={handlechange}
                            value={formData.number}
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white
            focus:border-green-500 focus:ring-1 focus:ring-green-700 outline-none h-12"
                            placeholder="Enter your phone"
                            required
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">Subject</label>
                        <input
                            type="text"
                            name='subject'
                            onChange={handlechange}
                            value={formData.subject}
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white
            focus:border-green-500 focus:ring-1 focus:ring-green-700 outline-none h-12"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    {/* Message - full width */}
                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-white mb-1 font-medium">Message</label>
                        <textarea
                            name='message'
                            onChange={handlechange}                          
                            value={formData.message}
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white h-42
            focus:border-green-500 focus:ring-1 focus:ring-green-700 outline-none"
                            placeholder="Write your message..."
                            required
                        />
                    </div>
                    {/* Button - full width */}
                    <div className="md:col-span-2">
                        {success ?  
                        <>
                        <h1 className='text-center bg-green-600 p-2'>🎉 Your Form Has Been Submited</h1>
                        </>
                        :
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg cursor-pointer
            transition-all duration-200"
                        >
                            {loader ? 
                            <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Please wait...
                            </>
                            : 'Send Message'
                            }
                        </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
