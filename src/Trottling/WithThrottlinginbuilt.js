import React, {useEffect, useState} from 'react'
import {throttle} from 'lodash'

const WithThrottlinginbuilt = () => {
    const [scrollPos, setScrollPos] = useState(0)

    const handleThrottle = throttle(()=>{
        setScrollPos(window.scrollY)
        console.log("scrolldelay", window.scrollY)
    }, 1000)

    useEffect(()=>{
        window.addEventListener("scroll", handleThrottle)
        return ()=>window.removeEventListener("scroll", handleThrottle)
    },[])

    return (<h2>Scroll delay: {scrollPos}</h2>)
}

export default WithThrottlinginbuilt