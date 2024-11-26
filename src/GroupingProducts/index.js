import React, {useEffect, useState} from 'react'
import './index.css'


const GroupingProducts = () =>{

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

    const [selectedCategory, setSelectedcategory] = useState([])

    //console.log(allData, "allData")

    const uniqCategory = [... new Set(items && items.map((item)=> item.category))]

    //console.log(uniqCategory)

    const handlecategoryClick = (category) =>{
        if(selectedCategory.includes(category)){
            const updatedCategory = selectedCategory.filter((item)=>item !== category)
            console.log(updatedCategory, "updatedCategory")
            setSelectedcategory(updatedCategory)
        }
        else{
            setSelectedcategory([...selectedCategory, category])
        }
    }

    //console.log(selectedCategory, "selectedCategory")

    const filteredMultiPLeList = items.filter((item)=> selectedCategory.includes(item.category))

    console.log(filteredMultiPLeList, "filteredMultiPLeList")

    

    return(
        <div className='body-123'>
            <h2>Grouping Products by Category</h2>
            <div style={{display: "flex", gap: "100px"}}>
                {
                    uniqCategory.map((item)=>{
                        return(
                            <button style={{backgroundColor: selectedCategory.includes(item) ? "red" : '' }} onClick={()=>handlecategoryClick(item)}>{item}</button>
                        )
                    })
                }
            </div>

            {
                filteredMultiPLeList && filteredMultiPLeList.map((items)=>{
                    return (
                        <ul>

                            <li style={{listStyle: "none"}}>{items.name}</li>

                        </ul>
                    )
                })
            }
        </div>
    )
}

export default GroupingProducts