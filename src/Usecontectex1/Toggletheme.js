import React, {useState, useContext} from "react"
import {Themecontext} from './Themeprovider'

const Toggletheme = () => {

    const {theme, handleClick} = useContext(Themecontext)

    return(
        <div
        
        style={{background: theme === "light" ? "white" : "green"}}>

            <p>Theme: {theme}</p>
            <button onClick={handleClick}>Click</button>

        </div>
    )
    
}

export default Toggletheme