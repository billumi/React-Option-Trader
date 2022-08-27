import React, { useState } from "react";
import Recommendations from "./recommendations.js";
import Recommendation from "./recommendation.js";
import Chart from "./chart.js";

import "../styles.css";

function App() {
  const [recommendations] = useState([
    { id: 1, symbol: "BANKBARODA", price: 29, rank: 1 },
    { id: 2, symbol: "EICHERMOT", price: 30, rank: 2 },
    { id: 3, symbol: "NTPC", price: 31, rank: 3 },
  ]);
  const [recommendation, setRecommendation] = useState({
    id: 1,
    symbol: "",
    price: 0,
    rank: 0,
  });

  console.log(recommendation);
  return (
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
            recommendation={recommendations.find(
              (each) => each.id == recommendation.id
            )}
          />
        ) : (
          "No data"
        )}
      </div>
      <div className="chart-container">
        {recommendation ? (
          <Chart
            recommendation={recommendations.find(
              (each) => each.id == recommendation
            )}
          />
        ) : (
          "Chart goes here"
        )}
      </div>
    </div>
  );
}

export default App;
