const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api/upload", uploadRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
