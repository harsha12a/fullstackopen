import axios from 'axios';
import React from 'react'

function PersonForm({setPersons, setName, changes, changeNo, newName, newNumber}) {
  const newEntry = async (obj) => {
    obj.preventDefault();
    let newObj = {
      name: newName,
      number: newNumber
    }
    let request = await axios.post('http://localhost:3001/persons', newObj)
    .then(response => setPersons((prev) => [...prev, response.data]))
    .catch((err) => console.log(err))
  }
  return (
    <form onSubmit={newEntry}>
        <div>
          name: <input value={newName} onChange={changes} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNo}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm