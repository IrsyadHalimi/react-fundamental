type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input = ({
  value,
  placeholder,
  onChange
}: Props) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      />
  )
}

export default Input;