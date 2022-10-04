import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const MainApp = (props) => {
  return (
    <Box p={2} m={0}>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "red" }}>
          MAIN
        </Grid>
        <Grid item sx={{ bgcolor: "yellow" }}>
          APP
        </Grid>
      </Grid>
    </Box>
  );
};
export default MainApp;
