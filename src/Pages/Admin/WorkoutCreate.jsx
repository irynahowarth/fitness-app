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
  const [workout, setWorkout] = React.useState({
    name: "",
    circuits: [],
    time: "",
  });
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

  function handleSubmit(event) {
    event.preventDefault();
    addWorkout(workout);
  }

  const addWorkout = async ({ name, circuits, time }) => {
    if (!name) {
      console.log("Workout needs to have a name");
      return;
    }
    await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        circuits: circuits,
        time: time,
      }),
    })
      .then((res) => {
        console.log(res.json());
        setWorkout({ name: "", circuits: [], time: "" });
        console.log("Workout added successfully");
      })
      .catch((error) => {
        console.log("Error adding workout.", error);
      });
  };

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
          value={workout.name}
          onChange={(event) =>
            setWorkout({ ...workout, name: event.target.value })
          }
        />
        <label htmlFor="workout-time">Workout time:</label>
        <input
          type="text"
          id="workout-time"
          autoComplete="off"
          className="border"
          value={workout.time}
          onChange={(event) =>
            setWorkout({ ...workout, time: event.target.value })
          }
        />
        <CircuitList
          cicuits={circuits}
          handleDeleteCircuit={handleDeleteCircuit}
        />
        <CreateNewCircuit handleCreateCircuit={handleCreateCircuit} />
        <button type="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </>
  );
}
