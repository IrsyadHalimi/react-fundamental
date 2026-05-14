import TaskItem from './TaskItem'
import { Task } from '../types/task'

type Props = {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TaskList = ({
  tasks,
  onToggle,
  onDelete
}: Props) => {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      </div>
    )
}

export default TaskList;