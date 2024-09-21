import Part from "./Part";

function Content(props) {
  let course = props.course;
  return (
    <div>
        <Part parts={course[0]}/>
        <Part parts={course[1]}/>
        <Part parts={course[2]}/>
    </div>
  );
}

export default Content;
