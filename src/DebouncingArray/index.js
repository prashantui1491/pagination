import React, {useState, useEffect} from "react"

import {debounce} from "lodash"

const DebounceArraylist = () => {

    const [inputText, setInputtext] = useState("")
    const [result, setResult] = useState([])


  const items = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
      ];

    useEffect(()=>{
        setResult(items)
    },[])

    const debouncefunction = (handleSearch, delay) => {

        let timer;

        return(arg) => {
            clearInterval(timer)
            timer = setTimeout(()=>handleSearch(arg), delay)
        }
    }

    const handleSearch = (inputText) =>{

        // dispatchEvent(searchApi({
        //     querry: inputText
        // }))
        const filterItems = items.filter((item)=> item.toLowerCase().includes(inputText.toLowerCase()))
        setResult(filterItems)
    }

    const deboucning = debouncefunction(handleSearch, 2000)


    const handleInputChange = (e) =>{
        const value = e.target.value
        setInputtext(value)
        deboucning(value)
    }

   

    return(
        <div>
            <input type = "text" value={inputText} placeholder="Search item...." onChange = {handleInputChange}/>
            <br/>
            <ul>
                {
                    result.length> 0 ?

                    result.map((item)=>{
                        return(
                            <li>{item}</li>
                        )
                    }) : <p>No Data Found</p>
                }
            </ul>
        </div>
    )
}

export default DebounceArraylist