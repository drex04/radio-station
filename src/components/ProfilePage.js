import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/profile");
    }

    if (!authToken) {
      navigate("/signin");
    }
  }, []);

  return (
    <div><h1>Welcome to your personal profile page!</h1></div>
  )
}
