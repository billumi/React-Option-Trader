import React from "react";

export default class Recommendation extends React.Component {
  render() {
    return (
      <div>
        <div>Symbol: {this.props.recommendation.symbol}</div>
        <div>Price: {this.props.recommendation.price}</div>
        <div>Rank: {this.props.recommendation.rank}</div>
      </div>
    );
  }
}
