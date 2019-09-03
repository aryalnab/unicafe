import React from "react";

export default function Statstics(props) {
    
  return (
    <div>
      <h3> Statistics</h3>
      <h3>Good:{props.good} </h3>
      <h3>Neutral:{props.neutral} </h3>
      <h3>Bad:{props.bad} </h3>
      <h3>All: {props.good + props.neutral + props.bad}</h3>
      <h3>Average: {(props.good * 1 + props.neutral * 0 + props.bad * -1) / 3}</h3>
      <h3> Percent :{(props.good / (props.good + props.neutral + props.bad)) * 100}</h3>
    </div>


  );
}
