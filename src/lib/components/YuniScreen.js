import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
/**
 * MUI & Icon
 */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['PSI', 'PPP', 'PKS', 'PKPI', 'PKB', 'Perindo', 'PDIP', 'PBB', 'PAN', 'NasDem', 'Hanura', 'Golkar'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2.18, 5.08, 10.69, 0.19, 5.26, 1.94, 15.95, 0.47, 9.13, 1.85, 13.20, 6.13],
      borderColor: [
        '#d8d6d6',
        '#26de71',
        '#f62926',
        '#d8d6d6',
        '#0b9e1a',
        '#d8d6d6',
        '#a4180a',
        '#d8d6d6',
        '#562eec',
        '#2d1292',
        '#d8d6d6',
        '#F8FF62',

      ],
      backgroundColor: [
        '#d8d6d6',
        '#26de71',
        '#f62926',
        '#d8d6d6',
        '#0b9e1a',
        '#d8d6d6',
        '#a4180a',
        '#d8d6d6',
        '#562eec',
        '#2d1292',
        '#d8d6d6',
        '#F8FF62',
      ],
    },
  ],
};

const YuniScreen = (props) => {
  return (
    <Box p={2} m={0}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Bar options={options} data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box >
  );
};
export default YuniScreen;

