import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-123456"}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
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
  const changes = (obj) => setNewName(obj.target.value);
  const changeNo = (obj) => setNewNumber(obj.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person, i) => (
          <div key={i}>{person.name} {person.number}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
