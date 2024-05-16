import React, { createContext, useContext, useState } from 'react'
import HvkUseContext1 from './HvkUseContext1';
export const ThemeContext = createContext();
export default function HvkUseConText() {
    // state
    const [theme,settheme] = useState('red');
 // hàm thay đổi theme
 const hvkHandlechange = ()=>{
    settheme(theme==='red'?'blue':'red');
 }
  return (
    <ThemeContext.Provider value= {theme}>
    <div className='alert'>
        <h2>demo Usecontext</h2>
        <HvkUseContext1/>
        <button onClick={hvkHandlechange}>Change color</button>
    </div>
    </ThemeContext.Provider>
  )
}
