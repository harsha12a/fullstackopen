import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      <Filter filter={filter} filters={filters}/>
      <h2>add a new</h2>
      <PersonForm setName={setName} newName={newName} changes={changes} newNumber={newNumber} changeNo={changeNo}/>
      <h2>Numbers</h2>
      <Persons personFilter={personFilter}/>
    </div>
  );
};

export default App;
