import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-3xl text-blue-500">
      <h1>Home</h1>
      <p>untuk username: admin</p>
      <p>untuk password: admin123</p>
      <Link to="/dashboard">dashboard</Link>
    </div>
  );
}
