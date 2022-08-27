import React from "react";

function Recommendations(props) {
  function handleClick(e) {
    console.log(e.target.value);
    props.recommendation({ id: e.target.value });
  }

  let list = props.list;
  return (
    <div>
      <div>Recommendations</div>
      {}
      <div>
        {list.map((each) => (
          <span>
            <li key={each.id}>
              {each.symbol}
              <button onClick={handleClick} value={each.id}>
                details
              </button>
            </li>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
