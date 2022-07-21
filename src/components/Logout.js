import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    navigate("/", { replace: true });
  };

  return (
    <button className="bg-gray-200 px-3 m-3" onClick={logoutHandler}>
      Logout
    </button>
  );
};
