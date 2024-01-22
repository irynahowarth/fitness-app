import React from "react";

export default function CreateNewCircuit({ handleCreateCircuit }) {
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
