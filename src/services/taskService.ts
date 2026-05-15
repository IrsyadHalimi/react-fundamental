import { Task } from '../types/task'

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}/todos?_limit=5`)

  if (!response.ok) {
    throw new Error('Failed to fetch tasks')
  }

  const data: Task[] = await response.json()
  return data
}