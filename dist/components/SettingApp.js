import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const SettingApp = props => {
  return /*#__PURE__*/React.createElement(Box, {
    p: 2,
    m: 0
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sx: {
      bgcolor: "red"
    }
  }, "SETTING"), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sx: {
      bgcolor: "yellow"
    }
  }, "APP")));
};

export default SettingApp;