import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
const App = () => {
  let arr = {
    course: "Half Stack application development",
    parts: [
      {
        part1: "Fundamentals of React",
        exercises1: 10,
      },
      {
        part2: "Using props to pass data",
        exercises2: 7,
      },
      {
        part3: "State of a component",
        exercises3: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={arr.course}/>
      <Content course={arr.parts} />
      <Total course={arr.parts} />
    </div>
  );
};

export default App;
