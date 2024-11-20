import React, { useState, useEffect } from "react";

const Debouncing = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);

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

  // Custom debounce function
  const debounce = (handleSearchFun, delay) => {
    let timer;
    return (arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearchFun(arg), delay);
    };
  };

  const handleSearch = (inputText) => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(inputText.toLowerCase())
    );
    setResult(filteredItems);
  };

  const debouncing = debounce(handleSearch, 2000);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    debouncing(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Search items..."
      />

      <p>List of Items</p>
      <ul>
        {result.length > 0 ? (
          result.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Debouncing;
