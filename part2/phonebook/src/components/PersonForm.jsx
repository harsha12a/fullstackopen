import React from 'react'
import personService from '../services/persons';
function PersonForm({persons, setPersons, setName, changes, changeNo, newName, newNumber}) {
  const newEntry = async (obj) => {
    obj.preventDefault();
    let newObj = {
      name: newName,
      number: newNumber
    }
    setName(newObj)
    !persons.filter(per => per.name === newObj.name).length > 0 &&
    personService.create(newObj)
      .then()
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