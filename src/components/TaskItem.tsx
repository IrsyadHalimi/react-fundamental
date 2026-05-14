import { Task } from '../types/task'

type Props = {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TaskItem = ({
  task,
  onToggle,
  onDelete
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem;
      