import React from "react";

function Recommendation(props) {
  return (
    <div>
      <div>Symbol: {props.recommendation.symbol}</div>
      <div>Price: {props.recommendation.price}</div>
      <div>Rank: {props.recommendation.rank}</div>
    </div>
  );
}

export default Recommendation;
