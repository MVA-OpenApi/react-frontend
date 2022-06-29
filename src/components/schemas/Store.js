import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import ButtonForm from "../ButtonForm";
import IDForm from "../IDForm";
import LoadSubmit from "../LoadSubmit";
import StoreForm from "./StoreForm";

import { getAllItems, getItem, postItem, putItem, deleteItem } from "../../api";

import "../../styles/schemaform.css";

const PATH = "/store";

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
      return <ButtonForm path={PATH} />;
    case "get":
      return <IDForm path={PATH} />;
    case "post":
      return <StoreForm path={PATH} onClickFunc={postItem} />;
    case "put":
      return <StoreForm path={PATH} onClickFunc={putItem} />;
    case "delete":
      return <IDForm path={PATH} />;
    default:
      break;
  }
};

export default Store;
