const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.post("/", (req, res) => {
  if (!req.files || !req.files.csvFile) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const file = req.files.csvFile;
  const uploadPath = path.join(__dirname, "../uploads", file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed" });
    }
    res.json({ message: "File uploaded successfully" });
  });
});

module.exports = router;
