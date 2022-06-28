import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "../styles/schemaform.css";

function IDForm() {
  return (
    <form className="schema-form">
      <TextField label="id" variant="outlined" />
      <Button variant="contained">Sumbit</Button>
    </form>
  );
}

export default IDForm;
