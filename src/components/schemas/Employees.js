import React from "react";
import TextField from "@mui/material/TextField";

import "../../styles/schemaform.css";

const EmployeesSchema = {
  Name: "Employees",
  Properties: [
    { Name: "name", Type: "string" },
    { Name: "adress", Type: "string" },
    { Name: "date_of_birth", Type: "string" },
    { Name: "id", Type: "uuid.UUID" },
  ],
  XLabel: "form",
};

function Employees() {
  return (
    <form className="schema-form">
      <h1 className="mobile-schema-name">{EmployeesSchema.Name}</h1>
      {renderForm()}
    </form>
  );
}

function renderForm() {
  return EmployeesSchema.Properties.map((property, i) => {
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

export default Employees;
