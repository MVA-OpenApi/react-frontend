import React from "react";
import TextField from "@mui/material/TextField";

import "../../styles/schemaform.css";

const Store2Schema = {
  Name: "Store 2",
  Properties: [
    { Name: "adress", Type: "string" },
    { Name: "annual_revenue", Type: "float32" },
    { Name: "description", Type: "string" },
    { Name: "id", Type: "uuid.UUID" },
    { Name: "name", Type: "string" },
    { Name: "size", Type: "int32" },
  ],
  XLabel: "form",
};

function Store2() {
  return (
    <form className="schema-form">
      <h1 className="mobile-schema-name">{Store2Schema.Name}</h1>
      {renderForm()}
    </form>
  );
}

function renderForm() {
  return Store2Schema.Properties.map((property, i) => {
    return (
      <TextField
        id={property.Name + "textfield"}
        label={property.Name}
        variant="outlined"
        key={i}
      />
    );
  });
}

export default Store2;
