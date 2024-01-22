import React from "react";
import { Link } from "react-router-dom";
import "../../server";

export default function WorkoutsList() {
  const [workouts, setWorkouts] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data.workouts));
  }, []);
  const workoutElements = workouts.map((workout) => (
    <li key={workout.id} className="mb-2 min-w-96">
      <Link
        to={`edit/${workout.id}`}
        area-label={`View details for ${workout.name}`}
        className="flex"
      >
        <div className="bg-gray-300 w-20 h-20 flex items-center justify-center rounded-l-md"></div>
        <div className="flex flex-col justify-center border px-4 w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {workout.name}
          </h2>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <div>{`${workout.circuits.length} Exercises`}</div>
            <div className="flex items-center gap-1">
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-500"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {workout.time}
            </div>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="mx-10 my-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        All workouts
      </h1>
      <Link to={"create"}>Create new workout</Link>
      <ul className="flex flex-wrap gap-8">{workoutElements}</ul>
    </div>
  );
}
