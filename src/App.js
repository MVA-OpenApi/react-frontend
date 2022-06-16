import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import "./styles/index.css";

import SideBar from "./components/SideBar";
import FormView from "./components/FormView";

const Schemas = [
  {
    Name: "Store",
    Properties: [
      { Name: "adress", Type: "string" },
      { Name: "annual_revenue", Type: "float32" },
      { Name: "description", Type: "string" },
      { Name: "id", Type: "uuid.UUID" },
      { Name: "name", Type: "string" },
      { Name: "size", Type: "int32" },
    ],
    XLabel: "form",
  },
  {
    Name: "Store 2",
    Properties: [
      { Name: "adress", Type: "string" },
      { Name: "annual_revenue", Type: "float32" },
      { Name: "description", Type: "string" },
      { Name: "id", Type: "uuid.UUID" },
      { Name: "employees", Type: "int32" },
    ],
    XLabel: "form",
  },
];

function App() {
  const [selectedSchema, setSelectedSchema] = useState(0);

  /* useEffect(() => {
    console.log(selectedSchema);
  }); */
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item md={2} lg={2} className="desktop-schema-name"></Grid>
        <Grid item md={10} lg={8} className="desktop-schema-name">
          <h1>{Schemas[selectedSchema].Name}</h1>
        </Grid>
        <Grid item lg={2} className="desktop-spacer"></Grid>
        <Grid item xs={12} md={2}>
          <SideBar
            schemas={Schemas}
            setSelectedSchema={setSelectedSchema}
            selectedSchema={selectedSchema}
          />
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <FormView schema={Schemas[selectedSchema]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
