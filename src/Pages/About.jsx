import React from "react";
import { produce } from "immer";

function reducer(circuits, action) {
  return produce(circuits, (draftState) => {
    switch (action.type) {
      case "create-circuit": {
        draftState.push({
          name: action.name,
          id: action.id,
        });
        break;
      }
      case "delete-circuit": {
        return draftState.filter((circuit) => circuit.id !== action.id);
      }
    }
  });
}

export default function About() {
  const [workout, setWorkout] = React.useState({});
  const [circuits, dispatch] = React.useReducer(reducer, []);

  function handleCreateCircuit(name) {
    dispatch({
      type: "create-circuit",
      name,
      id: crypto.randomUUID(),
    });
  }

  function handleDeleteCircuit(id) {
    dispatch({
      type: "delete-circuit",
      id,
    });
  }

  return (
    <>
      <h1 className="text-4xl font-bold underline">Here is About</h1>
      <div>
        <h2>Add new workout</h2>
        <label htmlFor="workout-name">Workout name:</label>
        <input
          type="text"
          id="workout-name"
          autoComplete="off"
          className="border"
        />
        <button type="button">Add Circuit</button>
        <CircuitList
          cicuits={circuits}
          handleDeleteCircuit={handleDeleteCircuit}
        />
        <CreateNewCircuit handleCreateCircuit={handleCreateCircuit} />
      </div>
    </>
  );
}

function CircuitList({ cicuits, handleDeleteCircuit }) {
  return (
    <ul>
      {cicuits.map(({ id, name }) => (
        <li key={id}>
          {name}
          <button onClick={() => handleDeleteCircuit(id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

function CreateNewCircuit({ handleCreateCircuit }) {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateCircuit(value);
          setValue("");
        }}
      >
        <label htmlFor="">Circuit Name</label>
        <div>
          <input
            type="text"
            className="border"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
