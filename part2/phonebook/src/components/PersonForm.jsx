import React from "react";
function PersonForm({
  setName,
  changes,
  changeNo,
  newName,
  newNumber,
}) {
  const newEntry = async (obj) => {
    setName(obj);
  };
  return (
    <form onSubmit={newEntry}>
      <div>
        name: <input value={newName} onChange={changes} />
      </div>
      <div>
        number: <input value={newNumber} onChange={changeNo} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
