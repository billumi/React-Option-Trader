import React, { useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Recommendation(props) {
  const [loading, setLoading] = useState(false);
  function onSelect(event) {
    var method = event.target.value;
    setLoading(true);
    axios
      .get("http://localhost:5010/set_recommendation_type?method=" + method)
      .then((res) => {
        console.log(res);
        setLoading(false);
      });

    props.recommendationMethod({ name: "vinod" });
  }
  return (
    <div>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>

      {props.recommendation ? (
        <div>
          <div>Symbol: {props.recommendation.symbol}</div>
          <div>Price: {props.recommendation.price}</div>
          <div>Rank: {props.recommendation.rank}</div>
          <Button variant="primary">Primary</Button>{" "}
        </div>
      ) : (
        "No Chart"
      )}

      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <Form.Select aria-label="Default select example" onChange={onSelect}>
        <option>Select Recommendation Method</option>
        <option value="CROSSING_OPRNING_HIGH">Crossing Opening High</option>
        <option value="CROSSING_FIFTY_TWO_WEEK_HIGH">
          Crossing Fifty Two Week High
        </option>
        <option value="CROSSING_DAY_HIGH">Crossing Day High</option>
        <option value="INCREASING_MOMENTUM">Increasing Momentum</option>
      </Form.Select>
    </div>
  );
}

export default Recommendation;
