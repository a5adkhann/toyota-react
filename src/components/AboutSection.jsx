import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { ThemeContext } from './ThemeContext';

const AboutSection = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
        <div className="about-section flex md:flex-row flex-col md:px-20 px-8 py-14 gap-10 items-center justify-center">


            <Fade className={`${theme == "light" ? "text-gray-900" : "text-white"} about-text md:w-[50%] text-gray-900`} direction='left' triggerOnce>
            <div className={``}>
                <p className='font-bold text-2xl'>Our Story</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                <p>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            </div>
            </Fade>

            <Fade className="about-img md:w-[50%]" direction='right' triggerOnce>
            <div>
                <img src="./about.jpg" alt="" />
            </div>
            </Fade>

        </div>
    </>
  )
}

export default AboutSection
