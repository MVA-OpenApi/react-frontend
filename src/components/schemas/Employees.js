import React, { useState } from "react";

import IDForm from "../IDForm";
import LoadSubmit from "../LoadSubmit";
import EmployeesForm from "./schemaforms/EmployeesForm";

import { getItem, postItem, putItem, deleteItem } from "../../api";

import "../../styles/schemaform.css";

const PATH = "/employees";

function Employees() {
  const [method, setMethod] = useState("get-all");
  const [responseData, setResponseData] = useState("");

  return (
    <div>
      <h1>Employees</h1>
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
        <EmployeesForm
          path={PATH}
          onClickFunc={postItem}
          setResponseData={setResponseData}
        />
      );
    case "put":
      return (
        <EmployeesForm
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

export default Employees;
