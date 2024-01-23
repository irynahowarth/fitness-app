import React from "react";

export default function ExcerciseInputs({
  idx,
  exercise,
  handleExerciseChange,
  delExercise,
}) {
  const exerciseId = `name-${idx}`;
  const exerciseTimeId = `time-${idx}`;
  return (
    <div key={`exercise-${idx}`}>
      <label htmlFor={exerciseId}>{`Excercise #${idx + 1}`}</label>
      <input
        type="text"
        name={exerciseId}
        data-idx={idx}
        id={exerciseId}
        className="name"
        value={exercise[idx].name}
        onChange={handleExerciseChange}
      />
      <label htmlFor={exerciseTimeId}>Time</label>
      <input
        type="text"
        name={exerciseTimeId}
        data-idx={idx}
        id={exerciseTimeId}
        className="time"
        value={exercise[idx].time}
        onChange={handleExerciseChange}
      />
      <input
        type="button"
        onClick={(e) => delExercise(e.target.dataset.idx)}
        value="X"
        data-idx={idx}
      />
    </div>
  );
}
