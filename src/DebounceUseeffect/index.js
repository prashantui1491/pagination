import React, { useState, useEffect } from "react";

const Debounce = () => {
  const [inputTextm, setInputText] = useState("");
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebounceText(inputTextm), 2000);

    return () => {
      clearTimeout(handler); // Cleanup the timeout on every re-render
    };
  }, [inputTextm]);
  return (
    <div>
      <input
        type="text"
        value={inputTextm}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>Debouncetext: {debounceText}</p>
    </div>
  );
};

export default Debounce;
