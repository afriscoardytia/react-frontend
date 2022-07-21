import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/siswa/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    navigate("/", { replace: true });
  }, []);

  return;
};
