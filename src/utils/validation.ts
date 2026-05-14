export const validateTask = (
  title: string
): string => {
  const trimmed = title.trim();
  if (trimmed.length === 0) {
    return 'Title cannot be empty';
  }
  if (trimmed.length > 100) {
    return 'Title cannot exceed 100 characters';
  }
  return ''; 
}