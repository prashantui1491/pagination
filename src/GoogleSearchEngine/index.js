import React, { useState, useEffect } from "react";
import './index.css'

const Dummy_URL = "https://dummyjson.com/recipes/search?q=";

const AutoSearch = () => {

    const [result, setResult] = useState([])
    const [inputText, setInputText] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [cache, setCache] = useState({})

    const [highliteIndex, setHighlightIndex] = useState(-1)

    const fetchData = async () => {

        if(cache[inputText]){
            console.log("cach", inputText)
            setResult(cache[inputText])
            return
        }

        console.log("APicall", inputText)
        const data = await fetch(Dummy_URL + inputText)

        const json = await data.json()

        setResult(json?.recipes)
        setCache(prevState=>({...prevState, [inputText]: json?.recipes }))
    }

    useEffect(() => {

        const timer = setTimeout(fetchData, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [inputText])

    const handleKeydown = (e) => {

        if(e.key === "ArrowDown"){
            setHighlightIndex((prevState)=> (prevState+1 ) % result.length) 
        }

        if(e.key === "ArrowUp"){
            setHighlightIndex((prevState)=>(prevState <=0 ? result.length -1 : prevState-1))
        }
    }


    return (
        <div>
            <input type="text"
                className="input-field"
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                    if(e.target.value.trim()){
                        setShowResult(true)
                    }
                    else{
                        setShowResult(false)
                    }

                } }
                onFocus={() => {
                    if(inputText.trim()) setShowResult(true)

                } }
                onBlur={() => setShowResult(false)}
                onKeyDown={handleKeydown}
                
                />
            {showResult && <div className="result-container">

                {
                    result.length>0 ? result.map((r, index) => (

                        <span className= {`result ${highliteIndex === index ? "highlithe" : ""}`} key={r.id}>{r.name}</span>

                    )) : <span>No Result found</span>
                }

            </div>}
        </div>
    )
}

export default AutoSearch