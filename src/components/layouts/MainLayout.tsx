import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{
          display: "flex",
          gap: 10,
          marginBottom: 20
        }}>Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default MainLayout;