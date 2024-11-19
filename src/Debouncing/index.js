import React, {useState} from 'react'
// import {debounce} from "lodash"

const Debouncing = () =>{


    const [inputText, setInputText] = useState("")
    const [result, setResult] = useState("")

    //custom debounce function

    let debounce = (handleSearchFun, delay) =>{
        let timer;
        return (arg)=>{
        clearTimeout(timer)
        timer = setTimeout(()=>handleSearchFun(arg), delay )
        }
      }


    const handleSearch = (inputText) =>{
        setResult(inputText)
    }

    const debouncing = debounce(handleSearch, 2000)

    const handleInputChange = (e) =>{
        setInputText(e.target.value)
        debouncing(e.target.value)
    }

    return(
        <div>
            <input 
            type="text"
            value={inputText}
            onChange={handleInputChange}
            />

            <p>{result}</p>
        </div>
    )
}

export default Debouncing;
