import React, { useContext } from 'react'
import { LuMapPinMinus } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from './ThemeContext';

const ContactForm = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <>
            <div className='contact-section md:gap-0 gap-10 grid md:grid-cols-2 grid-cols-1 py-20 mb-10 mt-10 items-center border text-gray-800 border-gray-300 w-[90%] mx-auto'>

                <Fade className={` ${theme == "light" ? "text-gray-900" : "text-white"} form-section md:px-20 px-10`} direction='left' triggerOnce>
                <div>
                    <p className='font-bold text-2xl text-center mb-4'>Send Us A Message</p>
                    <form>
                        <input className='w-[100%] focus:border-slate-900 outline-none p-3 border border-gray-300 mb-8' type="text" placeholder='Your Email Address' />

                        <textarea className='w-[100%] focus:border-slate-900 outline-none  p-3 h-36 border border-gray-300 mb-8' placeholder='How Can We Help?'></textarea>

                        <button className='w-[100%] bg-[#333] py-2 text-white rounded-full'>Submit</button>
                    </form>
                </div>
                </Fade>

                <Fade className={` ${theme == "light" ? "text-gray-900" : "text-white"}  address-section leading-6 md:px-20 px-10`} direction='right' triggerOnce>
                <div>
                    <div>
                        <p className='font-bold flex gap-3 items-center text-xl'><LuMapPinMinus />  <span>Address</span></p>
                        <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                    </div>
                    <div className='mt-8'>
                        <p className='font-bold flex gap-3 items-center text-xl'><CiPhone /> <span>Lets Talk</span></p>
                        <p>+1 800 1236879</p>
                    </div>
                    <div className='mt-8'>
                        <p className='font-bold flex gap-3 items-center text-xl'><MdOutlineEmail /> <span>Sale Support</span></p>
                        <p>contact@example.com</p>
                    </div>
                </div>
                </Fade>
            </div>
        </>
    )
}

export default ContactForm
