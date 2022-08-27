import React from "react";

export default class Recommendation extends React.Component {
  render() {
    return (
      <div>
        <div>Symbol: {this.props.person.symbol}</div>
        <div>Price: {this.props.person.price}</div>
        <div>Rank: {this.props.person.rank}</div>
      </div>
    );
  }
}
