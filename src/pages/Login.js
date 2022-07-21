import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
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
      <div>Login</div>
      <div>
        <form onSubmit={submitHandler} className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <input
              type="text"
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
