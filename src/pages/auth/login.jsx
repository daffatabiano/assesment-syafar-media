import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const { login } = useAuth();
  const [notify, setNotify] = useState({
    show: false,
    status: 'success',
    message: '',
  });

  const handleLogin = async () => {
    try {
      const res = await login(loginData);
      console.log(res);

      if (res.status === 200 || res.status === 'success') {
        setNotify({
          show: true,
          status: 'success',
          title: `${res.data.message}`,
          message: `Hello, ${res.data.data.username} Welcome Back!`,
        });
        setTimeout(() => {
          localStorage.setItem('token', res.data.token);
          setNotify({ show: false, status: 'success', title: '', message: '' });
          setTimeout(() => window.location.reload(), 1000);
          window.location.href = '/dashboard';
        }, 3000);
      } else if (res.status === 401 || res.status === 'error') {
        setNotify({
          show: true,
          status: 'error',
          title: `${res.response.data.message}`,
          message: `Something went wrong!`,
        });
        setTimeout(() => {
          setNotify({ show: false, status: 'error', title: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-slate-400/50 flex justify-center items-center flex-col gap-4">
      <h1 className="md:text-6xl text-3xl text-slate-100 font-bold mb-4">
        Login
      </h1>
      <div className="md:w-1/3 w-[85%] bg-slate-200 p-5">
        <p
          className={`p-4 w-full flex flex-col gap-2 ${
            notify.show ? 'block' : 'hidden'
          } ${
            notify.status === 'success'
              ? 'text-emerald-950 bg-emerald-200'
              : 'text-rose-950 bg-rose-200'
          }`}>
          <span className="font-bold">{notify.title}</span>
          {notify.message}
        </p>
        <form action="" className="space-y-4">
          <label htmlFor="username">
            Username
            <input
              className="w-full p-4 bg-slate-300 focus:outline-none"
              type="text"
              placeholder="username"
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              className="w-full p-4 bg-slate-300 focus:outline-none"
              type="password"
              placeholder="••••••••"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </label>
          <button
            type="button"
            onClick={() => handleLogin()}
            className="w-full p-4 bg-slate-300 text-slate-600 font-bold hover:bg-slate-400 hover:text-slate-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
