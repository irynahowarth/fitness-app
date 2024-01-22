import React from "react";

export default function CircuitList({ cicuits, handleDeleteCircuit }) {
  return (
    <ul>
      {cicuits.map(({ id, name, time, exercises }) => (
        <li key={id}>
          {name} - {time}
          <ul>
            {exercises?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <button onClick={() => handleDeleteCircuit(id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
