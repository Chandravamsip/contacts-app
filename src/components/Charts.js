// ChartsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import LineGraph from "./LineGraph";

const ChartsPage = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        
        // Extract the data for cases
        const casesData = response.data.cases || {};
        const deathsData = response.data.deaths || {};
        const recoveredData = response.data.recovered || {};

        // Check if casesData is empty
        if (Object.keys(casesData).length === 0) {
          console.error("Cases data is empty.");
          return;
        }

        // Transform the data into an array of objects with date and case count
        const dataPoints = Object.keys(casesData).map((date) => ({
          date,
          cases: casesData[date],
        }));
        setGraphData(dataPoints);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchGraphData();
  }, []);

  if (graphData.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Cases Fluctuations</h2>
        <LineGraph data={graphData} />
      </div>
    );
  }
};

export default ChartsPage;
