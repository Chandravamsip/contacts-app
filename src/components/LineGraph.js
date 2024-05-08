import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns"; // Import the date-fns adapter for Chart.js

const LineGraph = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const labels = data.map((entry) => entry.date);
  const cases = data.map((entry) => entry.cases);

  console.log(labels, cases)

  // Your data processing code

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        data: cases,
        fill: false,
        borderColor: "rgb(75, 192, 192)", // Adjust the color as needed
        tension: 0.1,
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        // You can configure the y-axis scale here if needed
      },
    },
  };
  

  return <Line data={chartData} options={options} />;
};

export default LineGraph;
