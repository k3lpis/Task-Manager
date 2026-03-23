import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <div className="card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <Link to={`/tasks/${task.id}`}>View Details</Link>
    </div>
  );
}

export default TaskCard;