import React from "react";

import CircuitInputs from "../../components/common/CircuitInputs";

export default function WorkoutEdit() {
  const [workout, setWorkout] = React.useState({});
  const blankCircuit = { name: "", time: "" };
  const [circuit, setCircuit] = React.useState([]);

  const handleWorkoutChange = (e) =>
    setWorkout({
      ...workout,
      [e.target.name]: [e.target.value],
    });

  const addCircuit = () => {
    setCircuit([...circuit, { ...blankCircuit }]);
  };

  const handleCircuitChange = (e) => {
    const updatedCircuit = [...circuit];
    updatedCircuit[e.target.dataset.idx][e.target.className] = e.target.value;
    setCircuit(updatedCircuit);
  };

  const delCircuit = (idx) => {
    const updatedCircuit = [...circuit].filter((el, index) => idx != index);
    setCircuit(updatedCircuit);
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form>
        <section>
          <h3>Workout Details</h3>
          <div>
            <label htmlFor="workout-name">Name</label>
            <input
              name="workout-name"
              id="workout-name"
              value={workout.name}
              onChange={handleWorkoutChange}
            />
          </div>
          <div>
            <label htmlFor="workout-time">Time</label>
            <input
              name="workout-time"
              id="workout-time"
              value={workout.time}
              onChange={handleWorkoutChange}
            />
          </div>
          <input
            type="button"
            value="Add Circuit"
            onClick={() => addCircuit()}
          />
        </section>
        {circuit.map((val, idx) => {
          return (
            <CircuitInputs
              key={idx}
              idx={idx}
              circuit={circuit}
              handleCircuitChange={handleCircuitChange}
              delCircuit={delCircuit}
            />
          );
        })}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
