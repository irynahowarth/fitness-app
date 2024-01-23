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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Create Workout
      </h1>
      <div className="flex flex-col">
        <label
          htmlFor="workout-name"
          className="block text-md font-medium leading-6 text-gray-900"
        >
          Workout Name
        </label>
        <input
          type="text"
          id="workout-name"
          autoComplete="off"
          className="border py-2 px-4 rounded mb-6"
          value={workout.name}
          onChange={(event) =>
            setWorkout({ ...workout, name: event.target.value })
          }
        />
        <label
          htmlFor="workout-time"
          className="block text-md font-medium leading-6 text-gray-900"
        >
          Workout Time
        </label>
        <input
          type="text"
          id="workout-time"
          autoComplete="off"
          className="border py-2 px-4 rounded mb-6  "
          value={workout.time}
          onChange={(event) =>
            setWorkout({ ...workout, time: event.target.value })
          }
        />
      </div>
      <div>
        <button
          type="button"
          className="rounded-md bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-sm "
        >
          + New Circuit
        </button>
      </div>
      <div>
        <CircuitList
          cicuits={circuits}
          handleDeleteCircuit={handleDeleteCircuit}
        />
        <CreateNewCircuit handleCreateCircuit={handleCreateCircuit} />
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
        >
          Save
        </button>
      </div>
    </>
  );
}
