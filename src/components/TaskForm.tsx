import { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import { validateTask } from './../utils/validation';

type Props = {
  onAddTask: (title: string) => void;
}

const TaskForm = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateTask(title);
    if (validationError) {
      setError(validationError);
      return;
    }
    onAddTask(title);
    setTitle('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={title}
        placeholder="Enter task title"
        onChange={setTitle}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button type="submit">Add Task</Button>
    </form>
  )
}

export default TaskForm;