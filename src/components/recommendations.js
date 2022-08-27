import React from "react";

export default class Recommendations extends React.Component {
  handleClick = (e) => {
    this.props.recommendation(e.target.value);
  };

  render() {
    let list = this.props.list;
    return (
      <div>
        <div>Recommendations</div>
        {}
        <div>
          {list.map((each) => (
            <span>
              <li key={each.id}>
                {each.symbol}
                <button onClick={this.handleClick} value={each.id}>
                  details
                </button>
              </li>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
