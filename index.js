const express = require("express");
const path = require("path");

const app = express();

const cors = require("cors");
const logger = require("morgan");

app.use(cors());

app.use(logger("dev"));
app.use("/test", (req, res) => {
  res.status(200).json({ success: true, message: "Backend is working fine." });
});

/*app.use(
  "/api",
  (
    _,
    res //attach backend routes here
  ) => res.status(200).json({ success: true, message: "API Check" })
);*/

app.use(express.static(path.join(__dirname, "./")));
app.use((_, res) => {
  res.sendFile(path.resolve(__dirname, "./"));
});

app.use(function (_, res) {
  res.status(500).send("<h1>404 :( No Such Page Exists</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Express app running on port " + port);
});
