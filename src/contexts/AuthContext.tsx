import {
  createContext,
  useContext,
  useState,
  ReactNode
} from "react"

import {
  AuthContextType,
  User
} from "../types/auth"

import { loginService } from "../services/authService"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type Props = {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = async (
    email: string,
    password: string
  ) => {
    const response =
      await loginService({
        email,
        password
      })

    localStorage.setItem(
      "token",
      response.token
    )

    const loggedInUser: User = {
      name: "Irsyad",
      email
    }

    setUser(loggedInUser)

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    )
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}