import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const SettingApp = (props) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "red" }}>
          SETTING
        </Grid>
        <Grid item sx={{ bgcolor: "yellow" }}>
          APP
        </Grid>
      </Grid>
    </Container>
  );
};
export default SettingApp;
