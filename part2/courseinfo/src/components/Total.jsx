import React from "react";

function Total({ parts }) {
  let total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return <strong>total of {total} exercises</strong>;
}

export default Total;
