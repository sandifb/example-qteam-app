import React from "react";
import Box from "@mui/material/Box";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Typography from '@mui/material/Typography'

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['PSI', 'PPP', 'PKS', 'PKPI', 'PKB', 'Perindo', 'PDIP','PBB', 'PAN', 'NasDem', 'Hanura', 'Golkar', 'Gerindra', 'Garuda', 'Demokrat', 'Berkarya'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [1167, 2721, 5729, 100, 2818, 1038,8546, 250, 4893, 989, 7074, 3649,9145,344,4830,284],
      borderColor: ['grey','#00b050','orange','grey','#548235','grey','#a20000','grey','#2f5597','#0070c0','grey','yellow','#cc0000','grey','#002060','grey'],
      backgroundColor:  ['grey','#00b050','orange','grey','#548235','grey','#a20000','grey','#2f5597','#0070c0','grey','yellow','#cc0000','grey','#002060','grey'],
    },
  ],
};


const IsmailScreen = (props) => {
  return (
    <Box p={8} m={0}>
      <Typography textAlign="center" variant="h4" color="initial"> TOTAL SUARA CALEG KOKAB PEMILU 2019</Typography>         
          <Bar options={options} data={data} />
    </Box>
  );
};
export default IsmailScreen;
