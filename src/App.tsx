import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query"
import {
  fetchTasks,
  createTask
} from "./services/taskService"
import { useTaskStore } from "./stores/taskStore"
import { useEffect } from "react"

const App = () => {
  const queryClient = useQueryClient()
  const {
    tasks,
    setTasks,
    toggleTask,
    deleteTask
  } = useTaskStore()

  const {isLoading, error} =
    useQuery({
      queryKey: ["tasks"],
      queryFn: fetchTasks
    })

  const createTaskMutation =
    useMutation({
      mutationFn: createTask,
      onSuccess: (newTask) => {
        setTasks([
          newTask,
          ...tasks
        ])
        queryClient.invalidateQueries({
          queryKey: ["tasks"]
        })
      }
    })

  const handleAddTask = (
    title: string
  ) => {
    createTaskMutation.mutate(
      title
    )
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>Terjadi error</p>
    )
  }

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks
  })

  useEffect(() => {
    if (data) {
      setTasks(data)
    }
  }, [data, setTasks])

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TaskForm
        onAddTask={handleAddTask}
      />
      {createTaskMutation.isPending && (
        <p>Menyimpan...</p>
      )}
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App