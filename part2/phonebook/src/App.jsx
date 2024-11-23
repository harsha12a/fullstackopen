import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const setName = (obj) => {
    obj.preventDefault();
    let newObj = {
      name: newName,
      number: newNumber
    };
    let user = persons.filter((person) => person.name === newObj.name);
    if(user.length > 0) return alert(`${newName} is already added to phonebook`);
    else{
      setPersons(persons.concat(newObj));
      setNewName("");
      setNewNumber('');
    }
  };
  let personFilter = filter === ''? persons : persons.filter((person) => person.name.includes(filter));
  const changes = (obj) => setNewName(obj.target.value);
  const changeNo = (obj) => setNewNumber(obj.target.value);
  const filters = (obj) => setFilter(obj.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={filters}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={setName}>
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
      <h2>Numbers</h2>

      <div>
        {personFilter.map((person, i) => (
          <div key={i}>{person.name} {person.number}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
