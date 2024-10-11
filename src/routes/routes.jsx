import Home from '../pages/Home';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';
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
    path: '/login',
    element: <Login />,
  },
];
