import { useEffect, useState } from "react";
import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/task";
import { fetchTasks } from "./services/taskService";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, [])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks((prev) => [...prev, newTask]);
  }

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const filteredTasks = showCompleted ? tasks : tasks.filter(task => !task.completed);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager</h1>
      <button onClick={loadTasks}>
        Refresh
      </button>
      <TaskForm onAddTask={addTask} />
      {loading && (<p>Loading tasks...</p>)}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>
      {!loading && !error && (
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </div>
  )
}

export default App;

