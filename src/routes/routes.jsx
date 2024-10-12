import Home from '../pages/Home';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';
import DashboardJemaah from '../pages/data-jemaah';
import ProtectedRoute from './protectedRoute';

export const routeLists = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboard/jemaah',
    element: (
      <ProtectedRoute>
        <DashboardJemaah />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
];
