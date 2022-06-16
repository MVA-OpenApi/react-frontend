import React from "react";

import "../styles/formview.css";

function FormView(props) {
  //console.log(props.schema);
  return (
    <div className="formview">
      <h1>{props.schema.Name}</h1>
    </div>
  );
}

export default FormView;
