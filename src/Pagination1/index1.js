import React, {useState} from "react";


const getRecordsdata = () => [...Array(50)].map((_,i)=>({id: i+1, name: `Item ${i+1}`}))

const Paginationtest1 = () => {

    const data = getRecordsdata()
    const recordsPerPage = 10

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(data.length / recordsPerPage)

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord  = indexOfLastRecord - recordsPerPage

    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

    console.log(currentRecords, "currentRecords")

    const nextPage = () => {
        if(currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage >1) setCurrentPage(currentPage - 1)
    }


    return(
        <div>

            <h2>Pagination test</h2>

            <ul>
                {
                    currentRecords.map((item)=>(
                        <li>{item.name}</li>
                    ))
                }
            </ul>

            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Pages {currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled = {currentPage === totalPages}>Next</button>
            </div>

        </div>
    )
}

export default Paginationtest1