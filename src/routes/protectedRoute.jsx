import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (prop) => {
  const { children } = prop;
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <div>{children ? children : <Outlet />}</div>;
};

export default ProtectedRoute;
