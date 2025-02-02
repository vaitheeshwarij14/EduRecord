const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

// Define Schema
const FileSchema = new mongoose.Schema({
  fileName: String,
  data: Buffer,
  contentType: String,
  uploadedAt: { type: Date, default: Date.now },
});

const FileModel = mongoose.model("File", FileSchema);

// Upload File
router.post("/", async (req, res) => {
  if (!req.files || !req.files.csvFile) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const file = req.files.csvFile;

  try {
    // Save file in MongoDB
    const newFile = new FileModel({
      fileName: file.name,
      data: file.data,
      contentType: file.mimetype,
    });

    await newFile.save();
    res.json({ message: "File uploaded successfully!" });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
