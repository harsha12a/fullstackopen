import React from "react";
import personService from "../services/persons";
function Persons({ personFilter, setPersons, setMessage, setErr }) {
  const delPerson = (event) => {
    if (window.confirm(`Delete ${event.name}?`)) {
      personService
        .remove(event.id)
        .then(() => {
          setPersons((prev) => prev.filter((p) => p.id !== event.id));
        })
        .catch((err) => {
          setErr(true);
          setMessage(`Information of ${event.name} has already been removed from server`);
          setTimeout(() => {
            setErr(false);
            setMessage(null);
          }, 5000);
        });
    }
  };
  return (
    <div>
      {personFilter.map((person, i) => (
        <div key={i}>
          {person.name} {person.number}
          <button onClick={() => delPerson(person)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default Persons;
