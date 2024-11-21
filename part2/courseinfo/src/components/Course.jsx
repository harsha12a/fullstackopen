import React from 'react'
import Content from './Content'
import Total from './Total'

function Course({course}) {
  return (
    <div>
        <h2>{course.name}</h2>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
  )
}

export default Course