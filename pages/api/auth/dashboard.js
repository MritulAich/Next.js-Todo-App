import ProtectedRoute from '../../../components/protectedRoute';

export default function Dashboard() {
    return (
      <ProtectedRoute>
        <h1>Dashboard</h1>
        <p>This is a protected dashboard page.</p>
      </ProtectedRoute>
    );
  }
