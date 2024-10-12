import { FaEye } from 'react-icons/fa';
import DashboardLayout from '../layouts/DashboardLayout';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  table: 'w-full border-collapse border border-slate-300',
  th: 'border border-slate-300 p-4',
  td: 'border border-slate-300 p-4',
  tr: 'border border-slate-300 p-4',
  input: 'p-2 w-full border border-none focus:outline-none',
  inputFile: 'w-full h-full absolute top-0 left-0 opacity-0',
  button: 'p-2 bg-slate-500 text-slate-50',
};

export default function DashboardJemaah() {
  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [province, setProvince] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);

  const [notify, setNotify] = useState({});

  const getProvince = async () => {
    try {
      const res = await axios.get(
        'https://dev.farizdotid.com/api/daerahindonesia/provinsi'
      );

      setProvince(res.data.provinsi);
    } catch (err) {
      console.log(err);
    }
  };
  const getKabupaten = async () => {
    try {
      const res = await axios.get(
        'https://dev.farizdotid.com/api/daerahindonesia/kabupaten'
      );

      setKabupaten(res.data.kabupaten);
    } catch (err) {
      console.log(err);
    }
  };
  const getKecamatan = async () => {
    try {
      const res = await axios.get(
        'https://dev.farizdotid.com/api/daerahindonesia/kecamatan'
      );

      setKecamatan(res.data.kecamatan);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddDataJemaah = async (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      nik: e.target.nik.value,
    };
    try {
      const res = await axios.post('http://localhost:3000/jemaah', body);
      console.log(res);
      setShowAdd(false);
      if (res.status === 200) {
        setNotify({
          show: true,
          status: 'success',
          title: 'Success',
          message: 'Data Jemaah Berhasil Sukses',
        });
      }
    } catch (err) {
      setNotify({
        show: true,
        status: 'error',
        title: 'Error',
        message: 'Data Jemaah Gagal Disimpan',
      });
    }
  };

  useEffect(() => {
    getProvince();
    getKabupaten();
    getKecamatan();
  }, []);

  console.log(kabupaten);

  return (
    <>
      <div
        className={`w-full h-full min-h-screen min-w-screen ${
          showDetail ? 'flex' : 'hidden'
        }  justify-center items-center bg-slate-950/50 z-[30] fixed`}>
        <div className="w-[90%] h-[90%] bg-slate-50 relative p-4">
          <button
            type="button"
            onClick={() => setShowDetail(false)}
            className="absolute right-2 top-2 text-3xl text-red-500 z-[999]">
            <RxCross2 />
          </button>
        </div>
      </div>
      <div
        className={`w-full h-full min-h-screen min-w-screen ${
          showAdd ? 'flex' : 'hidden'
        }  justify-center items-center bg-slate-950/50 z-[30] fixed`}>
        <div className="w-[90%] h-[90%] bg-slate-100 relative p-4">
          <button
            type="button"
            onClick={() => setShowAdd(false)}
            className="absolute right-2 top-2 text-3xl text-red-500">
            <RxCross2 />
          </button>
          <form
            onSubmit={handleAddDataJemaah}
            className="w-full h-full flex gap-4">
            <div className="flex w-1/2 flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nik" className="text-slate-500">
                  NIK
                </label>
                <input
                  type="text"
                  name="nik"
                  id="nik"
                  className={styles.input}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-slate-500">
                  {' '}
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={styles.input}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 items-center">
                  <label htmlFor="gender" className="text-slate-500">
                    Jenis Kelamin
                  </label>
                  <label htmlFor="male" className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value={'male'}
                    />
                    Male
                  </label>
                  <label htmlFor="female" className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value={'female'}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <label
                    className="flex flex-col w-full text-slate-500"
                    htmlFor="tempat-lahir">
                    Tempat Lahir
                    <input
                      type="text"
                      className={styles.input}
                      name="tempatLahir"
                    />
                  </label>
                  <label
                    htmlFor="tanggal-lahir"
                    className="text-slate-500 flex flex-col w-full">
                    Tanggal Lahir
                    <input
                      className={styles.input}
                      type="date"
                      name="tanggalLahir"
                      id="tanggalLahir"
                    />
                  </label>
                </div>
                <label htmlFor="alamat" className="text-slate-500">
                  Alamat Lengkap
                </label>
                <textarea
                  name="alamat"
                  id="alamat"
                  className={styles.input}
                  cols="10"
                  rows="2"
                />
                <div className="flex gap-2">
                  <label
                    htmlFor="provinsi"
                    className="text-slate-500 flex flex-col w-full">
                    Provinsi
                    <select name="provinsi" id="" className={styles.input}>
                      {province.map((item) => (
                        <option key={item.id} value={item.nama}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label
                    htmlFor="kabupaten"
                    className="text-slate-500 flex flex-col w-full">
                    Kabupaten
                    <select name="kabupaten" id="" className={styles.input}>
                      <option value="">Pilih Kabupaten</option>
                      <option value="">Jakarta Pusat</option>
                      <option value="">Jakarta Selatan</option>
                      <option value="">Jakarta Utara</option>
                    </select>
                  </label>
                  <label
                    htmlFor="kecamatan"
                    className="text-slate-500 flex flex-col w-full">
                    Kecamatan
                    <select name="kecamatan" id="" className={styles.input}>
                      <option value="">Pilih Kecamatan</option>
                      <option value="">Tegal Timur</option>
                      <option value="">Tegal Selatan</option>
                      <option value="">Tegal Barat</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <label
                  htmlFor="no-paspor"
                  className="text-slate-500 flex flex-col w-full">
                  No paspor
                  <input type="text" className={styles.input} name="noPaspor" />
                </label>
                <label htmlFor="masa-aktif" className="text-slate-500 w-full">
                  Masa aktif
                  <input
                    type="date"
                    className={styles.input}
                    name="masaAktif"
                  />
                </label>
              </div>
            </div>

            <div className="w-1/2 flex-col gap-4">
              <div className="flex justify-between">
                <div className="flex flex-col relative">
                  <label htmlFor="" className="text-slate-500 flex flex-col">
                    Lampiran KTP
                    <input type="file" className={styles.inputFile} />
                  </label>
                  <img
                    className="w-full h-40 object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s"
                    alt=""
                  />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="" className="text-slate-500 flex flex-col">
                    Lampiran KK
                    <input type="file" className={styles.inputFile} />
                  </label>
                  <img
                    className="w-full h-40 object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col relative">
                  <label htmlFor="" className="text-slate-500 flex flex-col">
                    Lampiran Foto Diri
                    <input type="file" className={styles.inputFile} />
                  </label>
                  <img
                    className="w-full h-40 object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s"
                    alt=""
                  />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="" className="text-slate-500 flex flex-col">
                    Lampiran Passpor
                    <input type="file" className={styles.inputFile} />
                  </label>
                  <img
                    className="w-full h-40 object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <label
                  htmlFor="no-visa"
                  className="text-slate-500 w-full flex flex-col">
                  No Visa
                  <input type="text" className={styles.input} name="noVisa" />
                </label>
                <label
                  htmlFor="masa-berlaku-visa"
                  className="text-slate-500 w-full flex flex-col">
                  Masa berlaku Visa
                  <input
                    type="date"
                    className={styles.input}
                    name="masaBerlakuVisa"
                  />
                </label>
              </div>
              <div className="w-full flex gap-4">
                <label
                  htmlFor="paket"
                  className="flex flex-col text-slate-500 w-full">
                  Paket dipilih
                  <select name="paket" id="" className={styles.input}>
                    <option value="">Paket Dipilih</option>
                    <option value="paket-itikaf">Paket I'tikaf</option>
                    <option value="paket-VIP">Paket VIP</option>
                    <option value="paket-reguler">Paket Reguler</option>
                  </select>
                </label>
                <label
                  htmlFor="paket"
                  className="flex flex-col text-slate-500 w-full">
                  Kamar dipilih
                  <select name="paket" id="" className={styles.input}>
                    <option value="">Kamar Dipilih</option>
                    <option value="quint">Quint</option>
                    <option value="quad">Quad</option>
                    <option value="triple">Triple</option>
                    <option value="double">Double</option>
                    <option value="single">Single</option>
                  </select>
                </label>
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <button className="bg-emerald-500 w-full mt-8 text-white p-2 font-bold  hover:bg-emerald-600 hover:text-slate-50">
                  Simpan Data
                </button>
                <button className="bg-rose-500 w-full mt-8 text-white p-2 font-bold  hover:bg-rose-600 hover:text-slate-50">
                  Batal
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DashboardLayout>
        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="bg-emerald-500 p-4 font-bold text-emerald-950 hover:bg-emerald-600 hover:text-slate-50">
          Tambah Jemaah
        </button>
        <table className="w-full mt-4 table border text-center overflow-x-auto">
          <thead className="bg-emerald-500 text-slate-50">
            <tr>
              <th>NIK</th>
              <th>Nama Lengkap</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
            </tr>
          </thead>
          <tbody>
            <tr className="relative">
              <td>3171071408020000</td>
              <td>Daffa Tabiano</td>
              <td>Jakarta</td>
              <td>14-08-2002</td>
              <td>Jalan Raya</td>
              <td>laki-laki</td>
              <button
                type="button"
                onClick={() => setShowDetail(true)}
                className="absolute right-2 top-1/2 -translate-y-1/2">
                <FaEye />
              </button>
            </tr>
          </tbody>
        </table>
      </DashboardLayout>
    </>
  );
}
