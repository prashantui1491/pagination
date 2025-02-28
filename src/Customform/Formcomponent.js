//Formcomponent;

import React, { useState } from "react";
import Useform from "./Useform1";

const Formcomponent = () => {
  const { values, handleOnchange, resetForm } = Useform({
    name: "",
    email: "",
  });

  const hanldeSubmit = (e) => {
    e.preventDefault();
    resetForm();
    console.log(values, "values");
  };

  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnchange}
        />

        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleOnchange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formcomponent;
