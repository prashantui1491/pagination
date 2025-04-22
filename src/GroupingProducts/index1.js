import React, { useState } from "react";

const Filtertabs = () => {

    const items = [
        {
            name: 'Prada',
            category: 'Bags',
        },
        {
            name: 'Gucci',
            category: 'Bags',
        },
        {
            name: 'Guess',
            category: 'Bags',
        },
        {
            name: 'Rolex',
            category: 'Watches',
        },
        {
            name: 'Timex',
            category: 'Watches',
        },
        {
            name: 'Nike',
            category: 'Sports',
        },
        {
            name: 'Adidas',
            category: 'Sports',
        },
        {
            name: 'Fila',
            category: 'Sports',
        },
        {
            name: 'Ray Ban',
            category: 'Sunglasses',
        },
        {
            name: 'Aldo',
            category: 'Sunglasses',
        },
        {
            name: 'Polaroid',
            category: 'Sunglasses',
        },
    ];

    const uniqCategory = ["All",...new Set(items.map((item) => item.category))]



    const [selectedCategory, setSelectedcategory] = useState([])

    const handleClick = (category) => {

        if(category === "All"){
            setSelectedcategory(["All"])
        }

        else {
          
            const updatedCategory = selectedCategory.includes(category) ? selectedCategory.filter((item) => item !== category) : [...selectedCategory.filter((item)=> item !== "All"), category]
            setSelectedcategory(updatedCategory)
        
    }
    }

    console.log(selectedCategory, "selectedCategory")

    const filteredItems = selectedCategory.includes("All") ? items :  items.filter((item) => selectedCategory.includes(item.category))

    return (
        <div>
            <h4>Items list</h4>

            <div style={{ display: "flex", gap: "20px" }}>
                {
                    uniqCategory.map((item, index) => <button style={{backgroundColor: selectedCategory.includes(item) ? "green" : ""}} key={index} onClick={() => handleClick(item)}>{item}</button>)
                }

                <button onClick={()=>setSelectedcategory([])} style={{backgroundColor: "red"}}>Reset</button>
            </div>

            <ul>
                {
                    filteredItems.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Filtertabs