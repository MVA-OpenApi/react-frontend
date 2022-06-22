import React from "react";
import TextField from "@mui/material/TextField";

import "../../styles/schemaform.css";

function Store() {
  return (
    <form className="schema-form">
      <h1 className="mobile-schema-name">Store</h1>
      <TextField label="adress" variant="outlined" />
      <TextField label="annual_revenue" variant="outlined" />
      <TextField label="description" variant="outlined" />
      <TextField label="id" variant="outlined" />
      <TextField label="name" variant="outlined" />
      <TextField label="size" variant="outlined" />
    </form>
  );
}

export default Store;
