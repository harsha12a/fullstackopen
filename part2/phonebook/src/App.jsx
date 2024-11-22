import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const setName = (obj) => {
    obj.preventDefault();
    let newObj = {
      name: newName,
    };
    setPersons(persons.concat(newObj));
    setNewName("");
  };
  const changes = (obj) => setNewName(obj.target.value);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={setName}>
        <div>
          name: <input value={newName} onChange={changes} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map((person, i) => (
          <div key={i}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
