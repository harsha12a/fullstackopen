import React from "react";
import StatisticLine from "./StatisticLine";
function Statistics({ x }) {
  let { good, neutral, bad } = x;

  const getPos = () => (good / (good + bad + neutral)) * 100;
  const getAvg = () => (good - bad) / (good + bad + neutral);
  const getSum = () => good + neutral + bad;
  return (
    <table>
      <tbody>
        <StatisticLine value={good} text="good" />
        <StatisticLine value={neutral} text="neutral" />
        <StatisticLine value={bad} text="bad" />
        <StatisticLine value={getSum()} text="all" />
        <StatisticLine value={getAvg()} text="average" />
        <StatisticLine value={getPos()} text="positive" />
      </tbody>
    </table>
  );
}

export default Statistics;
