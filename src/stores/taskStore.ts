import { create } from "zustand"
import { Task } from "../types/task"

type TaskStore = {
  tasks: Task[]

  setTasks: (
    tasks: Task[]
  ) => void

  addTask: (
    title: string
  ) => void

  toggleTask: (
    id: number
  ) => void

  deleteTask: (
    id: number
  ) => void
}

export const useTaskStore =
  create<TaskStore>((set) => ({
    tasks: [],

    setTasks: (tasks) => 
      set({ tasks }),

    addTask: (title) =>
      set((state) => ({
        tasks: [
          {
            id: Date.now(),
            title,
            completed: false
          },

          ...state.tasks
        ]
      })),
    
    toggleTask: (id) =>
      set((state) => ({
        tasks: state.tasks.map(
          (task) =>
            task.id === id
            ? {
              ...task,
              completed:
                !task.completed
            }
          : task
        )
      })),
      
      deleteTask: (id) => 
        set((state) => ({
          tasks: state.tasks.filter(
            (task) => 
              task.id !== id
          )
        }))
  }))