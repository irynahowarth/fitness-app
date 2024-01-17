import React from "react";
import { useParams } from "react-router-dom";
import "../server";

export default function WorkoutDetails() {
  const params = useParams();
  const [workout, setWorkout] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/workouts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setWorkout(data.workouts));
  }, [params.id]);

  return workout ? (
    <div>
      <h1>Workout Name:{workout.name}</h1>
      <span>Circuits:{workout.circuits}</span>
      <span>Exercises: {workout.exercises}</span>
      <span>Time: {workout.time}</span>
    </div>
  ) : (
    <h2>Loading....</h2>
  );
}
