import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <div className="nav-links">
        <Link to="/">All Tasks</Link>
        <Link to="/create">Create Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;