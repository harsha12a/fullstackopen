function Content(props) {
  let course = props.course;
  return (
    <div>
      <p>
        {course[0].part1} {course[0].exercises1}
      </p>
      <p>
        {course[1].part2} {course[1].exercises2}
      </p>
      <p>
        {course[2].part3} {course[2].exercises3}
      </p>
    </div>
  );
}

export default Content;
