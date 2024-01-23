import React from "react";

export default function ExcerciseInputs({
  idx,
  parentId,
  exercise,
  handleExerciseChange,
  delExercise,
}) {
  const exerciseId = `exercise-name-${idx}-${parentId}`;
  const exerciseTimeId = `exercise-time-${idx}-${parentId}`;
  return (
    <div
      key={`exercise-${idx}`}
      className=" flex my-2 gap-5 items-center border-t pt-6"
    >
      <h3 className="text-md font-semibold leading-7 text-gray-900 mb-4 flex-none">
        {`Ex.${idx + 1}`}
      </h3>
      <div className="border rounded-md px-4 pt-1 pb-2 flex-1">
        <label
          htmlFor={exerciseId}
          className="font-medium text-xs block"
        >{`Excercise #${idx + 1}`}</label>
        <input
          type="text"
          name={exerciseId}
          data-idx={idx}
          data-name={"name"}
          id={exerciseId}
          value={exercise[idx].name}
          onChange={handleExerciseChange}
          className="text-md text-gray-600 font-medium w-full "
        />
      </div>
      <div className="border rounded-md px-4 pt-1 pb-2 flex-1">
        <label htmlFor={exerciseTimeId} className="font-medium text-xs block">
          Time
        </label>
        <input
          type="text"
          name={exerciseTimeId}
          data-idx={idx}
          data-name={"time"}
          id={exerciseTimeId}
          value={exercise[idx].time}
          onChange={handleExerciseChange}
          className="text-md text-gray-600 font-medium w-full "
        />
      </div>
      <input
        type="button"
        onClick={(e) => delExercise(e.target.dataset.idx)}
        value="X"
        data-idx={idx}
        className="flex-none"
      />
    </div>
  );
}
