import React from "react";

function Total({ parts }) {
  let total = 0;
  parts.forEach((num) => (total += num.exercises));
  return <strong>total of {total} exercises</strong>;
}

export default Total;
