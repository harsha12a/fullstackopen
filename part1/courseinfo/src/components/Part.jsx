function Part(props) {
    let parts=props.parts
  return (
    <div>
        <p>{parts.name} {parts.exercises}</p>
    </div>
  )
}

export default Part