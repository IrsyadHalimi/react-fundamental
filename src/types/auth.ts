export type User = {
  name: string
  email: string
}

export type AuthContextType = {
  user: User | null

  login: (
    email: string,
    password: string
  ) => Promise<void>

  logout: () => void
}
