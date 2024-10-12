import { LuUserCog } from 'react-icons/lu';
import { MdOutlineDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const listsMenu = [
  {
    icon: <MdOutlineDashboard />,
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    icon: <LuUserCog />,
    path: '/dashboard/jemaah',
    name: 'Data Jemaah',
  },
];

export default function DashboardLayout({ children }) {
  const path = window.location.pathname;
  return (
    <div className="w-full min-h-screen h-full hidden md:block">
      <aside className="h-full w-48 z-10 bg-slate-200 fixed">
        <div className="flex flex-col h-full justify-between gap-8">
          <h1 className="w-full  text-xl p-2 font-bold text-slate-900">
            Syafar Media Travel
          </h1>
          <ul className="h-80 flex flex-col gap-2 text-slate-700">
            {listsMenu.map((jemaah, i) => (
              <li
                key={i}
                className={`p-4 w-full flex  items-center gap-2 text-emerald-500 hover:text-slate-50 hover:bg-emerald-300 font-semibold ${
                  path === jemaah.path ? ' bg-emerald-300 ' : ''
                }`}>
                <span className="text-2xl">{jemaah.icon}</span>
                <Link className="text-md" to={jemaah.path}>
                  {jemaah.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-2">
            <button className="p-4 bg-rose-500 text-slate-50 w-full">
              Logout
            </button>
          </div>
        </div>
      </aside>
      <nav className="w-full fixed top-0 h-24 ps-52 z-1 flex items-center bg-emerald-500">
        <h1 className="text-slate-50 text-2xl font-bold ">
          Admin Control Panel
        </h1>
      </nav>
      <div className="w-full min-h-screen min-w-screenh-full pt-28 ps-52 pe-4">
        {children}
      </div>
    </div>
  );
}
