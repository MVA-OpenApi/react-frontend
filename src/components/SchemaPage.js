import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/loadsubmit.css";
import LoadSubmit from "./LoadSubmit";
import ButtonForm from "./ButtonForm";
import IDForm from "./IDForm";

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
      return <ButtonForm />;
    case "get":
      return <IDForm />;
    case "post":
      return props.children;
    case "put":
      return props.children;
    case "delete":
      return <IDForm />;
    default:
      break;
  }
};

export default SchemaPage;
