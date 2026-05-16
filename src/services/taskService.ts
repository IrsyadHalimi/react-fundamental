import api from "../lib/axios"
import { Task } from '../types/task'

export const fetchTasks = async (): Promise<Task[]> => {
  const response = 
    await api.get<Task[]>(
      "/todos?_limit=5"
    )

  return response.data
}

export const createTask = 
  async (
    title: string
  ): Promise<Task> => {
    const response =
      await api.post<Task>(
        "/todos",
        {
          title,
          completed: false
        }
      )
      return response.data
  }