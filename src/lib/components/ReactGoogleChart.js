import React from "react";
import Box from "@mui/material/Box";
import { Chart } from "react-google-charts";
import Grid from "@mui/material/Grid";

/**
 *
 * Dokumentasi Library :
 *
 *  1. https://www.react-google-charts.com/
 *  2. https://developers.google.com/chart/interactive/docs/quick_start
 *
 */

const ReactGoogleChart = (props) => {
  /**
   *
   * CHART 1
   *
   */
  const data1 = [
    ["Year", "Backend", "Front End", "UI/UX"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  const options1 = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    chartArea: { width: "50%" },
    legend: {
      position: "right",
      alignment: "start",
      textStyle: { color: "blue", fontSize: 16 },
    },
    backgroundColor: "#cdf2f7",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
  };

  /**
   *
   * CHART 2
   *
   */
  const data2 = [
    ["Element", "Density", { role: "style" }, { role: "annotation" }],
    ["Copper", 8.94, "#b87333", "Cu"],
    ["Silver", 10.49, "silver", "Ag"],
    ["Gold", 19.3, "gold", "Au"],
    ["Platinum", 21.45, "color: purple", "Pt"],
  ];
  const options2 = {
    title: "Company Performance",
    bar: { groupWidth: "75%" },
    chartArea: { width: "50%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: "none",
        color: "#555",
      },
    },
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: { color: "blue", fontSize: 16 },
    },
    backgroundColor: "#ebebeb",
  };

  /**
   *
   * CHART 3
   *
   */
  const data3 = [
    ["City", "2010 Population", { type: "string", role: "annotation" }, "2000 Population", { type: "string", role: "annotation" }],
    ["New York City, NY", 8175000, "8.1M", 8008000, "8M"],
    ["Los Angeles, CA", 3792000, "3.8M", 3694000, "3.7M"],
    ["Chicago, IL", 2695000, "2.7M", 2896000, "2.9M"],
    ["Houston, TX", 2099000, "2.1M", 1953000, "2.0M"],
    ["Philadelphia, PA", 1526000, "1.5M", 1517000, "1.5M"],
  ];
  const options3 = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: "none",
        color: "#555",
      },
      boxStyle: {
        stroke: "#ccc",
        strokeWidth: 1,
        gradient: {
          color1: "#f3e5f5",
          color2: "#f3e5f5",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
        },
      },
    },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };

  /**
   *
   * CHART 4
   *
   */
  const data4 = [
    ["City", "2010 Population", { type: "string", role: "annotation" }, { role: "style" }],
    ["New York City, NY", 8175000, "8.1M", "#b87333"],
    ["Los Angeles, CA", 3792000, "3.8M", "silver"],
    ["Chicago, IL", 2695000, "2.7M", "gold"],
    ["Houston, TX", 2099000, "2.1M", "red"],
    ["Philadelphia, PA", 1526000, "1.5M", "#e5e4e2"],
  ];
  const options4 = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    legend: {
      position: "none",
    },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: "none",
        color: "#555",
      },
      boxStyle: {
        stroke: "#ccc",
        strokeWidth: 1,
        gradient: {
          color1: "#f3e5f5",
          color2: "#f3e5f5",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
        },
      },
    },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };

  /**
   *
   * CHART 5
   *
   */
  const data5 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const options5 = {
    title: "My Daily Activities",
    is3D: true,
    backgroundColor: "#cdf2f7",
    pieStartAngle: 90,
    // sliceVisibilityThreshold: 0.2,
  };

  const options5a = {
    title: "My Daily Activities",
    pieHole: 0.4,
  };

  return (
    <Box p={2} m={0}>
      <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs="6">
          <Chart chartType="BarChart" width="100%" height="350px" data={data1} options={options1} />
        </Grid>
        <Grid item xs="6">
          <Chart chartType="ColumnChart" width="100%" height="350px" data={data2} options={options2} />
        </Grid>
        <Grid item xs="6">
          <Chart chartType="ColumnChart" width="100%" height="350px" data={data3} options={options3} />
        </Grid>
        <Grid item xs="6">
          <Chart chartType="BarChart" width="100%" height="350px" data={data4} options={options4} />
        </Grid>
        <Grid item xs="6">
          <Chart chartType="PieChart" data={data5} options={options5} width={"100%"} height={"400px"} />
        </Grid>
        <Grid item xs="6">
          <Chart chartType="PieChart" data={data5} options={options5a} width={"100%"} height={"400px"} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ReactGoogleChart;
