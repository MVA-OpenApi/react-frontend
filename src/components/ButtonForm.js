import React from "react";
import { Button } from "@mui/material";

import "../styles/schemaform.css";

function ButtonForm(props) {
  return (
    <form className="schema-form">
      <Button variant="contained">Sumbit</Button>
    </form>
  );
}

export default ButtonForm;
