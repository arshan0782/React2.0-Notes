import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContex'

const Nav2 = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)
    // console.log(theme, setTheme);
  return (
    <div className='Nav2'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/services"></a>
        <h4>{theme}</h4>
        
    </div>
  )
}

export default Nav2