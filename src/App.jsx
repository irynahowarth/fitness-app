import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Workouts from "./Pages/Workouts";
import WorkoutDetails from "./Pages/WorkoutDetails";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import WorkoutsList from "./Pages/Admin/WorkoutsList";
import WorkoutCreate from "./Pages/Admin/WorkoutCreate";
import WorkoutEdit from "./Pages/Admin/WorkoutEdit";

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
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="workouts">
            <Route index element={<WorkoutsList />} />
            <Route path="create" element={<WorkoutCreate />} />
            <Route path="edit/:id" element={<WorkoutEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
