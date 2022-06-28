import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./styles/index.css";

import SideBar from "./components/SideBar";
import StoreForm from "./components/schemas/StoreForm";
import Store2Form from "./components/schemas/Store2Form";
import EmployeesForm from "./components/schemas/EmployeesForm";
import SchemaPage from "./components/SchemaPage";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <Routes>
            <Route path="/" element={<Navigate replace to="store" />} />
            <Route
              path="/store"
              element={
                <SchemaPage name="Store" path="store">
                  <StoreForm />
                </SchemaPage>
              }
            />
            <Route
              path="store2"
              element={
                <SchemaPage name="Store 2" path="store2">
                  <Store2Form />
                </SchemaPage>
              }
            />
            <Route
              path="employees"
              element={
                <SchemaPage name="Employees" path="employees">
                  <EmployeesForm />
                </SchemaPage>
              }
            />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
