import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContex'

const button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    
    const changeTheme = () => {
        // console.log('changeTheme');
        setTheme( "dark" )
    }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default button