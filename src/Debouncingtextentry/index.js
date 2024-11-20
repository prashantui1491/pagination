import React, {useState, useEffect} from "react"

const Debouncing1 = ()=>{

    const [inputText, setInputText] = useState("")
    const [result, setResult] = useState("")

    const debounceFunction = (hanldeSearch, delay) => {

        let timer;
        return (arg) =>{
            clearInterval()
            timer = setTimeout(()=>hanldeSearch(arg), delay)
        }
    }

    const handleSearch = (inputText) =>{
        setResult(inputText)
    }

    const debounce = debounceFunction(handleSearch, 2000)



    const handleSearchInputChange = (e) => {
        const value = e.target.value
        setInputText(value)
        debounce(value)
    }

    console.log(result)
    return(
        <div>
            <input type="text" placeholder="Search here..." value={inputText} onChange = {handleSearchInputChange}/>
            <br/>
            <span>Result: {result}</span>
        </div>
    )
}

export default Debouncing1