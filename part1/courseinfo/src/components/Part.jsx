function Part(props) {
    let parts=props.parts
  return (
    <div>
        <p>{parts.part} {parts.exercises}</p>
    </div>
  )
}

export default Part