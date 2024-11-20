import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <Button setValue={setGood} value={good} text="good" />
      <Button setValue={setNeutral} value={neutral} text="neutral" />
      <Button setValue={setBad} value={bad} text="bad" />
      <h1>statistics</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics x={{ good, neutral, bad }} />
      )}
    </div>
  );
};

export default App;
