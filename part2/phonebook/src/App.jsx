import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import personService from "./services/persons";
const App = () => {
  useEffect(() => {
    personService.getAll()
      .then((response) => {
        setPersons(response);
      })
      .catch((err) => console.log(err))
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const setName = (obj) => {
    let newObj = {
      name: newName,
      number: newNumber,
    };
    let user = persons.filter((person) => person.name === newObj.name);
    if (user.length > 0)
      return alert(`${newName} is already added to phonebook`);
    else {
      setPersons(persons.concat(newObj));
      setNewName("");
      setNewNumber("");
    }
  };
  let personFilter =
    filter === ""
      ? persons
      : persons.filter((person) => person.name.includes(filter));
  const changes = (obj) => setNewName(obj.target.value);
  const changeNo = (obj) => setNewNumber(obj.target.value);
  const filters = (obj) => setFilter(obj.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filters={filters} />

      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setName={setName}
        newName={newName}
        changes={changes}
        newNumber={newNumber}
        changeNo={changeNo}
      />

      <h2>Numbers</h2>
      <Persons personFilter={personFilter} />
    </div>
  );
};

export default App;
