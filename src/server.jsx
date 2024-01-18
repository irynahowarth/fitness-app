import { createServer, Model } from "miragejs";

createServer({
  models: {
    workouts: Model,
    exercise: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/workouts", (schema, request) => {
      return schema.workouts.all();
    });
    this.get("/exercises", (schema, request) => {
      return schema.exercises.all();
    });

    this.get("/workouts/:id", (schema, request) => {
      const id = request.params.id;
      return schema.workouts.find(id);
    });
  },
  seeds(server) {
    server.create("workout", {
      id: 1,
      name: "Full Body Circuit",
      circuits: [
        {
          name: "Circuit 1",
          time: 7,
          exercises: [
            {
              name: "Ab Bikes",
              reps: 40,
            },
            {
              name: "Russian Twist",
              reps: 30,
            },
            {
              name: "Mountain Climer",
              reps: 30,
            },
            {
              name: "Heel Tap",
              reps: 30,
            },
          ],
        },
        {
          name: "Circuit 2",
          time: 7,
          exercises: [
            {
              name: "Bend leg jackknife",
              reps: 20,
            },
            {
              name: "Straight leg jackknife",
              reps: 20,
            },
            {
              name: "Side plank & Oblique crunch",
              reps: 20,
            },
            {
              name: "Skipping",
              reps: 100,
            },
          ],
        },
        {
          name: "Circuit 3",
          time: 7,
          exercises: [
            {
              name: "Ab Bikes",
              reps: 40,
            },
            {
              name: "Russian Twist",
              reps: 30,
            },
            {
              name: "Mountain Climer",
              reps: 30,
            },
            {
              name: "Heel Tap",
              reps: 30,
            },
          ],
        },
        {
          name: "Circuit 4",
          time: 7,
          exercises: [
            {
              name: "Bend leg jackknife",
              reps: 20,
            },
            {
              name: "Straight leg jackknife",
              reps: 20,
            },
            {
              name: "Side plank & Oblique crunch",
              reps: 20,
            },
            {
              name: "Skipping",
              reps: 100,
            },
          ],
        },
      ],
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 2,
      name: "Full Body Bootcamp",
      circuits: [
        {
          name: "Warm up",
          time: 3,
          exercises: [
            {
              name: "Criss Cross",
              time: 20,
            },
            {
              name: "High Knees",
              time: 20,
            },
            {
              name: "3-Way Mountain Climer",
              time: 20,
            },
          ],
        },
        {
          name: "Triset 1",
          time: 6.5,
          exercises: [
            {
              name: "Double-Pulse Jump Squat",
              time: 30,
            },
            {
              name: "Walking Lunge",
              time: 30,
            },
            {
              name: "Glute Bridge",
              time: 30,
            },
          ],
        },
        {
          name: "Triset 2",
          time: 6.5,
          exercises: [
            {
              name: "Double-Pulse Push-Up",
              time: 30,
            },
            {
              name: "X Plank",
              time: 30,
            },
            {
              name: "Plank",
              time: 30,
            },
          ],
        },
        {
          name: "Triset 3",
          time: 6.5,
          exercises: [
            {
              name: "Bent-Leg Raise",
              time: 30,
            },
            {
              name: "Alternating Superman",
              time: 30,
            },
            {
              name: "Flutters",
              time: 30,
            },
          ],
        },
        {
          name: "Superset 1",
          time: 2,
          exercises: [
            {
              name: "Skaters",
              time: 30,
            },
            {
              name: "Squat Pulse",
              time: 30,
            },
          ],
        },
        {
          name: "Superset 2",
          time: 2,
          exercises: [
            {
              name: "Half Burpee & Push-Up",
              time: 30,
            },
            {
              name: "Shoulder Tap",
              time: 30,
            },
          ],
        },
      ],
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 3,
      name: "Arm & Abs",
      circuits: [
        {
          name: "Circuit 1",
          time: 7,
          exercises: [
            {
              name: "X Plank",
              reps: 20,
            },
            {
              name: "Mountain Climber Push-Up (4:1)",
              reps: 10,
            },
            {
              name: "Straight-Leg Jackknife",
              reps: 12,
            },
            {
              name: "Side Plank & Oblique Crunch",
              reps: 20,
            },
          ],
        },
        {
          name: "Circuit 2",
          time: 7,
          exercises: [
            {
              name: "Side-to-Side Half Burpee",
              reps: 16,
            },
            {
              name: "Tricep Push-Up",
              reps: 10,
            },
            {
              name: "Russian Twist",
              reps: 30,
            },
            {
              name: "Ab bikes",
              reps: 30,
            },
          ],
        },
        {
          name: "Circuit",
          time: 7,
          exercises: [
            {
              name: "X Plank",
              reps: 20,
            },
            {
              name: "Mountain Climber Push-Up (4:1)",
              reps: 10,
            },
            {
              name: "Straight-Leg Jackknife",
              reps: 12,
            },
            {
              name: "Side Plank & Oblique Crunch",
              reps: 20,
            },
          ],
        },
        {
          name: "Circuit 4",
          time: 7,
          exercises: [
            {
              name: "Side-to-Side Half Burpee",
              reps: 16,
            },
            {
              name: "Tricep Push-Up",
              reps: 10,
            },
            {
              name: "Russian Twist",
              reps: 30,
            },
            {
              name: "Ab bikes",
              reps: 30,
            },
          ],
        },
      ],
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 4,
      name: "Express Legs",
      circuits: [
        {
          name: "Circuit",
          time: 12,
          exercises: [
            {
              name: "Modified Jump Lunge",
              time: 30,
            },
            {
              name: "High Knees",
              time: 30,
            },
            {
              name: "Sumo Squat",
              time: 30,
            },
            {
              name: "Skaters",
              time: 30,
            },
            {
              name: "Glute Bridge",
              time: 30,
            },
            {
              name: "Burpee",
              time: 30,
            },
            {
              name: "Bent-Leg Sit-Up & Reach",
              time: 30,
            },
            {
              name: "Rest",
              time: 30,
            },
          ],
        },
      ],
      time: "12-15 Mins",
    });
    server.create("exercise", {
      name: "Burpee",
      desc: "",
      equip: [],
      areas: [],
    });
    server.create("exercise", {
      name: "X Plank",
      desc: "",
      equip: [],
      areas: [],
    });
    server.create("exercise", {
      name: "Skipping",
      desc: "",
      equip: ["skipping rope"],
      areas: [],
    });
    server.create("exercise", {
      name: "Russian Twist",
      desc: "",
      equip: [],
      areas: [],
    });
  },
});
