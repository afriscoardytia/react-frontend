import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate, Link } from "react-router-dom";
import { Logout } from "../components/Logout";

export const Siswa = () => {
  const navigate = useNavigate();
  const [siswa, setSiswa] = useState([]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/delete/${id}`);
  };

  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Alamat",
      selector: (row) => row.alamat,
      sortable: true,
    },
    {
      name: "Jenis Kelamin",
      selector: (row) => row.jenis_kelamin,
      sortable: true,
    },
    {
      name: "Asal Sekolah",
      selector: (row) => row.asal_sekolah,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <div className="space-x-1">
          <button
            onClick={() => handleEdit(d.id)}
            className="bg-blue-400 hover:bg-blue-500 p-1.5 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-3"
            >
              <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(d.id)}
            className="bg-red-400 hover:bg-red-500 p-1.5 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-3"
            >
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </button>
        </div>,
      ],
    },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/siswa").then((response) =>
      response
        .json()
        .then((data) => setSiswa(data.data))
        .catch((err) => {
          console.log(err);
        })
    );
  }, []);
  return (
    <div>
      {/* <Logout /> */}
      <div className="border border-gray-300 p-7 rounded-lg space-y-7 bg-white">
        <h3 className="font-semibold">Data Siswa</h3>
        <div>
          <Link
            to={"/add"}
            className="bg-green-500 hover:bg-green-600 py-1 px-2 text-white rounded-sm text-xs"
          >
            Add Data
          </Link>
        </div>
        <DataTable key={siswa.id} columns={columns} data={siswa} pagination />
      </div>
    </div>
  );
};
