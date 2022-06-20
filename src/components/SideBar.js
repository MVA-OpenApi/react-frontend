import React from "react";
import Button from "@mui/material/Button";

import "../styles/sidebar.css";

function SideBar(props) {
  return <div className="sidebar">{renderSchemaButton(props)}</div>;
}

function renderSchemaButton(props) {
  return props.schemas.map((schema, i) => {
    let variant = props.selectedSchema === i ? "contained" : "outlined";
    return (
      <Button
        key={i}
        variant={variant}
        onClick={() => props.setSelectedSchema(i)}
      >
        {schema}
      </Button>
    );
  });
}

export default SideBar;
