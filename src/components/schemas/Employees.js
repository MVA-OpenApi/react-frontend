import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "../../styles/schemaform.css";

function Employees() {
  return (
    <form className="schema-form">
      <TextField label="name" variant="outlined" />
      <TextField label="adress" variant="outlined" />
      <TextField label="date_of_birth" variant="outlined" />
      <TextField label="id" variant="outlined" />
      <Button variant="contained">Sumbit</Button>
    </form>
  );
}

export default Employees;
