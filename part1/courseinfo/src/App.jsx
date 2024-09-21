import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
const App = () => {
  let arr = {
    course: "Half Stack application development",
    parts: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
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
