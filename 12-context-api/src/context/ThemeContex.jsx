import React, { createContext } from 'react'


export const ThemeDataContext = createContext()

const ThemeContex = (props) => {
    const [theme, setTheme] = React.useState("light");
  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {props.children}

        </ThemeDataContext.Provider>
        
    </div>
  )
}

export default ThemeContex