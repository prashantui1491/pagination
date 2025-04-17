import React from "react";
import Usefilter from "./Usefilter";

const FilterCompo = () => {

    const items = [
        {
            id: 1,
            name: "apple",
            category: "fruits"
        },
        {
            id: 2,
            name: "banana",
            category: "fruits"
        },
        {
            id: 3,
            name: "onion",
            category: "vegetables"
        },
        {
            id: 4,
            name: "potato",
            category: "vegetables"
        },
        {
            id: 1,
            name: "chicko",
            category: "fruits"
        },
        {
            id: 1,
            name: "mango",
            category: "fruits"
        }
    ]

    const uniqueCategory = [...new Set(items.map((item)=>item.category))]

    const {searchItem, setSearchItem, filterdItems, category, setCategory} = Usefilter(items)

    console.log(filterdItems, "filterdItems")

    return(
        <div>
            <input type="text" placeholder="Search item ..." value={searchItem} onChange={(e)=> {
                setSearchItem(e.target.value)

            }} />
            <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                <option >Select Category</option>
                {
                    uniqueCategory.map((item)=>(
                        <option >
                            {item}
                        </option>
                    ))
                }
            </select>
            <button onClick={()=>{
                setCategory("")
                setSearchItem("")
            }}>Reset filter</button>
            <h4>Items list</h4>

            <ul>
                {
                    filterdItems && filterdItems.map((item)=>(
                        <li>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterCompo