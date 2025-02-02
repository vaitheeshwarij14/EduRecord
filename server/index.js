const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
app.use(fileUpload());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://vaitheeshwari7878:zjYZ9BLeIsLpySBx@cluster0.qjhu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/upload", uploadRoutes);

module.exports = app;
