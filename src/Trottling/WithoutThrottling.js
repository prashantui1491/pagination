// `Throttling in React JS
// Throttling is a technique used to limit the number of times a function is executed within a given time frame. 
// It ensures that even if an event is triggered multiple times in a short period, the function executes at most once within the defined interval`

import React, {useState, useEffect} from 'react'

const WithoutThrottling = () => {
    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(window.scrollY);
        console.log("Scroll position updated", window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll )
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <h1>Scroll poision : {scrollPos}</h1>
    )
}

export default WithoutThrottling
