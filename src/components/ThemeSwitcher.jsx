import React, { useContext } from 'react'
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from './ThemeContext';
import { MdBrightness5 } from "react-icons/md";

const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme("dark");
    if(theme == "dark"){
      setTheme("light");
    }
    else {
      setTheme("dark");
    }
  }
  return (
    <div>
      {theme == "light" ?
        <FaMoon className='text-lg cursor-pointer' onClick={handleTheme}/>
      :
        <MdBrightness5 className='text-lg cursor-pointer' onClick={handleTheme}/>
      }
    </div>
  )
}

export default ThemeSwitcher