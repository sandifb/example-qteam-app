import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const YuniScreen = props => {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sx: {
      bgcolor: "red"
    }
  }, "Yuni"), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sx: {
      bgcolor: "yellow"
    }
  }, "Screen")));
};

export default YuniScreen;