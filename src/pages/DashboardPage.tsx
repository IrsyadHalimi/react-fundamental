import { useAuth } from "../contexts/AuthContext"

const DashboardPage = () => {
  const { user, logout } = useAuth()

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Welcome, {user?.name}
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashboardPage