const { SERVER_ERROR } = require("../errors/SERVER_ERROR");
const { apiCall } = require("../utils/apiCall");
const { getTrainsForNext12Hours } = require("../utils/getTrainsForNext12Hours");
const { sortingTrainData } = require("../utils/sortingTrainData");

exports.getAllTrainData = async (req, res) => {
  try {
    let trainData = await apiCall("trains"); // Make an API call to fetch train data
    let result = getTrainsForNext12Hours(trainData); // Get trains scheduled for the next 12 hours
    let responseBody = sortingTrainData(result); // Sort the train data
    res
      .send({
        data: responseBody,
        resultlength: result.length,
      })
      .status(200);
  } catch (error) {
    console.log(error); // Log any errors
    res.status(500).send({ success: false, error: SERVER_ERROR }); // Send a server error response
  }
};
