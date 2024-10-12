import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-3xl text-blue-500">
      <h1>Home</h1>
      <p>untuk username: admin</p>
      <p>untuk password: admin123</p>
      <Link
        className="bg-slate-400 p-4 text-slate-50 hover:bg-slate-500 hover:text-slate-50"
        to="/dashboard">
        go to dashboard
      </Link>
    </div>
  );
}
