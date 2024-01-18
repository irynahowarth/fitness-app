import React from "react";
import { useParams } from "react-router-dom";
import "../server";
import WorkoutActive from "../components/WorkoutActive";

export default function WorkoutDetails() {
  const params = useParams();
  const [workout, setWorkout] = React.useState(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    fetch(`/api/workouts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setWorkout(data.workouts));
  }, [params.id]);

  const circuits = workout?.circuits.map((circuit) => {
    return (
      <div key={crypto.randomUUID()} className="my-8">
        <h2 className="text-xl font-bold text-gray-800 ">{circuit.name}</h2>
        <div className=" flex gap-1">
          <div className="mt-1 text-sm text-gray-500 flex">
            {`${circuit.exercises.length} Exercises`}
          </div>
          <div className="mt-1  text-sm text-gray-500 flex items-center gap-1">
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              className="fill-gray-500"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            {circuit.time} minutes
          </div>
        </div>
        <div>
          {circuit.exercises.map((exercise) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex items-center max-w-md border mb-3 mt-3 px-4 py-3 rounded-2xl cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-300 mr-4"></div>
                <div className="flex-grow">
                  <h4 className="font-semibold">{exercise.name}</h4>
                  <div className="text-sm text-gray-500">
                    {exercise.time && `00:${exercise.time}`}
                    {exercise.reps && `${exercise.reps} reps`}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6  flex-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return workout ? (
    <div className="mx-10 my-4">
      <h1 className="text-2xl font-bold leading-7 text-gray-900">
        {workout.name}
      </h1>
      <div className="mt-2 mb-4 flex text-gray-500  text-md gap-1">
        <div className=" flex items-center">
          {`${workout.circuits.length} Circuits`}
        </div>
        <div className="flex items-center gap-1">
          <svg
            viewBox="0 0 2 2"
            width="4"
            height="4"
            aria-hidden="true"
            className="fill-gray-500"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          Exercises
        </div>
        <div className="flex items-center gap-1">
          <svg
            viewBox="0 0 2 2"
            width="4"
            height="4"
            aria-hidden="true"
            className="fill-gray-500"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          {workout.time}
        </div>
      </div>

      <div>{circuits}</div>
      {isActive ? (
        <WorkoutActive />
      ) : (
        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          Start workout
        </button>
      )}
    </div>
  ) : (
    <h2>Loading....</h2>
  );
}
