import React from "react";
import Button from "@mui/material/Button";

import "../styles/loadsubmit.css";
import { Grid } from "@mui/material";

function LoadSubmit(props) {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      className="load-submit"
    >
      <Grid item>
        <Button
          variant="contained"
          className="ls-button"
          onClick={() => props.setMethod("get-all")}
        >
          Get all items
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className="ls-button"
          onClick={() => props.setMethod("get")}
        >
          Get item
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className="ls-button"
          onClick={() => props.setMethod("post")}
        >
          Post item
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className="ls-button"
          onClick={() => props.setMethod("put")}
        >
          Update item
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className="ls-button"
          onClick={() => props.setMethod("delete")}
        >
          Delete item
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoadSubmit;
