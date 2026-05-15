import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem(
      "isLoggedIn",
      "true"
    )

    navigate("/")
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginPage