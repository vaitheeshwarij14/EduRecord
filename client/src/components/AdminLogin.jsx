import React, { useState } from "react";
import CSVUploader from "./CSVUploader";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "sivaharinikumaravel93@gmail.com" && password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <CSVUploader />
      )}
    </div>
  );
};

export default AdminLogin;
