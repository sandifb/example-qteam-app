import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const YuniScreen = (props) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "red" }}>
          Yuni
        </Grid>
        <Grid item sx={{ bgcolor: "yellow" }}>
          Screen
        </Grid>
      </Grid>
    </Container>
  );
};
export default YuniScreen;
