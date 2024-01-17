import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #FitnessApp
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/workouts">Workouts</Link>
      </nav>
    </header>
  );
}
