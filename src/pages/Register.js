import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      body: JSON.stringify({
        nama: nama,
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    navigate("/login", { replace: true });
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
          <div className="flex flex-col space-y-2">
            <label>Nama</label>
            <input
              type="text"
              className="border p-1"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <input
              type="email"
              className="border p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Password</label>
            <input
              type="password"
              className="border p-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
