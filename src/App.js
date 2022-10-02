import MainApp from "./lib/components/MainApp";
import SettingApp from "./lib/components/SettingApp";
import About from "./lib/components/About";
import Box from "@mui/material/Box";

import * as React from "react";
import { Outlet, Link, useRoutes } from "react-router-dom";
import Typography from "@mui/material/Typography";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <GetStarted /> },
    { path: "main", element: <MainApp /> },
    { path: "setting", element: <SettingApp /> },
    { path: "about", element: <About /> },
  ]);
  return routes;
};

export default function App() {
  return (
    <div>
      <div style={{ paddingLeft: 10 }}>
        <h1>Team Example App</h1>
        <nav style={{ marginBottom: 10 }}>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline", marginRight: 20 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: "inline", marginRight: 20 }}>
              <Link to="/main">MainApp</Link>
            </li>
            <li style={{ display: "inline", marginRight: 20 }}>
              <Link to="/setting">Setting App</Link>
            </li>
            <li style={{ display: "inline", marginRight: 20 }}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <AppRoute />
    </div>
  );
}

const GetStarted = (props) => {
  return (
    <Box p={2} m={0}>
      <Typography variant="h1" color="primary">
        Get Started
      </Typography>
    </Box>
  );
};
