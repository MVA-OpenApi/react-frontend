import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import "./styles/index.css";

import SideBar from "./components/SideBar";
import Store from "./components/schemas/Store";
import Store2 from "./components/schemas/Store2";
import Employees from "./components/schemas/Employees";

// to expand the frontend -> 1. add new Component to ./components/schemas/ and import it
// to expand the frontend -> 2. put new schema name in this array
const Schemas = ["Store", "Store 2", "Employees"];

function App() {
  const [selectedSchema, setSelectedSchema] = useState(0);

  // to expand the frontend -> 3. add case for this schema
  function selectSchema() {
    switch (Schemas[selectedSchema]) {
      case "Store":
        return <Store />;

      case "Store 2":
        return <Store2 />;

      case "Employees":
        return <Employees />;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item md={2} lg={2} className="desktop-schema-name"></Grid>
        <Grid item md={10} lg={8} className="desktop-schema-name">
          <h1>{Schemas[selectedSchema]}</h1>
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
          {selectSchema()}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
