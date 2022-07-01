import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../../../styles/schemaform.css";

function StoreForm(props) {
  // states for all inputs
  const [adress, setAdress] = useState("");
  const [annual_revenue, setAnnual_revenue] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");

  return (
    <form className="schema-form">
      <TextField
        label="adress"
        variant="outlined"
        value={adress}
        onChange={e => setAdress(e.target.value)}
      />
      <TextField
        label="annual_revenue"
        variant="outlined"
        value={annual_revenue}
        onChange={e => setAnnual_revenue(e.target.value)}
      />
      <TextField
        label="description"
        variant="outlined"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField
        label="id"
        variant="outlined"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <TextField
        label="name"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        label="size"
        variant="outlined"
        value={size}
        onChange={e => setSize(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() =>
          handleOnClick(
            props,
            {
              adress,
              annual_revenue,
              description,
              id,
              name,
              size,
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

export default StoreForm;
