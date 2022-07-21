import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate, Link } from "react-router-dom";
import { Siswa } from "./pages/Siswa";
import { Login } from "./pages/Login";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { Delete } from "./components/Delete";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-4/6 my-10">
        <Routes>
          <Route path="/" element={<Siswa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
