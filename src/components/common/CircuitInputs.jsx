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
    updatedExercise[e.target.dataset.idx][e.target.dataset.name] =
      e.target.value;
    setExercise(updatedExercise);
  };
  const delExercise = (idx) => {
    const updatedExercise = [...exercise].filter((el, index) => idx != index);
    setExercise(updatedExercise);
  };

  return (
    <section
      key={`circuit-${idx}`}
      className="border p-10 flex flex-col mt-8 relative"
    >
      <h2 className="text-lg font-semibold leading-7 text-gray-900 mb-4">
        {circuit[idx].name || `Circuit ${idx + 1}`}
      </h2>
      <div className="flex flex-col md:flex-row mb-4 gap-x-10 gap-y-6">
        <div className="flex flex-col flex-1 ">
          <label
            htmlFor={circuitId}
            className="block text-md font-medium leading-6 text-gray-900 mb-2"
          >{`Circuit #${idx + 1}`}</label>
          <input
            type="text"
            name={circuitId}
            data-idx={idx}
            id={circuitId}
            data-name={"name"}
            value={circuit[idx].name}
            onChange={handleCircuitChange}
            className="block flex-1 border rounded-md shadow-sm  bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex flex-col flex-1 ">
          <label
            htmlFor={circuitTimeId}
            className="block text-md font-medium leading-6 text-gray-900 mb-2"
          >
            Time
          </label>
          <input
            type="text"
            name={circuitTimeId}
            data-idx={idx}
            data-name={"time"}
            id={circuitTimeId}
            value={circuit[idx].time}
            onChange={handleCircuitChange}
            className="block flex-1 border rounded-md shadow-sm  bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <input
          type="button"
          onClick={(e) => delCircuit(e.target.dataset.idx)}
          value="X"
          data-idx={idx}
          className="absolute top-0 right-0 cursor-pointer py-3 px-4 text-md font-base text-gray-400 hover:text-gray-700"
        />
      </div>
      <input
        type="button"
        onClick={() => addExercise()}
        value="+ Add Exercises"
        data-idx={idx}
        className="rounded-md border px-6 py-3 text-sm font-semibold shadow-sm "
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
    </section>
  );
}
