import React, { useState } from "react";

//const generateDummyData = () => [...Array(50)].map((_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

const generateDummyData = () => [...Array(50)].map((_,i)=>({id: i+1, name: `Name - ${i+1}`}))

const PaginatedList = () => {
  const data = generateDummyData();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(data.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  console.log(totalPages, indexOfLastRecord, indexOfFirstRecord, currentRecords)

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Paginated List</h2>
      <ul>
        {currentRecords.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
