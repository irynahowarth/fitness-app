import React from "react";
import { produce } from "immer";
import CircuitList from "../../components/common/CircuitList";
import CreateNewCircuit from "../../components/common/CreateNewCircuit";

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

export default function WorkoutCreate() {
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
      <h1 className="text-4xl font-bold">Create new workout</h1>
      <div>
        <label htmlFor="workout-name">Workout name:</label>
        <input
          type="text"
          id="workout-name"
          autoComplete="off"
          className="border"
        />
        <button type="button">Add Workout</button>
        <CircuitList
          cicuits={circuits}
          handleDeleteCircuit={handleDeleteCircuit}
        />
        <CreateNewCircuit handleCreateCircuit={handleCreateCircuit} />
      </div>
    </>
  );
}
