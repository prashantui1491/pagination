import React, { useState, useEffect } from "react";

const FetchBounce = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network call problem");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.data);
        setResult(json.data); // Initialize result with full data
      })
      .catch((error) => console.log("Error found", error));
  }, []);

  // Debounce function
  const debounceFunction = (handleSearch, delay) => {
    let timer;
    return (arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(arg), delay);
    };
  };

  // Search logic: Filter based on Year or Population
  const handleSearch = (searchTerm) => {
    const filteredData =
      data &&
      data.filter(
        (item) =>
          item.Year.includes(searchTerm) || // Check if Year matches
          item.Population.toString().includes(searchTerm) // Check if Population matches
      );
    setResult(filteredData);
  };

  // Debounced search function
  const debouncedSearch = debounceFunction(handleSearch, 500);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value); // Update the search state
    debouncedSearch(value); // Call the debounced function
  };

  return (
    <div>
      <h2>Search with Debounce</h2>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search Year or Population"
      />

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => (
              <tr key={index}>
                <td>{item.Year}</td>
                <td>{item.Population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchBounce;
