import React, { useState } from "react";

const StudentForm = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to the server)
    alert(`Roll Number: ${rollNumber}, DOB: ${dob}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
