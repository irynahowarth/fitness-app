import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Workouts from "./Pages/Workouts";
import WorkoutDetails from "./Pages/WorkoutDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="workouts/:id" element={<WorkoutDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
