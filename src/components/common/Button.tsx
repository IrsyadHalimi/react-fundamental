import { ReactNode } from 'react';

type Props = {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({
  children,
  onClick,
  type = 'button'
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;