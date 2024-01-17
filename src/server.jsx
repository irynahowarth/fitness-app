import { createServer, Model } from "miragejs";

createServer({
  models: {
    workouts: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/workouts", (schema, request) => {
      return schema.workouts.all();
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
      circuits: 4,
      exercises: 14,
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 2,
      name: "Full Body Bootcamp",
      circuits: 6,
      exercises: 13,
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 3,
      name: "Arm & Abs",
      circuits: 4,
      exercises: 8,
      time: "28-35 Mins",
    });
    server.create("workout", {
      id: 4,
      name: "Express Legs",
      circuits: 0,
      exercises: 7,
      time: "12-15 Mins",
    });
  },
});
