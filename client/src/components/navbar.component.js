import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">LifeSports</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/pages/maincontent" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/logs" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Post New Workout</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
            <Link to="/students" className="nav-link">Students</Link>
          </li>
          <li className="navbar-item">
            <Link to="/students/new" className="nav-link">New Student</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar