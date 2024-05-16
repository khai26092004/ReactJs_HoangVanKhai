import React, { useContext } from 'react'
import { ThemeContext } from './HvkUseConText'

export default function HvkUseConText2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={`${theme} m-3`}>
        <h2>HvkUseConText2</h2>
         <p>
            <b>2210900109</b>
            <b>Hoàng Văn Khải </b>
            <i>K22cnt4</i>
         </p>
    </div>
  )
}
