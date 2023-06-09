const express = require("express");
const { apiCall } = require("./src/utils/apiCall");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const trainRoutes = require("./src/routes/trainRoutes");
const port = 8000;

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Train routes
app.use("/train/trains", trainRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
