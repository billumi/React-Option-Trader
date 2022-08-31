import axios from "axios";
import React, { useState, useEffect } from "react";
import Recommendations from "./recommendations.js";
import Recommendation from "./recommendation.js";
import { MyResponsiveLine } from "./graph";
import SyncChart from "./syncChart.js";
import SummaryChart from "./summaryChart.js";
import DetailedChart from "./detailedChart.js";
import data from "./data.json";

import socketIOClient from "socket.io-client";

import "../styles.css";

const socket = socketIOClient("http://localhost:5010");
function App() {
  const [recommendation, setRecommendation] = useState(null);
  const [recommendationMethod, setRecommendationMethod] = useState(null);
  const [detailedChart, setDetailedChart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [rangeMax, setRangeMax] = useState(50);

  useEffect(() => {
    socket.on("newRecommendations", (result) => {
      console.log("New Recommendations...");
      console.log(result.data);
      setRecommendations(result.data);
    });
  }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("http://localhost:5010/recommendations")
  //       .then((results) => results.json())
  //       .then((data) => {
  //         console.log(data.data);
  //         setRecommendations(data.data);
  //         setLoading(false);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     axios.get("http://localhost:5010/recommendations").then((res) => {
  //       console.log(res);
  //       setRecommendations(res.data.data);
  //       setLoading(false);
  //     });
  //   }, []);

  console.log("CHART");
  console.log(detailedChart);
  return (
    <div>
      <div className="recommendation-container">
        <div className="recommendation-list">
          <Recommendations
            list={recommendations}
            recommendation={setRecommendation}
          />
        </div>
        <div className="recommendation-detail">
          {recommendation ? (
            <Recommendation
              recommendationMethod={setRecommendationMethod}
              recommendation={recommendations.find(
                (each) => each.id == recommendation.id
              )}
            />
          ) : (
            "No data"
          )}
        </div>
        <div className="chart-container">
          {detailedChart ? (
            <DetailedChart
              symbol={detailedChart}
              recommendations={recommendations}
            ></DetailedChart>
          ) : (
            "No Chart"
          )}
        </div>
      </div>
      <div className="recommendation-container">
        {/* <MyResponsiveLine data={[...data]} rangeMax={rangeMax} /> */}
        {/* <SyncChart></SyncChart> */}
        <SummaryChart
          data={recommendations}
          detailedChart={setDetailedChart}
        ></SummaryChart>
      </div>
    </div>
  );
}

export default App;
