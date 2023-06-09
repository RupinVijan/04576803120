const express = require("express");
const { getAllTrainData } = require("../controllers/allTrainController");
const { getTrainById } = require("../controllers/trainByIdController");
const router = express.Router();

// Route for getting all train data
router.route("").get(getAllTrainData);

// Route for getting train data by ID
router.route("/:id").get(getTrainById);

module.exports = router;
