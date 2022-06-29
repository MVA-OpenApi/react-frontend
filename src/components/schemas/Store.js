import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import ButtonForm from "../ButtonForm";
import IDForm from "../IDForm";
import LoadSubmit from "../LoadSubmit";

import { getAllItems, getItem, postItem, putItem, deleteItem } from "../../api";

import "../../styles/schemaform.css";

const PATH = "/store";
// states for all inputs
const [adress, setAdress] = useState("");
const [annual_revenue, setAnnual_revenue] = useState("");
const [description, setDescription] = useState("");
const [id, setId] = useState("");
const [name, setName] = useState("");
const [size, setSize] = useState("");

function Store() {
  const [method, setMethod] = useState("get-all");

  return (
    <div>
      <h1>Store</h1>
      <LoadSubmit setMethod={setMethod} />
      {showMethodView(method)}
    </div>
  );
}

var showMethodView = method => {
  switch (method) {
    case "get-all":
      return returnGetAllForm();
    case "get":
      return <IDForm path={PATH} />;
    case "post":
      return returnSchemaForm(postItem);
    case "put":
      return returnSchemaForm(putItem);
    case "delete":
      return <IDForm path={PATH} />;
    default:
      break;
  }
};

function returnGetAllForm() {
  return (
    <form className="schema-form">
      <Button variant="contained" onClick={() => getAllItems(PATH)}>
        Sumbit
      </Button>
    </form>
  );
}

// TODO pass in anonymous function (wether put or post)
function returnSchemaForm(onClickFunc) {
  return (
    <form className="schema-form">
      <TextField
        label="adress"
        variant="outlined"
        value={adress}
        onChange={e => setAdress(e.target.value)}
      />
      <TextField label="annual_revenue" variant="outlined" />
      <TextField label="description" variant="outlined" />
      <TextField label="id" variant="outlined" />
      <TextField label="name" variant="outlined" />
      <TextField label="size" variant="outlined" />
      <Button
        variant="contained"
        onClick={(data, id) => onClickFunc(PATH, data, id)}
      >
        Sumbit
      </Button>
    </form>
  );
}

export default Store;
