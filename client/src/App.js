import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import StudentForm from "./components/StudentForm";
import MainPage from "./components/MainPage";  // New component for MainPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Home page with buttons */}
        <Route path="/admin" element={<AdminLogin />} />  {/* Admin page */}
        <Route path="/student" element={<StudentForm />} />  {/* Student form */}
        <Route path="*" element={<div>Page not found</div>} />  {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
