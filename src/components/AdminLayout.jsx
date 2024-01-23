import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <nav>
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>
        <NavLink to="/admin/workouts">All Workouts</NavLink>
        <NavLink to="/admin/exercises">All Exercises</NavLink>
      </nav>
      <div className="mx-10 my-4">
        <Outlet />
      </div>
    </>
  );
}
