import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <div className={`footer-container ${theme == "light" ? "bg-slate-900" : "bg-[#212121]"} place-items-center text-white grid md:grid-cols-3 grid-cols-1 md:px-14 px-10 py-14 md:gap-0 gap-20`}>
        <div className='section-1'>
          <div className='footer-logo-img'>
            <img src="./footer-logo.svg" width={300} alt="" />
          </div>
          <div className='footer-text'>
            <p>
              10Pearls is an award-winning digital development company, helping businesses with product design, development, and technology acceleration.
            </p>
          </div>
        </div>
        <div className='section-2 flex md:gap-10 gap-32'>
            <div>
              <p>Company</p>
              <p>Services</p>
              <p>Industries</p>
            </div>
            <div>
              <p>Insights</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
        </div>
        <div className='section-3 flex gap-10'>
          <div>
            <p>United States</p>
            <p>Costa Rica</p>
            <p>Colombia</p>
          </div>
          <div>
            <p>United Kingdom</p>
            <p>Peru</p>
            <p>Pakistan</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
