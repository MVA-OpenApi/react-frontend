import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "../../styles/schemaform.css";

function Store2() {
  return (
    <form className="schema-form">
      <TextField label="adress" variant="outlined" />
      <TextField label="annual_revenue" variant="outlined" />
      <TextField label="description" variant="outlined" />
      <TextField label="id" variant="outlined" />
      <TextField label="name" variant="outlined" />
      <TextField label="size" variant="outlined" />
      <Button variant="contained">Sumbit</Button>
    </form>
  );
}

export default Store2;
