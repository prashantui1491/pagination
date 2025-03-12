import React, { useState } from 'react';

const Card = () => {
  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at 
  mauris nunc. Fusce convallis, ligula eu tincidunt feugiat, turpis justo 
  condimentum quam, ut posuere lectus turpis sed erat. Aenean fermentum 
  urna nec semper gravida. Vivamus laoreet est id magna tempus, ac 
  vestibulum ipsum hendrerit. Suspendisse potenti.`;

  const maxLength = 100; // Max characters to show initially
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <p>
        {expand ? paragraphText : paragraphText.slice(0, maxLength) + "..."}
      </p>
      <button 
        onClick={toggleExpand} 
        style={{ background: "#007bff", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        {expand ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default Card;
