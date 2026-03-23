import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/api";
import TaskForm from "../components/TaskForm";

function CreateTaskPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCreateTask(taskData) {
    try {
      setLoading(true);
      setError("");

      const newTask = await createTask(taskData);
      navigate(`/tasks/${newTask.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Create New Task</h1>
      {error && <p>Error: {error}</p>}
      <TaskForm onSubmit={handleCreateTask} loading={loading} />
    </div>
  );
}

export default CreateTaskPage;