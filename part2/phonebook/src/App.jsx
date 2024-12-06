import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
const App = () => {
  useEffect(() => {
    console.log("inside useEffect");
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    })
  },[])
  const [persons, setPersons] = useState([])
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
      <PersonForm setPersons={setPersons} setName={setName} newName={newName} changes={changes} newNumber={newNumber} changeNo={changeNo}/>
      <h2>Numbers</h2>
      <Persons personFilter={personFilter}/>
    </div>
  );
};

export default App;
