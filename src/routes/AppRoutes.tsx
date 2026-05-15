import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage"; 
import NotFoundPage from "../pages/NotFoundPage";
import { useAuth } from "../contexts/AuthContext";

type ProtectedProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedProps) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;