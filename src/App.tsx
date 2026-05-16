import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { fetchTasks } from "./services/taskService"
import { useTaskStore } from "./stores/taskStore"

const App = () => {
  const {
    tasks,
    setTasks,
    addTask,
    toggleTask,
    deleteTask
  } = useTaskStore()

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  const loadTasks = async () => {
    try {
      setLoading(true)
      setError("")
      const data =
        await fetchTasks()

      setTasks(data)
    } catch (error) {
      setError(
        "Gagal mengambil data"
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TaskForm
        onAddTask={addTask}
      />
      {loading && (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App