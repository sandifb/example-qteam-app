import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [864, 976, 591, 419, 395, 379, 42],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [764, 876, 491, 319, 295, 279, 32],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const MainApp = (props) => {
  return (
    <Box p={2} m={0}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Bar options={options} data={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Bar options={options} data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MainApp;
