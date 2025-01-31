import React, { useState } from "react";
import axios from "axios";

const CSVUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default CSVUploader;
