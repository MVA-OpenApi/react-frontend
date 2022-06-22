import React from "react";
import TextField from "@mui/material/TextField";

import "../../styles/schemaform.css";

function Employees() {
  return (
    <form className="schema-form">
      <h1 className="mobile-schema-name">Employees</h1>
      <TextField label="name" variant="outlined" />
      <TextField label="adress" variant="outlined" />
      <TextField label="date_of_birth" variant="outlined" />
      <TextField label="id" variant="outlined" />
    </form>
  );
}

export default Employees;
