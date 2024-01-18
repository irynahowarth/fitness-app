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
      <div key={crypto.randomUUID()}>
        {circuit.name}
        <span>{circuit.exercises.length} Exercises</span>
        <span>{circuit.time} minutes</span>
        <div>
          {circuit.exercises.map((exercise) => {
            return (
              <div key={crypto.randomUUID()}>
                <h2>{exercise.name}</h2>
                {exercise.time && <span>00:{exercise.time}</span>}
                {exercise.reps && <span>{exercise.reps} reps</span>}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return workout ? (
    <div>
      <h1>Workout Name:{workout.name}</h1>
      <span>Circuits:{workout.circuits.length}</span>
      <span>Exercises: </span>
      <span>Time: {workout.time}</span>
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
