import React from "react";
import { produce } from "immer";

function reducer(circuits, action) {
  return produce(circuits, (draftState) => {
    switch (action.type) {
      case "create-circuit": {
        draftState.push({
          name: action.circuit.name,
          time: action.circuit.time,
          exercises: action.circuit.exercises,
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

  function handleCreateCircuit(circuit) {
    dispatch({
      type: "create-circuit",
      circuit,
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

function CreateNewCircuit({ handleCreateCircuit }) {
  const [value, setValue] = React.useState({
    name: "",
    time: "",
    exercises: [
      {
        name: "Bend leg jackknife",
        reps: 20,
      },
      {
        name: "Straight leg jackknife",
        reps: 20,
      },
    ],
  });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateCircuit(value);
          setValue({
            name: "",
            time: "",
            exercises: [
              {
                name: "Bend leg jackknife",
                reps: 20,
              },
              {
                name: "Straight leg jackknife",
                reps: 20,
              },
            ],
          });
        }}
      >
        <label htmlFor="new-circuit-name">Circuit Name</label>
        <div>
          <input
            type="text"
            className="border"
            value={value.name}
            id="new-circuit-name"
            onChange={(event) => {
              setValue({ ...value, name: event.target.value });
            }}
          />
          <label htmlFor="new-circuit-time">Circuit Time</label>
          <input
            id="new-circuit-time"
            type="text"
            className="border"
            value={value.time}
            onChange={(event) => {
              setValue({ ...value, time: event.target.value });
            }}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
