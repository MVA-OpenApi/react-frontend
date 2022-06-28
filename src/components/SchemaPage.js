import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/loadsubmit.css";
import LoadSubmit from "./LoadSubmit";

function SchemaPage(props) {
  const [method, setMethod] = useState("get-all");

  return (
    <div>
      <h1>{props.name}</h1>
      <LoadSubmit setMethod={setMethod} />
      {showMethodView(method, props)}
    </div>
  );
}

var showMethodView = (method, props) => {
  switch (method) {
    case "get-all":
      return "get-all-component";
    case "get":
      return "get-component";
    case "post":
      return props.children;
    case "put":
      return props.children;
    case "delete":
      return "delete-component";
    default:
      break;
  }
};

export default SchemaPage;
