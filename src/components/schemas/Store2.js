import React, { useState } from "react";

import IDForm from "../IDForm";
import LoadSubmit from "../LoadSubmit";
import Store2Form from "./schemaforms/Store2Form";

import { getItem, postItem, putItem, deleteItem } from "../../api";

import "../../styles/schemaform.css";

const PATH = "/store2";

function Store2() {
  const [method, setMethod] = useState("get-all");
  const [responseData, setResponseData] = useState("");

  return (
    <div>
      <h1>Store 2</h1>
      <LoadSubmit
        setMethod={setMethod}
        path={PATH}
        setResponseData={setResponseData}
      />
      {showMethodView(method, setResponseData)}
      {responseData}
    </div>
  );
}

var showMethodView = (method, setResponseData) => {
  switch (method) {
    case "get":
      return (
        <IDForm
          path={PATH}
          onClickFunc={getItem}
          setResponseData={setResponseData}
        />
      );
    case "post":
      return (
        <Store2Form
          path={PATH}
          onClickFunc={postItem}
          setResponseData={setResponseData}
        />
      );
    case "put":
      return (
        <Store2Form
          path={PATH}
          onClickFunc={putItem}
          setResponseData={setResponseData}
        />
      );
    case "delete":
      return (
        <IDForm
          path={PATH}
          onClickFunc={deleteItem}
          setResponseData={setResponseData}
        />
      );
    default:
      break;
  }
};

export default Store2;
