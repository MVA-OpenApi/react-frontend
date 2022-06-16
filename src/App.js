import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

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
    Name: "Store2",
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
];

function App() {
  const [selectedSchema, setSelectedSchema] = useState(0);

  /* useEffect(() => {
    console.log(selectedSchema);
  }); */
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <SideBar
            schemas={Schemas}
            setSelectedSchema={setSelectedSchema}
            selectedSchema={selectedSchema}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <FormView schema={Schemas[selectedSchema]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
