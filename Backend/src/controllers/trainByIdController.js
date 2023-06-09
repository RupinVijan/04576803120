const { SERVER_ERROR } = require("../errors/SERVER_ERROR");
const { apiCall } = require("../utils/apiCall");

exports.getTrainById = async (req, res) => {
  try {
    let trainId = req.params.id;
    let trainData = await apiCall(`trains/${trainId}`);
    res.send({ data: trainData }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: SERVER_ERROR });
  }
};
