import { CiWarning } from 'react-icons/ci';
import DashboardLayout from '../layouts/DashboardLayout';
import { FaUserCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full min-h-screen min-w-screen bg-slate-50">
      <div className="md:hidden w-full h-screen bg-slate-700/30 flex justify-center items-center  ">
        <div className="w-[90%] mx-auto bg-slate-50 flex flex-col gap-4 p-4">
          <h1 className="text-yellow-500 flex items-center gap-4">
            <CiWarning /> Warning !
          </h1>
          <p className="text-slate-500">This page is for desktop only.</p>
          <button className="text-slate-500 bg-slate-100 p-2 ">Go Back</button>
        </div>
      </div>
      <DashboardLayout>
        <div className="w-full flex justify-between gap-4 h-80">
          <div
            onClick={() => navigate('/dashboard/jemaah')}
            className="w-1/4 h-full text-2xl bg-emerald-700/80 opacity-65 hover:opacity-100 flex flex-col justify-center items-center">
            <i className="text-6xl text-emerald-950">
              <FaUserCog />
            </i>
            <h1 className="text-emerald-950">Data Jemaah</h1>
          </div>
          <div className="w-1/4 h-full bg-slate-800" />
          <div className="w-1/4 h-full bg-slate-800" />
          <div className="w-1/4 h-full bg-slate-800" />
        </div>
      </DashboardLayout>
    </div>
  );
}
