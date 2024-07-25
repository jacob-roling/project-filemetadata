const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
require("dotenv").config();

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  return res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
  return res.json({
    type: req.file.mimetype,
    name: req.file.originalname,
    size: req.file.size,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
