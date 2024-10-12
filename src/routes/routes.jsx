import Home from '../pages/home.jsx';
import Login from '../pages/auth/login.jsx';
import Dashboard from '../pages/dashboard.jsx';
import DashboardJemaah from '../pages/data-jemaah.jsx';
import ProtectedRoute from './protectedRoute.jsx';

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
