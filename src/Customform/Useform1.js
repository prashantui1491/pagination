//Useform;

import React, { useState } from "react";

const Useform = (initialvalue) => {
  const [values, setValues] = useState(initialvalue);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialvalue);
  };

  return { values, handleOnchange, resetForm };
};

export default Useform;
