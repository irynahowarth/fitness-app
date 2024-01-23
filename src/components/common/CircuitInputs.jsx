import React from "react";
import ExcerciseInputs from "./ExcerciseInputs";

export default function CircuitInputs({
  idx,
  circuit,
  handleCircuitChange,
  delCircuit,
}) {
  const circuitId = `name-${idx}`;
  const circuitTimeId = `time-${idx}`;
  const blankExercise = { name: "", time: "" };
  const [exercise, setExercise] = React.useState([]);

  const addExercise = () => {
    setExercise([...exercise, { ...blankExercise }]);
  };

  const handleExerciseChange = (e) => {
    const updatedExercise = [...exercise];
    updatedExercise[e.target.dataset.idx][e.target.className] = e.target.value;
    setExercise(updatedExercise);
  };
  const delExercise = (idx) => {
    const updatedExercise = [...exercise].filter((el, index) => idx != index);
    setExercise(updatedExercise);
  };

  return (
    <div key={`circuit-${idx}`}>
      <label htmlFor={circuitId}>{`Circuit #${idx + 1}`}</label>
      <input
        type="text"
        name={circuitId}
        data-idx={idx}
        id={circuitId}
        className="name"
        value={circuit[idx].name}
        onChange={handleCircuitChange}
      />
      <label htmlFor={circuitTimeId}>Time</label>
      <input
        type="text"
        name={circuitTimeId}
        data-idx={idx}
        id={circuitTimeId}
        className="time"
        value={circuit[idx].time}
        onChange={handleCircuitChange}
      />
      <input
        type="button"
        onClick={(e) => delCircuit(e.target.dataset.idx)}
        value="X"
        data-idx={idx}
      />
      <input
        type="button"
        onClick={() => addExercise()}
        value="+ Exercises"
        data-idx={idx}
      />
      {exercise.map((val, idx) => {
        return (
          <ExcerciseInputs
            key={idx}
            idx={idx}
            exercise={exercise}
            handleExerciseChange={handleExerciseChange}
            delExercise={delExercise}
          />
        );
      })}
    </div>
  );
}
