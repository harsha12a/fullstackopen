function Total(props) {
  let arr = props.course;
  return (
    <div>
      <p>Number of exercises {arr[0].exercises1 + arr[1].exercises2 + arr[2].exercises3}</p>
    </div>
  );
}

export default Total;
