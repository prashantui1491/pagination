import React, {useState, createContext} from "react"

const Themecontext = createContext();

const Themeprovider = ({children}) => {

    const [theme, setTheme] = useState("light")

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Themecontext.Provider value={{theme, handleClick}}>
            {children}
        </Themecontext.Provider>
    )
}

export {Themecontext, Themeprovider}