import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";
const App = () => {
  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response);
      })
      .catch((err) => console.log(err));
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState('');
  const setName = (obj) => {
    obj.preventDefault();
    let newObj = {
      name: newName,
      number: newNumber,
    };
    let user = persons.find((person) => person.name === newObj.name);
    if (user) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const newUser = { ...user, number: newNumber };
        personService.update(newUser.id, newUser).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id === newUser.id ? response : person
            )
          );
        });
        setMessage(`Updated ${newName}'s number`)
        setTimeout(()=>{
          setMessage(null)
        },5000)
        setNewName("");
        setNewNumber("");
      }
    } else {
      personService
        .create(newObj)
        .then((response) => {
          setPersons(persons.concat(response));
          setNewName("");
          setNewNumber("");
          setMessage(`Added ${newName}`)
          setTimeout(()=>{
            setMessage(null)
          },5000)
        })
        .catch((err) => console.log(err));
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
      {
        message && <Notification message={message} />
      }
      <Filter filter={filter} filters={filters} />

      <h2>add a new</h2>
      <PersonForm
        setName={setName}
        newName={newName}
        changes={changes}
        newNumber={newNumber}
        changeNo={changeNo}
      />

      <h2>Numbers</h2>
      <Persons personFilter={personFilter} setPersons={setPersons} />
    </div>
  );
};

export default App;
