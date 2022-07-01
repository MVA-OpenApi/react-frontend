import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../../../styles/schemaform.css";

function EmployeesForm(props) {
  // states for all inputs
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [id, setId] = useState("");

  return (
    <form className="schema-form">
      <TextField
        label="name"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        label="adress"
        variant="outlined"
        value={adress}
        onChange={e => setAdress(e.target.value)}
      />
      <TextField
        label="date_of_birth"
        variant="outlined"
        value={date_of_birth}
        onChange={e => setDate_of_birth(e.target.value)}
      />
      <TextField
        label="id"
        variant="outlined"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() =>
          handleOnClick(
            props,
            {
              name,
              adress,
              date_of_birth,
              id,
            },
            id
          )
        }
      >
        Sumbit
      </Button>
    </form>
  );
}

var handleOnClick = async (props, data, id) => {
  if (id === "") {
    console.log("No id given.");
    return;
  }
  let responseData = await props.onClickFunc(props.path, data, id);
  props.setReponseData(responseData);
};

export default EmployeesForm;
