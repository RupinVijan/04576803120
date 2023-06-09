const { SERVER_ERROR } = require("../errors/SERVER_ERROR");
const { apiCall } = require("../utils/apiCall");

exports.getTrainById = async (req, res) => {
  try {
    let trainId = req.params.id; // Get the train ID from the request parameters
    let trainData = await apiCall(`trains/${trainId}`); // Make an API call to fetch train data by ID
    res.send({ data: trainData }).status(200); // Send the train data in the response
  } catch (error) {
    console.log(error); // Log any errors
    res.status(500).send({ success: false, error: SERVER_ERROR }); // Send a server error response
  }
};
