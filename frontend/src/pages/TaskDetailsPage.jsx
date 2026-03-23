import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/api";

function TaskDetailsPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTask() {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTask();
  }, [id]);

  if (loading) return <p>Loading task...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="card">
      <h1>{task.title}</h1>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>ID:</strong> {task.id}
      </p>
    </div>
  );
}

export default TaskDetailsPage;