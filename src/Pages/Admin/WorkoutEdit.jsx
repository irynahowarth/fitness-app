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
        <section className="border p-10 flex flex-col">
          <div className="border-b pb-5">
            <h2 className="text-lg font-semibold leading-7 text-gray-900 mb-4">
              Workout Details
            </h2>
            <div className="flex flex-col md:flex-row mb-4 gap-x-10 gap-y-6">
              <div className="flex flex-col flex-1 ">
                <label
                  htmlFor="workout-name"
                  className="block text-md font-medium leading-6 text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  name="workout-name"
                  id="workout-name"
                  value={workout.name}
                  onChange={handleWorkoutChange}
                  className="block flex-1 border rounded-md shadow-sm  bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Wokrout name"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="workout-time"
                  className="block text-md font-medium leading-6 text-gray-900 mb-2"
                >
                  Time
                </label>
                <input
                  name="workout-time"
                  id="workout-time"
                  value={workout.time}
                  onChange={handleWorkoutChange}
                  className="block flex-1 border rounded-md shadow-sm  bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Wokrout time"
                />
              </div>
            </div>
          </div>
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
          <input
            type="button"
            value="Add Circuit"
            onClick={() => addCircuit()}
            className="rounded-md bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-sm "
          />
        </section>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
