import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Setting = () => {
  return (
    <Box p={2} m={0}>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "red" }}>
          SETTING
        </Grid>
        <Grid item sx={{ bgcolor: "yellow" }}>
          APP
        </Grid>
      </Grid>
    </Box>
  );
};
export default Setting;
