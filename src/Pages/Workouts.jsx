import React from "react";
import { Link } from "react-router-dom";
import "../server";

export default function Workouts() {
  const [workouts, setWorkouts] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data.workouts));
  }, []);

  const workoutElements = workouts.map((workout) => (
    <Link
      key={workout.id}
      to={`/workouts/${workout.id}`}
      area-label={`View details for ${workout.name}`}
    >
      <div>
        <h2>{workout.name}</h2>
      </div>
    </Link>
  ));

  return (
    <>
      <h1>All workouts</h1>
      {workoutElements}
    </>
  );
}
