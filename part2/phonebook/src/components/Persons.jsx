import React from 'react'

function Persons({personFilter}) {
  return (
    <div>
        {personFilter.map((person, i) => (
          <div key={i}>{person.name} {person.number}</div>
        ))}
      </div>
  )
}

export default Persons