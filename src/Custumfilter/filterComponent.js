import React from "react";
import useFilter from "./useFilter";

const items = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Almond", category: "Nuts" },
  ];

const FilterComponent = () => {
    const {search, setSearch, category, setCategory, filteredItems} = useFilter(items)

    const uniqueCategory = [...new Set(items.map((item)=> item.category))]

    console.log(uniqueCategory, "category")

    return(

        <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <select onChange={(e)=>setCategory(e.target.value)}>
            <option>Select category</option>
            {
                uniqueCategory.map((item)=>(
                    <option>{item}</option>
                ))
            }
        </select>
        <ul>
            {

                filteredItems.length > 0 ? 
                filteredItems.map((item)=>(
                    <li>{item.name} - {item.category}</li>
                )) : <p>No data found</p>
            }
        </ul>
        </div>
    )
}

export default FilterComponent