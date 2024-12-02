import React, { useState } from 'react'

const GenerateTable = () => {

    const [inputValue, setInputValue] = useState("")
    const [tableData, setTableData] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleButtonClick = () => {
        const [rows, cols] = inputValue.split(",").map(Number)
        const generatedTable = []

        for (let i = 0; i < rows; i++) {
            const row = []
            for (let j = 0; j < cols; j++) {
                row.push(`Row${i + 1} - Cols ${j + 1}`)
            }
            generatedTable.push(row)
        }

        setTableData(generatedTable)
    }

    return (
        <div>
            <h2>Table Genaration</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter row and commng ie 2,3 format' />
            <button onClick={handleButtonClick}>Click</button>

            <div style={{ marginTop: "20px" }}>
                <table border="1">
                    <tbody>
                        {tableData.map((row, rowIndexindex) => (
                            <tr key={rowIndexindex}>
                                {
                                    row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GenerateTable


