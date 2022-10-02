import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const IsmailScreen = (props) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "red" }}>
          Ismail
        </Grid>
        <Grid item sx={{ bgcolor: "yellow" }}>
          Screen
        </Grid>
      </Grid>
    </Container>
  );
};
export default IsmailScreen;
