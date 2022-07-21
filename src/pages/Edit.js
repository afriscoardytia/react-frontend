import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();

  const [data, setData] = useState("");
  const [idSiswa, setIdSiswa] = useState();

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/siswa/${id}`).then((response) =>
      response
        .json()
        .then((data) => setData(data.data))
        .catch((err) => {
          console.log(err);
        })
    );
  }, []);

  const submitHandler = (event, idSiswa) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/siswa/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: idSiswa,
        nama: nama,
        alamat: alamat,
        jenis_kelamin: jenisKelamin,
        asal_sekolah: asalSekolah,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    navigate("/", { replace: true });
  };

  return (
    <div className="border border-gray-300 p-7 rounded-lg space-y-7 bg-white">
      <div className="">
        <Link
          to="/"
          className="bg-gray-100 hover:bg-gray-200 py-1 px-2 rounded-sm text-sm"
        >
          Back
        </Link>
      </div>
      <div>
        <form onSubmit={submitHandler} className="space-y-5">
          <div className="flex flex-col space-y-2 hidden">
            <label>id</label>
            <input
              type="number"
              className="border p-1"
              value={data.id}
              onChange={(e) => setIdSiswa(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Nama</label>
            <input
              type="text"
              className="border p-1"
              defaultValue={data.nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Alamat</label>
            <input
              type="text"
              className="border p-1"
              defaultValue={data.alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Jenis Kelamin</label>
            <input
              type="text"
              className="border p-1"
              defaultValue={data.jenis_kelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Asal Sekolah</label>
            <input
              type="text"
              className="border p-1"
              defaultValue={data.asal_sekolah}
              onChange={(e) => setAsalSekolah(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 py-1 px-2 text-white rounded-sm text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
