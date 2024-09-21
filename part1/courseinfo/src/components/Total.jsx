function Total(props) {
  let arr = props.course;
  return (
    <div>
      <p>Number of exercises {arr[0].exercises + arr[1].exercises + arr[2].exercises}</p>
    </div>
  );
}

export default Total;
