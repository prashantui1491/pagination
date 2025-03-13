import React, {useMemo, useState} from 'react'

const useFilter = (items) => {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")

    const filteredItems = useMemo(()=>{
        return items.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) && category === "" || item.category === category)
    },[items, search, category])

    return {search, setSearch, category, setCategory, filteredItems}
}

export default useFilter