import * as React from "react";
/**
 * Components
 */
import MainApp from "./lib/components/MainApp";
import SettingApp from "./lib/components/SettingApp";
import About from "./lib/components/About";
<<<<<<< HEAD
import IsmailScreen from "./lib/components/IsmailScreen";
import YuniScreen from "./lib/components/YuniScreen";
=======
import ReactGoogleChart from "./lib/components/ReactGoogleChart";
>>>>>>> main
/**
 * MUI & Icon
 */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Outlet, Link, useRoutes } from "react-router-dom";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <GetStarted /> },
    { path: "main", element: <MainApp /> },
    { path: "setting", element: <SettingApp /> },
    { path: "about", element: <About /> },
<<<<<<< HEAD
    { path: "ismail", element: <IsmailScreen /> },
    { path: "yuni", element: <YuniScreen /> },
=======
    { path: "chart", element: <ReactGoogleChart /> },
>>>>>>> main
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
            <li style={{ display: "inline", marginRight: 20 }}>
<<<<<<< HEAD
              <Link to="/ismail">Ismail</Link>
            </li>
            <li style={{ display: "inline", marginRight: 20 }}>
              <Link to="/yuni">Yuni</Link>
=======
              <Link to="/chart">Example Chart</Link>
>>>>>>> main
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
      <Typography variant="h6">Get Started</Typography>
      <Typography variant="subtitle1" color="initial">
        This is page for developer.
      </Typography>
    </Box>
  );
};
