import React from "react";

function Statistics({x}) {
    let {good, neutral, bad} = x
    
  const getPos = () => good/(good+bad+neutral)*100
  const getAvg = () => (good-bad)/(good+bad+neutral)
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {getAvg()}</p>
      <p>positive {getPos()} %</p>
    </div>
  );
}

export default Statistics;
