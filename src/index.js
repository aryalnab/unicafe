import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./Components/Statstics";



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToBad = value => {
    return () => setBad(value);
  };

  const setToGood = value => {
    return () => setGood(value);
  };

  const setToNeutral = value => {
    return () => setNeutral(value);
  };

  console.log(setToGood);

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={setToGood(good + 1)} > Good</button>

      <button onClick={setToNeutral(neutral + 1)}>Neutral</button> 

      <button onClick={setToBad(bad + 1)}>Bad</button> 

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
