import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/admin");
  };

  const handleStudentClick = () => {
    navigate("/student");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Admin/Student Portal</h1>
      <button onClick={handleAdminClick}>Admin</button>
      <button onClick={handleStudentClick}>Student</button>
    </div>
  );
};

export default MainPage;
