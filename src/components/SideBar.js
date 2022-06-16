import React from "react";
import Button from "@mui/material/Button";

import "../styles/sidebar.css";

function SideBar(props) {
  return <div className="sidebar">{renderSchemaButton(props)}</div>;
}

function renderSchemaButton(props) {
  return props.schemas
    .filter(schema => schema.XLabel === "form")
    .map((schema, i) => {
      let variant = props.selectedSchema === i ? "contained" : "outlined";
      return (
        <Button
          key={i}
          variant={variant}
          onClick={() => props.setSelectedSchema(i)}
        >
          {schema.Name}
        </Button>
      );
    });
}

export default SideBar;
