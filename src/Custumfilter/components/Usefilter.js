import React, {useMemo, useState} from "react";

const Usefilter = (items) => {

    const [searchItem, setSearchItem] = useState("")
    const [category, setCategory] = useState("")

    const filterdItems = useMemo(()=>{
        return items.filter((item)=> item.name.toLowerCase().includes(searchItem.toLowerCase()) && (!category || item.category === category))
       
    },[items])

    console.log(filterdItems, "inuse")

    return {searchItem, setSearchItem, filterdItems, category, setCategory}
}

export default Usefilter