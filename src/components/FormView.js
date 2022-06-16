import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../styles/formview.css";

function FormView(props) {
  //console.log(props.schema);
  return (
    <div className="formview">
      <h1 className="mobile-schema-name">{props.schema.Name}</h1>
      <form>
        {renderPropertyFields(props.schema.Properties)}
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}

function renderPropertyFields(properties) {
  return properties.map((property, i) => {
    return (
      <TextField
        id={property.Name + "textfield"}
        label={property.Name}
        variant="outlined"
        key={i}
      />
    );
  });
  console.log(properties);
}

export default FormView;
