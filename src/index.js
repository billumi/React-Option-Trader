import React from "react";
import reactDom from "react-dom";
import Recommendations from "./components/recommendations.js";
import Recommendation from "./components/recommendation.js";
import Chart from "./components/chart.js";
import "./styles.css";

const recommendations = [
  { id: 1, symbol: "BANKBARODA", price: 29, rank: 1 },
  { id: 2, symbol: "EICHERMOT", price: 30, rank: 2 },
  { id: 3, symbol: "NTPC", price: 31, rank: 3 }
];

class App extends React.Component {
  state = {
    id: 0
  };

  setRecommendation = (newId) => {
    console.log(newId);
    this.setState({
      id: newId
    });
  };

  render() {
    return (
      <div className="recommendation-container">
        <div className="recommendation-list">
          <Recommendations
            list={recommendations}
            recommendation={this.setRecommendation}
          />
        </div>
        <div className="recommendation-detail">
          {this.state.id ? (
            <Recommendation
              person={recommendations.find((each) => each.id == this.state.id)}
            />
          ) : null}
        </div>
        <div className="chart-container">
          {this.state.id ? (
            <Chart
              person={recommendations.find((each) => each.id == this.state.id)}
            />
          ) : (
            "Chart goes here"
          )}
        </div>
      </div>
    );
  }
}

reactDom.render(<App />, document.getElementById("root"));
